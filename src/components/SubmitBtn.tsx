import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="text-[1rem] lg:text-[1.267rem] font-bold text-white bg-[#F74C60] rounded-full px-[2.1rem] py-[0.49rem] lg:px-[2.5rem] lg:py-[0.76rem] md:w-[8rem] lg:w-[10rem]"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>Submit</>
      )}
    </button>
  );
}
