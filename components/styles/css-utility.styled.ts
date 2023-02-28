import styled from "styled-components";

export const Container = styled.div`
  width: min(100%, var(--max-width));
  margin: auto;
  padding: var(--pd-mid);
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: var(--gap);
`;

export const GridContainer = styled.div`
  display: grid;
  gap: var(--gap);
`;
