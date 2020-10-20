export default function mdc(num1, num2) {
  let teto = num1 <= num2 ? num1 : num2;

  for (teto; teto >= 1; teto--) {
    let resto1 = num1 % teto;
    let resto2 = num2 % teto;

    if (resto1 === 0 && resto2 === 0) return teto;
  }
}
