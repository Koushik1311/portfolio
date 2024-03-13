import { TbGridDots } from "react-icons/tb";

type SectionHeaderProps = {
  children: React.ReactNode;
};

export default function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <div className="relative mb-[3.6rem]">
      <TbGridDots className="absolute text-gray-600 text-[3rem] -z-10 -top-2 left-2" />
      <h2 className="text-[2.25rem] text-white font-medium ml-[1.8rem]">
        {children}
      </h2>
    </div>
  );
}
