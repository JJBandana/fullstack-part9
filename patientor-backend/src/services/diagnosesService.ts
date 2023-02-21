import diagnosesData from "../../data/diagnosesEntries";

import { Diagnosis } from "../types";

const diagnoses: Diagnosis[] = diagnosesData;

const getEntries = (): Diagnosis[] => diagnoses;



const addDiagnosis = () => null;

export default { getEntries, addDiagnosis };
