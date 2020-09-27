import {useEffect, useState} from "react";

export const useResizeSwipe = myRef => {
    const getDimensions = () => (myRef.current.offsetWidth)

    const [dimensions, setDimensions] = useState( 0 )

    useEffect(() => {
        const handleResize = () => {
            setDimensions(getDimensions())
        }

        if (myRef.current) {
            setDimensions(getDimensions())
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [myRef])

    return dimensions;
};