'use client'
import { PopupButton } from "react-calendly";
import { useEffect, useState } from "react";

export default function Calendly() {
  const [rootElement, setRootElement] = useState<HTMLElement>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const element = document.getElementById("__next");
      if (element) {
        setRootElement(element);
      }
    }
  }, []);

  return (
    <div className="cal_div">

    {rootElement && (
      <PopupButton
        className=""
        url="https://calendly.com/danielpetho/30min"
        rootElement={rootElement}
        text="Let's talk"
      />
    )}
    </div>
  );
}