export default function SectionHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return <h2 className="text-2xl font-bold text-[#D79921]">{children}</h2>;
}
