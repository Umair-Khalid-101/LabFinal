import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import { useHistory } from "react-router";
import React from "react";
import Home from "./Home";
import axios from "axios";

const validation = Yup.object().shape({
  name: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .required("Name is Required"),
  registrationNumber: Yup.string().required("Registration Number is Required"),
});

function SignUp({ handleStateChange, data }) {
  const history = useHistory();
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
                .post("http://localhost:3001/app/SignUp", values)
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
                <h4 className="text-center">SIGN UP</h4>
                <TextField label="Name" name="name" type="text" />
                <TextField
                  label="Registration Number"
                  name="registrationNumber"
                  type="text"
                />
                <div className="text-center">
                  <button className="btn btn-primary mb-5 mt-4" type="submit">
                    Apply
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

export default SignUp;
