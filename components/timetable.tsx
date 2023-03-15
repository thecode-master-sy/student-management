"use client"
import { CalendarTag, FlexContainer, GridContainer, SubTitle, Title } from "./styles/css-utility.styled";
import { Temporal, Intl, toTemporalInstant } from '@js-temporal/polyfill';
import {  getTimeTableDays} from "@/utility/utils";


const timeTableArray:any = getTimeTableDays(Temporal);

export default function TimeTable() {
    return (
        <GridContainer className="responsive" columnSize={"150px"}>
          {
            timeTableArray.map((data:any, index:any) => (
                <FlexContainer className={`border-all flex-direction-column border-rounded pd-inline-small pd-block-small align-center justify-center position-relative ${data.current && "bg-primary-blue--light"}`} gap="0px" borderColor={data.weekDay === "Wednesday" ? "rgb(var(--clr-primary-blue))": "rgba(var(--text-color), 0.4)"} key={index}>
                    <Title weight={700} color={data.weekDay === "Wednesday" ? "rgb(var(--clr-primary-blue))": "rgba(var(--text-color), 0.6)"}>{data.date}</Title>

                    <p className={data.weekDay === "Wednesday" ? "clr-primary-blue": "text-light"}>{data.month}</p>
                    <SubTitle weight={600} color={data.weekDay === "Wednesday" ? "rgb(var(--clr-primary-blue))": "rgba(var(--text-color), 0.6)"}>{data.weekDay}</SubTitle>

                    {data.weekDay == "Wednesday" && <CalendarTag>Tests</CalendarTag>}
                </FlexContainer>
            ))
          }
        </GridContainer>
    )
}