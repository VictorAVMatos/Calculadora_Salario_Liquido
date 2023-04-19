///Este código tem como objetivo calcular o salário líquido dos trabalhadores
///que têm registro no regime CLT.
///O saldo desta calculadora, poderá também, auxiliar no cálculo de margem consignável
///O que torna este programa totalmente utilizável para profissionais que oferecem empréstimo Consignado
///para seus clientes, e que o sistema que eles utilizam não tem essa função automatizada.

///Alguns descontos de alíquota são fixos e outros variam de acordo com o número de dependentes do funcionário

/// 1 - descontoIRRF = 1,54% / 0,0154 (para quem não possui dependentes)
/// 2 - descontoIRFF = 1,03% / 0,013 (para quem possui um dependente)
/// 3 - descontoIRFF = 0,43% / 0,0043 (para quem possui dois dependentes)
/// 4 - descontoIRFF = 0,00% (para quem possui três ou mais dependentes)
/// # descontoINSS = 8,30%

const salarioBruto = 2615;
const descontoINSS = 0.83
const salarioLiquido = 1

if (salarioLiquido === 1) {
    console.log (salarioBruto - descontoINSS - (salarioBruto * 0.0154));
} else if (salarioLiquido === 2) {
    console.log (salarioBruto - descontoINSS - (salarioBruto * 0.013));
} else if (salarioLiquido === 3) {
    console.log (salarioBruto - descontoINSS - (salarioBruto * 0.0043));
} else {
    console.log (salarioBruto - descontoINSS)
}