import React from "react";
import Container from "react-bootstrap/Container";
import Title from "../../../components/PageTitle";
import Index from "../../../components/PatientForm";

export default function Add() {
    return (
        <>
            <Container>
                <Title
                    backlink="/portal/appointment"
                    backPageText="Appointment"
                    title=" Create Appointment"
                />
                <Index />
            </Container>
        </>
    );
}
