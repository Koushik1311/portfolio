import Link from "next/link";

type BtnProps = {
  children: React.ReactNode;
  goTo: string;
};

export default function Btn({ children, goTo }: BtnProps) {
  return (
    <button className="text-[1rem] font-bold text-white bg-[#F74C60] rounded-full px-[2rem] py-[0.5rem] hover:scale-110 transition delay-75 duration-200 ease-in-out">
      <Link href={goTo}>{children}</Link>
    </button>
  );
}
