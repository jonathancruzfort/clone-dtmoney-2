const valores: number[] = [10, 20, 30];
const nomes: string[] = ['Jonathan', 'Miguel', 'Ana'];

const produto: {nome: string; preco: number; disponivel: boolean} = {
    nome: 'Caneta',
    preco: 3.4,
    disponivel: true
};

const outrosValores: Array<number> = [40, 50];
const outrosNomes: Array<string> = ['Maria', 'Batista'];

produto.disponivel = false;
console.log(valores, nomes, produto, outrosValores, outrosNomes);

