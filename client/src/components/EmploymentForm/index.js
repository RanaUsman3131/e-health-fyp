import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Input from "../Input";
import Button from "../Button";
import { useQuery, useMutation } from "react-query";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  createContactEmployment,
  updateContactEmployment,
} from "../../api/api";
import { dateFormatForInputField } from "../../utils/helper";

const validationSchema = Yup.object({
  jobTitle: Yup.string().required("Job Title is required"),
  companyName: Yup.string().required("Company Name is required"),
  city: Yup.string().required("City is required"),
  from: Yup.string(),
  to: Yup.string(),
});

export default function Index({
  contactId,
  onSubmit,
  data = {},
  btnText = "Add Employment",
}) {
  const initialValues = {
    jobTitle: data?.jobTitle || "",
    companyName: data?.companyName || "",
    city: data?.city || "",
    from: (data?.from && dateFormatForInputField(data?.from)) || "",
    to: (data?.to && dateFormatForInputField(data?.to)) || "",
    contactId: data?.contactId || "",
    isCurrentEmployment: data?.isCurrentEmployment || false,
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      if (data) {
        updateContactEmploymentMutate(
          { ...values, contactId, _id: data._id },
          {
            onSuccess: () => {
              onSubmit();
              resetForm();
            },
          }
        );
      } else {
        createContactEmploymentMutate(
          { ...values, contactId },
          {
            onSuccess: () => {
              onSubmit();
              resetForm();
            },
          }
        );
      }
    },
  });

  const { mutate: createContactEmploymentMutate } = useMutation(
    createContactEmployment
  );

  const { mutate: updateContactEmploymentMutate } = useMutation(
    updateContactEmployment
  );

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Container>
          <Row>
            <Col md={12} sm={12} xs={12}>
              <Row>
                <Col md={12} sm={12} xs={12}>
                  <Input
                    label="Job Title"
                    required
                    name="jobTitle"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.jobTitle}
                    error={
                      formik.touched.jobTitle && formik.errors.jobTitle
                        ? formik.errors.jobTitle
                        : null
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6} sm={6} xs={12}>
                  <Input
                    label="Company"
                    required
                    name="companyName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.companyName}
                    error={
                      formik.touched.companyName && formik.errors.companyName
                        ? formik.errors.companyName
                        : null
                    }
                  />
                </Col>
                <Col md={6} sm={6} xs={12}>
                  <Input
                    label="City"
                    required
                    name="city"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.city}
                    error={
                      formik.touched.city && formik.errors.city
                        ? formik.errors.city
                        : null
                    }
                  />
                </Col>
              </Row>

              <Row>
                <Col md={6} sm={6} xs={12}>
                  <Input
                    label="From"
                    name="from"
                    type="date"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.from}
                    error={
                      formik.touched.from && formik.errors.from
                        ? formik.errors.from
                        : null
                    }
                  />
                </Col>
                <Col md={6} sm={6} xs={12}>
                  <Input
                    label="To"
                    name="to"
                    type="date"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.to}
                    error={
                      formik.touched.to && formik.errors.to
                        ? formik.errors.to
                        : null
                    }
                  />
                </Col>
              </Row>

              <Row>
                <Col md={12} sm={12} xs={12}>
                  <Input
                    label="Current Employment"
                    switchBtn={true}
                    name="isCurrentEmployment"
                    onChange={formik.handleChange}
                    checked={formik.values.isCurrentEmployment == true}
                    onBlur={formik.handleBlur}
                    value={formik.values.isCurrentEmployment}
                    error={
                      formik.touched.isCurrentEmployment &&
                      formik.errors.isCurrentEmployment
                        ? formik.errors.isCurrentEmployment
                        : null
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col md={12} sm={12} xs={12}>
                  <div className="text-center py-3">
                    <Button type="submit">{btnText}</Button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </form>
    </>
  );
}
