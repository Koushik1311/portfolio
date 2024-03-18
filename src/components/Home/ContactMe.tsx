"use client";

import React from "react";
import SectionHeader from "../Shared/SectionHeader";
import toast from "react-hot-toast";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "../SubmitBtn";

export default function ContactMe() {
  return (
    <section
      className="mt-[8rem] lg:w-[55rem] xl:w-[65rem] lg:mx-auto leading-6 scroll-mt-28"
      id="contact"
    >
      <SectionHeader>Contact Me</SectionHeader>
      <form
        className="flex flex-col mx-[2rem]"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent succcessfully");
        }}
      >
        <input
          className="bg-[#302F4E] text-white py-[0.8rem] px-[0.9rem] rounded-md lg:text-[1.25rem]"
          type="email"
          placeholder="Your email"
          name="senderEmail"
          required
          maxLength={50}
        />
        <textarea
          className="my-[1rem] bg-[#302F4E] text-white py-[0.8rem] px-[0.9rem] rounded-md h-[15rem] lg:text-[1.25rem]"
          name="message"
          placeholder="Your message"
          required
          maxLength={500}
        />
        <SubmitBtn />
      </form>
    </section>
  );
}
