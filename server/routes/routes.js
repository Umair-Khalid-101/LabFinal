const express = require("express");
const router = express.Router();
const copy = require("../models/applicantModel");

router.post("/SignUp", (request, response) => {
  const signedUpUser = new copy({
    name: request.body.name,
    registrationNumber: request.body.registrationNumber,
  });
  signedUpUser
    .save()
    .then((data) => {
      console.log("Data Saved");
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

router.put("/updateUser/:id", async (request, response) => {
  const { name, registrationNumber } = request.body;

  const update = await copy
    .findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          name: name,
          registrationNumber: registrationNumber,
        },
      },
      { new: true }
    )
    .then((data) => {
      console.log("Data Updated");
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

router.get("/users", function (req, res) {
  copy
    .find()
    .then((data) => {
      console.log("Data Fetched");
      res.json(data);
    })
    .catch((error) => console.log(error));
});

router.get("/user/:id", function (req, res) {
  copy
    .findById(req.params.id)
    .then((data) => {
      console.log("Data by ID Fetched");
      res.json(data);
    })
    .catch((error) => console.log(error));
});

router.delete("/User/:id", (request, response) => {
  copy
    .deleteOne({ _id: request.params.id })
    .then((result) => {
      console.log("Deleted Applicant");
      response.status(200).json(result);
    })
    .catch((error) => console.log(error));
});

module.exports = router;
