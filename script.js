function calcularConversao() {
    var valor = parseFloat(document.getElementById('valorConverter').value);
    var desconto2Percent = valor * 0.02;
    var desconto14Percent = desconto2Percent * 0.14;
    var descontoTotal = desconto2Percent + desconto14Percent;
    var totalComDescontos = valor - descontoTotal;
    var totalpercent = (totalComDescontos * 0.03);
    var totalpercent2 = (totalpercent*0.14);
    var totalpercentfinal=(totalpercent+totalpercent2);
    var totalEurosNoATM = totalComDescontos - totalpercentfinal;
    var cambioAtual = parseFloat(document.getElementById('cambioAtual').value);
    var resultadoFinal = totalEurosNoATM / cambioAtual;

    document.getElementById('resultados').innerHTML = "<h3>Resultados:</h3>";
    document.getElementById('resultados').innerHTML += "<p>VALOR NO KAMBA BAI EM KWANZA: " + totalComDescontos.toFixed(2) + "</p>";
    document.getElementById('resultados').innerHTML += "<p>VALOR DISPONÍVEL PARA LEVANTAMENTO NO ATM EM EURO: " + resultadoFinal.toFixed(2) + "</p>";
}
