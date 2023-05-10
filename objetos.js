//--------------------------------------Acessando dados do objetos
const dados = {
    nome: 'Thainara',
    idade: '23',
    cpf: '48916388856',
    email: 'alves_thainara@hotmail.com',
}

//console.log(`O nome dessa pessoa é ${dados.nome}, ela tem ${dados.idade} anos.`);
//console.log(`Os tres primeiros digitos de seu CPF são ${dados.cpf.substring(0,3)}`);

//--------------------------------------Acessando dados do objetos com conchetes/ quando nao sabemos o valor do objeto; 
//--------------------------------------Adicionando e removendo dados do objetos.
const cliente = {
    nome: 'Bryan',
    idade: '03',
    cpf: '45698543888',
    email: 'alves_bryan@hotmail.com',
}
cliente.telefone = '13991242525';
cliente.nome = 'Bryan Alves';
delete cliente.email;

const chaves = ["nome", "idade", "cpf"];

chaves.forEach( (chave) => {
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
});

console.log(cliente);
//--------------------------------------

