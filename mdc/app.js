let rl = require('readline');

let leitor = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

leitor.question('Insira os dois divisores separados por vírgula(,): ', (entrada) => {
    let aux = toArray(entrada);

    console.log(`MDC = ${mdc(aux[0], aux[1])}`);
  }
);

const toArray = (str) => str.split(',').map((num) => parseInt(num));

const mdc = (num1, num2) => {
  let teto = num1 <= num2 ? num1 : num2;

  for (teto; teto >= 1; teto--) {
    let resto1 = num1 % teto;
    let resto2 = num2 % teto;

    if (resto1 === 0 && resto2 === 0) return teto;
  }
};

