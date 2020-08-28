let rl = require('readline');

let leitor = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

leitor.question('Insira um número: ', (entrada) => {
  let num = parseInt(entrada);
  console.log(ePrimo(num) === true ? 'É primo' : 'Não é primo');
});

const ePrimo = (n) => {
  for(let i = 2; i < n; i++) {
    let aux = n % i;

    if(aux === 0) return false;
  }
  
  return n > 1;
};