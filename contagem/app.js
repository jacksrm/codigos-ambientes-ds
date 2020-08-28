let rl = require('readline');

let leitor = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

leitor.question('Insira um número: ', (entrada) => {
  console.log(`Existem ${entrada} números entre ${entrada} e 1.`);
});