import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Icon = styled.i`
  font-size: 2rem;
  @media (max-width: 870px) {
    font-size: 1.6rem;
  }
`;
const Li = styled.li`
  padding: 15px 0;
  margin: 3px 0;
  position: relative;
  border-bottom: 1px solid #f3f3f3;
  &:hover div {
    color: #145388 !important;
  }
  @media (max-width: 870px) {
    padding: 13px 0;
    margin: 1px 0;
  }
`;
const Link = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #212121;
  @media (max-width: 870px) {
    padding: 0px 5px;
  }
`;
const SubTitle = styled.span`
  padding: 2px;
  font-size: 13px;
`;
export default function NavItem({ item }) {
  return (
    <Li>
      <NavLink activeClassName="active-link" to={item.link}>
        <Link>
          <Icon className={item.iconClass}></Icon>
          <SubTitle>{item.name}</SubTitle>
        </Link>
      </NavLink>
    </Li>
  );
}
