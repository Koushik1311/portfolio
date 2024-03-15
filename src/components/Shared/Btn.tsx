import Link from "next/link";

type BtnProps = {
  children: React.ReactNode;
  goTo: string;
};

export default function Btn({ children, goTo }: BtnProps) {
  return (
    <button className="text-[1rem] lg:text-[1.267rem] font-bold text-white bg-[#F74C60] rounded-full px-[2.1rem] py-[0.49rem] lg:px-[2.5rem] lg:py-[0.76rem] hover:scale-110 transition delay-75 duration-200 ease-in-out">
      <Link
        className="transition delay-75 duration-200 ease-in-out"
        href={goTo}
      >
        {children}
      </Link>
    </button>
  );
}
