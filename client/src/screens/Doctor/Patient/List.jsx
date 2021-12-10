import React, { useEffect } from "react";
import Table from "../../../components/Table";
import Container from "react-bootstrap/Container";
import Title from "../../../components/PageTitle";
import { getYourPatients, getYourDepartment } from "../../../api/api";
import { useQuery } from "react-query";
import { Link, useRouteMatch } from "react-router-dom";

export default function List() {
  let { url } = useRouteMatch();
  const id = JSON.parse(localStorage.getItem("user_auth")).user._id;
  const contactData = useQuery("getYourPatients", () => getYourPatients(id));
  const [dep, setYourDep] = React.useState([]);

  const Department = () => {
    getYourDepartment().then((res) => {
      setYourDep(res.data?.department_id?.name);
      //   Doctor(formik.setFieldValue("department_id"));
    });
  };
  useEffect(() => {
    Department();
  }, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "patient_id.name",
        // Cell: ({ row }) => {
        //     return (
        //         <Link to={`${url + "/details/" + row.original._id}/detail`}>
        //             {row.original.fullName}
        //         </Link>
        //     );
        // },
      },
      {
        Header: "Department",
        accessor: "department",
        Cell: ({ row }) => {
          return dep;
        },
      },
      {
        Header: "Disease",
        accessor: "disease",
      },

      {
        Header: "Cell Phone",
        accessor: "phone_number",
      },
    ],
    []
  );
  const data = React.useMemo(
    () => contactData?.data?.data || [],
    [contactData?.data?.data]
  );
  return (
    <>
      <Container>
        <Title
          // btnText="Add new"
          link="/portal/patient/Add"
          title="Patients"
        />

        <Table columns={columns} data={data} />
      </Container>
    </>
  );
}
