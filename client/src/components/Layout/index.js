import React from "react";
import SideBarContainer from "./SideBarContainer";
import "./style.css";
import Header from "../Header";
import styled from "styled-components";

const Main = styled.main`
  position: relative;
  top: 90px;
  margin-left: 120px;
  width: calc(100%-120px);
  padding: 18px 4rem;
  @media (max-width: 870px) {
    margin-left: 0;
    transition: 1s;
    width: 100%;
    padding: 15px;
  }
`;

export default function index({ children }) {
  return (
    <>
      <Header />
      <SideBarContainer />
      <Main id="content-wrapper">{children}</Main>
    </>
  );
}
