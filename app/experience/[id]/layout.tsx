import { ExperienceData } from "@/constants/experience";

type MetadetaProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: MetadetaProps) {
  const id = params.id;

  const findExperienceById = (id: string) => {
    return ExperienceData.find((experience) => experience.id === id);
  };

  const experience = findExperienceById(id);

  return {
    title: experience?.title,
  };
}

export default function ExperienceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
