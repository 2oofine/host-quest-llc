/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
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
  const [emptyFields, setEmptyFields] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
    console.log("Form submitted:", formData);

    // Clear form after submission
    fullNameRef.current!.value = "";
    emailRef.current!.value = "";
    phoneRef.current!.value = "";
    messageRef.current!.value = "";
  };
  return (
    <>
      {/* Form */}
      <form className="mt-6 space-y-[22px] flex flex-col h-full" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-[22px]">
          {" "}
          {/* Added flex-grow here */}
          <input
            type="text"
            ref={fullNameRef}
            placeholder="Full Name *"
            required
            className={`max-w-full ${
              isFromContactUs ? "w-full" : "w-[555px]"
            } h-[60px] p-[18px] bg-white text-black placeholder-silver font-light`}
          />
          <input
            type="email"
            ref={emailRef}
            placeholder="Email Address *"
            required
            className={`max-w-full ${
              isFromContactUs ? "w-full" : "w-[555px]"
            } h-[60px] p-[18px] bg-white text-black placeholder-silver font-light`}
          />
          <input
            type="tel"
            ref={phoneRef}
            placeholder="Phone Number (Optional)"
            className={`max-w-full ${
              isFromContactUs ? "w-full" : "w-[555px]"
            } h-[60px] p-[18px] bg-white text-black placeholder-silver font-light`}
          />
          <textarea
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
            type="submit"
            className={`btn-primary-42 w-full rounded-none ${
              isFromContactUs ? "hover:bg-primary-light/70 bg-primary-light" : "hover:bg-slate-300 bg-white"
            }  text-black`}
          >
            {isFromContactUs ? "Send Now" : "Send Request"}
          </button>
          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
        </div>
      </form>
    </>
  );
};

export default RequestACallBackForm;
