/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from "express";
import calculateBmi from "./bmiCalculator";
import calculateExercises from "./exerciseCalculator";

const app = express();
app.use(express.json());

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const weight = Number(req.query.weight);
  const height = Number(req.query.height);

  if (!isNaN(weight) && !isNaN(height)) {
    res.send(calculateBmi(height, weight));
  } else {
    res.status(400).send({ error: "malformatted parameters" }).end();
  }
});

app.get("/exercises", (req, res) => {
  const { daily_exercises, target } = req.body;
  
  if(!daily_exercises || isNaN(Number(target))){
    res.status(418).send({ error: "malformatted parameters" });
  }

  res.send(calculateExercises(daily_exercises, target));
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
