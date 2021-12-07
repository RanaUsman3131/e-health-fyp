import React from 'react'
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import Select from "../Select";
import { useFormik } from "formik";
import * as Yup from "yup";
export default function Setting() {
    const [department, setDepartment] = React.useState([]);

    const validationSchema = Yup.object({ });
    const formik = useFormik({
        initialValues: {
            department: ""

        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log("values", values)
            // createContactMutate(values);
        },
    });
    return (
        <div>
            <Row>
            <Col md={2} sm={12} xs={12}>
                <Select
                    label="Department"
                    options={department}
                    name="department"
                    onChange={(e) => {
                        formik.setFieldValue("department", e);
                    }}
                        value={formik.values.department}
                    error={
                        formik.touched.department && formik.errors.department
                            ? formik.errors.department
                            : null
                    }
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option._id}
                />
            </Col>
            </Row>
        </div>
    )
}
