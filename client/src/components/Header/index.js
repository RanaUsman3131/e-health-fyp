import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import Logo from "../../assets/images/Logo.png";
import Dropdown from "react-bootstrap/Dropdown";
import DefaultIcon from "../../assets/images/default.png";
import * as $ from "jquery";

const NavBar = styled.div`
  display: flex;
  padding: 0px;
  justify-content: space-between;
  align-items: center;
`;

const BrandLogo = styled.div`
  display: block;
  width: 16%;
  @media only screen and (max-width: 1226px) and (min-width: 1078px) {
    width: 18%;
  }
  @media only screen and (max-width: 1176px) and (min-width: 1090px) {
    width: 18%;
  }
  @media only screen and (max-width: 1089px) and (min-width: 1000px) {
    width: 20%;
  }
  @media only screen and (max-width: 999px) and (min-width: 910px) {
    width: 22%;
  }
  @media only screen and (max-width: 909px) and (min-width: 828px) {
    width: 24%;
  }
  @media only screen and (max-width: 827px) and (min-width: 700px) {
    width: 26%;
  }
  @media only screen and (max-width: 696px) and (min-width: 642px) {
    width: 30%;
  }
  @media only screen and (max-width: 641px) and (min-width: 578px) {
    width: 34%;
  }
  @media only screen and (max-width: 577px) and (min-width: 396px) {
    width: 38%;
  }
  @media only screen and (max-width: 395px) and (min-width: 300px) {
    width: 54%;
  }
  @media only screen and (max-width: 300px) and (min-width: 200px) {
    width: 100%;
  }
`;

const DefaultIconContainer = styled.div`
  display: block;
  width: 17%;
`;
const DefaultIconImg = styled.img`
  width: 40px;
`;

const UserName = styled.span`
  padding: 0 5px;
  font-size: 0.8rem;
  margin-right: 0.25rem;
`;

const NavBarwrapper = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const Header = styled.header`
  background: white;
  position: fixed;
  display: flex;
  align-items: center;
  height: 90px;
  width: 100%;
  z-index: 111;
  box-shadow: 0 1px 15px rgb(0 0 0 / 4%), 0 1px 6px rgb(0 0 0 / 4%);
`;

const ProfileIcon = styled.div``;

const MenuIcon = styled.span`
  &:hover {
    cursor: pointer;
  }
`;

const DropDownLink = styled.span`
  padding: 1.2rem 1.5rem;
  color: #212121;

  font-weight: 400;
  font-size: 13px;
`;
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
export default function Index() {
  const sideBarToggle = () => {
    if ($("#aside-bar").hasClass("side-show")) {
      $("#aside-bar").removeClass("side-show");
      $("#aside-bar").addClass("side-hide");
      $("#content-wrapper").addClass("content-wrapper");
      $("#content-wrapper").removeClass("content-wrapper-calc");
    } else {
      $("#aside-bar").removeClass("side-hide");
      $("#aside-bar").addClass("side-show");
      $("#content-wrapper").addClass("content-wrapper-calc");
      $("#content-wrapper").removeClass("content-wrapper");
    }
  };
  function handleResize() {
    if (parseInt(getWindowDimensions().width) > 870) {
      $("#aside-bar").addClass("side-show");
      $("#content-wrapper").removeClass("content-wrapper");
      $("#aside-bar").removeClass("side-hide");
    } else {
      $("#aside-bar").removeClass("side-show");
      $("#aside-bar").addClass("side-hide");
      $("#content-wrapper").addClass("content-wrapper");
    }
  }
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Header>
      <Container fluid>
        <NavBarwrapper>
          <NavBar>
            <MenuIcon onClick={sideBarToggle}>
              <i className="fas fa-bars"></i>
            </MenuIcon>
            <BrandLogo>
              <img
                style={{ width: "100%", height: "auto" }}
                src={Logo}
                alt={"logo "}
              />
            </BrandLogo>

            <ProfileIcon>
              <Dropdown>
                <Dropdown.Toggle as={"span"} id="dropdown-basic">
                  <DefaultIconContainer>
                    <UserName> Drea</UserName>

                    <DefaultIconImg src={DefaultIcon} alt="img" />
                  </DefaultIconContainer>
                </Dropdown.Toggle>

                <Dropdown.Menu align={"start"}>
                  <Dropdown.Item className={"py-2"} href="#/action-2">
                    <DropDownLink>Account</DropDownLink>
                  </Dropdown.Item>
                  <Dropdown.Item className={"py-2"} href="#/action-3">
                    <DropDownLink>What's New</DropDownLink>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item className={"py-2"}>
                    <DropDownLink>
                      <Link to="/auth/login">Logout</Link>
                    </DropDownLink>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ProfileIcon>
          </NavBar>
        </NavBarwrapper>
      </Container>
    </Header>
  );
}
