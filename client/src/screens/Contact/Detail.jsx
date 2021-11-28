import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../../components/Card";
import Table from "../../components/Table";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getContactById } from "../../api/api";
import EditForm from "../../components/ContactForm";

const ContactHead = styled.div`
  padding: 18px;
  clear: both;
`;
const Primary = styled.h3`
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 0.3rem;
`;

const Secondary = styled.h3`
  font-size: 1.2rem;
  font-weight: 400;
`;

const TableTitle = styled.span`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  font-weight: 400;
  display: block;
`;
const Achor = styled.a`
  color: #145388;
  font-weight: 300;
  & > i {
    color: gray;
    padding: 0 6px;
  }
`;

const ActionBar = styled.div`
  position: absolute;
  right: 13px;
  @media only screen and (max-width: 900px) {
    position: static;
    float: right;
  }
`;

const ActionButton = styled.span`
  padding: 8px 10px;
  font-size: 16px;
  margin: 3px;
  border-radius: 50px;
  color: #fff !important;
  border-color: transparent;
  background: #145388;
  line-height: 34px;
`;
const Label = styled.label`
  margin-bottom: 0.05rem;
  display: block;
  color: #495057;
  font-size: 0.8rem;
`;

const CardTitle = styled.div`
  margin-bottom: 0.5rem;
`;

function DetailList({ topic, value }) {
  return (
    <>
      <Label>
        <span>
          <strong>{topic}:</strong> {value}
        </span>
      </Label>
    </>
  );
}

function formatDate(_date) {
  let date = new Date(_date).toDateString();
  return date;
}

