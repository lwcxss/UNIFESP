class Aluno {
    nome: string;
    idade: number;
    data_criada: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
        this.data_criada = Date.now();
    }
}

let aluno1: Aluno = new Aluno("joao", 13);