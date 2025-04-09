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
var StatusEmbalo;
(function (StatusEmbalo) {
    StatusEmbalo[StatusEmbalo["Pendente"] = 0] = "Pendente";
    StatusEmbalo[StatusEmbalo["EmAndamento"] = 1] = "EmAndamento";
    StatusEmbalo[StatusEmbalo["Concluida"] = 2] = "Concluida";
})(StatusEmbalo || (StatusEmbalo = {}));
var produtoTupla = [
    'Teclado',
    150,
    true,
    StatusEmbalo.Concluida
];
var minhaTarefa = StatusEmbalo.Pendente;
console.log(produtoTupla);
console.log(StatusEmbalo[minhaTarefa]); // Saída: "Pendente"
