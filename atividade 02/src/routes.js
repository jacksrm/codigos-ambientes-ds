import express from 'express';

import contagem from './utils/contagem';
import fibonacci from './utils/fibonacci';
import geraArray from './utils/geraArray';
import mdc from './utils/mdc';
import primo from './utils/primo';
import quickSort from './utils/quickSort';
import somador from './utils/somador';

const routes = express.Router();

routes.post('/contagem', (req, res) => {
  const { numero } = req.body;

  const resultado = contagem(numero);

  return res.json({ resultado });
});

routes.post('/fibonacci', (req, res) => {
  const { quantidade } = req.body;

  const sequencia = fibonacci(quantidade);

  return res.json({ sequencia });
});

routes.post('/mdc', (req, res) => {
  const { num1, num2 } = req.body;

  const calculoMdc = mdc(num1, num2);

  return res.json({ calculoMdc });
});

routes.post('/primo', (req, res) => {
  const { numero } = req.body;

  const ePrimo = primo(numero);

  return res.json({ ePrimo });
});

routes.post('/quick-sort', (req, res) => {
  const { array } = req.body;

  const arrayOrdenado = quickSort(array);

  return res.json({ arrayOrdenado });
});

routes.post('/somador', (req, res) => {
  const { array } = req.body;

  const arraySomado = somador(array);

  return res.json({ arraySomado });
});

routes.post('/gera-array', (req, res) => {
  const { tamanhoDoArray } = req.body;

  const array = geraArray(tamanhoDoArray);

  return res.json({ array });
});

export default routes;