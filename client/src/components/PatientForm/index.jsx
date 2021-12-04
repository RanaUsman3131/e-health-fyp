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

          c
        </form>
    );
}
