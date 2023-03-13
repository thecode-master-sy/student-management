import { LoginForm } from "@/components/form";
import { Container, Title, Text } from "@/components/styles/css-utility.styled";
import Link from "next/link";


export default function Login() {
  return (
    <main className="position-relative">
      <Container
        style={{
          minHeight: "100vh",
        }}
        className="flex justify-center flex-direction-column"
      >
        <div>
          <Title className="text-center">Login</Title>
        </div>

        <div className="mg-top-mid">
          <LoginForm />

          <Text className="mg-top-mid text-center">
            Dont have an account?{" "}
            <Link href={"/signup"}>create an account</Link>
          </Text>
        </div>
      </Container>
    </main>
  );
}
