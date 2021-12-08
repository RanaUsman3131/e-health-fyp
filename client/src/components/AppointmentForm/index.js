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
  disease: Yup.string().required("Disease is required"),
  date: Yup.string().required("Date is required"),
  time: Yup.string().required("time is required"),

  phone_number: Yup.string().required("Phone number is required"),
  department_id: Yup.object().shape({
    _id: Yup.string().required("Department is required"),
  }),
  doctor_id: Yup.object().shape({
    _id: Yup.string().required("Doctor is required"),
  }),
  appointment: Yup.object().shape({
    id: Yup.string().required("Appointment type is required"),
  }),
});

export default function Index() {
  const history = useHistory();
  const [department, setDepartment] = useState([]);

  const [doc, setDoc] = useState([]);

  const getDoctor = (_id) => {
    getDoc(_id).then((res) => {
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
    Department();
  }, []);

  const selectAppointment = [
    { id: 1, name: "Online" },
    { id: 0, name: "In-Clinic" },
  ];

  const formik = useFormik({
    initialValues: {
      disease: "",
      time: "",
      date: "",
      phone_number: "",
      department_id: "",
      doctor_id: "",
      appointment: "",
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
                  <Input
                    label="Phone Number"
                    required
                    name="phone_number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone_number}
                    error={
                      formik.touched.phone_number && formik.errors.phone_number
                        ? formik.errors.phone_number
                        : null
                    }
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
                    error={
                      formik.touched.disease && formik.errors.disease
                        ? formik.errors.disease
                        : null
                    }
                  />
                </Col>

                <Col md={4} sm={6} xs={12}>
                  <Select
                    label="Select Department"
                    required
                    options={department}
                    name="department_id"
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option._id}
                    onChange={(e) => {
                      formik.setFieldValue("department_id", e);
                      getDoctor(e._id);
                    }}
                    onBlur={formik.handleBlur}
                    value={formik.values.department}
                    error={
                      formik.touched.department_id &&
                      formik.errors.department_id
                        ? formik.errors.department_id._id
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
                  <Input
                    label="Date"
                    required
                    name="date"
                    type="date"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.date}
                    error={
                      formik.touched.date && formik.errors.date
                        ? formik.errors.date
                        : null
                    }
                  />
                </Col>

                <Col md={4} sm={6} xs={12}>
                  <Input
                    label="Time"
                    required
                    name="time"
                    type="time"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.time}
                    error={
                      formik.touched.time && formik.errors.time
                        ? formik.errors.time
                        : null
                    }
                  />
                </Col>

                <Col md={4} sm={6} xs={12}>
                  <Select
                    label="Select Appointment"
                    required
                    options={selectAppointment}
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
