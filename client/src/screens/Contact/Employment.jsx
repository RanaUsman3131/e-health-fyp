import React from "react";
import Table from "../../components/Table";
import styled from "styled-components";
import Modal from "../../components/Modal";
import EmploymentForm from "../../components/EmploymentForm";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { getContactEmploymentById, removeEmployment } from "../../api/api";

const ActionButton = styled.span`
  padding: 6px 10px;
  font-size: 16px;
  margin: 3px;
  border-radius: 50px;
  color: #fff !important;
  border-color: transparent;
  background: #145388;
  &:hover {
    cursor: pointer;
  }
`;
const IconContainer = styled.div`
  color: #145388;
  & > i {
    padding: 5px;
  }
  & > i:hover {
    cursor: pointer;
  }
`;
export default function Employment() {
  const [modal, setModal] = React.useState(false);
  const [editData, setEditData] = React.useState(null);
  let { id } = useParams();
  const contactEmploymentData = useQuery("getContactEmploymentById", () =>
    getContactEmploymentById(id)
  );

  const removeEmploymentByRow = (_id) => {
    removeEmployment(_id).then(() => contactEmploymentData.refetch());
  };

  const editRow = (data) => {
    setModal(true);
    setEditData(() => ({ ...data }));
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Action",
        accessor: "",
        Cell: ({ row }) => (
          <>
            <IconContainer>
              <i class="fas fa-edit" onClick={() => editRow(row.original)}></i>
              <i
                class="fas fa-trash"
                onClick={() => removeEmploymentByRow(row.original._id)}
              ></i>
            </IconContainer>
          </>
        ),
      },
      {
        Header: "Company",
        accessor: "companyName",
      },
      {
        Header: "Job Title",
        accessor: "jobTitle",
      },
    ],
    []
  );
  const data = React.useMemo(
    () => contactEmploymentData.data || [],
    [contactEmploymentData.data]
  );
  return (
    <>
      <Modal
        open={modal}
        onclose={() => {
          setModal(false);
          setEditData(null);
        }}
        title={
          <>
            <i className="fas fa-id-card-alt"></i>
            <span className="px-1">
              {" "}
              Contact - {editData ? "Update Employment" : "Add Employment"}
            </span>
          </>
        }
      >
        <EmploymentForm
          btnText={editData ? "Update Employment" : "Add Employment"}
          data={editData}
          contactId={id}
          onSubmit={() => {
            contactEmploymentData.refetch();
            setEditData(null);
            setModal(false);
          }}
        />
      </Modal>

      <Table
        data={data}
        columns={columns}
        CreateComponent={
          <ActionButton
            onClick={() => setModal(true)}
            className="text-end float-end"
          >
            <i className="fas fa-plus"></i>
          </ActionButton>
        }
      />
    </>
  );
}
