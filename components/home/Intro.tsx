import Image from "next/image";

export default function Intro() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <Image
        src="/KOUSHIK.jpg"
        width={200}
        height={200}
        priority={true}
        alt="Picture"
        className="p-3 h-32 w-32 object-cover rounded-3xl"
      />
      <h1 className="text-[40px] font-bold text-[#D79921]">Koushik Roy</h1>
      <p className="text- font-bold text-[#D28280]">
        Full Stack Developer | Indie Maker | Web3 Learner
      </p>
    </div>
  );
}
