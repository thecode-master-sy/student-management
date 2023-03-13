import { AnimatePresence, motion } from "framer-motion";

const AlertVariants = {
    initial: {
        y: "1000px",
        opacity: 0,
    },
    animate: {
        y: "15px",
        x: "-50%",
        opacity: 1,
        transition: {
            staggerChildren: 0.5
        }
    }, 
    exit: {
        y: "1000px",
        opacity: 0,  
    }
}

const svgVariants = {
    initial: {
        rotate: "0"
    },
    animate: {
        rotate: "180",

        transition: {
           delay: "3",
        }
    }
}

const PathVariants = {
    initial: {
        pathLength: 0
    },
    animate:{
        pathLength: 1,
        transition: {
            delay: 1,
        }
    }
}



export default function Alert({text}: {text:string}){
    return(
        <AnimatePresence>
            <motion.div variants={AlertVariants} initial="initial" animate="animate" exit="exit" className="alert box-shadow pd-inline-small pd-block-small flex gap--small align-center border-rounded">
                <motion.svg viewBox="0 0 53.19 53.19" width={20} height={20}>
                    <g>
                    <motion.circle
                        stroke="#51e051"
                        strokeWidth={3}
                        fill="transparent"
                        cx={26.59}
                        cy={26.59}
                        r={24}
                        variants={PathVariants}
                    />
                    <motion.path
                        stroke="#51e051"
                        strokeWidth={3}
                        strokeLinecap="round"
                        fill="transparent"
                        d="M12.29 26.59l10.98 10.42 17.49-18.23"
                        variants={PathVariants}
                    />
                    </g>
                </motion.svg>
                <p>{text}</p>
            </motion.div>
        </AnimatePresence>
    )
}