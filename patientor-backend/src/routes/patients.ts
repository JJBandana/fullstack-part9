/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from "express";
import patientsService from "../services/patientsService";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(patientsService.getNonSensitivePatients()).end();
});

router.get("/:id", (req, res) => {
  const patient = patientsService.findById(String(req.params.id));

  if (patient) res.send(patient);
  else res.sendStatus(404);
});

router.post("/", (req, res) => {
  const { name, dateOfBirth, gender, occupation, ssn } = req.body;
  const addedPatient = patientsService.addPatient({
    name, dateOfBirth, gender, occupation, ssn
  });
  res.json(addedPatient);
});

export default router;
