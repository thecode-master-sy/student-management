"use client";

import styled from "styled-components";

export const Container = styled.div`
  width: min(100%, var(--max-width));
  margin: auto;
  padding: var(--space-mid);
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

export const InputContainer = styled.div`
  background-color: rgb(var(--clr-accent-gray));
  padding: var(--space-small);
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  transition: all ease 0.5s;

  &:focus-withn {
    border: 1px solid rgb(var(--clr-primary-blue));
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
