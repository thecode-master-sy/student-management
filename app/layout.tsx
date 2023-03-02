import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyle from "@/components/styles/global.styled";

export const metadata = {
  title: "Havard | Login",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          {children}
          <GlobalStyle />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
