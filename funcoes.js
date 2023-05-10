//--------------------------------------
const cliente = {
    nome: 'Thainara',
    idade: '23',
    cpf: '48916388856',
    email: 'alves_thainara@hotmail.com',
    telefone: ["13991123747", "34942250"],
    saldo: 200,
    efetuaPagamento: function(valor){
        if(valor > cliente.saldo){
           // console.log("Saldo insuficiente");
        } else {
            cliente.saldo -= valor; 
           // console.log(`Pagamento aprovado. Saldo restante: ${cliente.saldo}`);
        } },
    };
cliente.efetuaPagamento(220);
//--------------------------------------
 const pet = {
    nome: "Chloe",
    idade: "1",
    saldoPetShop: 50,
    pagamento: function(valorBanho){
        if(valorBanho > this.saldoPetShop){
            //console.log(`Saldo insuficiente`);
        } else {
            this.saldoPetShop -= valorBanho;
            //console.log(`Pagamento aprovado, seu salto atual é de: ${this.saldoPetShop}`);
        }
    },
 };
 pet.pagamento(60);