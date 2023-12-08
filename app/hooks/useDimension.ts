import { useState, useEffect } from 'react';

const useDimension = () => {
  const [dimension, setDimension] = useState({
    viewportWidth: 0,
    viewportHeight: 0,
    documentWidth: 0,
    documentHeight: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimension({
        viewportWidth: window.innerWidth,
        viewportHeight: window.innerHeight,
        documentWidth: window.document.body.offsetWidth,
        documentHeight: window.document.body.offsetHeight
      });
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