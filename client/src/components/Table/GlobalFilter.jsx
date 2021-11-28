import React from "react";
import { useAsyncDebounce } from "react-table";
import styled from "styled-components";

const TWO_HUNDRED_MS = 200;

const Input = styled.input`
  background: none;
  outline: initial !important;
  border: 1px solid #8f8f8f;
  border-radius: 15px;
  padding: 0.25rem 0.75rem;
  line-height: 1.3;
  color: #212121;
  height: 42px;
`;

const InputGroup = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: fit-content;
`;

const Icon = styled.i`
  position: absolute;
  right: 5px;
`;

export default function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, TWO_HUNDRED_MS);

  return (
    <InputGroup className="mb-3">
      <Input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`Search`}
        className={"w-100"}
      />
      <Icon className="fas fa-search"></Icon>
    </InputGroup>
  );
}
