import React from "react";
import Container from "react-bootstrap/Container";
import Title from "../../components/PageTitle";
import Form from "../../components/ContactForm";

export default function Add() {
  return (
    <>
      <Container>
        <Title
          backlink="/contacts"
          backPageText="Contacts"
          title="Add Contact"
        />
        <Form />
      </Container>
    </>
  );
}
