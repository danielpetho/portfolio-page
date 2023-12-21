import { useState, useEffect } from 'react';
import { useMyStore } from "../store/store";

const useDimension = () => {
  const [dimension, setDimension] = useState({
    viewportWidth: 0,
    viewportHeight: 0,
    documentWidth: 0,
    documentHeight: 0,
  });

  const { setIsMobileView } = useMyStore();

  useEffect(() => {
    const handleResize = () => {
      setDimension({
        viewportWidth: window.innerWidth,
        viewportHeight: window.innerHeight,
        documentWidth: window.document.body.offsetWidth,
        documentHeight: window.document.body.offsetHeight
      });

      if (window.innerWidth < 640) {
        console.log("mobile view");
        setIsMobileView(true);
      } else {
        console.log("desktop view");
        setIsMobileView(false);
      }

    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return dimension;
};

export default useDimension;