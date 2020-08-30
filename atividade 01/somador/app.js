let rl = require('readline');

let leitor = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

leitor.question('Insira seus números separados por vírgula(,): ', (entrada) => {
  let aux = toArray(entrada).reduce((soma, elemento) => (soma += elemento));

  console.log(aux);
});

const toArray = (str) => str.split(',').map((num) => parseFloat(num));
