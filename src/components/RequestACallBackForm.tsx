/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import axios, { AxiosError } from "axios";
import React, { useRef, useState } from "react";
interface Props {
  isFromContactUs?: boolean;
}
const RequestACallBackForm = (props: Props) => {
  const { isFromContactUs = false } = props;
  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [emptyFields, setEmptyFields] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      fullName: fullNameRef.current?.value.trim() || "",
      email: emailRef.current?.value.trim() || "",
      phone: phoneRef.current?.value.trim() || "",
      message: messageRef.current?.value.trim() || "",
    };

    const emptyFieldsList = Object.entries(formData)
      .filter(([_, value]) => !value)
      .map(([key]) => key);

    if (emptyFieldsList.length > 0) {
      setError("All fields are required.");
      setEmptyFields(emptyFieldsList);
      return;
    }

    setError(null);
    setEmptyFields([]);
    setIsLoading(true);

    try {
      const response = await axios.post("/api/send-email", formData);

      console.log("✅ Email sent:", response.data.message);
      setSuccess("Message sent successfully!");
      setError(null);
      // Clear form
      fullNameRef.current!.value = "";
      emailRef.current!.value = "";
      phoneRef.current!.value = "";
      messageRef.current!.value = "";
    } catch (error) {
      const err = error as AxiosError;
      if (err) {
        console.error("❌ Submission error:", err.message);
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
    } finally {
      setTimeout(() => {
        setSuccess(null);
        setError(null);
      }, 2000);
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Form */}
      <form className="mt-6 space-y-[22px] flex flex-col h-full" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-[22px]">
          {/* Added flex-grow here */}
          <input
            type="text"
            aria-label="Full Name"
            ref={fullNameRef}
            placeholder="Full Name *"
            required
            className={`max-w-full ${
              isFromContactUs ? "w-full" : "w-[555px]"
            } h-[60px] p-[18px] bg-white text-black placeholder-silver font-light`}
          />
          <input
            type="email"
            aria-label="Email Address"
            ref={emailRef}
            placeholder="Email Address *"
            required
            className={`max-w-full ${
              isFromContactUs ? "w-full" : "w-[555px]"
            } h-[60px] p-[18px] bg-white text-black placeholder-silver font-light`}
          />
          <input
            type="tel"
            pattern="[0-9]*"
            inputMode="numeric"
            aria-label="Phone Number"
            ref={phoneRef}
            placeholder="Phone Number (Optional)"
            onInput={(e) => {
              const input = e.target as HTMLInputElement;
              input.value = input.value.replace(/[^0-9+\-() ]/g, "");
            }}
            className={`max-w-full ${
              isFromContactUs ? "w-full" : "w-[555px]"
            } h-[60px] p-[18px] bg-white text-black placeholder-silver font-light`}
          />
          <textarea
            aria-label="Message"
            ref={messageRef}
            placeholder="Message"
            rows={isFromContactUs ? 15 : 10}
            className={`max-w-full ${
              isFromContactUs ? "w-full" : "w-[555px]"
            } p-[18px] bg-white text-black placeholder-silver font-light`}
          />
        </div>

        <div className="mt-auto">
          <button
            disabled={isLoading}
            type="submit"
            className={`btn-primary-42 w-full rounded-none ${
              isFromContactUs ? "hover:bg-primary-light/70 bg-primary-light" : "hover:bg-slate-300 bg-white"
            }  text-black`}
          >
            {isLoading ? "Sending..." : isFromContactUs ? "Send Now" : "Send Request"}
          </button>
          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
          {success && <div className="text-green-500 text-sm mt-2">{success}</div>}
        </div>
      </form>
    </>
  );
};

export default RequestACallBackForm;
