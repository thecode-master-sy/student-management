import { SignUpForm } from "@/components/form";
import { Container, Title, Text } from "@/components/styles/css-utility.styled";
import Link from "next/link";

export const metadata = {
  title: "Havard | Create Account",
  description: "Generated by create next app",
};

export default function SignUp() {
  return (
    <main>
      <Container
        style={{
          minHeight: "100vh",
        }}
        className="flex justify-center flex-direction-column"
      >
        <div>
          <Title className="text-center">SignUp</Title>
        </div>

        <div className="mg-top-mid">
          <SignUpForm />

          <Text className="text-center mg-top-mid">
            Already have account? <Link href={"/login"}>Login</Link>
          </Text>
        </div>
      </Container>
    </main>
  );
}
