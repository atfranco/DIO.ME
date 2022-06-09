const objs = [    
    {
        "nome": "Alberto",
        "idade": "30",
        "trabalha": true,
        "hobbies": "golf",
        "detalhes": ["Programar", "Correr", "Ler"]
    },
    {
        "nome": "Bebeto",
        "idade": "31",
        "trabalha": true,
        "hobbies": "futebol",
        "detalhes": ["Cagar", "Andar", "Ver"]
    }
]

console.log(objs)

// JSON - converte objt p json

const jsonData = JSON.stringify(objs)

console.log(jsonData)
console.log(typeof jsonData)

// converter json para obj

const objData = JSON.parse(jsonData)

console.log(objData)
console.log(typeof objData)

objData.map((pessoa) => {
    console.log(pessoa.nome)
})