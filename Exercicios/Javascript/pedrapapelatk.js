// a função gets() é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print() para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let N = parseInt(gets());
let jogador1, jogador2;
for (let i = 0; i < N; i++) {
    jogador1 = gets();
    jogador2 = gets();
    		
//TODO: Complete os espaços em branco com uma possível solução para o desafio

const playerUm = jogador1.toUpperCase();
const playerDois = jogador2.toUpperCase();

const compararPlayers = (attackUm, attackDois) =>  playerUm === attackUm && playerDois === attackDois;

if(compararPlayers("ATAQUE", "ATAQUE")) print("Aniquilacao mutua");
  else if (compararPlayers("ATAQUE", "PEDRA")) print("Jogador 1 venceu");
  else if (compararPlayers("ATAQUE", "PAPEL")) print("Jogador 1 venceu");
  else if (compararPlayers("PEDRA", "ATAQUE")) print("Jogador 2 venceu");
  else if (compararPlayers("PEDRA ", "ATAQUE")) print("Jogador 2 venceu");
  else if (compararPlayers("PEDRA", "PEDRA")) print("Sem ganhador");
  else if (compararPlayers("PEDRA", "PAPEL")) print("Jogador 1 venceu");
  else if (compararPlayers("PAPEL", "ATAQUE")) print("Jogador 2 venceu");
  else if (compararPlayers("PAPEL", "PAPEL")) print("Ambos venceram");
  else if (compararPlayers("PAPEL", "PEDRA")) print("Jogador 2 venceu");
  else print("Sem ganhador");
}