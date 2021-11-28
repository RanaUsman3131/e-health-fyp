import React from "react";
import styled from "styled-components";
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

export default function index({ error, label, switchBtn, required, ...props }) {
  return (
    <>
      <FormGroup>
        <Label htmlFor={label}>
          <span>{label}</span>
          {required && <Required className="required"> * </Required>}
        </Label>
        {!switchBtn && <Input className="form-control" {...props} />}
        <Error>{error}</Error>

        {switchBtn && (
          <label className="switch">
            <input type="checkbox" {...props} />
            <span className="slider round"></span>
          </label>
        )}
      </FormGroup>
    </>
  );
}
