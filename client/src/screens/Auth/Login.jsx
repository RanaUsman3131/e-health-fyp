import { Fragment } from "react";
import styled from "styled-components";

import { useHistory } from "react-router";
import "./loginStyles.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../components/Input";
import { login } from "../../api/api";

const Main = styled.main`
  margin-left: 0 !important;
  margin-right: 0 !important;
  margin: 110px 60px 40px 410px;
  transition: margin-left 0.3s;
  @media (max-width: 1199px) {
    margin: 110px 40px 20px 340px;
  }
  @media (min-width: 1400px) {
    & .container {
      max-width: 1400px !important;
    }
  }
  @media (max-width: 1439px) {
    margin: 130px 50px 30px 380px;
  }
`;
const AuthCard = styled.div`
  display: flex;
  flex-direction: row;
  box-shadow: 0 1px 15px rgb(0 0 0 / 4%), 0 1px 6px rgb(0 0 0 / 4%);
  @media (max-width: 575px) {
    flex-direction: column;
    & p.h2 {
      font-size: 1.4rem;
    }
  }
  @media (max-width: 767px) {
    & p.h2 {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;
const ImageSide = styled.div`
  width: 40%;
  position: relative;
  background-image: linear-gradient(75deg, #ad1cc7, #8d1cc7) !important;
  padding: 80px 40px;

  @media (max-width: 575px) {
    padding: 35px 30px !important;
  }

  @media (max-width: 991px) {
    width: 100%;
    padding: 60px;
  }
`;
const FormSide = styled.div`
  width: 60%;
  padding: 80px;
  @media (max-width: 575px) {
    padding: 35px 30px !important;
  }

  @media (max-width: 991px) {
    width: 100%;
    padding: 60px;
  }
`;
const LogoSingle = styled.span`
  width: 100%;
  height: 100px;
  text-align: center;
  // background: url(http://compliancecabinet.com/assets/img/Logo_Transparent.png)
  //   no-repeat;
  background-position: 50%;
  display: block;
  margin: 0 auto;
  color: black;
  background-size: contain;
  @media (max-width: 575px) {
    margin-bottom: 20px;
  }
`;
const CardTitle = styled.div`
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  font-weight: 400;
  @media (max-width: 767px) {
    margin-bottom: 1.25rem;
  }
`;
const FloatLabel = styled.label`
  display: block;
  position: relative;

  & > span:last-of-type,
  & label {
    position: absolute;
    cursor: text;
    font-size: 90%;
    opacity: 1;
    top: -0.4em;
    left: 0.75rem;
    z-index: 3;
    line-height: 1;
    padding: 0 1px;
  }
  & > span,
  & label {
    color: rgba(33, 33, 33, 0.7);
  }
  & > span:after,
  & label:after {
    content: " ";
    display: block;
    position: absolute;
    height: 5px;
    top: 3px;
    left: -0.2em;
    right: -0.2em;
    z-index: -1;
  }
  & > span:after,
  & label:after {
    background: #fff !important;
  }

  & .form-control::-webkit-input-placeholder {
    opacity: 1;
  }

  & .form-control::-moz-placeholder {
    opacity: 1;
  }

  & .form-control:-ms-input-placeholder {
    opacity: 1;
  }

  & .form-control::placeholder {
    opacity: 1;
  }

  & .form-control:placeholder-shown:not(:focus)::-webkit-input-placeholder {
    opacity: 0;
  }

  & .form-control:placeholder-shown:not(:focus)::-moz-placeholder {
    opacity: 0;
  }

  & .form-control:placeholder-shown:not(:focus):-ms-input-placeholder {
    opacity: 0;
  }

  & .form-control:placeholder-shown:not(:focus)::placeholder {
    opacity: 0;
  }
`;

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Email Must be Valid email")
    .required("Email Is Reqiured"),
  password: Yup.string().required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};

export default function Login() {
  const history = useHistory();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("🚀 ~ file: Login.jsx ~ line 185 ~ Login ~ values", values);
      login(values).then((res) => {
        history.push("/portal/");
      });
    },
  });

  return (
    <Fragment>
      <div className="fixed-background"></div>
      <Main className="login-page">
        <div className="container">
          <div className="h-100 row">
            <div className="mx-auto my-auto col-12 col-md-10">
              <AuthCard className="card">
                <ImageSide>
                  <p className="text-white h2">Be Strong And Healthy</p>
                  <p className="text-white mb-0">
                    Please use your credentials to login.<br></br>
                  </p>
                </ImageSide>
                <FormSide>
                  <a aria-current="page" className="text-white active" href="/">
                    <LogoSingle>
                      <h1>E-Health Care</h1>
                    </LogoSingle>
                  </a>
                  <CardTitle className="mb-4">Login</CardTitle>
                  <form onSubmit={formik.handleSubmit}>
                    <FloatLabel className="form-group mb-4">
                      <Input
                        label="Email"
                        required
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        error={
                          formik.touched.email && formik.errors.email
                            ? formik.errors.email
                            : null
                        }
                      />
                    </FloatLabel>
                    <FloatLabel className="form-group mb-4">
                      <Input
                        label="Password"
                        required
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        error={
                          formik.touched.password && formik.errors.password
                            ? formik.errors.password
                            : null
                        }
                      />
                    </FloatLabel>
                    <div className="d-flex justify-content-between align-items-center">
                      <a href="/forgot-password">Forgot password?</a>

                      <button
                        type="submit"
                        className="btn-shadow btn btn-primary btn-lg"
                      >
                        LOGIN
                      </button>
                    </div>
                    <div className="d-flex justify-content-center mt-3  align-items-center">
                      <a href="/register" className="btn-signUp">
                        Not Have an account? Sign Up
                      </a>
                    </div>
                    <br></br>
                  </form>
                </FormSide>
              </AuthCard>
            </div>
          </div>
        </div>
      </Main>
    </Fragment>
  );
}
