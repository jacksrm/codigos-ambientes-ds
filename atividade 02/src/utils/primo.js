export default function primo(numero) {
  for (let i = 2; i < numero; i++) {
    let aux = numero % i;

    if (aux === 0) return false;
  }

  return numero > 1;
}
