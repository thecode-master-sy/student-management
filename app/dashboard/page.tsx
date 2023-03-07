import {
  Container,
  DashboardContainer,
  Title,
} from "@/components/styles/css-utility.styled";
import { redirect } from "next/navigation";

export default function Page() {
  return (
    <DashboardContainer>
      <Title>Hello world</Title>
    </DashboardContainer>
  );
}
