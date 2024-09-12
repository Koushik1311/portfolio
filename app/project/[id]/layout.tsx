import { ProjectsData } from "@/constants/projects";

type MetadetaProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: MetadetaProps) {
  const id = params.id;

  const findProjectById = (id: string) => {
    return ProjectsData.find((project) => project.id === id);
  };

  const project = findProjectById(id);

  return {
    title: project?.name,
  };
}

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
