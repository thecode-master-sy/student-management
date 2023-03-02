"use client";
import { useState } from "react";
import {
  Button,
  FlexContainer,
  Input,
  InputContainer,
  StyledForm,
  Text,
} from "./styles/css-utility.styled";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import Link from "next/link";

export function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <StyledForm>
      <Text className="text-center">
        welcome back scholar!! input your email and password to continue
      </Text>

      <InputContainer className="mg-top-mid">
        <Input type="email" placeholder="Email" />
        <span className="icon flex align-center">
          <MdAlternateEmail />
        </span>
      </InputContainer>

      <InputContainer className="mg-top-mid">
        <Input type="password" placeholder="Password" />
        <span className="icon flex align-center justify-center cursor-pointer">
          <AiOutlineEyeInvisible />
        </span>
      </InputContainer>

      <FlexContainer className="justify-center">
        <Button className="mg-top-mid">Login</Button>
      </FlexContainer>

      <Text className="mg-top-mid">
        Dont have an account? <Link href={"/signup"}>create an account</Link>
      </Text>
    </StyledForm>
  );
}

export function SignUpForm() {
  const [email, setEmail] = useState<string>("");
  return <form></form>;
}
