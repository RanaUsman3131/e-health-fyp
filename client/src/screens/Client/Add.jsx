import React, { useEffect } from "react";
import Card from "../../components/Card";
import Container from "react-bootstrap/Container";
import Title from "../../components/PageTitle";
import Input from "../../components/Input";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import Select from "../../components/Select";
import Button from "../../components/Button";
import Heading from "../../components/SectionHeading";
import {
  LLCManagement,
  createClient,
  taxTypes,
  services,
  operationTypes,
  DHWCSpecialist,
  countries,
  statesByCountryId,
} from "../../api/api";
import { useQuery, useMutation } from "react-query";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  entityName: "",
  dba: "",
  tradeName: "",
  ein: "",
  phone: "",
  fax: "",
  website: "",
  llcManagement: {},
  taxType: {},
  secrateryOfStateNumber: "",
  stateOfInformation: "",
  annualCalenderYearFermentation: 0,
  annualCalenderYearProduction: 0,
  fiscalYearEndDate: "",
  operation: {},
  service: {},
  dhwcSpecialist: {},
  bankName: "",
  account: "",
  address: "",
  country: {},
  state: {},
  city: "",
  zipCode: "",
};

const validationSchema = Yup.object({
  entityName: Yup.string().required("Entity Name is required"),
  dba: Yup.string().required("DBA is required"),
  tradeName: Yup.string("Trade Number Must be String"),
  ein: "",
  phone: Yup.string().required("Phone Number is required"),
  fax: Yup.string("Fax Must be String"),
  website: Yup.string("Website Must be Valid"),

  secrateryOfStateNumber: Yup.string(),
  stateOfInformation: Yup.string(),
  annualCalenderYearFermentation: Yup.number(
    "Annual Calender Year Fermentation Must be  number"
  ),
  annualCalenderYearProduction: Yup.number(
    "Annual Calender Year Production Must be  number"
  ),
  fiscalYearEndDate: Yup.string(),

  hostWinery: Yup.string(),

  bankName: Yup.string(),
  account: Yup.string(),
  address: Yup.string(),

  city: Yup.string(),
  zipCode: Yup.string(),
});

