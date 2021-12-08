import React, { useEffect, useState } from "react";
import Card from "../Card";
import Container from "react-bootstrap/Container";

import Input from "../Input";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import Select from "../Select";
import Button from "../Button";
import Heading from "../SectionHeading";
import { useHistory, useParams} from "react-router";
import Radio from "../CheckBox";
import styled from "styled-components";
import { updateAppointment } from "../../api/api";

import { useFormik } from "formik";
import * as Yup from "yup";

// const validationSchema = Yup.object({
//     status: Yup.required("status is required"),
// });

export default function EditForm() {
    const history = useHistory();
    const { id } = useParams()

  

    const selectStatus = [
        { id: "pending", name: "Pending" },
        { id: "approved", name: "Approved" },
        { id: "complete", name: "Complete" },
     
    ];

    const formik = useFormik({
        initialValues: {
            statuse: "",
            _id:""
           
        },
        // validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values.status.name)
            //   alert(JSON.stringify(values));
            values._id = id
            values.status=values.status.id
            updateAppointment(values).then((res) => {
                history.push("/portal/appointment");
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
                                        name="statuse"
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
