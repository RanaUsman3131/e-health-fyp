import React, { useEffect } from 'react'
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import Select from "../../../components/Select";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getDepartment } from "../../../api/api";
import Container from "react-bootstrap/Container";
import Title from "../../../components/PageTitle";
import Card from "../../../components/Card";
import styled from "styled-components";
export default function Setting() {
const Button = styled.button`
  background-color: #145388;
  border-color: #145388;
  font-size: 14px;
  color: white;
  &:hover {
    color: white;
  }
`;
    const [department, setDepartment] = React.useState([]);

    const validationSchema = Yup.object({});
    const formik = useFormik({
        initialValues: {
            department: ""
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log("values", values.department._id)
            // createContactMutate(values);
        },
    });
    const Department = () => {
        getDepartment().then((res) => {
            setDepartment(res.data.data);
            //   Doctor(formik.setFieldValue("department_id"));
        });
    };
    useEffect(() => {
        Department();
    }, []);
    return (
        <div>
            <Container>
                <Title title="Settings" />
                <Card className="mt-0">
                <form onSubmit={formik.handleSubmit}>
                    <Row>
                        <Col md={6} sm={12} xs={12}>
                            <Select
                                label="Department"
                                options={department}
                                name="department"
                                onChange={(e) => {
                                    formik.setFieldValue("department", e);
                                }}
                                value={formik.values.department}
                                error={
                                    formik.touched.department && formik.errors.department
                                        ? formik.errors.department
                                        : null
                                }
                                getOptionLabel={(option) => option.name}
                                getOptionValue={(option) => option._id}
                            />
                        </Col>
                        <Col md={6} sm={12} xs={12}>
                          
                                <Button className="btn text-uppercase px-5 mt-3 py-2 rounded-pill">
                                  Submit
                                </Button>
                        </Col>
                    </Row>
                    </form>
                </Card>
            </Container>

        </div>
    )
}
