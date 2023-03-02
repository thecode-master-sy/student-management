import { LoginForm } from "@/components/form";
import {
  Text,
  Container,
  FlexContainer,
  Title,
} from "@/components/styles/css-utility.styled";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
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
        </div>
      </Container>
    </main>
  );
}
