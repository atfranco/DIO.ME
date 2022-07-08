// categorias aceitas
enum Trabalho {
    Atriz,
    Padeiro
}
// definindo tipagem para humano
type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}
// pessoa 1 é humano e o que completa a tipagem é..
let pessoa1: Humano = {
    nome: 'maria',
    idade: 29,
    profissao: Trabalho.Atriz
};
// pessoa 2 é humano e o que completa a tipagem é..
let pessoa2: Humano = {
    nome: 'roberto',
    idade: 19,
    profissao: Trabalho.Padeiro
};
// pessoa 3 é humano e o que completa a tipagem é..
let pessoa3: Humano = {
    nome: 'laura',
    idade: 32,
    profissao: Trabalho.Atriz
};
// pessoa 4 é humano e o que completa a tipagem é..
let pessoa4: Humano = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.Padeiro
}