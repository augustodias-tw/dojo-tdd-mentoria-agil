export function moneyFormater (valor) {
    return valor.toLocaleString('pt-BR', {minimumFractionDigits:2, style:'currency', currency:'BRL'})
}