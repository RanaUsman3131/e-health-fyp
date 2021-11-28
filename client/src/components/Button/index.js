import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#145388"};
  border-color: ${(props) =>
    props.borderColor ? props.borderColor : "#145388"};
  font-size: 14px;
  color: ${(props) => (props.color ? props.color : "white")};
  &:hover {
    ${(props) => (props.hoverEffect ? props.hoverEffect : "color: white;")}
  }
`;

export default function Index({
  className,
  backgroundColor,
  color,
  children,
  hoverEffect,
  ...props
}) {
  return (
    <>
      <Button
        backgroundColor={backgroundColor}
        color={color}
        hoverEffect={hoverEffect}
        className={`btn text-uppercase px-5 py-2 rounded-pill ${className}`}
        {...props}
      >
        {children}
      </Button>
    </>
  );
}
