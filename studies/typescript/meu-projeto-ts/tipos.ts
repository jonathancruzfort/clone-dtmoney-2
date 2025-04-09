const meuNome: string = 'Jonathan';
const minhaIdade: number = 31;
const likeTypescript: boolean = true;
const valorDesconhecido: unknown = 'qualquer valor';

function retornaNada(): void {
    console.log(`Olá ${meuNome}, essa função não retorna nada`);
    // return 3; erro
}

console.log(retornaNada());
