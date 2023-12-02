import Lenify from "@/app/components/Lenify";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Lenify>
   {children}
</Lenify>
  );
}
