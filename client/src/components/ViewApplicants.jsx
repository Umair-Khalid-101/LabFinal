import React, { useEffect, useState } from "react";
import Home from "./Home";
import axios from "axios";
import { Link } from "react-router-dom";

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
      <div className="container mt-5" style={{ width: "70rem" }}>
        {applicant.map((app) => {
          return (
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Registration Number</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{app.name}</td>
                  <td>{app.registrationNumber}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(app._id)}
                    >
                      Delete
                    </button>
                    <Link to={`/UpdateUser/${app._id}`}>
                      <button className="btn btn-primary ms-3">Update</button>
                    </Link>
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
