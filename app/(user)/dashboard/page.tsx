import {
  Container,
  DashboardContainer,
  Title,
} from "@/components/styles/css-utility.styled";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { get } from "@/utility/send";

export default async function Page() {
  const cookieStore = cookies();
  const id = cookieStore.get("id");

  if (!id) {
    redirect("/login");
  }

  const token = cookieStore.get("access_token");

  const url = `https://pstudent-management-system-api.herokuapp.com/routes/student/get-student?id=${id}`;
  const user = await get(url, token?.value);

  const { data } = user;

  return (
    <DashboardContainer>
      <Title>Hello world {data.name}</Title>
    </DashboardContainer>
  );
}
