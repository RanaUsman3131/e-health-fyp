import React from "react";
import Table from "../../../components/Table";
import Container from "react-bootstrap/Container";
import Title from "../../../components/PageTitle";
import { getAppointmentsTow } from "../../../api/api";
import { useQuery } from "react-query";
import styled from "styled-components";
import { Link, useRouteMatch } from "react-router-dom";

export default function List() {

    const Button = styled.button`
  background-color: #145388;
  border-color: #145388;
  font-size: 14px;
  color: white;
  &:hover {
    color: white;
  }
`;

    const id = JSON.parse(localStorage.getItem("user_auth")).user._id;
    const clientData = useQuery("getAppointmentsTow", () =>  getAppointmentsTow(id));
    console.log(clientData.data,"data")
    let { url } = useRouteMatch();

   
    const columns = React.useMemo(
        () => [
            {
                Header: "ID",
                accessor: "_id", // accessor is the "key" in the data
            },
            {
                Header: "Appointment Day",
                accessor: "booking_date",
            },
            {
                Header: "Disease",
                accessor: "disease",
            },
            {
                Header: "Patient Name",
                accessor: "patient_id.name",
            },
            {
                Header: "Status",
                accessor: "status",
                Cell: ({ row }) => {
                    return (
                        row.original.status == "pending" ? <span style={{ color: "red" }}>Pending</span> :
                            row.original.status == "approved" ? <span style={{color:"blue"}}>Approved</span> :
                                row.original.status == "complete" ? <span style={{ color: "green" }}>Complete</span>:null
                        
                    );
                },
            },
            {
                Header: "Actions",
                accessor: "",
                 Cell: ({ row }) => {
                    return (
                        <Link to={`${url + "/edit/" + row.original._id}`}>
                          Edit
                        </Link>
                    );
                },
            },
        ],
        []
    );
    const data = React.useMemo(() => clientData?.data?.data || [], [clientData?.data?.data]);
    return (
        <>
            <Container>
                <Title title="Appointments" />
                <Table columns={columns} data={data} />
            </Container>
        </>
    );
}
