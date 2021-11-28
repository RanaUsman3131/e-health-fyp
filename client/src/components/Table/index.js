import React from "react";
import { useTable, useGlobalFilter } from "react-table";
import Table from "react-bootstrap/Table";
import styled from "styled-components";
import GlobalFilter from "./GlobalFilter";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "../Card";

const Th = styled.th`
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
  border-top: 1px solid #dee2e6;
  font-weight: 500;
`;

const Td = styled.td`
  padding: 0.75rem !important;
  font-weight: 300;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
`;

export default function Index({
  title,
  columns,
  data,
  CreateComponent,
  filter = true,
  count = true,
}) {
  const {
    getTableProps,
    preGlobalFilteredRows,
    getTableBodyProps,
    headerGroups,
    setGlobalFilter,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useGlobalFilter);
  return (
    <>
      <Card>
        {CreateComponent}
        {filter && (
          <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            setGlobalFilter={setGlobalFilter}
          />
        )}
        {title}
        <div className="table-responsive">
          <Table
            className={"w-100"}
            borderless
            striped
            hover
            {...getTableProps()}
          >
            <thead>
              {
                // Loop over the header rows
                headerGroups.map((headerGroup) => (
                  // Apply the header row props
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {
                      // Loop over the headers in each row
                      headerGroup.headers.map((column) => (
                        // Apply the header cell props
                        <Th {...column.getHeaderProps()}>
                          {
                            // Render the header
                            column.render("Header")
                          }
                        </Th>
                      ))
                    }
                  </tr>
                ))
              }
            </thead>
            {/* Apply the table body props */}
            <tbody {...getTableBodyProps()}>
              {
                // Loop over the table rows
                rows.map((row) => {
                  // Prepare the row for display
                  prepareRow(row);
                  return (
                    // Apply the row props
                    <tr {...row.getRowProps()}>
                      {
                        // Loop over the rows cells
                        row.cells.map((cell) => {
                          // Apply the cell props
                          return (
                            <Td {...cell.getCellProps()}>
                              {
                                // Render the cell contents
                                cell.render("Cell")
                              }
                            </Td>
                          );
                        })
                      }
                    </tr>
                  );
                })
              }
            </tbody>
          </Table>
        </div>
      </Card>
      {count && (
        <Container>
          <Row>
            <Col md={12}>
              <div className="text-center my-4">
                <i>Total: {rows.length}</i>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}
