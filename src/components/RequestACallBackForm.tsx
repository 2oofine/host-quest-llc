/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useRef, useState } from "react";

const RequestACallBackForm = () => {
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
      <form className="mt-6 space-y-[22px]" onSubmit={handleSubmit}>
        <input
          type="text"
          ref={fullNameRef}
          placeholder="Full Name *"
          required
          className={`max-w-full w-[555px] max-h-full h-[60px] p-[18px] rounded-xl bg-white text-black placeholder-silver font-light`}
        />
        <input
          type="email"
          ref={emailRef}
          placeholder="Email Address *"
          required
          className={`max-w-full w-[555px] max-h-full h-[60px] p-[18px] rounded-xl bg-white text-black  placeholder-silver font-light`}
        />
        <input
          type="tel"
          ref={phoneRef}
          placeholder="Phone Number"
          className={`max-w-full w-[555px] max-h-full h-[60px] p-[18px] rounded-xl bg-white text-black placeholder-silver font-light`}
        />
        <textarea
          ref={messageRef}
          placeholder="Message"
          rows={10}
          className={`max-w-full w-[555px] p-[18px] rounded-xl bg-white text-black placeholder-silver font-light`}
        ></textarea>

        <button
          type="submit"
          className="btn-primary-42 w-full lg:w-[250px]  hover:bg-slate-300 bg-white text-black rounded-xl"
        >
          Send Request
        </button>

        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
      </form>
    </>
  );
};

export default RequestACallBackForm;
