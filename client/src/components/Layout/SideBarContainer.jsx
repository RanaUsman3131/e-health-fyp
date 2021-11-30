import React from "react";
import styled from "styled-components";
import NavItem from "./NavItem";

const SidebarWrapper = styled.div`
  display: block;
  width: 120px;
  position: fixed;
  box-shadow: 13px 1px 20px 0px #e2e2e2;
  left: 0;
  z-index: 100;
  height: calc(100% - 90px);
  top: 90px;
  background: white;
`;
const SidebarList = styled.div`
  display: block;
  width: 100%;
`;

const Ul = styled.ul`
  maring: 0;
  padding: 0;
`;

const list = [
  {
    id: 1,
    name: "Dashboard",
    link: "/portal/dashboard",
    iconClass: "fas fa-home",
  },
  {
    id: 1,
    name: "Appointments",
    link: "/portal/appointment",
    iconClass: "fas fa-user-friends",
  },
  {
    id: 1,
    name: "Patients",
    link: "/portal/patient",
    iconClass: "far fa-address-book",
  },
  {
    id: 1,
    name: "Setting",
    link: "/setting",
  iconClass: "fas fa-cogs",
  },
];

export default function SideBarContainer() {
  return (
    <>
      <SidebarWrapper id="aside-bar" className="side-show">
        <SidebarList>
          <Ul>
            {list.map((item, index) => (
              <NavItem item={item} key={index}></NavItem>
            ))}
          </Ul>
        </SidebarList>
      </SidebarWrapper>
    </>
  );
}
