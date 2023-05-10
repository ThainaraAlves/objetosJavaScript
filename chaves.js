const cliente = {
    nome: 'Thainara',
    idade: '23',
    cpf: '48916388856',
    email: 'alves_thainara@hotmail.com',
    telefone: ["13991123747", "34942250"],
};
// cliente.enderecos = [{
//     rua:"Av. Marechal Mauricio Jose Cardoso",
//     numero: 697,
//     apartamento: true,
//     complemento: "ap 934",
// }];
const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")) {
  console.error("Erro. É necessário ter um endereço cadastrado.");
}