// const produtoTupla: [string, number, boolean] = [
//     'Teclado',
//     150,
//     true
// ]

// enum StatusTarefa {
//     Pendente,
//     EmAndamento,
//     Concluida
// }

// const minhaTarefa: StatusTarefa = StatusTarefa.Pendente

// console.log(minhaTarefa);
// console.log(StatusTarefa[minhaTarefa]); // Saída: "Pendente"

enum StatusEmbalo {
    Pendente,
    EmAndamento,
    Concluida
}

const produtoTupla: [string, number, boolean, StatusEmbalo] = [
    'Teclado',
    150,
    true,
    StatusEmbalo.Concluida
]

const minhaTarefa: StatusEmbalo = StatusEmbalo.Pendente

console.log(produtoTupla);
console.log(StatusEmbalo[minhaTarefa]); // Saída: "Pendente"
