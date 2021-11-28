import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.h1`
  font-size: 1.65rem;
  padding-bottom: 0;
  font-family: inherit;
  font-weight: 400;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  background-color: #145388;
  border-color: #145388;
  font-size: 14px;
  color: white;
  &:hover {
    color: white;
  }
`;

const Icon = styled.i`
  color: #212121 !important;
  font-size: 12px;
  &:hover {
    cursor: pointer;
  }
`;

export default function Index({
  title,
  btnText,
  link,
  backlink,
  backPageText,
}) {
  return (
    <>
      <Row>
        <Col>
          {backPageText && (
            <Link to={backlink}>
              <span className="py-2 mb-2 cursor-pointer text-dark">
                <span
                  className="border border-dark rounded-circle px-1 mx-1"
                  style={{ paddingBottom: "2px" }}
                >
                  <Icon className="fas fa-arrow-left"></Icon>
                </span>
                <span>{backPageText}</span>
              </span>
            </Link>
          )}

          <Wrapper className="my-2 flex-wrap">
            <Title>
              <span>{title}</span>
            </Title>

            {btnText && (
              <Link to={link}>
                <Button className="btn text-uppercase px-5 py-2 rounded-pill">
                  {btnText}
                </Button>
              </Link>
            )}
          </Wrapper>
        </Col>
      </Row>
    </>
  );
}
