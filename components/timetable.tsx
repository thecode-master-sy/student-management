"use client"
import { FlexContainer, GridContainer, SubTitle, Title } from "./styles/css-utility.styled";
import { Temporal, Intl, toTemporalInstant } from '@js-temporal/polyfill';
import {  getMonth, getTimeTableDays} from "@/utility/utils";


const timeTableArray:any = getTimeTableDays(Temporal);

const timeIso = Temporal.Now.plainDateISO();
const monthIsoFormat = timeIso.month;
const currentYear = timeIso.year;

const currentMonth = getMonth(monthIsoFormat);

export default function TimeTable() {
    return (
      <div>
          <div className="bg-primary-gray pd-inline-mid pd-block-mid border-rounded">
              <SubTitle className="text-center">{currentMonth} {currentYear}</SubTitle>

              <GridContainer className="responsive" columnSize="30px" style={{
                marginTop: "3em",
                placeContent: "center"
              }}>
                {
                  timeTableArray.map((data:any, index:any) => (
                    <FlexContainer className="flex-direction-column align-center cursor-pointer" key={index}>
                        <span className="uppercase text-light">{data.weekDay[0] + data.weekDay[1] + data.weekDay[2]}</span>
                        <span className={`pd-inline-small pd-block-small ${data.current ? "selected--date": "not-selected"}`}>{data.date}</span>
                    </FlexContainer>
                  ))
                }
              </GridContainer>
          </div>
      </div>
    )
}