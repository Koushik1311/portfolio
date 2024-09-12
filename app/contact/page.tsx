import SubmitButton from "@/components/global/SubmitButton";
import { redirect } from "next/navigation";
import { Resend } from "resend";

export default function page({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const sendMessage = async (FormData: FormData) => {
    "use server";

    const fullName = FormData.get("full_name") as string;
    const email = FormData.get("email") as string;
    const message = FormData.get("message") as string;

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact Form <contact@resend.dev>",
      to: [`${process.env.PERSONAL_EMAIL_ID}`],
      subject: "New Contact Form Portfolio",
      html: `<strong>Name:</strong> ${fullName}<br>
             <strong>Email:</strong> ${email}<br>
             <strong>Message:</strong> ${message}`,
      replyTo: email,
    });

    if (error) {
      return redirect(
        `/contact?message=${encodeURIComponent("Can not sent message!")}`
      );
    }

    if (data) {
      return redirect(
        `/contact?message=${encodeURIComponent("Message sent successfully!")}`
      );
    }
  };

  return (
    <main className="container">
      <h1 className="text-2xl font-bold text-primary mt-8 lg:w-[600px] mx-auto">
        # Contact Me
      </h1>
      <form className="flex flex-col mx-auto lg:w-[600px]">
        <label htmlFor="full_name" className="mt-6 font-medium text-lg">
          <span className="text-primary">##</span> Name
        </label>
        <input
          type="text"
          name="full_name"
          id="full_name"
          className="mt-1 bg-[#202020] h-9 px-3 text-sm border border-secondary focus:outline-none focus:border-primary text-secondary"
          placeholder="Enter your Name"
        />

        <label htmlFor="email" className="mt-6 font-medium text-lg">
          <span className="text-primary">##</span> Email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="mt-1 bg-[#202020] h-9 px-3 text-sm border border-secondary focus:outline-none focus:border-primary text-secondary"
          placeholder="Enter your email"
        />

        <label htmlFor="message" className="mt-6 font-medium text-lg">
          <span className="text-primary">##</span> Message
        </label>
        <textarea
          name="message"
          id="message"
          className="mt-1 bg-[#202020] px-3 py-2 text-sm border border-secondary focus:outline-none focus:border-primary text-secondary h-48"
          placeholder="Enter your message"
        />
        <SubmitButton
          className="mt-6"
          pendingText="Sending..."
          formAction={sendMessage}
        >
          Send
        </SubmitButton>
      </form>
      {searchParams.message === "Message sent successfully!" ? (
        <p className="text-xs text-center font-medium mt-5 text-primary">
          {searchParams.message}
        </p>
      ) : (
        <p className="text-xs text-center font-medium mt-5 text-red-500">
          {searchParams.message}
        </p>
      )}
    </main>
  );
}
