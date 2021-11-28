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
        Header: "Flag",
        accessor: "x", // accessor is the "key" in the data
      },
      {
        Header: "Client Name",
        accessor: "entityName",
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
      {
        Header: "Website",
        accessor: "website",
      },
    ],
    []
  );
  const data = React.useMemo(() => clientData.data || [], [clientData.data]);
  return (
    <>
      <Container>
        <Title btnText="Add new" link="/clients/add" title="Clients" />
        <Table columns={columns} data={data} />
      </Container>
    </>
  );
}
