import { Gender, NewPatient } from "../types";

const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

const parseText = (name: unknown): string => {
  if (!name || !isString(name)) {
    throw new Error("Incorrect or missing name");
  }
  return name;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error("Incorrect or missing date: " + date);
  }
  return date;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param: any): param is Gender => {
  return Object.values(Gender)
    .map((v) => v.toString())
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    .includes(param);
};

const parseGender = (gender: unknown): Gender => {
  if (!isGender(gender) || !isString(gender) || !Gender) {
    throw new Error("Incorrect or missing gender");
  }
  return gender;
};

const toNewPatientEntry = (object: unknown): NewPatient => {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing data");
  }

  if (
    "name" in object &&
    "ssn" in object &&
    "occupation" in object &&
    "dateOfBirth" in object &&
    "gender" in object
  ) {
    const newEntry: NewPatient = {
      name: parseText(object.name),
      ssn: parseText(object.ssn),
      occupation: parseText(object.occupation),
      gender: parseGender(object.gender),
      dateOfBirth: parseDate(object.dateOfBirth),
    };
    return newEntry;
  }

  throw new Error("Incorrect data: some fields are missing");
};

export default toNewPatientEntry;
