'use strict';

let a = [];

for (let i = 0; i < 100; i++) a.push(Math.floor(Math.random() * 151));

const quickSort = (vetor, left = 0, right = vetor.length - 1) => {
  let pivo = left;
  if (left < right) {
    let pivoIndex = quebra(vetor, left, right, pivo);

    quickSort(vetor, left, pivoIndex - 1);
    quickSort(vetor, pivoIndex + 1, right);
  }
  return vetor;
};

const quebra = (vetor, left, right, pivo) => {
  let p = vetor[pivo];
  troca(vetor, right, pivo);
  let aux = left;

  for (let i = left; i < right; i++) {
    if (vetor[i] <= p) {
      troca(vetor, i, aux);
      aux = aux + 1;
    }
  }

  troca(vetor, right, aux);
  return aux;
};

const troca = (vetor, i, j) => {
  let temp = vetor[i];
  vetor[i] = vetor[j];
  vetor[j] = temp;
};

quickSort(a);

console.log(a);