import  { useEffect, useState } from 'react';

export default function useWindowsWidth() {
    const [width, setWidth] = useState(undefined);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    },[])
  return ( width )
}
