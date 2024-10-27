//Crie uma classe chamada Estudante
class Estudante {
  private Nome: string;
  private Idade: number;
  private Curso: string;
//A classe deve ter um construtor que aceita nome, idade e curso
  constructor(nome: string, idade:number, curso:string){
    this.Nome = nome,
    this.Idade = idade,
    this.Curso = curso
  }
//além de implementar
  apresentarEstudante() : string{
    return `Aluno: ${this.Nome}\nIdade: ${this.Idade}\nCurso: ${this.Curso}\n`;
  }

  editarCurso() : boolean {
    return false;
  }
}

//Crie uma classe chamada Professor
class Professor{
  private Nome: string;
  private Idade: number;
  private Materia: string;
// A classe deve ter um construtor que aceita nome, idade e materia
  constructor(nome: string, idade: number, materia: string)
  {
    this.Nome = nome,
    this.Idade = idade,
    this.Materia = materia;
  }
// além de implementar
  apresentarProfessor(): string{
    return `Professor: ${this.Nome}\nIdade: ${this.Idade}\nMateria: ${this.Materia}\n`;
  }

  editarCurso() : boolean {
    return true;
  }
}


const joao = new Estudante("João", 30, "Typescript");
const jeff = new Professor("Jefferson", 29, "Typescript");

console.log(joao.apresentarEstudante());
console.log(jeff.apresentarProfessor());

console.log(joao.editarCurso());
console.log(jeff.editarCurso());
