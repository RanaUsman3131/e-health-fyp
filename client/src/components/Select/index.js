import React from "react";
import Select from "react-select";

import styled from "styled-components";

const defaultOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const Input = styled.input`
  border-radius: 0.1rem;
  outline: initial !important;
  box-shadow: none !important;
  font-size: 0.8rem;
  padding: 0.7rem 0.75rem 0.65rem;
  line-height: 1.5;
  border: 1px solid #d7d7d7;
  background: #fff;
  color: #212121;
`;

const Required = styled.span`
  color: #dc3545;
`;

const Label = styled.label`
  margin-bottom: 0.11rem;
  color: #495057;
  font-size: 0.8rem;
`;

const FormGroup = styled.div`
  margin-bottom: 0.9rem;
  line-height: 1rem;
`;
const Error = styled.div`
  color: #dc3545;
  font-size: 12px;
  padding: 2px 0;
`;

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    "&:hover": {
      background: "#145388",
      color: "white",
    },
  }),
  menu: (provided, state) => ({
    ...provided,
    marginTop: 0,
    top: "95%",
    boxShadow: "none",
    outline: "initial !important",
    border: "1px solid #d7d7d7",
    borderTop: "none",
  }),
  control: (base, state) => ({
    ...base,
    borderRadius: "0.1rem",
    outline: "initial !important",
    boxShadow: "none !important",
    fontSize: "0.8rem",
    lineHeight: 1.5,
    border: "1px solid #d7d7d7",
    background: "#fff",
    color: "#212121",
    "&:focus": {
      border: "1px solid #145388",
      color: "white",
    },
  }),
};
export default function Index({ error, label, required, ...props }) {
  return (
    <>
      <FormGroup>
        <Label htmlFor={label}>
          <span>{label}</span>
          {required && <Required className="required"> * </Required>}
        </Label>
        <Select
          components={{
            IndicatorSeparator: () => null,
          }}
          styles={customStyles}
          {...props}
        />
        <Error> {error}</Error>
      </FormGroup>
    </>
  );
}
