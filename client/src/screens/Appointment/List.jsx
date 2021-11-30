import React from "react";
import Table from "../../components/Table";
import Container from "react-bootstrap/Container";
import Title from "../../components/PageTitle";
import { getClients } from "../../api/api";
import { useQuery } from "react-query";

export default function List() {
    const clientData = useQuery("getClients", getClients);
    const columns = React.useMemo(
        () => [
            {
                Header: "ID",
                accessor: "id", // accessor is the "key" in the data
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
                accessor: "patient_name",
            },
            {
                Header: "Status",
                accessor: "status",
            },
        ],
        []
    );
    const data = React.useMemo(() => clientData.data || [], [clientData.data]);
    return (
        <>
            <Container>
                <Title  title="Appointments" />
                <Table columns={columns} data={data} />
            </Container>
        </>
    );
}
