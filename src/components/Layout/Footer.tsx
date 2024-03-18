import React from "react";

export default function Footer() {
  return (
    <footer className="text-white bg-[#302F4E] mt-[8rem]">
      <small className="mb-2 block text-xs text-center pt-[1.3rem]">
        &copy; 2023 Koushik Roy. All rights reserved.
      </small>
      <p className="text-xs text-center pb-[1.3rem]">
        <span className="font-semibold">About this website:</span> built with
        React @ Next.js (App Router & Server Action), TypeScript, Tailwind CSS,
        Framer Motion & Resend, Versel hosting.
      </p>
    </footer>
  );
}
