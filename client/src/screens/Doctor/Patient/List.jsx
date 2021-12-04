import React from "react";
import Table from "../../../components/Table";
import Container from "react-bootstrap/Container";
import Title from "../../../components/PageTitle";
import { getContacts } from "../../../api/api";
import { useQuery } from "react-query";
import { Link, useRouteMatch } from "react-router-dom";

export default function List() {
    let { url } = useRouteMatch();
    const contactData = useQuery("getContacts", getContacts);
    console.log(contactData);
    const columns = React.useMemo(
        () => [
          
            {
                Header: "Name",
                accessor: "ma,e",
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
            },
            {
                Header: "Disease",
                accessor: "disease",
            },
            
            
            {
                Header: "Cell Phone",
                accessor: "cellPhone",
            },
        ],
        []
    );
    const data = React.useMemo(() => contactData.data || [], [contactData.data]);
    return (
        <>
            <Container>
                <Title btnText="Add new" link="/portal/patient/Add" title="Patients" />
                <Table columns={columns} data={data} />
            </Container>
        </>
    );
}
