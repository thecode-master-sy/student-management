"use client"

import { useRef, useEffect, useState } from "react";
import { InnerSlider, StyledSlider } from "./styles/css-utility.styled";

export default function Slider({children}: {children:React.ReactNode}){
    const [width, setWidth] = useState<number>(0);
    const constraintsRef = useRef<any>(null);

    useEffect(()=> {
        console.log(constraintsRef.current.scrollWidth, constraintsRef.current.offsetWidth);
        setWidth(constraintsRef.current.scrollWidth - constraintsRef.current.offsetWidth);
    }, [])

    console.log(width)

    return(
        <StyledSlider ref={constraintsRef} whileTap={{cursor: "grabbing"}}>
            <InnerSlider drag="x" dragConstraints={{right: 0, left: -width}}>
                { children }
            </InnerSlider>
        </StyledSlider>
    )
}