import React from "react";
import styled from "styled-components";
import Header from "@components/Header";

type LayoutProps = { children: React.ReactNode; };

function Layout({ children }: LayoutProps): JSX.Element {
  const Container = styled.main`
    display: flex;
    flex-flow: column;
    align-items: center;
    padding-top: 50px;
    margin-top: 60px;
  `
  return(
    <>
      <Header />
      <Container>
        { children }
      </Container>
    </>
  );
}

export default Layout;