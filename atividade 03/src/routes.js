import express from 'express';

import divisao from './utils/divisao';
import multiplicacao from './utils/multiplicacao';
import soma from './utils/soma';
import subtracao from './utils/subtracao';

const routes = express.Router();

routes.post('/soma', (req, res) => {
  const { num1, num2 } = req.body;

  const resultado = soma(num1, num2);

  return res.json({ resultado });
});

routes.post('/subtracao', (req, res) => {
  const { num1, num2 } = req.body;

  const resultado = subtracao(num1, num2);

  return res.json({ resultado });
});

routes.post('/multiplicacao', (req, res) => {
  const { num1, num2 } = req.body;

  const resultado = multiplicacao(num1, num2);

  return res.json({ resultado });
});

routes.post('/divisao', (req, res) => {
  const { num1, num2 } = req.body;

  const resultado = divisao(num1, num2);

  return res.json({ resultado });
});

export default routes;
