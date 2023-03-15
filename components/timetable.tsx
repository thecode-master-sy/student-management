"use client"
import { CalendarTag, FlexContainer, GridContainer, SubTitle, Title } from "./styles/css-utility.styled";
import { Temporal, Intl, toTemporalInstant } from '@js-temporal/polyfill';
import {  getTimeTableDays} from "@/utility/utils";


const timeTableArray:any = getTimeTableDays(Temporal);

export default function TimeTable() {
    return (
        <GridContainer className="responsive" columnSize={"150px"}>
            {/* <FlexContainer className="border-all flex-direction-column border-rounded pd-inline-small pd-block-small align-center justify-center position-relative" gap="0px" borderColor={"rgba(0,0,0,0.5)"}>
                <Title weight={700} color={"rgba(0,0,0,0.7)"}>20</Title>

                <p className="text-light">March</p>
                <SubTitle weight={600} color={"rgba(0,0,0,0.7)"}>Monday</SubTitle>
            </FlexContainer>

            <FlexContainer className="border-all flex-direction-column border-rounded pd-inline-small pd-block-small align-center justify-center position-relative" gap="0px" borderColor={"rgb(var(--clr-primary-blue))"}>
                <Title weight={700} color={"rgb(var(--clr-primary-blue))"}>21</Title>

                <p className="clr-primary-blue">March</p>
                <SubTitle weight={600} color={"rgb(var(--clr-primary-blue))"}>Tuesday</SubTitle>

                <CalendarTag>Tests</CalendarTag>
            </FlexContainer> */}

          {
            timeTableArray.map((data:any, index:any) => (
                <FlexContainer className="border-all flex-direction-column border-rounded pd-inline-small pd-block-small align-center justify-center position-relative" gap="0px" borderColor={data.weekDay === "Wednesday" ? "rgb(var(--clr-primary-blue))": "rgba(0,0,0,0.7)"} key={index}>
                    <Title weight={700} color={data.weekDay === "Wednesday" ? "rgb(var(--clr-primary-blue))": "rgba(0,0,0,0.7)"}>{data.date}</Title>

                    <p className={data.weekDay === "Wednesday" ? "clr-primary-blue": "text-light"}>{data.month}</p>
                    <SubTitle weight={600} color={data.weekDay === "Wednesday" ? "rgb(var(--clr-primary-blue))": "rgba(0,0,0,0.7)"}>{data.weekDay}</SubTitle>

                    {data.weekDay == "Wednesday" && <CalendarTag>Tests</CalendarTag>}
                </FlexContainer>
            ))
          }
        </GridContainer>
    )
}