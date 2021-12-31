import React, { useEffect, useState } from "react";
import Home from "./Home";
import axios from "axios";

const ViewApplicants = () => {
  const [applicant, setApplicant] = useState([]);
  useEffect(() => {
    const data = axios
      .get("http://localhost:3001/app/users")
      .then((response) => {
        console.log(response);
        setApplicant(response.data);
      });
    return () => {};
  }, []);

  const handleDelete = (id) => {
    // alert(id);
    axios
      .delete(`http://localhost:3001/app/User/${id}`)
      .then((res) => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Home />
      <div className="container mt-5" style={{ width: "50rem" }}>
        {applicant.map((app) => {
          return (
            <table class="table">
              <thead>
                <tr>
                  <th className="text-center" scope="col">
                    Name
                  </th>
                  <th className="text-center" scope="col">
                    Registration Number
                  </th>
                  <th className="text-center" scope="col">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">{app.name}</td>
                  <td className="text-center">{app.registrationNumber}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(app._id)}
                    >
                      Delete
                    </button>
                    <button className="btn btn-primary ms-5">Update</button>
                  </td>
                </tr>
              </tbody>
            </table>
          );
        })}
      </div>
    </>
  );
};

export default ViewApplicants;
