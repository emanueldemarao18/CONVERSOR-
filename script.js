
function validarLogin(event) {
    event.preventDefault(); 
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    if (usuario === "emanuel" && senha === "123") {
        document.getElementById('mensagem').innerHTML = "<p style='color: green;'>Login bem-sucedido!</p>";
        setTimeout(function() {
            window.location.href = "page2.html"; 
        }, 1000)
    } else {
        document.getElementById('mensagem').innerHTML = "<p style='color: red;'>Usuário ou senha incorretos.</p>";
    }
}


function calcularConversao() {
    var valor = parseFloat(document.getElementById('valorConverter').value);
    var desconto2Percent = valor * 0.02;
    var desconto14Percent = desconto2Percent * 0.14;
    var descontoTotal = desconto2Percent + desconto14Percent;
    var totalComDescontos = valor - descontoTotal;
    var totalpercent = (totalComDescontos * 0.03);
    var totalpercent2 = (totalpercent * 0.14);
    var totalpercentfinal = (totalpercent + totalpercent2);
    var totalEurosNoATM = totalComDescontos - totalpercentfinal;
    var cambioAtual = parseFloat(document.getElementById('cambioAtual').value);
    var resultadoFinal = totalEurosNoATM / cambioAtual;

    document.getElementById('resultados').innerHTML = "<h3>Resultados:</h3>";
    document.getElementById('resultados').innerHTML += "<p>VALOR NO KAMBA BAI EM KWANZA: " + totalComDescontos.toFixed(2) + "</p>";
    document.getElementById('resultados').innerHTML += "<p>VALOR DISPONÍVEL PARA LEVANTAMENTO NO ATM EM EURO: " + resultadoFinal.toFixed(2) + "</p>";
}
