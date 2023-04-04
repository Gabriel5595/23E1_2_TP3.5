const number = document.getElementById("number");
const mostraNumEscolhidos = document.getElementById("mostraNumEscolhidos");
const mostraNumSorteados = document.getElementById("mostraNumSorteados");

const numEscolhidos = [];
const numSorteados = [];

function salvaNum() {
  const numEscolhido = number.value;
  console.log(`O número escolhido foi ${numEscolhido}`);
  verificaNumEscolhido(numEscolhido);
}

function verificaNumEscolhido(numEscolhido) {
  if (numEscolhido < 1 || numEscolhido > 100) {
    alert("Número inválido! Por favor, escolha números de 1 a 100!")
  } else {
    numEscolhidos.push(numEscolhido);
    console.log(`O número ${numEscolhido} é válido e foi adicionado ao array`);
    number.value = "";
    if (numEscolhidos.length >= 6) {
      mostraNumEscolhidos.innerText = `Os números escolhidos foram ${numEscolhidos}`;
      sorteiaNums()
    }
  }
}

function sorteiaNums() {
  for (x = 0; x < 6; x++) {
    console.log("O While foi iniciado");
    let numSorteado = Math.floor(Math.random() * 100);
    console.log(`O número sorteado foi o ${numSorteado}`);
    numSorteados.push(numSorteado);
  }
  console.log(`Os números sorteados foram ${numSorteados}`)
  mostraNumSorteados.innerText = `Os números sorteados foram ${numSorteados}`;
}