import React from "react";
import styled from "styled-components";

const Title = styled.span`
  font-size: 1.1rem;
`;
const Icon = styled.span`
  font-size: 2rem;
  color: #145388;
  padding-right: 8px;
`;

const TitleWrapper = styled.div`
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  font-weight: 300;
`;
export default function Index({ title, icon }) {
  return (
    <>
      <TitleWrapper>
        <Icon>{icon}</Icon>
        <Title>{title}</Title>
      </TitleWrapper>
    </>
  );
}
