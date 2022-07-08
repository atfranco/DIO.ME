
// funcionario fica "restrito nesta tipagem" e suas variaveis são
const funcionario: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'João'
}
// funcionario01 fica "restrito nesta tipagem" e suas variaveis são
const funcionario01: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'Joao'
}

// Definindo uma interface para as tipagens das variaveis de funcionário
interface Funcionario {
    codigo: number,
    nome: string
}
// funcionario02 tem a interface Funcionario para a tipagem de suas variaveis
const funcionario02: Funcionario = {
    codigo: 200,
    nome: 'João'
}