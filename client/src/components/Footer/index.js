import React, { Fragment } from "react";
import styled from "styled-components";

const Separator = styled.div`
  border-bottom: 1px solid #d7d7d7;
  .login-page & {
    display: none;
  }
`;
const FooterLogo = styled.div`
  text-align: center;
  margin-top: 20px;
  ${"" /* margin-bottom: 20px; */}
  color: silver;
  font-size: 13px;
  & img {
    width: 150px;
  }
  & a {
    font-size: 13px;
    color: silver;
  }
`;

const Index = () => {
  return (
    <div className="container clearfix">
      <div className="row">
        <FooterLogo className="mx-auto col-12">
          <Separator className="my-5"></Separator>
          <a
            href="https://dhwinecompliance.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <br></br>
            <img
              src="http://compliancecabinet.com/assets/img/dhwc-transp.png"
              alt="DHWC"
            />{" "}
            <br></br>
            www.dhwinecompliance.com
          </a>
        </FooterLogo>
      </div>
    </div>
  );
};

export default Index;
