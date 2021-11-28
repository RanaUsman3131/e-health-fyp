import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Input from "../Input";
import Button from "../Button";
import Select from "../Select";
import { useQuery, useMutation } from "react-query";
import { useFormik } from "formik";
import * as Yup from "yup";
import { dateFormatForInputField } from "../../utils/helper";

import {
  countries,
  createContactAddress,
  statesByCountryId,
  updateContactAddress,
} from "../../api/api";

const validationSchema = Yup.object({
  label: Yup.string().required("Label is required"),
  from: Yup.string().required("From is required"),
  to: Yup.string().required("To is required"),
  address: Yup.string().required("Address is Required"),
  country: Yup.object().shape({
    _id: Yup.string().required("Country is required"),
  }),
  city: Yup.string(),
  zipCode: Yup.string(),
});

export default function Index({
  contactId,
  onSubmit,
  data = {},
  btnText = "Add Address",
}) {
  const initialValues = {
    label: data?.label || "",
    from: (data?.from && dateFormatForInputField(data?.from)) || "",
    to: (data?.to && dateFormatForInputField(data?.to)) || "",
    address: data?.address || "",
    city: data?.city || "",
    isDefault: data?.isDefault || false,
    zipCode: data?.zipCode || "",
    country: data?.country || {},
    state: data?.state || {},
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      if (data) {
        updateContactAddressMutate(
          { ...values, contactId, _id: data._id },
          {
            onSuccess: () => {
              onSubmit();
              resetForm();
            },
          }
        );
      } else {
        createContactAddressMutate(
          { ...values, contactId },
          {
            onSuccess: () => {
              onSubmit();
              resetForm();
            },
          }
        );
      }
      {
      }
    },
  });
  const [countryId, setCountryId] = React.useState("");
  const { mutate: createContactAddressMutate } =
    useMutation(createContactAddress);
  const { mutate: updateContactAddressMutate } =
    useMutation(updateContactAddress);
  const countriesData = useQuery("countriesData", countries);
  const stateData = useQuery(
    ["stateData", { countryId: countryId }],
    statesByCountryId,
    {
      enabled: !!countryId,
    }
  );
  const getStates = (id) => {
    if (id) {
      setCountryId(() => id);
    }
  };
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Container>
          <Row>
            <Col md={12} sm={12} xs={12}>
              <Row>
                <Col md={4} sm={6} xs={12}>
                  <Input
                    label="Label"
                    required
                    name="label"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.label}
                    error={
                      formik.touched.label && formik.errors.label
                        ? formik.errors.label
                        : null
                    }
                  />
                </Col>
                <Col md={4} sm={6} xs={12}>
                  <Input
                    label="From"
                    required
                    type="date"
                    name="from"
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
                <Col md={4} sm={6} xs={12}>
                  <Input
                    label="To"
                    required
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
                    label="Address"
                    required
                    name="address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address}
                    error={
                      formik.touched.address && formik.errors.address
                        ? formik.errors.address
                        : null
                    }
                  />
                </Col>
              </Row>

              <Row>
                <Col md={6} sm={6} xs={12}>
                  <Select
                    label="Country"
                    required
                    options={countriesData.data}
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option._id}
                    name="country"
                    onChange={(e) => {
                      getStates(e._id);
                      formik.setFieldValue("country", e);
                    }}
                    onBlur={formik.handleBlur}
                    value={formik.values.country}
                    error={
                      formik.touched.country && formik.errors.country
                        ? formik.errors.country._id
                        : null
                    }
                  />
                </Col>
                <Col md={6} sm={6} xs={12}>
                  <Select
                    label="State"
                    options={stateData.data}
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option._id}
                    name="state"
                    onChange={(value) => {
                      formik.setFieldValue("state", value);
                    }}
                    onBlur={formik.handleBlur}
                    value={formik.values.state}
                    error={
                      formik.touched.state && formik.errors.state
                        ? formik.errors.state
                        : null
                    }
                  />
                </Col>
              </Row>

              <Row>
                <Col md={6} sm={6} xs={12}>
                  <Input
                    label="City"
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
                <Col md={6} sm={6} xs={12}>
                  <Input
                    label="Zip Code"
                    name="zipCode"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.zipCode}
                    error={
                      formik.touched.zipCode && formik.errors.zipCode
                        ? formik.errors.zipCode
                        : null
                    }
                  />
                </Col>
              </Row>

              <Row>
                <Col md={12} sm={12} xs={12}>
                  <Input
                    switchBtn={true}
                    label="Default Address"
                    name="isDefault"
                    checked={formik.values.isDefault == true}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.isDefault}
                    error={
                      formik.touched.isDefault && formik.errors.isDefault
                        ? formik.errors.isDefault
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