export default function Detail() {
  let { id } = useParams();
  const [editForm, setEditForm] = React.useState(false);
  const [editFormData, setEditFormData] = React.useState(null);

  const contactDetailData = useQuery("getContactById", () =>
    getContactById(id)
  );

  const editToggle = () => {
    setEditForm(true);
    setEditFormData(contactDetailData.data);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Client",
        accessor: "entityName", // accessor is the "key" in the data
      },
      {
        Header: "Position",
        accessor: "position",
      },
      {
        Header: "Work Phone",
        accessor: "phone",
      },
      {
        Header: "Email",
        accessor: "email",
      },
    ],
    []
  );
  const data = React.useMemo(
    () =>
      contactDetailData.data && contactDetailData.data.client
        ? [
            {
              ...contactDetailData.data.client,
              email: contactDetailData.data?.contactInformation?.email,
              position: contactDetailData.data?.position,
            },
          ]
        : [],
    [contactDetailData.data]
  );
  return (
    <>
      {contactDetailData.status == "loading" ? (
        <h3>Loading</h3>
      ) : editForm ? (
        <EditForm data={editFormData} />
      ) : (
        <Container>
          <Row>
            <Col md={6} sm={6} xs={12}>
              <Card>
                <ActionBar>
                  <ActionButton>
                    <i className="fas fa-pencil-alt" onClick={editToggle}></i>
                  </ActionButton>
                  <ActionButton>
                    <i className="fas fa-trash"></i>
                  </ActionButton>
                </ActionBar>
                <ContactHead className="text-center">
                  <Primary>{contactDetailData.data?.fullName} </Primary>
                  <Secondary className="text-muted">
                    {contactDetailData.data?.contactType?.name} Contact
                  </Secondary>
                </ContactHead>
                <div>
                  <Container>
                    <Row>
                      <Col md={12} sm={12} xs={12}>
                        <div className="d-flex flex-column">
                          <Achor>
                            <i className="far fa-envelope"></i>
                            {contactDetailData.data?.contactInformation?.email}
                          </Achor>
                          <Achor>
                            <i className="fas fa-mobile-alt"></i>
                            {
                              contactDetailData.data?.contactInformation
                                ?.workPhone
                            }
                          </Achor>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Card>
            </Col>

            <Col md={6} sm={6} xs={12}>
              <Table
                count={false}
                title={<TableTitle>Clients</TableTitle>}
                filter={false}
                columns={columns}
                data={data}
              />
            </Col>
          </Row>

          <Row>
            <Col md={8} sm={12} xs={12}>
              <Card>
                <CardTitle>
                  <span>Additional Information</span>
                </CardTitle>
                <Row>
                  <Col md={3} sm={6} xs={12}>
                    <div className="mb-4">
                      <DetailList topic="SSR" value=""></DetailList>
                      <DetailList
                        topic="Driver's License"
                        value={
                          contactDetailData.data?.additionalContactInformation
                            ?.driverLicenseNumber
                        }
                      ></DetailList>
                      <DetailList
                        topic="Country Issued"
                        value={
                          contactDetailData.data?.additionalContactInformation
                            ?.countryIssued?.name
                        }
                      ></DetailList>
                      <DetailList
                        topic="State Issued"
                        value={
                          contactDetailData.data?.additionalContactInformation
                            ?.stateIssued?.name
                        }
                      ></DetailList>
                    </div>
                  </Col>

                  <Col md={3} sm={6} xs={12}>
                    <div className="mb-4">
                      <DetailList
                        topic="US Citizen"
                        value={
                          contactDetailData.data?.additionalContactInformation
                            ?.usCitizen
                            ? "Yes"
                            : "No"
                        }
                      ></DetailList>
                      <DetailList
                        topic="Place of Birth"
                        value={
                          contactDetailData.data?.additionalContactInformation
                            ?.placeOfBirth
                        }
                      ></DetailList>
                      <DetailList
                        topic="Date of Birth"
                        value={
                          contactDetailData.data?.additionalContactInformation
                            ?.dateOfBirth
                        }
                      ></DetailList>
                      <DetailList
                        topic="Date"
                        value={formatDate(contactDetailData.data?.createdAt)}
                      ></DetailList>
                    </div>
                  </Col>

                  <Col md={3} sm={6} xs={12}>
                    <div className="mb-4">
                      <DetailList
                        topic="Height"
                        value={
                          contactDetailData.data?.additionalContactInformation
                            ?.height
                        }
                      ></DetailList>
                      <DetailList
                        topic="Weight"
                        value={
                          contactDetailData.data?.additionalContactInformation
                            ?.weight
                        }
                      ></DetailList>
                      <DetailList
                        topic="Eye Color"
                        value={
                          contactDetailData.data?.additionalContactInformation
                            ?.eyeColor
                        }
                      ></DetailList>
                      <DetailList
                        topic="Hair Color"
                        value={
                          contactDetailData.data?.additionalContactInformation
                            ?.hairColor
                        }
                      ></DetailList>
                    </div>
                  </Col>

                  <Col md={3} sm={6} xs={12}>
                    <div className="mb-4">
                      <DetailList
                        topic="Martial Status"
                        value={
                          contactDetailData.data?.maritalInformation
                            ?.maritalStatus?.name
                        }
                      ></DetailList>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col md={4} sm={12} xs={12}>
              <Card>
                <CardTitle>
                  <span>Questionnaire</span>
                </CardTitle>
                <Container>
                  <Row>
                    <Col md={12} sm={12} xs={12}>
                      <div className="mb-4">
                        <DetailList
                          topic="Interest in an alcoholic beverage license?"
                          value={
                            contactDetailData.data?.questionnaire?.question_1
                              ? "Yes"
                              : "No"
                          }
                        ></DetailList>

                        <DetailList
                          topic="Alcoholic beverage license, revoked, suspended or denied?"
                          value={
                            contactDetailData.data?.questionnaire?.question_2
                              ? "Yes"
                              : "No"
                          }
                        ></DetailList>
                        <DetailList
                          topic="Arrested, charged, convicted or placed on probation?"
                          value={
                            contactDetailData.data?.questionnaire?.question_3
                              ? "Yes"
                              : "No"
                          }
                        ></DetailList>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}
