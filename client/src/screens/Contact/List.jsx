import React from "react";
import Table from "../../components/Table";
import Container from "react-bootstrap/Container";
import Title from "../../components/PageTitle";
import { getContacts } from "../../api/api";
import { useQuery } from "react-query";
import { Link, useRouteMatch } from "react-router-dom";

export default function List() {
  let { url } = useRouteMatch();
  const contactData = useQuery("getContacts", getContacts);
  console.log(contactData);
  const columns = React.useMemo(
    () => [
      {
        Header: "Contact Type",
        accessor: "contactType.name", // accessor is the "key" in the data
      },
      {
        Header: "Contact Name",
        accessor: "fullName",
        Cell: ({ row }) => {
          return (
            <Link to={`${url + "/details/" + row.original._id}/detail`}>
              {row.original.fullName}
            </Link>
          );
        },
      },
      {
        Header: "Position",
        accessor: "position",
      },
      {
        Header: "Email",
        accessor: "contactInformation.email",
      },
      {
        Header: "Work Phone",
        accessor: "contactInformation.workPhone",
      },
      {
        Header: "Cell Phone",
        accessor: "contactInformation.cellPhone",
      },
    ],
    []
  );
  const data = React.useMemo(() => contactData.data || [], [contactData.data]);
  return (
    <>
      <Container>
        <Title btnText="Add new" link="/contacts/add" title="Contacts" />
        <Table columns={columns} data={data} />
      </Container>
    </>
  );
}
