import { useState, useEffect } from 'react';

const useElementSize = (ref: React.RefObject<HTMLElement>) => {
    const [size, setSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const handleResize = () => {
            if (ref.current) {
                setSize({
                    width: ref.current.offsetWidth,
                    height: ref.current.offsetHeight,
                });
            }
        };

        // Call the handleResize function to set the initial size
        handleResize();

        // Set up the event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [ref]); // Only re-run the effect if the ref changes

    return size;
};

export default useElementSize;
