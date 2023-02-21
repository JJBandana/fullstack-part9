import uuid from "../utils/uuid";

import patientsData from "../../data/patientsEntries";

import { Patient, NonSensitivePatient, NewPatient } from "../types";

const patients: Patient[] = patientsData;

const getPatients = (): Patient[] => patients;

const getNonSensitivePatients = (): NonSensitivePatient[] =>
  patientsData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));

const addPatient = (input: NewPatient): Patient => {
  const newPatient = {
    id: uuid(),
    ...input,
  };

  patientsData.push(newPatient);
  return newPatient;
};

const findById = (id: string): Patient | undefined => {
  const patient = patients.find((p) => p.id == id);
  return patient;
};

export default { getPatients, getNonSensitivePatients, findById, addPatient };
