const dados = require("./cliente.json");
//console.log(dados);
//console.log(typeof dados);

const clienteEmString = JSON.stringify(dados);

//console.log(clienteEmString); 
//console.log(typeof clienteEmString);

const clienteVoltaObjeto = JSON.parse(clienteEmString);

//console.log(clienteVoltaObjeto);

//--------------------------------------Usando JSON para tranformar objeto em string

const fichaPet = {
    raca: "Buldogue Frances",
    cor: "Tigrada",
}
const acessoriosPet = {
    coleira: "Rosa",
    enfeite: "Laços",
    saldoGanho: 30,
    valorAPagar: function (valor){
        if(valor > this.saldoGanho ){
        const diferenca = valor - this.saldoGanho;
        //console.log(`Pagamento recusado, falta R$ ${diferenca.toFixed(2)} para concluir o pagamento`);
    } else {
        // 
        //const petPronto = {...fichaPet};
        //console.log(`O pet da ficha ${JSON.stringify(petPronto)}, esta pronto`);
    }
  },
};

acessoriosPet.valorAPagar(28);
//--------------------------------------
