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
      <div style={{
        width: "100%"
      }}>
          <div className="bg-primary-gray pd-inline-mid  pd-timetable border-rounded">
              <SubTitle className="text-center">{currentMonth} {currentYear}</SubTitle>

              <GridContainer className="fs-small responsive" columnSize="25px" gap="2em"  style={{
                marginTop: "var(--space-btn)",
                placeContent: "center"
              }}>
                {
                  timeTableArray.map((data:any, index:any) => (
                    <FlexContainer className="flex-direction-column align-center cursor-pointer" key={index}>
                        <span className="uppercase text-light">{data.weekDay[0]}</span>
                        <span className={`pd-inline-small pd-block-small ${data.current ? "selected--date": "not-selected"}`}>{data.date}</span>
                    </FlexContainer>
                  ))
                }
              </GridContainer>
          </div>
      </div>
    )
}