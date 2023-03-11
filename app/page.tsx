import { Title } from "@/components/styles/css-utility.styled";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default function Home() {
  const cookieStore = cookies();
  const id = cookieStore.get("id");

  if(id) {
    redirect("/dashboard")
  }else {
    redirect("/login")
  }

  return (
    <main>
      <Title>Hello World</Title>
    </main>
  );
}
