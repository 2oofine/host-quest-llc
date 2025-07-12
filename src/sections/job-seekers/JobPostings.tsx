/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { fetchUSCountryStates } from "../../../pages/api/country-state";
import { jobs } from "@/constants/jobs";
import { OptionType } from "@/types";
import { CountryData, State } from "@/types/countryState";
import { JobType, WorkSetup } from "@/types/jobs";
import { currencyToSign } from "@/utils/helpers";
import axios from "axios";
import { ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<(typeof jobs)[number] | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState<string | null>(null);

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

  //Submit job application
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const formData = new FormData(formRef.current!);
      formData.append("position", selectedJob?.title ?? "");

      const response = await axios.post("/api/submit-job", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("✅ Submission successful:", response.data.message);
      alert("Application submitted!");
      setIsModalOpen(false);
    } catch (err: any) {
      setError("Failed to submit. Please try again.");
      console.error("❌ Submission error:", err);
    } finally {
      setIsLoading(false);
    }
  };

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
                      className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-x-5 bg-white shadow-custom py-4 px-4 sm:px-5 lg:px-7"
                      style={{ height: "auto" }} // Let it adjust height on smaller screens
                      key={job.id}
                    >
                      <div className="flex flex-col flex-1">
                        <div className="mb-2 sm:mb-4">
                          <h6 className="text-xl sm:text-2xl">{job.title}</h6>
                          <p className="italic text-sm sm:text-base">{job.state.name}</p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <div className="bg-primary-light/10 px-3 sm:px-4 py-1 rounded-full text-primary-dark text-xs">
                            {job.jobType}
                          </div>
                          <div className="bg-primary-light/10 px-3 sm:px-4 py-1 rounded-full text-primary-dark text-xs">
                            {formattedSalary}
                          </div>
                          <div className="bg-primary-light/10 px-3 sm:px-4 py-1 rounded-full text-primary-dark text-xs">
                            {job.workSetup}
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end sm:justify-center">
                        <button
                          onClick={() => {
                            setSelectedJob(job);
                            setIsModalOpen(true);
                          }}
                          className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-light hover:bg-primary-dark transition-colors"
                        >
                          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-primary-dark hover:text-white" />
                        </button>
                      </div>
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

      {isModalOpen && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl w-full max-w-2xl p-6 shadow-lg relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-2xl text-primary-dark font-bold mb-2">{selectedJob.title}</h2>
            <p className="italic text-sm text-gray-600 mb-4">{selectedJob.state.name}</p>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-6 text-sm">
              <div>
                <dt className="font-semibold text-primary-dark">Job Type</dt>
                <dd className="text-gray-700">{selectedJob.jobType}</dd>
              </div>
              <div>
                <dt className="font-semibold text-primary-dark">Work Setup</dt>
                <dd className="text-gray-700">{selectedJob.workSetup}</dd>
              </div>
              <div>
                <dt className="font-semibold text-primary-dark">Salary</dt>
                <dd className="text-gray-700">
                  {currencyToSign(selectedJob.currency)}
                  {selectedJob.salaryMin} - {currencyToSign(selectedJob.currency)}
                  {selectedJob.salaryMax} / {selectedJob.periodicity}
                </dd>
              </div>
            </dl>

            <p className="mb-6 text-primary-dark">{selectedJob.description || "No description available."}</p>

            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4" encType="multipart/form-data">
              <label className="block">
                <span className="text-sm font-medium text-gray-700">Your Name</span>
                <input
                  name="fullName"
                  type="text"
                  className="mt-1 px-2 py-2 block w-full rounded-md text-primary-dark border border-gray-300 shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light/50"
                  required
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-gray-700">Email</span>
                <input
                  name="email"
                  type="email"
                  className="mt-1 px-2 py-2 text-primary-dark block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light/50"
                  required
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-gray-700">Upload Resume</span>
                <input
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-primary-light file:text-primary-dark hover:file:bg-primary-dark hover:file:text-white"
                  required
                />
              </label>

              <button
                type="submit"
                disabled={isLoading}
                className="mt-4 bg-primary-light hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-md transition-colors"
              >
                Submit Application
              </button>
              {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default JobPostings;
