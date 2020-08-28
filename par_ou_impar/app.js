let rl = require('readline');

let leitor = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

leitor.question('Insira um número: ', (entrada) => {
  let num = parseInt(entrada);
  console.log(isEven(num));
});

const isEven = (n) => {
  let aux = n % 2;

  if (n === 0) {
    return 'Par';
  } else {
    return 'Impar';
  }
};
