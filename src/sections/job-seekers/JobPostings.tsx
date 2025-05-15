"use client";

import { fetchUSCountryStates } from "@/api/country-state";
import { jobs } from "@/constants/jobs";
import { OptionType } from "@/types";
import { CountryData, State } from "@/types/countryState";
import { JobType, WorkSetup } from "@/types/jobs";
import { currencyToSign } from "@/utils/helpers";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactSelect from "react-select";

interface SearchState {
  states?: State[];
  workSetup?: WorkSetup;
  jobType?: JobType;
}

const JOBS_PER_PAGE = 10;

const JobPostings = () => {
  const [countryState, setCountryState] = useState<CountryData>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchState, setSearchState] = useState<SearchState>();
  const [isClient, setIsClient] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Detect client side render
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const fetchCountryStates = async () => {
      setIsLoading(true);
      const result = await fetchUSCountryStates();
      if (result.success) {
        setCountryState(result.data?.data);
      }
      setIsLoading(false);
    };
    fetchCountryStates();
  }, []);

  const stateOptions: OptionType[] =
    countryState?.states.map((state) => ({
      label: state.name,
      value: state.state_code,
    })) || [];

  const workSetupOptions: OptionType[] = Object.values(WorkSetup).map((setup) => ({
    label: setup,
    value: setup,
  }));

  const jobTypeOptions: OptionType[] = Object.values(JobType).map((type) => ({
    label: type,
    value: type,
  }));

  // FILTER JOBS based on searchState
  const filteredJobs = jobs.filter((job) => {
    // Filter by states (if any)
    if (searchState?.states && searchState.states.length > 0) {
      const stateMatch = searchState.states.some((state) => state.state_code === job.state.state_code);
      if (!stateMatch) return false;
    }

    // Filter by jobType (if selected)
    if (searchState?.jobType && job.jobType !== searchState.jobType) {
      return false;
    }

    // Filter by workSetup (if selected)
    if (searchState?.workSetup && job.workSetup !== searchState.workSetup) {
      return false;
    }

    return true;
  });

  // PAGINATE filtered jobs
  const totalJobs = filteredJobs.length;
  const totalPages = Math.ceil(totalJobs / JOBS_PER_PAGE);

  const paginatedJobs = filteredJobs.slice((currentPage - 1) * JOBS_PER_PAGE, currentPage * JOBS_PER_PAGE);

  // Handle page change
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchState]);

  return (
    <section className="relative overflow-hidden">
      <div className="w-full bg-secondary-light z-10 min-h-screen">
        <div className="mx-10 pt-[46px] pb-[101px]">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-[40%_60%] gap-5 max-w-full w-[1920px] place-items-start text-primary-dark">
            <div className="flex flex-1 w-full flex-col gap-5">
              <div>
                <h6>States</h6>
                {isClient ? (
                  <ReactSelect<OptionType, true>
                    options={stateOptions}
                    isLoading={isLoading}
                    placeholder="Select State"
                    className="w-full"
                    isMulti
                    getOptionLabel={(option) => option.label}
                    getOptionValue={(option) => option.value}
                    isClearable
                    onChange={(opt) => {
                      const selectedOptions = opt as OptionType[];
                      setSearchState((prev) => ({
                        ...prev,
                        states: selectedOptions.map((option) => ({
                          name: option.label,
                          state_code: option.value,
                        })),
                      }));
                    }}
                  />
                ) : (
                  <div className="w-full h-[38px] bg-gray-200 animate-pulse rounded-md"></div>
                )}
              </div>

              <div>
                <h6>Job Type</h6>
                {isClient ? (
                  <ReactSelect<OptionType>
                    options={jobTypeOptions}
                    isLoading={isLoading}
                    placeholder="Select Job Type"
                    className="w-full"
                    isClearable
                    getOptionLabel={(option) => option.label}
                    getOptionValue={(option) => option.value}
                    onChange={(opt) => {
                      const selectedOption = opt as OptionType;
                      setSearchState((prev) => ({
                        ...prev,
                        jobType: selectedOption?.value as JobType,
                      }));
                    }}
                  />
                ) : (
                  <div className="w-full h-[38px] bg-gray-200 animate-pulse rounded-md"></div>
                )}
              </div>

              <div>
                <h6>Work Setup</h6>
                {isClient ? (
                  <ReactSelect<OptionType>
                    options={workSetupOptions}
                    isLoading={isLoading}
                    placeholder="Select Work Setup"
                    className="w-full"
                    isClearable
                    getOptionLabel={(option) => option.label}
                    getOptionValue={(option) => option.value}
                    onChange={(opt) => {
                      const selectedOption = opt as OptionType;
                      setSearchState((prev) => ({
                        ...prev,
                        workSetup: selectedOption?.value as WorkSetup,
                      }));
                    }}
                  />
                ) : (
                  <div className="w-full h-[38px] bg-gray-200 animate-pulse rounded-md"></div>
                )}
              </div>
            </div>
            <div className="w-full flex flex-col flex-[3] gap-7">
              {paginatedJobs.length > 0 ? (
                paginatedJobs.map((job) => {
                  const currency = currencyToSign(job.currency);
                  const formattedSalary = `${currency}${job.salaryMin} - ${currency}${job.salaryMax} / ${job.periodicity}`;

                  return (
                    <div
                      className="w-full flex items-center justify-between gap-x-5 bg-white shadow-custom py-3 px-5 lg:px-7"
                      style={{ height: `128px` }}
                      key={job.id}
                    >
                      <div className="flex flex-col">
                        <div className="mb-4">
                          <h6 className="text-2xl">{job.title}</h6>
                          <p className="italic text-base">{job.state.name}</p>
                        </div>

                        <div className="flex gap-2">
                          <div className="bg-primary-light/10 px-4 w-fit rounded-full text-primary-dark text-xs">
                            {job.jobType}
                          </div>
                          <div className="bg-primary-light/10 px-4 w-fit rounded-full text-primary-dark text-xs">
                            {formattedSalary}
                          </div>
                          <div className="bg-primary-light/10 px-4 w-fit rounded-full text-primary-dark text-xs">
                            {job.workSetup}
                          </div>
                        </div>
                      </div>
                      <Link
                        href="#"
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-light hover:bg-primary-dark transition-colors"
                      >
                        <ChevronRight className="w-8 h-8 text-primary-dark hover:text-white" />
                      </Link>
                    </div>
                  );
                })
              ) : (
                <p>No jobs found matching your criteria.</p>
              )}

              <div className="flex justify-center items-center gap-3 mt-6">
                {/* Prev Button */}
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`flex items-center justify-center w-12 h-12 rounded-full transition-colors ${
                    currentPage === 1
                      ? "bg-gray-300 text-white cursor-not-allowed"
                      : "bg-primary-light hover:bg-primary-dark text-primary-dark hover:text-white"
                  }`}
                >
                  <ChevronRight className="w-6 h-6 rotate-180" />
                </button>

                {/* Page Numbers */}
                {[...Array(totalPages)].map((_, i) => {
                  const pageNum = i + 1;
                  const isActive = currentPage === pageNum;

                  return (
                    <button
                      key={pageNum}
                      onClick={() => goToPage(pageNum)}
                      className={`w-10 h-10 rounded-full border text-sm font-semibold transition-all ${
                        isActive
                          ? "bg-primary-light text-white border-primary-light"
                          : "text-primary-dark border-primary-light hover:bg-primary-light hover:text-white"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                {/* Next Button */}
                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`flex items-center justify-center w-12 h-12 rounded-full transition-colors ${
                    currentPage === totalPages
                      ? "bg-gray-300 text-white cursor-not-allowed"
                      : "bg-primary-light hover:bg-primary-dark text-primary-dark hover:text-white"
                  }`}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobPostings;
