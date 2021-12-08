import React from "react";
import Container from "react-bootstrap/Container";
import Title from "../../../components/PageTitle";
import EditForm from "../../../components/AppointmentForm/Edit";

export default function Edit() {
    return (
        <>
            <Container>
                <Title
                    backlink="/portal/appointment"
                    backPageText="Appointment"
                    title="Change Status Of Appointment"
                />
                <EditForm />
            </Container>
        </>
    );
}