export default function Add() {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      createClientMutate(values);
    },
  });
  const [countryId, setCountryId] = React.useState("");
  const [hostWinery, setHostWinery] = React.useState(false);

  const { mutate: createClientMutate } = useMutation(createClient);
  const LLCManagementData = useQuery("LLCManagement", LLCManagement);
  const taxType = useQuery("getTaxType", taxTypes);
  const operationTypesData = useQuery("operationTypes", operationTypes);
  const servicesData = useQuery("services", services);
  const DHWCSpecialistData = useQuery("DHWCSpecialistData", DHWCSpecialist);
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
      <Container>
        <Title backlink="/clients" backPageText="Clients" title="Add Client" />
        <Card className="mt-0">
          <form onSubmit={formik.handleSubmit}>
            <Container fuild={true}>
              <Heading
                icon={<i className="fas fa-user-friends"></i>}
                title="Client Information"
              />
              <Row>
                <Col md={6} sm={6} xs={12}>
                  <Input
                    label="Entity Name"
                    required
                    name="entityName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.entityName}
                    error={
                      formik.touched.entityName && formik.errors.entityName
                        ? formik.errors.entityName
                        : null
                    }
                  />
                </Col>
                <Col md={6} sm={6} xs={12}>
                  <Input
                    label="DBA"
                    required
                    name="dba"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.dba}
                    error={
                      formik.touched.dba && formik.errors.dba
                        ? formik.errors.dba
                        : null
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6} sm={6} xs={12}>
                  <Input
                    label="Trade Name"
                    name="tradeName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.tradeName}
                    error={
                      formik.touched.tradeName && formik.errors.tradeName
                        ? formik.errors.tradeName
                        : null
                    }
                  />
                </Col>
                <Col md={6} sm={6} xs={12}>
                  <Input
                    label="EIN"
                    name="ein"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.ein}
                    error={
                      formik.touched.ein && formik.errors.ein
                        ? formik.errors.ein
                        : null
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col md={4} sm={6} xs={12}>
                  <Input
                    label="Phone"
                    required
                    name="phone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    error={
                      formik.touched.phone && formik.errors.phone
                        ? formik.errors.phone
                        : null
                    }
                  />
                </Col>
                <Col md={4} sm={6} xs={12}>
                  <Input
                    label="Fax"
                    name="fax"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fax}
                    error={
                      formik.touched.fax && formik.errors.fax
                        ? formik.errors.fax
                        : null
                    }
                  />
                </Col>
                <Col md={4} sm={6} xs={12}>
                  <Input
                    label="Website"
                    name="website"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.website}
                    error={
                      formik.touched.website && formik.errors.website
                        ? formik.errors.website
                        : null
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6} sm={6} xs={12}>
                  <Select
                    label="LLC Management"
                    options={LLCManagementData.data}
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option._id}
                    name="llcManagement"
                    onChange={(value) => {
                      formik.setFieldValue("llcManagement", value);
                    }}
                    onBlur={formik.handleBlur}
                    value={formik.values.llcManagement}
                    error={
                      formik.touched.llcManagement &&
                      formik.errors.llcManagement
                        ? formik.errors.llcManagement
                        : null
                    }
                  />
                </Col>
                <Col md={6} sm={6} xs={12}>
                  <Select
                    label="Tax Type"
                    name="taxType"
                    onChange={(value) => {
                      formik.setFieldValue("taxType", value);
                    }}
                    onBlur={formik.handleBlur}
                    value={formik.values.taxType}
                    error={
                      formik.touched.taxType && formik.errors.taxType
                        ? formik.errors.taxType
                        : null
                    }
                    options={taxType.data}
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option._id}
                  />
                </Col>
              </Row>
              <Row>
                <Col md={3} sm={6} xs={12}>
                  <Input
                    label="Secretary of State number"
                    name="secrateryOfStateNumber"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.secrateryOfStateNumber}
                    error={
                      formik.touched.secrateryOfStateNumber &&
                      formik.errors.secrateryOfStateNumber
                        ? formik.errors.secrateryOfStateNumber
                        : null
                    }
                  />
                </Col>
                <Col md={3} sm={6} xs={12}>
                  <Input
                    label="State of formation"
                    name="stateOfInformation"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.stateOfInformation}
                    error={
                      formik.touched.stateOfInformation &&
                      formik.errors.stateOfInformation
                        ? formik.errors.stateOfInformation
                        : null
                    }
                  />
                </Col>
                <Col md={3} sm={6} xs={12}>
                  <Input
                    label="Annual calendar year fermentation total in gallons"
                    name="annualCalenderYearFermentation"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.annualCalenderYearFermentation}
                    error={
                      formik.touched.annualCalenderYearFermentation &&
                      formik.errors.annualCalenderYearFermentation
                        ? formik.errors.annualCalenderYearFermentation
                        : null
                    }
                  />
                </Col>
                <Col md={3} sm={6} xs={12}>
                  <Input
                    label="Annual calendar year total production in gallons – produced onsite or off"
                    name="annualCalenderYearProduction"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.annualCalenderYearProduction}
                    error={
                      formik.touched.annualCalenderYearProduction &&
                      formik.errors.annualCalenderYearProduction
                        ? formik.errors.annualCalenderYearProduction
                        : null
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col md={3} sm={6} xs={12}>
                  <Input
                    label="Fiscal year end date"
                    name="fiscalYearEndDate"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fiscalYearEndDate}
                    error={
                      formik.touched.fiscalYearEndDate &&
                      formik.errors.fiscalYearEndDate
                        ? formik.errors.fiscalYearEndDate
                        : null
                    }
                  />
                </Col>
                <Col md={3} sm={6} xs={12}>
                  <Select
                    label="Operation Type"
                    options={operationTypesData.data}
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option._id}
                    name="operation"
                    onChange={(value) => {
                      formik.setFieldValue("operation", value);
                    }}
                    onBlur={formik.handleBlur}
                    value={formik.values.operation}
                    error={
                      formik.touched.operation && formik.errors.operation
                        ? formik.errors.operation
                        : null
                    }
                  />
                </Col>

                <Col md={3} sm={6} xs={12}>
                  <Input
                    onChange={(e) => setHostWinery(e.target.checked)}
                    label="Winery Alternating Proprietorship "
                    switchBtn={true}
                  />
                </Col>
                {hostWinery && (
                  <Col md={3} sm={6} xs={12}>
                    <Input
                      label="Host Winery"
                      name="hostWinery"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.hostWinery}
                      error={
                        formik.touched.hostWinery && formik.errors.hostWinery
                          ? formik.errors.hostWinery
                          : null
                      }
                    />
                  </Col>
                )}
              </Row>
              <Row>
                <Col md={6} sm={6} xs={12}>
                  <Select
                    label="Service scope"
                    name="service"
                    onChange={(value) => {
                      formik.setFieldValue("service", value);
                    }}
                    onBlur={formik.handleBlur}
                    value={formik.values.service}
                    error={
                      formik.touched.service && formik.errors.service
                        ? formik.errors.service
                        : null
                    }
                    options={servicesData.data}
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option._id}
                  />
                </Col>
                <Col md={6} sm={6} xs={12}>
                  <Select
                    label="DHWC Specialist"
                    options={DHWCSpecialistData.data}
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option._id}
                    name="dhwcSpecialist"
                    onChange={(value) => {
                      formik.setFieldValue("dhwcSpecialist", value);
                    }}
                    onBlur={formik.handleBlur}
                    value={formik.values.dhwcSpecialist}
                    error={
                      formik.touched.dhwcSpecialist &&
                      formik.errors.dhwcSpecialist
                        ? formik.errors.dhwcSpecialist
                        : null
                    }
                  />
                </Col>
              </Row>
              <Heading
                icon={<i className="fas fa-university"></i>}
                title="Bank Information"
              />
              <Row>
                <Col md={6} sm={6} xs={12}>
                  <Input
                    label="Bank Name"
                    name="bankName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.bankName}
                    error={
                      formik.touched.bankName && formik.errors.bankName
                        ? formik.errors.bankName
                        : null
                    }
                  />
                </Col>
                <Col md={6} sm={6} xs={12}>
                  <Input
                    label="Account"
                    name="account"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.account}
                    error={
                      formik.touched.account && formik.errors.account
                        ? formik.errors.account
                        : null
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col md={12} sm={12} xs={12}>
                  <Input
                    label="Address"
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
                <Col md={3} sm={6} xs={12}>
                  <Select
                    label="Country"
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
                        ? formik.errors.country
                        : null
                    }
                  />
                </Col>
                <Col md={3} sm={6} xs={12}>
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
                <Col md={3} sm={6} xs={12}>
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
                <Col md={3} sm={6} xs={12}>
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
          </form>
        </Card>
      </Container>
    </>
  );
}
