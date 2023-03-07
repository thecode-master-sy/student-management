"use client";

import { InputContainerProps } from "@/modules/styled.interface";
import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
  width: min(100%, var(--max-width));
  margin: auto;
  padding: var(--space-mid);
`;

export const DashboardContainer = styled(Container)`
  width: min(100%, 80em);
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: var(--gap);
`;

export const GridContainer = styled.div`
  display: grid;
  gap: var(--gap);
`;

export const Title = styled.h1`
  font-size: var(--fs-large);
  font-weight: 800;
  text-transform: capitalize;
`;

export const Text = styled.div`
  line-height: 1.5;
`;

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
