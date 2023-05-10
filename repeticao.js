const cliente = {
    nome: 'Thainara',
    idade: '23',
    cpf: '48916388856',
    email: 'alves_thainara@hotmail.com',
    telefone: ["13991123747", "34942250"],
};

cliente.enderecos = [{
    rua:"Av. Marechal Mauricio Jose Cardoso",
    numero: 697,
    apartamento: true,
    complemento: "ap 934",
}];

for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if(tipo !== 'object' && tipo!== "function")
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
}