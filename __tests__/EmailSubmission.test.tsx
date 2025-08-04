import RequestACallBackForm from "@/components/RequestACallBackForm";
import { jobs } from "@/constants/jobs";
import JobSubmissionModal from "@/sections/job-seekers/JobSubmissionModal";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { act } from "react";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

// ✅ Clears all mocks between tests
beforeEach(() => {
  jest.clearAllMocks();
});

describe("RequestCallBackForm", () => {
  it("submits the form data via /api/send-email", async () => {
    const user = userEvent.setup();

    const formData = {
      fullName: "Test User",
      email: "test@mail.com",
      phone: "+639123456789",
      message: "Test message",
    };

    mockedAxios.post.mockResolvedValueOnce({
      status: 200,
      data: { message: "Success" },
    });

    render(<RequestACallBackForm />);

    await user.type(screen.getByLabelText(/full name/i), formData.fullName);
    await user.type(screen.getByLabelText(/email address/i), formData.email);
    await user.type(screen.getByLabelText(/phone number/i), formData.phone);
    await user.type(screen.getByLabelText(/message/i), formData.message);

    await user.click(screen.getByRole("button", { name: /send request/i }));

    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalledWith("/api/send-email", {
        fullName: "Test User",
        email: "test@mail.com",
        phone: "+639123456789",
        message: "Test message",
      });
    });
  });
});

describe("JobSubmissionModal Form Submission", () => {
  const mockJob = jobs[0];
  const mockOnClose = jest.fn();

  beforeEach(() => {
    mockedAxios.post.mockReset();
    mockedAxios.post.mockResolvedValue({
      status: 200,
      data: { message: "Success" },
    });
  });

  it("submits form data via /api/submit-job", async () => {
    const user = userEvent.setup();
    mockedAxios.post.mockResolvedValue({ status: 200 });
    const mockFile = new File(["resume"], "resume.pdf", {
      type: "application/pdf",
    });

    render(<JobSubmissionModal selectedJob={mockJob} onClose={mockOnClose} />);

    await user.type(screen.getByLabelText(/full name/i), "Jane Doe");
    await user.type(screen.getByLabelText(/email/i), "jane@example.com");
    await user.upload(screen.getByLabelText(/upload resume/i), mockFile);

    const form = screen.getByRole("form");
    await act(async () => {
      fireEvent.submit(form);
    });

    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalledWith(
        "/api/submit-job",
        expect.any(FormData),
        expect.objectContaining({
          headers: { "Content-Type": "multipart/form-data" },
        })
      );

      const submittedFormData = mockedAxios.post.mock.calls[0][1] as FormData;

      expect(submittedFormData.get("fullName")).toEqual("Jane Doe");
      expect(submittedFormData.get("email")).toEqual("jane@example.com");
      expect(submittedFormData.get("resume")).toEqual(mockFile);
      expect(submittedFormData.get("position")).toEqual(jobs[0].title);
      expect(submittedFormData.get("id")).toEqual(String(jobs[0].id));
    });
  });
});
