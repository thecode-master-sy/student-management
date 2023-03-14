"use client"
import Slider from "./slider";
import { Card, FlexContainer } from "./styles/css-utility.styled";
import Image from "next/image";
import playButton from "../public/play.png";

interface classDataInterface 
{
    title: string;
    subjectImage: any;
    duration: string;
    tutor: string;
}

export default function NextClasses({classData}: {classData: classDataInterface[]}){
    return (
        <Slider>
           {
            classData.map((data, index) => (
                <Card key={index}>
                    <div className="card--top">
                        <div className="border-circular bg-primary-white pd-inline-mid pd-block-mid flex justify-center align-center" style={{
                            width: "50px",
                            height: "50px"
                        }}>
                            <Image width={30} height={30} src={data.subjectImage} alt={data.title}/>
                        </div>
                    </div>

                    <div className="card--body mg-top-mid">
                        <h3>{data.title}</h3>

                        <div className="mg-top-small flex justify-space-between align-center">
                             <span>Duration:</span> 
                             <FlexContainer className="align-center">
                                <span>{data.duration}</span>
                                <div className="border-blue flex align-center justify-center border-circular" style={{
                                 
                                    width: "20px",
                                    height: "20px"
                                }}>
                                    <Image width={12} height={12} src={playButton} alt={"play icon"}/>
                                </div>
                             </FlexContainer>
                        </div>
                    </div>
                    
                    
                    <div className="card--bottom mg-top-mid">
                        <p>Tutor: {data.tutor}</p>
                    </div>
                </Card>
            ))
           }
        </Slider>
    )
}