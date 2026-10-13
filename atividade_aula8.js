const alunos = ["Ana", "Bruno", "Carla"]; // Guarda os nomes dos três alunos.
let notas = [ // Cria a matriz com três linhas de notas.
[8, 7, 9], // Guarda as três notas de Ana.
[6, 10, 5], // Guarda as três notas de Bruno.
[9, 8, 7] // Guarda as três notas de Carla.
]; // Encerra a matriz.
console.log("2a nota de Ana:", notas[0][1]); // Mostra a segunda nota de Ana.
console.log("3a nota de Bruno (antes):", notas[1][2]); // Mostra a nota original de Bruno.
notas[1][2] = 7; // Altera a terceira nota de Bruno de 5 para 7.
console.log("3a nota de Bruno (depois):", notas[1][2]); // Confirma a alteração.
console.log("\nNotas dos alunos:"); // Exibe o título da listagem.
for (let i = 0; i < notas.length; i++) { // Percorre as linhas (alunos).
for (let j = 0; j < notas[i].length; j++) { // Percorre as colunas (avaliações).
console.log(alunos[i] + " - Avaliação " + (j + 1) + ": " + notas[i][j]); // Mostra cada nota.
} // Encerra o laço das avaliações.
} // Encerra o laço dos alunos.
function calcularMedia(n1, n2, n3) { // Recebe três notas como parâmetros.
return (n1 + n2 + n3) / 3; // Calcula e devolve a média.
} // Encerra a função de média.
function verificarSituacao(media) { // Recebe a média de um aluno.
if (media >= 7) { // Verifica se a média é pelo menos 7.
console.log("Aprovado"); // Mostra a situação de aprovação.
} else { // Trata as médias menores que 7.
console.log("Em recuperação"); // Mostra a situação de recuperação.
} // Encerra a condição.
} // Encerra a função de situação.
console.log("\nResultado final:"); // Exibe o título do resultado.
for (let i = 0; i < notas.length; i++) { // Percorre os três alunos.
let media = calcularMedia(notas[i][0], notas[i][1], notas[i][2]); // Calcula a média do aluno.
console.log(alunos[i] + " - Média: " + media.toFixed(2)); // Mostra o nome e a média com duas casas.
verificarSituacao(media); // Mostra a situação do aluno.
} // Encerra o laço dos resultados.