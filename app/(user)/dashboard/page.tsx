import {
  Card,
  DashboardContainer,
  FlexContainer,
  GridContainer,
  SmallText,
  SubTitle,
  Title,
} from "@/components/styles/css-utility.styled";
import { cookies } from "next/headers";
import { get } from "@/utility/send";
import { getAccessToken } from "@/utility/auth";
import {MdKeyboardArrowDown} from "react-icons/md";
import NextClasses from "@/components/NexClasses";
import biologyIcon from "../../../public/dna-svgrepo-com.svg"
import Link from "next/link";
import TimeTable from "@/components/timetable";
import { CircleChart } from "@/components/performanceChart";

const classData = [
  {
    title: "Biology",
    subjectImage: biologyIcon,
    duration: "2hrs",
    tutor: "Mr Walter White"
  },

  {
    title: "Chemistry",
    subjectImage: biologyIcon,
    duration: "2hrs",
    tutor: "Mr Heinsberg"
  },

  {
    title: "Cooking Meth",
    subjectImage: biologyIcon,
    duration: "2hrs",
    tutor: "Mr Walter White"
  },

  {
    title: "Physics",
    subjectImage: biologyIcon,
    duration: "2hrs",
    tutor: "Mr Walter White"
  },
  
  {
    title: "Biology",
    subjectImage: biologyIcon,
    duration: "2hrs",
    tutor: "Mr Walter White"
  }
]

export default async function Page() {
  const cookieStore = cookies();
  const id = cookieStore.get("id");

  const refreshToken = cookieStore.get("refresh_token")?.value;

  const token = cookieStore.get("access_token") ? cookieStore.get("access_token")?.value : await getAccessToken(refreshToken);

  const url = `https://pstudent-management-system-api.herokuapp.com/routes/student/get-student?id=${id}`;
  const user = await get(url, token);

  const { data, message, error } = user;

  const { name, created_at} = data;

  

 
  return ( 
    <DashboardContainer>
        <section className="mg-top-mid">
            <h2 className="clr-primary-green fs-mid">Hello {name}, Welcome Back! 👋</h2>
            <SmallText>hmm... what do we have here today...</SmallText>
        </section>

        <section className="mg-top-extra">
          <FlexContainer className="justify-space-between">
            <SubTitle>Next Classes</SubTitle>

           <FlexContainer className="align-center">
              <Link href={"/classes"} className="cursor-pointer">view all</Link>
              <span className="flex justify-center align-center bg-primary-gray border-rounded pd-inline-small pd-block-small cursor-pointer gap--small">
                <SmallText>Today</SmallText>
                <MdKeyboardArrowDown className="icon cursor-pointer"/>
              </span>
            </FlexContainer> 
          </FlexContainer>
        

          <div className="mg-top-mid">
             <NextClasses classData={classData}/>
          </div>
        </section>

        <section className="mg-top-extra"> 
            <GridContainer gap="0px">
              <div className="timetable border-light pd-inline-mid pd-block-mid border-rounded">
                <SubTitle>TimeTable</SubTitle>

                
                
                <FlexContainer className="mg-top-large align-center" gap="0.5em">
                  <span className="border-rounded bg-primary-blue" style={{
                    width: "25px",
                    height: "25px"
                  }}></span>
                  <span>current day</span>
                </FlexContainer>


                <div className="mg-top-large" style={{
                  width: "100%",
                }}>
                  <TimeTable/>
                </div>
              </div>

              <div className="performance border-light pd-inline-mid pd-block-mid border-rounded">
                  <SubTitle>Performance</SubTitle>

                  <div className="mg-top-large">
                    <FlexContainer className="align-center justify-space-between">
                      <FlexContainer>
                      <span className="border-rounded bg-primary-blue" style={{
                        width: "25px",
                        height: "25px"
                      }}></span>
                        <span>Points Progress</span>
                      </FlexContainer>

                      <span className="flex justify-center align-center bg-primary-gray border-rounded pd-inline-small pd-block-small cursor-pointer gap--small">
                        <SmallText>Monthly</SmallText>
                        <MdKeyboardArrowDown className="icon cursor-pointer"/>
                      </span>
                    </FlexContainer>

                    <CircleChart/>

                    <div className="text-center">
                      <p className="mg-top-small">
                        <span>You've Got:</span>
                        <span className="fw-bold">83.5 points!!</span> 
                      </p>
                      <p className="mg-top-mid clr-primary-green fw-bold">your average score increased by 5.4% 🚀</p>
                    </div>
                  </div>
              </div>
            </GridContainer>
            
        </section>
    </DashboardContainer>
  );
}
