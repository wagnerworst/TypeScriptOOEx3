"use strict";
//Crie uma classe chamada Estudante
class Estudante {
    //A classe deve ter um construtor que aceita nome, idade e curso
    constructor(nome, idade, curso) {
        this.Nome = nome,
            this.Idade = idade,
            this.Curso = curso;
    }
    //além de implementar
    apresentarEstudante() {
        return `Aluno: ${this.Nome}\nIdade: ${this.Idade}\nCurso: ${this.Curso}\n`;
    }
    editarCurso() {
        return false;
    }
}
//Crie uma classe chamada Professor
class Professor {
    // A classe deve ter um construtor que aceita nome, idade e materia
    constructor(nome, idade, materia) {
        this.Nome = nome,
            this.Idade = idade,
            this.Materia = materia;
    }
    // além de implementar
    apresentarProfessor() {
        return `Professor: ${this.Nome}\nIdade: ${this.Idade}\nMateria: ${this.Materia}\n`;
    }
    editarCurso() {
        return true;
    }
}
const joao = new Estudante("João", 30, "Typescript");
const jeff = new Professor("Jefferson", 29, "Typescript");
console.log(joao.apresentarEstudante());
console.log(jeff.apresentarProfessor());
console.log(joao.editarCurso());
console.log(jeff.editarCurso());
