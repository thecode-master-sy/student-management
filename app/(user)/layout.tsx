import NavBar from "@/components/navbar";
import { getAccessToken } from "@/utility/auth";
import { get } from "@/utility/send";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function UserLayout({children}: { children:React.ReactNode}){
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

  const {name, image_url} = data;


    return (
        <>
            <NavBar image_url={image_url} name={name}/>
                { children }
            <footer>
                <p className="max-width--80em mg-auto pd-inline-mid pd-block-mid text-center">@copyright Havard 2023 All rights Reserved</p>
            </footer>
        </>
    )
}