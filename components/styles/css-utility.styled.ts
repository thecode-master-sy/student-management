"use client";

import { FlexContainerInterface, GridContainerInterface, InputContainerProps, TitleInterface } from "@/modules/styled.interface";
import styled from "styled-components";
import { css } from "styled-components";
import {motion} from "framer-motion";

export const Container = styled.div`
  width: min(100%, var(--max-width));
  margin: auto;
  padding: var(--space-mid);
`;

export const DashboardContainer = styled(Container)`
  width: min(100%, 80em);
`;

export const FlexContainer = styled.div<FlexContainerInterface>`
  --bd-color: ${({borderColor}) => borderColor ? borderColor : "black"};
  display: flex;
  gap: ${({gap}) => gap ? gap : "var(--gap)"};
`;

export const GridContainer = styled.div<GridContainerInterface>`
  display: grid;
  gap: var(--gap);

  ${({columns}) => columns && css`
    grid-template-columns: ${columns};
  `}

  @media screen and (min-width: 60em){
    grid-template-columns: 2fr 1fr;
  }
  
  &.responsive {
    grid-template-columns: repeat(auto-fit, minmax(${({columnSize}) => columnSize}, 1fr));
  }
`;

export const Title = styled.h1<TitleInterface>`
  font-size: var(--fs-large);
  font-weight: ${({weight}) => weight ? weight : 800};
  text-transform: capitalize;
  color: ${({color}) => color ? color : "black"};
`;

export const SubTitle = styled.h3<TitleInterface>`
  text-transform: capitalize;
  font-size: clamp(1.15rem, 3vw, 1.3rem)
  font-weight: ${({weight}) => weight ? weight : 700};
  color: ${({color}) => color ? color : "black"};
`

export const Text = styled.div`
  line-height: 1.5;
`;

export const SmallText = styled(Text)`
  font-size: var(--fs-small);
`

export const InputContainer = styled.div<InputContainerProps>`
  background-color: rgb(var(--clr-accent-gray));
  padding: var(--space-small);
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  border: 1px solid rgb(var(--clr-accent-gray));
  transition: border-color ease 0.5s;
  position: relative;

  .icon {
    transition: color ease 0.5s;
  }

  .icon--password .eye--open {
    transition: all ease 0.5s;
  }

  .icon--password .eye--closed {
    display: none;
    transition: all ease 0.5s;
  }

  .icon--password.open .eye--closed {
    display: block;
  }

  .icon--password.open .eye--open {
    display: none;
  }

  .label {
    position: absolute;
    left: 0;
    padding: 2px var(--space-small);
    transition: all ease 0.5s;
    border-radius: 0.2em;
    pointer-events: none;

    ${({ valid }) =>
      valid === "true" &&
      css`
        font-size: 0.8rem;
        transform: translate(10px, -24px);
        background-color: rgb(var(--clr-primary-blue));
        color: white;

        letter-spacing: 2px;
      `}
  }

  input {
    padding: 0.5em;
    transition: all ease 0.5s;
  }

  input::placeholder {
    opacity: 0;
  }

  &:focus-within {
    border-color: rgb(var(--clr-primary-blue));

    .icon {
      color: rgb(var(--clr-primary-blue));
    }

    ${({ valid }) =>
      valid !== "true" &&
      css`
        input::placeholder {
          opacity: 1;
        }

        input + .label {
          font-size: 0.8rem;
          transform: translate(10px, -24px);
          background-color: rgb(var(--clr-primary-blue));
          color: white;

          letter-spacing: 2px;
        }
      `}
  }
`;

export const StyledForm = styled.form`
  max-width: 350px;
  margin: auto;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  width: 100%;
  height: 100%;
`;

export const Button = styled.button`
  background-color: rgb(var(--clr-primary-blue));
  padding: 1em var(--space-btn);
  border-radius: var(--border-radius);
  font-size: var(--fs-btn);
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  width: 100%;
`;

export const StyledNavBar = styled.nav` 
  position: relative;

  .underline {
    border-bottom: 2px solid rgb(var(--clr-primary-blue));
  }

  a.active {
    color: rgb(var(--clr-primary-blue));
    transition: all ease 0.5s;
  }

  ul {
    --gap: 2em;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: var(--gap);

    .cancel {
      font-size: 2em;
      margin-left: auto;
      cursor: pointer;
    }

    a {
      color: inherit;
    }
  }

  .navigation--mobile {
    position: fixed;
    left: 0;
    top: 0;
    right:0;
    bottom: 0;
    background-color: rgb(var(--clr-primary-gray));
    padding: var(--space-mid);
    overflow-y: scroll;
    transform: translateX(-100%);
    opacity:0;
  }

  .navigation--desktop{
    display: none;
  }

  .hamburger--container {
    margin-left: auto;
  }

  .hamburger {
    font-size: 1.8em;
    cursor: pointer;
  }

  @media screen and (min-width: 55em) {
    ul {
      flex-direction: row;
      position: relative;
      
      .cancel {
        display: none;
      }

      .profile {
        display: none;
      }
    }

    .hamburger {
      display: none;
    }

    .navigation--desktop{
      display: flex;
    }

    .navigation--mobile {
      display: none;
    }
  }
`

export const Card = styled.div`
  min-width: 20em;
  background-color: rgba(var(--clr-primary-blue), 0.1);
  padding: var(--space-mid);
  border-radius: var(--border-radius);
`

export const StyledSlider = styled(motion.div)`
  width: 100%;
  overflow: hidden;
  padding-top: var(--space-small);
  padding-bottom: var(--space-small);
`
export const InnerSlider = styled(motion.div)`
  display: flex;
  gap: var(--gap);
  min-width: 100%;
`

export const CalendarTag = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-60%);
  background-color: rgb(var(--clr-primary-blue));
  padding: 0.5em 0.8em;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 0.6em;
  border-radius: 1em;
  color: white;
  z-index: 3;

`