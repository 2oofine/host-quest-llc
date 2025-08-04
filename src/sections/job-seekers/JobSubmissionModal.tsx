"use client";
import { Job } from "@/types/jobs";
import { currencyToSign } from "@/utils/helpers";
import axios, { AxiosError } from "axios";
import React, { useRef, useState } from "react";

type Props = {
  selectedJob: Job;
  onClose: () => void;
};

const JobSubmissionModal = (props: Props) => {
  const { selectedJob, onClose } = props;

  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const formData = new FormData(formRef.current!);
      formData.append("position", selectedJob?.title ?? "");
      formData.append("id", String(selectedJob?.id) ?? "");

      await axios.post("/api/submit-job", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // console.log("✅ Submission successful:", response.data.message);
      // alert("Application submitted!");
      setSuccess("Application submitted successfully!");
      onClose();
      setSuccess(null);
      setError(null);
    } catch (error) {
      const err = error as AxiosError;
      if (err) {
        if (err.status === 429) {
          setError("Too many requests. Please try again later.");
        } else {
          setError("Failed to submit. Please try again.");
        }
      } else if (error instanceof Error) {
        console.error("❌ Submission error:", error.message);
      } else {
        console.error("❌ Submission error:", error);
        setError("Something went wrong. Please try again.");
      }
      setSuccess(null);
      console.error("❌ Submission error:", err);
    } finally {
      setTimeout(() => {
        setSuccess(null);
        setError(null);
      }, 2000);
      // Reset form
      setIsLoading(false);
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-2xl p-6 shadow-lg relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-black">
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

        <form
          role="form"
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
          encType="multipart/form-data"
        >
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Your Name</span>
            <input
              name="fullName"
              aria-label="Full Name"
              type="text"
              className="mt-1 px-2 py-2 block w-full rounded-md text-primary-dark border border-gray-300 shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light/50"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-700">Email</span>
            <input
              aria-label="Email Address"
              name="email"
              type="email"
              className="mt-1 px-2 py-2 text-primary-dark block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light/50"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-700">Upload Resume</span>
            <input
              aria-label="Resume"
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
            {isLoading ? "Submitting..." : "Submit Application"}
          </button>
          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
          {success && <div className="text-green-500 text-sm mt-2">{success}</div>}
        </form>
      </div>
    </div>
  );
};

export default JobSubmissionModal;
