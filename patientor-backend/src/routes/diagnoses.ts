import express from 'express';
import diagnosesService from '../services/diagnosesService';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(diagnosesService.getEntries()).end();
});

router.post('/', (_req, res) => {
  res.send('Saving a diagnosis').end();
});

export default router;