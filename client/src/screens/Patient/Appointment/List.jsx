import React from "react";
import Table from "../../../components/Table";
import Container from "react-bootstrap/Container";
import Title from "../../../components/PageTitle";
import { getAppointment } from "../../../api/api";
import { useQuery } from "react-query";

export default function List() {
  const id = JSON.parse(localStorage.getItem("user_auth")).user._id;
  const clientData = useQuery("getAppointment", () => getAppointment(id));
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "_id", // accessor is the "key" in the data
      },
      {
        Header: "Doctor Name",
        accessor: "doctor_id.name",
      },
      {
        Header: "Disease",
        accessor: "disease",
      },
      {
        Header: "Date ",
        accessor: "date",
      },
      {
        Header: "Time",
        accessor: "time",
      },
      {
        Header: "Link",
        accessor: "link",
        Cell: ({ row }) => {
          if (row.original.link) {
            return (
              <a href={row.original.link} target="_blank" rel="noreferrer">
                Online link
              </a>
            );
          } else {
            return "";
          }
        },
      },

      {
        Header: "Status",
        accessor: "status",
      },
    ],
    []
  );
  const data = React.useMemo(
    () => clientData?.data?.data || [],
    [clientData?.data?.data]
  );
  return (
    <>
      <Container>
        <Title
          btnText="Add new"
          link="/portal/patient_appointment/add"
          title="Patient Appointments"
        />
        <Table columns={columns} data={data} />
      </Container>
    </>
  );
}
