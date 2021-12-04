import React from "react";
import Container from "react-bootstrap/Container";
import Title from "../../../components/PageTitle";
import Index from "../../../components/PatientForm";

export default function Add() {
    return (
        <>
            <Container>
                <Title
                    backlink="/portal/patient/List"
                    backPageText="Patients"
                    title=" Create Appointment"
                />
                <Index />
            </Container>
        </>
    );
}
