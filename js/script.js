// Lista de Convidados para uma FESTA!

console.log('########################################');
console.log('Programa para controle de festinha 1.0');
console.log('########################################');

let numeroDeConvidados = prompt('Coloque o numero de convidados: ');
let listaDeConvidados = [];

for (let item = 1; item <= numeroDeConvidados; item++) {
  let nomeDoConvidado = prompt(
    'Coloque o nome do convidado #' + String(item) + ': '
  );

  listaDeConvidados.push(nomeDoConvidado);
}

console.log('Serão', numeroDeConvidados, 'convidados!');

console.log('\nLISTA DE CONVIDADOS...');
for (let convidado of listaDeConvidados) {
  console.log(convidado);
}
