import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import { useHistory } from "react-router";
import React, { useEffect, useState } from "react";
import Home from "./Home";
import axios from "axios";
import { useParams } from "react-router-dom";

const validation = Yup.object().shape({
  name: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .required("Name is Required"),
  registrationNumber: Yup.string().required("Registration Number is Required"),
});

function UpdateUser() {
  const { id } = useParams();
  const [applicant, setApplicant] = useState([]);
  console.log(id);
  useEffect(() => {
    const data = axios
      .get(`http://localhost:3001/app/user/${id}`)
      .then((response) => {
        console.log(response);
        setApplicant(response.data);

        console.log(applicant);
      });
    return () => {};
  }, []);

  const history = useHistory();
  console.log(applicant.name);
  return (
    <>
      <Home />
      <div className="row">
        <div
          className="container mb-5 mt-5"
          style={{ backgroundColor: "#F6F6F6" }}
        >
          <Formik
            initialValues={{
              name: "",
              registrationNumber: "",
            }}
            validationSchema={validation}
            onSubmit={(values) => {
              console.log(values);
              axios
                .put(`http://localhost:3001/app/updateUser/${id}`, values)
                .then((response) => console.log(response.data));
              window.location.reload();
            }}
          >
            <Form>
              <div
                className="container-fluid"
                style={{
                  width: "300px",
                  marginTop: "40px",
                }}
              >
                <h4 className="text-center">UPDATE</h4>
                <TextField
                  label="New Name"
                  name="name"
                  type="text"
                  placeholder={applicant.name}
                />
                <TextField
                  label="New Registration Number"
                  name="registrationNumber"
                  type="text"
                  placeholder={applicant.registrationNumber}
                />
                <div className="text-center">
                  <button className="btn btn-primary mb-5 mt-4" type="submit">
                    Update
                  </button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}

export default UpdateUser;
