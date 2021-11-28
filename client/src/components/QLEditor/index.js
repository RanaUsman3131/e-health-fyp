import React from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import styled from "styled-components";

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
`;
export default function Index({
  children,
  label,
  onChange,

  required,
  ...props
}) {
  const modules = React.useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image"],
        ["clean"],
      ],
    }),
    []
  );
  const formats = React.useMemo(
    () => [
      "header",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "indent",
      "link",
      "image",
    ],
    []
  );
  return (
    <>
      <FormGroup>
        <Label htmlFor={label}>
          <span>{label}</span>
          {required && <Required className="required"> * </Required>}
        </Label>
        <ReactQuill
          onChange={onChange}
          modules={modules}
          formats={formats}
        ></ReactQuill>
        <Error> </Error>
      </FormGroup>
    </>
  );
}
