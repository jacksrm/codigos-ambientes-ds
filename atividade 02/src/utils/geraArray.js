export default function geraArray(comprimentoArray) {
  let a = [];
  for (let i = 0; i < comprimentoArray; i++)
    a.push(Math.floor(Math.random() * 151));

  return a;
}
