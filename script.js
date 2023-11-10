function calcularConversao() {
    var valor = parseFloat(document.getElementById('valorConverter').value);
    var desconto2Percent = valor * 0.02;
    var desconto14Percent = desconto2Percent * 0.14;
    var descontoTotal = desconto2Percent + desconto14Percent;
    var totalComDescontos = valor - descontoTotal;
    var totalpercent = (totalComDescontos * 0.03);
    var totalEurosNoATM = totalComDescontos - totalpercent;
    var cambioAtual = parseFloat(document.getElementById('cambioAtual').value);
    var resultadoFinal = totalEurosNoATM / cambioAtual;

    document.getElementById('resultados').innerHTML = "<h3>Resultados:</h3>";
    document.getElementById('resultados').innerHTML += "<p>VALOR NO KAMBA BAI: " + totalComDescontos.toFixed(2) + "</p>";
    document.getElementById('resultados').innerHTML += "<p>VALOR APÓS LEVANTAMENTO NO ATM: " + resultadoFinal.toFixed(2) + "</p>";
}
