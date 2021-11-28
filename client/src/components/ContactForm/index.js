import React, { useEffect } from "react";
import Card from "../Card";
import Container from "react-bootstrap/Container";

import Input from "../Input";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import Select from "../Select";
import Button from "../Button";
import Heading from "../SectionHeading";
import QlEditor from "../QLEditor";
import Radio from "../CheckBox";
import styled from "styled-components";
import {
  getContactTypes,
  statesByCountryId,
  countries,
  getSal,
  createContact,
  maritalStatus,
  getClients,
} from "../../api/api";
import { useQuery, useMutation } from "react-query";
import { useFormik } from "formik";
import * as Yup from "yup";

const Text = styled.p`
  font-size: 0.9rem;
  margin: 0;
  font-weight: 300;
`;

const ClientSchema = Yup.object().when("contactType", {
  is: (value) => value.field === "client",
  then: Yup.object().shape({
    _id: Yup.string().required("Client is Required"),
  }),
  otherwise: Yup.object().shape({
    _id: Yup.string().notRequired(),
  }),
});
const validationSchema = Yup.object({
  contactType: Yup.object().shape({
    _id: Yup.string().required("Please Select Contact type "),
  }),
  client: ClientSchema,

  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),

  ttbPQ: Yup.string().when("contactType", {
    is: (value) => value.field == "client",
    then: Yup.string().required("ttbPQ required"),
    otherwise: Yup.string().notRequired(),
  }),
  email: Yup.string().email().required("Email is required"),
  workPhone: Yup.string().required("work phone is required"),
});
const contactTypeOption = [
  {
    value: 1,
    label: "Gernal",
  },
  {
    value: 2,
    label: "Client",
  },
  {
    value: 3,
    label: "Agency",
  },
];
export default function Index({ data }) {
  const [contactType, setContactType] = React.useState("");
  const [countryId, setCountryId] = React.useState("");
  const contactTypeData = useQuery("getContactTypes", getContactTypes);
  const countriesData = useQuery("countriesData", countries);
  const clientData = useQuery("getClients", getClients);
  const maritalStatusData = useQuery("maritalStatus", maritalStatus);
  const { mutate: createContactMutate } = useMutation(createContact);
  const salData = useQuery("getSal", getSal);
  const stateData = useQuery(
    ["stateData", { countryId: countryId }],
    statesByCountryId,
    {
      enabled: !!countryId,
    }
  );
  useEffect(() => {
    if (data) {
      setContactType(data.contactType.field);
    }
  }, []);
  const formik = useFormik({
    initialValues: {
      contactType: data?.contactType || "",
      client: data?.client || "",
      position: data?.position || "",
      agency: data?.agency || "",
      location: data?.location || "",
      sal: data?.sal || "",
      firstName: data?.firstName || "",
      lastName: data?.lastName || "",
      ttbPQ: data?.ttbPQ || "",
      email: data?.contactInformation?.email || "",
      workPhone: data?.contactInformation?.workPhone || "",
      cellPhone: data?.contactInformation?.cellPhone || "",
      homePhone: data?.contactInformation?.homePhone || "",
      notes: data?.contactInformation?.notes || "",
      socialSecurityNumber: data?.socialSecurityNumber || "",
      driverLicenseNumber: data?.driverLicenseNumber || "",
      countryIssued: data?.countryIssued || {},
      stateIssued: data?.stateIssued || {},
      usCitizen: data?.usCitizen || false,
      placeOfBirth: data?.placeOfBirth || "",
      dateOfBirth: data?.dateOfBirth || "",
      height: data?.height || "",
      weight: data?.weight || "",
      eyeColor: data?.eyeColor || "",
      hairColor: data?.hairColor || "",
      maritalStatus: data?.maritalStatus || {},
      spouseFullName: data?.spouseFullName || "",
      marriageDate: data?.marriageDate || "",
      marriageCountry: data?.marriageCountry || {},
      marriageState: data?.marriageState || "",
      marriageCity: data?.marriageCity || "",
      question_1: data?.question_1 || false,
      question_2: data?.question_2 || false,
      question_3: data?.question_3 || false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      createContactMutate(values);
    },
  });

  const getStates = (id) => {
    if (id) {
      setCountryId(() => id);
    }
  };

  const switchCase = (contactType) => {
    switch (contactType) {
      case "client":
        return (
          <>
            <Col md={8} sm={12} xs={12}>
              <Select
                name="client"
                onChange={(e) => {
                  formik.setFieldValue("client", e);
                }}
                value={formik.values.client}
                error={
                  formik.touched.client && formik.errors.client
                    ? formik.errors.client._id
                    : null
                }
                label="Client"
                getOptionLabel={(option) => option.entityName}
                getOptionValue={(option) => option._id}
                required
                options={clientData.data}
              />
            </Col>
            <Col md={4} sm={12} xs={12}>
              <Input
                label="Position"
                required
                name="position"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.position}
                error={
                  formik.touched.position && formik.errors.position
                    ? formik.errors.position
                    : null
                }
              />
            </Col>
          </>
        );
      case "agency":
        return (
          <>
            <Col md={4} sm={12} xs={12}>
              <Select label="Agency" required options={contactTypeOption} />
            </Col>
            <Col md={3} sm={12} xs={12}>
              <Select label="Location" required options={contactTypeOption} />
            </Col>
            <Col md={3} sm={12} xs={12}>
              <Input label="Position" />
            </Col>
          </>
        );
      default:
        return null;
    }
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <Card className="mt-0">
        <Container fuild={"true"}>
          <Row>
            <Col md={2} sm={12} xs={12}>
              <Select
                getOptionLabel={(option) => option.name}
                getOptionValue={(option) => option.field}
                name="contactType"
                onChange={(e) => {
                  formik.setFieldValue("contactType", e);
                  setContactType(e.field.toString());
                }}
                value={formik.values.contactType}
                error={
                  formik.touched.contactType && formik.errors.contactType
                    ? formik.errors.contactType._id
                    : null
                }
                label="Type of Contact"
                required
                options={contactTypeData.data}
              />
            </Col>
            <Col md={10} sm={12} xs={12}>
              <Row>{switchCase(contactType)}</Row>
            </Col>
          </Row>

          <Row>
            <Col md={2} sm={12} xs={12}>
              <Select
                label="Sal"
                options={salData.data}
                name="sal"
                onChange={(e) => {
                  formik.setFieldValue("sal", e);
                }}
                value={formik.values.sal}
                error={
                  formik.touched.sal && formik.errors.sal
                    ? formik.errors.sal
                    : null
                }
                getOptionLabel={(option) => option.name}
                getOptionValue={(option) => option._id}
              />
            </Col>
            <Col md={4} sm={12} xs={12}>
              <Input
                label="First Name"
                required
                name="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                error={
                  formik.touched.firstName && formik.errors.firstName
                    ? formik.errors.firstName
                    : null
                }
              />
            </Col>
            <Col md={4} sm={12} xs={12}>
              <Input
                label="Last Name"
                required
                name="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                error={
                  formik.touched.lastName && formik.errors.lastName
                    ? formik.errors.lastName
                    : null
                }
              />
            </Col>
            {contactType == "client" && (
              <Col md={2} sm={12} xs={12}>
                <Input
                  label="TTB PQ#"
                  required
                  name="ttbPQ"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.ttbPQ}
                  error={
                    formik.touched.ttbPQ && formik.errors.ttbPQ
                      ? formik.errors.ttbPQ
                      : null
                  }
                />
              </Col>
            )}
          </Row>
        </Container>
      </Card>

      <Card className="mt-0">
        <Container fuild={"true"}>
          <Heading
            icon={<i className="far fa-address-book"></i>}
            title="Contact Information"
          />
          <Row>
            <Col md={3} sm={6} xs={12}>
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
            </Col>
            <Col md={3} sm={6} xs={12}>
              <Input
                label="Work Phone "
                required
                name="workPhone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.workPhone}
                error={
                  formik.touched.workPhone && formik.errors.workPhone
                    ? formik.errors.workPhone
                    : null
                }
              />
            </Col>
            <Col md={3} sm={6} xs={12}>
              <Input
                label="Cell Phone"
                name="cellPhone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cellPhone}
                error={
                  formik.touched.cellPhone && formik.errors.cellPhone
                    ? formik.errors.cellPhone
                    : null
                }
              />
            </Col>
            <Col md={3} sm={6} xs={12}>
              <Input
                label="Home Phone"
                name="homePhone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.homePhone}
                error={
                  formik.touched.homePhone && formik.errors.homePhone
                    ? formik.errors.homePhone
                    : null
                }
              />
            </Col>
          </Row>

          <Row>
            <Col md={12} sm={12} xs={12}>
              <QlEditor
                label="Note"
                name="notes"
                onChange={(e) => formik.setFieldValue("notes", e)}
                value={formik.values.notes}
                error={
                  formik.touched.notes && formik.errors.notes
                    ? formik.errors.notes
                    : null
                }
              ></QlEditor>
            </Col>
          </Row>
          {contactType == "client" && (
            <>
              <Heading
                icon={<i className="far fa-clipboard"></i>}
                title="Additional Contact Information"
              />

              <Row>
                <Col md={3} sm={6} xs={12}>
                  <Input
                    label="Social Security Number"
                    name="socialSecurityNumber"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.socialSecurityNumber}
                    error={
                      formik.touched.socialSecurityNumber &&
                      formik.errors.socialSecurityNumber
                        ? formik.errors.socialSecurityNumber
                        : null
                    }
                  />
                </Col>
                <Col md={3} sm={6} xs={12}>
                  <Input
                    label="Driver's License No"
                    name="driverLicenseNumber"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.driverLicenseNumber}
                    error={
                      formik.touched.driverLicenseNumber &&
                      formik.errors.driverLicenseNumber
                        ? formik.errors.driverLicenseNumber
                        : null
                    }
                  />
                </Col>
                <Col md={3} sm={6} xs={12}>
                  <Select
                    label="Country Issued"
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option._id}
                    onChange={(e) => {
                      getStates(e._id);
                      formik.setFieldValue("countryIssued", e);
                    }}
                    name="countryIssued"
                    value={formik.values.countryIssued}
                    error={
                      formik.touched.countryIssued &&
                      formik.errors.countryIssued
                        ? formik.errors.countryIssued
                        : null
                    }
                    options={countriesData.data}
                  />
                </Col>
                <Col md={3} sm={6} xs={12}>
                  <Select
                    label="State Issued"
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option._id}
                    options={stateData.data}
                    onChange={(e) => {
                      formik.setFieldValue("stateIssued", e);
                    }}
                    name="stateIssued"
                    value={formik.values.stateIssued}
                    error={
                      formik.touched.stateIssued && formik.errors.stateIssued
                        ? formik.errors.stateIssued
                        : null
                    }
                  />
                </Col>
              </Row>

              <Row>
                <Col md={4} sm={6} xs={12}>
                  <Input
                    switchBtn={true}
                    label="US Citizen"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="usCitizen"
                    value={formik.values.usCitizen}
                    error={
                      formik.touched.usCitizen && formik.errors.usCitizen
                        ? formik.errors.usCitizen
                        : null
                    }
                  />
                </Col>
                <Col md={4} sm={6} xs={12}>
                  <Input
                    label="Place of Birth"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="placeOfBirth"
                    value={formik.values.placeOfBirth}
                    error={
                      formik.touched.placeOfBirth && formik.errors.placeOfBirth
                        ? formik.errors.placeOfBirth
                        : null
                    }
                  />
                </Col>
                <Col md={4} sm={6} xs={12}>
                  <Input
                    label="Date of Birth"
                    type="date"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="dateOfBirth"
                    value={formik.values.dateOfBirth}
                    error={
                      formik.touched.dateOfBirth && formik.errors.dateOfBirth
                        ? formik.errors.dateOfBirth
                        : null
                    }
                  />
                </Col>
              </Row>

              <Row>
                <Col md={3} sm={6} xs={12}>
                  <Input
                    label="Height"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="height"
                    value={formik.values.height}
                    error={
                      formik.touched.height && formik.errors.height
                        ? formik.errors.height
                        : null
                    }
                  />
                </Col>
                <Col md={3} sm={6} xs={12}>
                  <Input
                    label="Weight"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="weight"
                    value={formik.values.weight}
                    error={
                      formik.touched.weight && formik.errors.weight
                        ? formik.errors.weight
                        : null
                    }
                  />
                </Col>
                <Col md={3} sm={6} xs={12}>
                  <Input
                    label="Eye Color"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="eyeColor"
                    value={formik.values.eyeColor}
                    error={
                      formik.touched.eyeColor && formik.errors.eyeColor
                        ? formik.errors.eyeColor
                        : null
                    }
                  />
                </Col>
                <Col md={3} sm={6} xs={12}>
                  <Input
                    label="Hair Color"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="hairColor"
                    value={formik.values.hairColor}
                    error={
                      formik.touched.hairColor && formik.errors.hairColor
                        ? formik.errors.hairColor
                        : null
                    }
                  />
                </Col>
              </Row>

              <Heading
                icon={<i className="far fa-heart"></i>}
                title="Marital Information"
              />

              <Row>
                <Col md={4} sm={6} xs={12}>
                  <Select
                    options={maritalStatusData.data}
                    label="Martial Status"
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option._id}
                    onChange={(e) => {
                      formik.setFieldValue("maritalStatus", e);
                    }}
                    name="maritalStatus"
                    value={formik.values.maritalStatus}
                    error={
                      formik.touched.maritalStatus &&
                      formik.errors.maritalStatus
                        ? formik.errors.maritalStatus
                        : null
                    }
                  />
                </Col>
                <Col md={4} sm={6} xs={12}>
                  <Input
                    label="Spouse Full Name"
                    name="spouseFullName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.spouseFullName}
                    error={
                      formik.touched.spouseFullName &&
                      formik.errors.spouseFullName
                        ? formik.errors.spouseFullName
                        : null
                    }
                  />
                </Col>
                <Col md={4} sm={6} xs={12}>
                  <Input
                    type="Date"
                    label="Marriage Date"
                    name="marriageDate"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.marriageDate}
                    error={
                      formik.touched.marriageDate && formik.errors.marriageDate
                        ? formik.errors.marriageDate
                        : null
                    }
                  />
                </Col>
              </Row>

              <Row>
                <Col md={4} sm={6} xs={12}>
                  <Select
                    options={countriesData.data}
                    onChange={(e) => {
                      formik.setFieldValue("marriageCountry", e);
                    }}
                    name="marriageCountry"
                    value={formik.values.marriageCountry}
                    error={
                      formik.touched.marriageCountry &&
                      formik.errors.marriageCountry
                        ? formik.errors.marriageCountry
                        : null
                    }
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option._id}
                    label="Marriage Country"
                  />
                </Col>
                <Col md={4} sm={6} xs={12}>
                  <Input
                    label="Marriage State"
                    name="marriageState"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.marriageState}
                    error={
                      formik.touched.marriageState &&
                      formik.errors.marriageState
                        ? formik.errors.marriageState
                        : null
                    }
                  />
                </Col>
                <Col md={4} sm={6} xs={12}>
                  <Input
                    label="Marriage City"
                    name="marriageCity"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.marriageCity}
                    error={
                      formik.touched.marriageCity && formik.errors.marriageCity
                        ? formik.errors.marriageCity
                        : null
                    }
                  />
                </Col>
              </Row>

              <Heading
                icon={<i className="far fa-question-circle"></i>}
                title="Questionnaire"
              />

              <Row>
                <Col md={12} sm={12} xs={12}>
                  <div className="mb-3">
                    <Text>
                      Do you have (or have you ever had) any direct or indirect
                      interest in an alcoholic beverage license?
                    </Text>
                    <Radio
                      label="Yes"
                      name="question_1"
                      onChange={() => {
                        formik.setFieldValue("question_1", true);
                      }}
                      checked={formik.values.question_1 === true}
                      onBlur={formik.handleBlur}
                      value={"yes"}
                      error={
                        formik.touched.question_1 && formik.errors.question_1
                          ? formik.errors.question_1
                          : null
                      }
                    />
                    <Radio
                      label="No"
                      name="question_1"
                      onChange={() => {
                        formik.setFieldValue("question_1", false);
                      }}
                      checked={formik.values.question_1 === false}
                      onBlur={formik.handleBlur}
                      value={"no"}
                      error={
                        formik.touched.question_1 && formik.errors.question_1
                          ? formik.errors.question_1
                          : null
                      }
                    />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col md={12} sm={12} xs={12}>
                  <div className="mb-3">
                    <Text>
                      Have you (or any company you where/are invoved in) had an
                      alcoholic beverage license, revoked, suspended or denied?
                    </Text>
                    <Radio
                      label="Yes"
                      name="question_2"
                      onChange={() => {
                        formik.setFieldValue("question_2", true);
                      }}
                      checked={formik.values.question_2 === true}
                      onBlur={formik.handleBlur}
                      value={"yes"}
                      error={
                        formik.touched.question_2 && formik.errors.question_2
                          ? formik.errors.question_2
                          : null
                      }
                    />
                    <Radio
                      label="No"
                      name="question_2"
                      onChange={() => {
                        formik.setFieldValue("question_2", false);
                      }}
                      checked={formik.values.question_2 === false}
                      onBlur={formik.handleBlur}
                      value={"no"}
                      error={
                        formik.touched.question_2 && formik.errors.question_2
                          ? formik.errors.question_2
                          : null
                      }
                    />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col md={12} sm={12} xs={12}>
                  <div className="mb-3">
                    <Text>
                      Have you ever been arrested, charged, convicted or placed
                      on probation?
                    </Text>
                    <Radio
                      label="Yes"
                      name="question_3"
                      onChange={() => {
                        formik.setFieldValue("question_3", true);
                      }}
                      checked={formik.values.question_3 === true}
                      onBlur={formik.handleBlur}
                      value={"yes"}
                      error={
                        formik.touched.question_3 && formik.errors.question_3
                          ? formik.errors.question_3
                          : null
                      }
                    />
                    <Radio
                      label="No"
                      name="question_3"
                      onChange={() => {
                        formik.setFieldValue("question_3", false);
                      }}
                      checked={formik.values.question_3 === false}
                      onBlur={formik.handleBlur}
                      value={"no"}
                      error={
                        formik.touched.question_3 && formik.errors.question_3
                          ? formik.errors.question_3
                          : null
                      }
                    />
                  </div>
                </Col>
              </Row>
            </>
          )}
          <Row>
            <Col md={12} sm={12} xs={12}>
              <div className="d-flex justify-content-center py-4 w-100 flex-wrap">
                <div className="px-1">
                  <Button type="submit" className="btn-shadow">
                    Add Client
                  </Button>
                </div>
                <div className="px-1">
                  <Button
                    className="btn-shadow"
                    backgroundColor="white"
                    color="#2a93d5"
                    hoverEffect="background:#2a93d5;color:white;"
                    borderColor="#2a93d5"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Card>
    </form>
  );
}
