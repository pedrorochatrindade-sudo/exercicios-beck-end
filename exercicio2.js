const alunos = [
  { nome: "Ana Silva", nota: 8.5, idade: 16, turma: "3A", faltas: 2 },
  { nome: "João Santos", nota: 6.0, idade: 17, turma: "3B", faltas: 8 },
  { nome: "Maria Oliveira", nota: 9.0, idade: 16, turma: "3A", faltas: 0 },
  { nome: "Pedro Costa", nota: 4.5, idade: 17, turma: "3B", faltas: 12 },
  { nome: "Julia Lima", nota: 7.5, idade: 16, turma: "3A", faltas: 3 },
  { nome: "Carlos Mendes", nota: 5.5, idade: 17, turma: "3B", faltas: 7 },
  { nome: "Beatriz Rocha", nota: 8.0, idade: 16, turma: "3A", faltas: 1 },
  { nome: "Lucas Ferreira", nota: 6.5, idade: 17, turma: "3B", faltas: 5 }
];

// 1. Alunos aprovados (nota >= 6.0)
function alunosAprovados(alunos) {
  return alunos.filter(aluno => aluno.nota >= 6);
}

console.log("Alunos Aprovados:");
console.log(alunosAprovados(alunos));

// 2. Array com apenas os nomes dos alunos
function nomesAlunos(alunos) {
  return alunos.map(aluno => aluno.nome);
}

console.log("\nNomes dos Alunos:");
nomesAlunos(alunos).forEach(nome => console.log(nome));

// 3. Boletim completo com status
function boletimCompleto(alunos) {
  return alunos.map(aluno => {
    const status = aluno.nota >= 6 ? "Aprovado" : "Reprovado";
    return `${aluno.nome} - Nota: ${aluno.nota} - Status: ${status}`;
  });
}

console.log("\nBoletim Completo:");
boletimCompleto(alunos).forEach(item => console.log(item));

// 4. Média geral das notas
function mediaGeral(alunos) {
  const soma = alunos.reduce((acc, aluno) => acc + aluno.nota, 0);
  return (soma / alunos.length).toFixed(2);
}

console.log("\nMédia Geral da Turma:", mediaGeral(alunos));

// 5. Agrupar alunos por turma
function agruparPorTurma(alunos) {
  return alunos.reduce((acc, aluno) => {
    if (!acc[aluno.turma]) {
      acc[aluno.turma] = [];
    }
    acc[aluno.turma].push(aluno.nome);
    return acc;
  }, {});
}

console.log("\nAlunos por Turma:");
console.log(agruparPorTurma(alunos));

// 6. Alunos com mais de 6 faltas
function alunosEmRisco(alunos) {
  return alunos.filter(aluno => aluno.faltas > 6);
}

console.log("\nAlunos em risco de reprovação por falta:");
alunosEmRisco(alunos).forEach(aluno => console.log(aluno.nome));

// 7. Três melhores alunos da turma 3A
function top3Turma3A(alunos) {
  return alunos
    .filter(aluno => aluno.turma === "3A")
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 3)
    .map(aluno => ({ nome: aluno.nome, nota: aluno.nota }));
}

console.log("\nTop 3 Alunos da Turma 3A:");
top3Turma3A(alunos).forEach(aluno => console.log(`${aluno.nome} - Nota: ${aluno.nota}`));