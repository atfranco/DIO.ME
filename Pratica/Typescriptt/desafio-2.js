"use strict";
// categorias aceitas
var Trabalho;
(function (Trabalho) {
    Trabalho[Trabalho["Atriz"] = 0] = "Atriz";
    Trabalho[Trabalho["Padeiro"] = 1] = "Padeiro";
})(Trabalho || (Trabalho = {}));
// pessoa 1 é humano e o que completa a tipagem é..
let pessoa1 = {
    nome: 'maria',
    idade: 29,
    profissao: Trabalho.Atriz
};
// pessoa 2 é humano e o que completa a tipagem é..
let pessoa2 = {
    nome: 'roberto',
    idade: 19,
    profissao: Trabalho.Padeiro
};
// pessoa 3 é humano e o que completa a tipagem é..
let pessoa3 = {
    nome: 'laura',
    idade: 32,
    profissao: Trabalho.Atriz
};
// pessoa 4 é humano e o que completa a tipagem é..
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.Padeiro
};
