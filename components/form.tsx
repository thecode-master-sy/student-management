"use client";
import { useEffect, useMemo, useState } from "react";
import {
  Button,
  FlexContainer,
  Input,
  InputContainer,
  StyledForm,
  Text,
} from "./styles/css-utility.styled";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { checkEmpty, validate, protect } from "@/utility/utils";
import { login, signup } from "@/utility/auth";
import { Oval } from "react-loader-spinner";
import { redirect, useRouter} from "next/navigation";
import Alert from "./alert";
import Loader from "./pageLoader";


export function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const isEmptyEmail = checkEmpty(email);

  const [password, setPassword] = useState<string>("");
  const isEmptyPassword = checkEmpty(password);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pageLoading, setPageLoading] = useState<boolean>(false);
  const [isSuccessful, setSuccessful] = useState<boolean>(false);

  const [error, setError] = useState<string>("");

  const FormData = useMemo(() => {
    return {
      email: email,
      password: password,
    };
  }, [email, password]);

  function togglePassword() {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    if (!isLoading) {
      setIsLoading(true);
      const data = await login(e, FormData);

      if (data) {
        setIsLoading(false);

        if (data.error) {
          setError(data.message);
          console.log(data.message);
        } else {
          setSuccessful(true);
          setTimeout(() => {
            router.push("/dashboard")
          }), [5000]
          
        }
      }
    }
  }

  

  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 5000);
  }, [error]);

  return (
    <StyledForm onSubmit={(e) => handleLogin(e)}>
      {isSuccessful && <Alert text="logged in sucessfully"/>}
      <Text className="text-center">
        welcome back scholar!! input your email and password to continue
      </Text>

      <Text className="error text-center mg-top-small">{error}</Text>

      <InputContainer
        className="mg-top-mid"
        valid={isEmptyEmail ? "true" : "false"}
      >
        <Input
          type="email"
          placeholder="enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <span className="label">Email</span>
        <span className="icon flex align-center">
          <MdAlternateEmail />
        </span>
      </InputContainer>

      <InputContainer
        className="mg-top-mid"
        valid={isEmptyPassword ? "true" : "false"}
      >
        <Input
          type={isOpen ? "text" : "password"}
          placeholder="enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <span className="label">Password</span>
        <span
          className={`icon icon--password flex align-center justify-center cursor-pointer ${
            isOpen && "open"
          }`}
          onClick={togglePassword}
        >
          <AiOutlineEyeInvisible className="eye--closed" />
          <AiOutlineEye className="eye--open" />
        </span>
      </InputContainer>

      <FlexContainer className="justify-center">
        <Button className="mg-top-mid flex justify-center align-center">
          {isLoading ? (
            <Oval
            height={25}
            width={25}
            color="#d0def7"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#4fa94d"
            strokeWidth={3}
            strokeWidthSecondary={3}
          
          />
          ) : (
            "Login"
          )}
        </Button>
      </FlexContainer>
    </StyledForm>
  );
}

