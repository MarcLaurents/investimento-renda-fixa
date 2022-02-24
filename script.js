class InvestimentoRendaFixaCDI120 {
  constructor() {
    this.saldo = 0
    this.cdi = 120
  } // ------
  investir(valor) {
    this.saldo += valor
  } // ------
  rentabilidadeInvestimento(indice) {
    this.saldo += (((this.saldo * indice) / 100) * this.cdi) / 100
  } // ------
  imprimirSaldo(mes) {
    console.log(`Saldo RF 120% CDI Mes ${mes} = R$ ${this.saldo}`)
  } // ------
} // ------
// ------
class investimentoRendaFixaCDI180 extends InvestimentoRendaFixaCDI120 {
  constructor(saldo, valor, cdi) {
    super(saldo, valor)
    this.cdi = 180
  } // ------
  rentabilidadeInvestimento(indice) {
    this.saldo += (((this.saldo * indice) / 100) * this.cdi) / 100
  } // ------
  imprimirSaldo(mes) {
    console.log(`Saldo RF 120% CDI Mes ${mes} = R$ ${this.saldo}`)
  } // ------
}

var invest120 = new InvestimentoRendaFixaCDI120()
invest120.investir(1000)
invest120.imprimirSaldo('Set/2020')
invest120.rentabilidadeInvestimento(0.16)
invest120.imprimirSaldo('Out/2020')
// ------
var invest180 = new investimentoRendaFixaCDI180()
invest180.investir(1000)
invest180.imprimirSaldo('Set/2020')
invest180.rentabilidadeInvestimento(0.16)
invest180.imprimirSaldo('Out/2020')
