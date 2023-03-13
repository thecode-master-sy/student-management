import {
  Card,
  DashboardContainer,
  FlexContainer,
  SmallText,
  SubTitle,
  Title,
} from "@/components/styles/css-utility.styled";
import { cookies } from "next/headers";
import { get } from "@/utility/send";
import { getAccessToken } from "@/utility/auth";
import {MdKeyboardArrowDown} from "react-icons/md";

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
            <h2 className="clr-primary-green">Hello {name}, Welcome Back! 👋</h2>
            <SmallText>hmm... what do we have here today...</SmallText>
        </section>

        <section className="mg-top-large">
          <FlexContainer className="justify-space-between">
            <SubTitle>Next Classes</SubTitle>

            <span className="flex justify-center align-center">
              <SmallText className="clr-primary-green">Today</SmallText>
              <MdKeyboardArrowDown className="icon cursor-pointer"/>
            </span>
          </FlexContainer>
        

          <div className="mg-top-mid">
              <Card>
                  <div className="card--top"></div>
                  <div className="card--body"></div>
                  <div className="card--bottom"></div>
              </Card>
          </div>
        </section>
    </DashboardContainer>
  );
}
