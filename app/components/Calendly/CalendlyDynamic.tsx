import dynamic from "next/dynamic";

const Calendly = dynamic(() => import("../Calendly/Calendly"), {
  ssr: false
});

export default function CalendlyDynamic() {
  return (
    <div>
      <Calendly />
    </div>
  );
}