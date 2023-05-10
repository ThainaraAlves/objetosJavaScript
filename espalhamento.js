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

function ligaParaCliente (celular, telefoneFixo) {
    //console.log(`Ligando para celular ${celular}`);
    //console.log(`Ligando para telefone ${telefoneFixo}`);
}
ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
}
//console.log(encomenda);

//--------------------------------------
const fichaPet = {
    raca: "Buldogue Frances",
    cor: "Tigrada",
    telefoneDono: ["13991123747", "34942250"],
}
const acessoriosPet = {
    coleira: "Rosa",
    enfeite: "Laços",
    saldoGanho: 30,
    valorAPagar: function (valor){
        if(valor > this.saldoGanho ){
        //console.log('Pagamento recusado.');
    } else {
        //console.log('Pagamento aprovado.');
    }
  },
};
acessoriosPet.valorAPagar(35);

function contatoComODono (whatsapp, teleFixo) {
    //console.log(`Avisando o dono por mensagem ${whatsapp}`);
    //console.log(`Ligando para o dono, telefone fixo : ${teleFixo}`);
}
contatoComODono(...fichaPet.telefoneDono);
