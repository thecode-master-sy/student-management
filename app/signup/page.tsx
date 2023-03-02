import { SignUpForm } from "@/components/form";
import { Container, Title, Text } from "@/components/styles/css-utility.styled";
import Link from "next/link";

export default function SignUp() {
  return (
    <main>
      <Container
        style={{
          minHeight: "100vh",
        }}
        className="flex justify-center"
      >
        <div>
          <Title className="text-center">SignUp</Title>
        </div>

        <div className="mg-top-mid">
          <SignUpForm />

          <Text className="text-center">
            Already have account? <Link href={"/"}>Login</Link>
          </Text>
        </div>
      </Container>
    </main>
  );
}