export function SignUpForm() {

  const [isRedirect, setRedirect] = useState(false);

  if(isRedirect){
    redirect("/login")
  }

  const [email, setEmail] = useState<string>("");
  const isEmptyEmail = checkEmpty(email);

  const [name, setName] = useState<string>("");
  const isEmptyName = checkEmpty(name);

  const [password, setPassword] = useState<string>("");
  const isEmptyPassword = checkEmpty(password);

  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const isEmptyConfirmPassword = checkEmpty(confirmPassword);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenConfirm, setIsOpenConfirm] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessful, setSuccessful] = useState<boolean>(false);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    message: "",
  });

  const formData = useMemo(() => {
    return {
      name: protect(name),
      email: protect(email),
      password: protect(password),
    };
  }, [name, password, email]);

  function togglePassword() {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }

  function toggleConfirmPassword() {
    if (!isOpenConfirm) {
      setIsOpenConfirm(true);
    } else {
      setIsOpenConfirm(false);
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { name, email, password } = formData;

    const rule = {
      name: /^[A-Za-z]+$/,
      email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
    };

    const errorsArray = [];

    //validate name
    if (validate(name, rule.name)) {
      setErrors((state) => ({ ...state, name: "" }));
    } else {
      const error = "name should contain only alphabets";

      setErrors((state) => ({
        ...state,
        name: error,
      }));
      errorsArray.push(error);
    }

    //validate email
    if (validate(email, rule.email)) {
      setErrors((state) => ({ ...state, email: "" }));
    } else {
      const error = "email is invalid";
      setErrors((state) => ({ ...state, email: error }));
      errorsArray.push(error);
    }

    //validate password
    if (validate(password, rule.password)) {
      if (password !== confirmPassword) {
        const error = "password and confirm password are not the same";

        setErrors((state) => ({
          ...state,
          password: error,
        }));

        errorsArray.push(error);
      } else {
        setErrors((state) => ({ ...state, password: "" }));
      }
    } else {
      const error =
        "password should be between 6 to 20 characters and must contain at least one numeric digit, one uppercase and one lowercase letter";
      setErrors((state) => ({
        ...state,
        password: error,
      }));
      errorsArray.push(error);
    }

    if (errorsArray.length === 0) {
      setIsLoading(true);
      const response = await signup(formData);

      if (response.error) {
        setIsLoading(false);
        setErrors((state) => ({ ...state, message: response.message }));
      } else {
        setIsLoading(false);
        setRedirect(true)
      }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setErrors((state) => ({ ...state, message: "" }));
    }, 3000);
  }, [errors.message]);

  return (
    <StyledForm onSubmit={(e) => handleSubmit(e)}>
      {isSuccessful && <Alert text="Account Created SuccessFully"/>}
      <Text className="text-center">
        Welcome to Havard, Please Provide a valid Email address and a strong
        password
      </Text>
      <Text className="error mg-top-small text-center">{errors.message}</Text>

      <InputContainer
        className="mg-top-mid"
        valid={isEmptyName ? "true" : "false"}
      >
        <Input
          type="text"
          placeholder="Fullname"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setErrors((state) => ({ ...state, name: "" }));
          }}
        />
        <span className="label">Fullname</span>
        <div className="icon flex align-center">
          <BiUserCircle />
        </div>
      </InputContainer>
      <Text className="error mg-top-small">{errors.name}</Text>

      <InputContainer
        className="mg-top-mid"
        valid={isEmptyEmail ? "true" : "false"}
      >
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrors((state) => ({ ...state, email: "" }));
          }}
        />
        <span className="label">Email</span>
        <span className="icon flex align-center">
          <MdAlternateEmail />
        </span>
      </InputContainer>
      <Text className="error mg-top-small">{errors.email}</Text>

      <InputContainer
        className="mg-top-mid"
        valid={isEmptyPassword ? "true" : "false"}
      >
        <Input
          type={isOpen ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrors((state) => ({ ...state, password: "" }));
          }}
        />

        <span className="label">Password</span>

        <span
          className={`icon icon--password flex align-center justify-center cursor-pointer ${
            isOpen && "open"
          }`}
          onClick={togglePassword}
        >
          <AiOutlineEyeInvisible className="eye--closed" />
          <AiOutlineEye className="eye--open" />
        </span>
      </InputContainer>
      <Text className="error mg-top-small">{errors.password}</Text>

      <InputContainer
        className="mg-top-mid"
        valid={isEmptyConfirmPassword ? "true" : " false"}
      >
        <Input
          type={isOpenConfirm ? "text" : "password"}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />

        <span className="label">Confirm Password</span>

        <span
          className={`icon icon--password flex align-center justify-center cursor-pointer ${
            isOpenConfirm && "open"
          }`}
          onClick={toggleConfirmPassword}
        >
          <AiOutlineEyeInvisible className="eye--closed" />
          <AiOutlineEye className="eye--open" />
        </span>
      </InputContainer>
      <div>
        <Button className="mg-top-mid flex justify-center align-center">
          {isLoading ? (
            <Oval
            height={25}
            width={25}
            color="#d0def7"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          
          />
          ) : (
            "SignUp"
          )}
        </Button>
      </div>
    </StyledForm>
  );
}
