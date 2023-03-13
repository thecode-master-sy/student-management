"use client"
import Link from "next/link";
import Image from "next/image";
import { FlexContainer, StyledNavBar, Title } from "./styles/css-utility.styled";
import {FiSettings} from "react-icons/fi";
import {IoMdNotificationsOutline} from "react-icons/io";
import {FiSearch} from "react-icons/fi"
import {RxHamburgerMenu} from "react-icons/rx";
import {FaTimes} from "react-icons/fa";
import placeHolderImage from "../public/profile-placeholder.png";
import {motion} from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { isActiveLink } from "@/utility/utils";

const  links: {name:string; path:string}[] = [
    {
        name: "Dashboard",
        path: "/dashboard"
    },
    {
        name: "Classes",
        path: "/classes"
    },
    {
        name: "Tasks",
        path: "/tasks"
    },
    {
        name: "Reports",
        path: "/reports"
    }
]

export default function NavBar({image_url, name}: { image_url:string; name: string;}){
    const pathname = usePathname();
    const [isNavOpen, setNavOpen] = useState(false);
    
    useEffect(() => {
        setNavOpen(false);
    }, [pathname])

    const moblieNavVariants = {
        open: {
            opacity: 1,
            x: 0,
        },

        closed: {
            opacity: 0, 
            x: "-100%"
        }
    }

    return(
        <StyledNavBar>
            <FlexContainer className="max-width--80em mg-auto pd-inline-mid pd-block-mid justify-space-between">
                <FlexContainer className="align-center" style={{
                    width: "100%"
                }}>
                    <h2>Havard</h2>

                    <ul className="navigation--desktop">
                       
                        {
                            links.map((link, index) => (
                                <Link key={index} href={link.path} className={isActiveLink(link.path, pathname) ? "active": "inactive"}>
                                    {link.name}
                                    {
                                        isActiveLink(link.path, pathname) && (
                                            <motion.div className="underline" layoutId="underline"></motion.div>
                                        )
                                    }
                                       
                                    
                                </Link>
                            ))
                        }
                    </ul>
                  
                    <motion.ul className="navigation--mobile" animate={isNavOpen ? "open": "closed"} variants={moblieNavVariants}>
                        <span className="cancel"><FaTimes onClick={()=>setNavOpen(!isNavOpen)}/></span>
                        <li><Link href={"/dashboard"}>DashBoard</Link></li>
                        <li><Link href={"/classes"}>Classes</Link></li>
                        <li><Link href={"/tasks"}>Tasks</Link></li>
                        <li><Link href={"/reports"}>Reports</Link></li>

                        <div className="profile flex flex-direction-column">
                            <h3 className="mg-top-mid">Account</h3>

                            <Link href={"/settings"}>
                            <FlexContainer className="align-center gap--small">
                                <FiSettings className="icon"/>
                                <span>settings</span>
                            </FlexContainer>
                            </Link>
                            
                            <Link href={"/notifications"}>
                            <FlexContainer className="align-center gap--small cursor-pointer">
                                <IoMdNotificationsOutline className="icon"/>
                                <span>notifications</span>
                            </FlexContainer>
                            </Link>

                           <h3 className="mg-top-mid">Profile</h3>

                            <Link href={"/profile"}>
                            <FlexContainer className="gap--small">
                                    
                                    <Image width={24} height={24} src={image_url === null ? placeHolderImage : image_url} className="border-circular" alt="user"/>
                                    <span>{name}</span>
                                </FlexContainer>
                            </Link>

                            <Link href={"/logout"} className="mg-top-mid">logout</Link>
                        </div>
                    </motion.ul>

                    <span className="hamburger--container flex justify-center align-center">
                        <RxHamburgerMenu className="hamburger" onClick={() => setNavOpen(!isNavOpen)}/>
                    </span>
                </FlexContainer>
                
                <FlexContainer className="align-center navigation--desktop">
                    <span className="flex align-center justify-center">
                        <FiSearch className="icon"/>
                    </span>

                    <span className="flex align-center justify-center">
                        <FiSettings className="icon"/>
                    </span>

                    <span className="flex align-center justify-center">
                        <IoMdNotificationsOutline className="icon"/>
                    </span>

                    <div className="flex align-center justify-center cursor-pointer gap--small">
                        
                        <Image width={24} height={24} src={image_url === null ? placeHolderImage : image_url} className="border-circular" alt="user"/>
                        <span>{name}</span>
                    </div>
                </FlexContainer>
            </FlexContainer>
        </StyledNavBar>
    )
}