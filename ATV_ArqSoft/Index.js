const Aluno = require('./Class/Aluno');
const TurmaPresencial = require('./Class/TurmaPresencial');

const aluno1 = new Aluno("Lucas", "Lucas2024", "utf123");
const turmaPresencial1 = new TurmaPresencial("N1", 8, 80);

console.log("Dados do Aluno:");
console.log(aluno1);

console.log("\nDados da Turma Presencial:");
console.log(turmaPresencial1);

if (turmaPresencial1.aprovado()) {
    console.log("\nAprovado!");
} else {
    console.log("\nReprovado!");
}