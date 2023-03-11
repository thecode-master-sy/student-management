import {
  Container,
  DashboardContainer,
  Title,
} from "@/components/styles/css-utility.styled";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { get } from "@/utility/send";
import { deleteCookie, setCookie } from "cookies-next";
import { getAccessToken } from "@/utility/auth";

export default async function Page() {
  const cookieStore = cookies();
  const id = cookieStore.get("id");

  if (!id) {
    redirect("/login");
  }
  const refreshToken = cookieStore.get("refresh_token")?.value;

  const token = cookieStore.get("access_token") ? cookieStore.get("access_token")?.value : await getAccessToken(refreshToken);

  const url = `https://pstudent-management-system-api.herokuapp.com/routes/student/get-student?id=${id}`;
  const user = await get(url, token);

  const { data, message, error } = user;

  const { name, created_at} = data;

 
  return ( 
    <DashboardContainer>
     
    </DashboardContainer>
  );
}
