"use client";

import { Container } from "./styles/css-utility.styled";
import {motion} from "framer-motion";
import { useState } from "react";

const LoaderVariants = {
    open: {
        scale: 1,
        opacity: 1
    },

    closed: {
        scale: 0,
        opacity: 0
    }
}

export default function Loader({isPageLoading}:{isPageLoading:boolean}){
    

    return(
       <motion.div className="position-absolute flex justify-center align-center bg-primary-white" animate={isPageLoading ? "open": "closed"} variants={LoaderVariants} style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh"
       }}>
            <p>loading...</p>
       </motion.div>
    )
}