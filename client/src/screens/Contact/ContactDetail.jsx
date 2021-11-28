import React from "react";
import ContactDetailRoutes from "../../routes/ContactDetailRoutes";
import Container from "react-bootstrap/Container";
import Title from "../../components/PageTitle";

import styled from "styled-components";
import { NavLink, useRouteMatch } from "react-router-dom";

const NavContainer = styled.nav`
  width: 100%;
  border-bottom: 1px solid #d7d7d7;
`;

const NavUL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  list-style: none;
`;

const NavList = styled.li`
  margin-right: 1.5rem;
  letter-spacing: 0.5px;
  color: #8f8f8f;
  margin-bottom: 5px;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  color: #8f8f8f;
  padding: 0.5rem 0rem;
  font-size: 1.1rem;
  &:hover {
    color: #8f8f8f;
  }
`;

export default function ContactDetail() {
  let { url } = useRouteMatch();
  return (
    <>
      <Container>
        <Title
          backlink="/contacts"
          backPageText="Contacts"
          title="Drea Helfer"
        />

        <NavContainer>
          <NavUL>
            <NavList>
              <Link activeClassName="active-child" to={`${url}/detail`}>
                Detail
              </Link>
            </NavList>
            <NavList>
              <Link activeClassName="active-child" to={`${url}/addresses`}>
                Addresses
              </Link>
            </NavList>
            <NavList>
              <Link activeClassName="active-child" to={`${url}/employments`}>
                Employment History
              </Link>
            </NavList>
          </NavUL>
        </NavContainer>

        <ContactDetailRoutes />
      </Container>
    </>
  );
}
