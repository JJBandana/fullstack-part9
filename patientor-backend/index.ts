import express from 'express';
import cors from 'cors';
import diagnosesRouter from './src/routes/diagnoses';
import patientsRouter from './src/routes/patients';
const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3001;

app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong').end();
});

app.use('/api/diagnosis', diagnosesRouter);
app.use('/api/patients', patientsRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});