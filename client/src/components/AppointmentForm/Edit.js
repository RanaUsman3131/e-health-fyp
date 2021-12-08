import React, { useEffect, useState } from "react";
import Card from "../Card";
import Container from "react-bootstrap/Container";

import Input from "../Input";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import Select from "../Select";
import Button from "../Button";
import Heading from "../SectionHeading";
import { useHistory } from "react-router";
import Radio from "../CheckBox";
import styled from "styled-components";
import { getDoc, getDepartment, createApp } from "../../api/api";

import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({

    department_id: Yup.object().shape({
        _id: Yup.string().required("Department is required"),
    }),
  
});

export default function Index() {
    const history = useHistory();
    const [department, setDepartment] = useState([]);

    const [doc, setDoc] = useState([]);
    const Doctor = () => {
        getDoc().then((res) => {
            setDoc(res.data.data);
        });
    };
    const Department = () => {
        getDepartment().then((res) => {
            setDepartment(res.data.data);
            //   Doctor(formik.setFieldValue("department_id"));
        });
    };

    useEffect(() => {
        Doctor();
        Department();
    }, []);

    const selectStatus = [
        { id: "pending", name: "Pending" },
        { id: "approved", name: "Approved" },
        { id: "complete", name: "Complete" },
     
    ];

    const formik = useFormik({
        initialValues: {
            status: "",
           
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            //   alert(JSON.stringify(values));
            createApp(values).then((res) => {
                history.push("/list");
            });
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Card className="mt-0">
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <Row>
                                <Col md={4} sm={6} xs={12}>
                                    <Select
                                        label="Change Status"
                                        required
                                        options={selectStatus}
                                        name="status"
                                        getOptionLabel={(option) => option.name}
                                        getOptionValue={(option) => option.id}
                                        onChange={(e) => {
                                            formik.setFieldValue("status", e);
                                        }}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.department}
                                        error={
                                            formik.touched.status &&
                                                formik.errors.status
                                                ? formik.errors.status
                                                : null
                                        }
                                    />
                                </Col>
                            
                            </Row>

                            <Row>
                                <Col md={12} sm={12} xs={12}>
                                    <div className="text-center py-3">
                                        <Button type="submit">Submit</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Card>
        </form>
    );
}
