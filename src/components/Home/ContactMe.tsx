"use client";

import React from "react";
import SectionHeader from "../Shared/SectionHeader";
import toast from "react-hot-toast";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "../SubmitBtn";

export default function ContactMe() {
  return (
    <section className="mt-8rem lg:w-[55rem] xl:w-[65rem] lg:mx-auto">
      <SectionHeader>Contact Me</SectionHeader>
      <form
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
          type="email"
          placeholder="Your email"
          name="senderEmail"
          required
          maxLength={50}
        />
        <textarea
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
