//--------------------------------------armazenando dois valores em um dado do objeto
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
//--------------------------------------adicionando novos valores dentro de um elemento do array
cliente.enderecos.push({
    rua: "R. das Seringueiras",
    numero: 135,
    apartamento: false,
    complemento: "casa",
})

cliente.enderecos.push({
    rua: "R. Afonso pena",
    numero: 49,
    apartamento: true,
    complemento: "ap 12",
})
//--------------------------------------criando uma nova lista
const listaApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true);

console.log(listaApartamentos);