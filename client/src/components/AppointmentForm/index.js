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

const validationSchema = Yup.object({});

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
  const selectAppointment = [
    { id: 1, name: "Online" },
    { id: 0, name: "In-Clinic" },
  ];
  const formik = useFormik({
    initialValues: {
      disease: "",
      phone_number: "",
      department_id: "",
      doctor_id: "",
      appointment: 0,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
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
                  <Input
                    label="Phone Number"
                    required
                    name="phone_number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone_number}
                  />
                </Col>
                <Col md={4} sm={6} xs={12}>
                  <Input
                    label="Disease"
                    required
                    name="disease"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.disease}
                  />
                </Col>

                <Col md={4} sm={6} xs={12}>
                  <Select
                    label="Select Department"
                    required
                    options={department}
                    name="appointment"
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option.id}
                    onChange={(e) => {
                      formik.setFieldValue("appointment", e);
                    }}
                    onBlur={formik.handleBlur}
                    value={formik.values.appointment}
                    error={
                      formik.touched.appointment && formik.errors.appointment
                        ? formik.errors.appointment.id
                        : null
                    }
                  />
                </Col>
                <Col md={4} sm={6} xs={12}>
                  <Select
                    label="Select Doctor"
                    required
                    options={doc}
                    name="doctor_id"
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option._id}
                    onChange={(e) => {
                      formik.setFieldValue("doctor_id", e);
                    }}
                    onBlur={formik.handleBlur}
                    value={formik.values.doctor_id}
                    error={
                      formik.touched.doctor_id && formik.errors.doctor_id
                        ? formik.errors.doctor_id._id
                        : null
                    }
                  />
                </Col>
                <Col md={4} sm={6} xs={12}>
                  <Select
                    label="Select Appointment"
                    required
                    options={selectAppointment}
                    name="doctor_id"
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option.id}
                    onChange={(e) => {
                      formik.setFieldValue("appointment", e);
                    }}
                    onBlur={formik.handleBlur}
                    value={formik.values.appointment}
                    error={
                      formik.touched.appointment && formik.errors.appointment
                        ? formik.errors.appointment.id
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
