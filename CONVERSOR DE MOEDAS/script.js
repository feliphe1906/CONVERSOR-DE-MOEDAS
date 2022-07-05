function ConverterRealParaDolar() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);
  var valorEmDolar = valorEmRealNumerico * 5.33;
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado Convertido me Real é R$ " + valorEmDolar.toFixed(2);
  elementoValorConvertido.innerHTML = valorConvertido;
}
function ConverterRealParaEuro() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);
  var valorEmEuro = valorEmRealNumerico * 5.56;
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado Convertido me Real é R$ " + valorEmEuro.toFixed(2);
  elementoValorConvertido.innerHTML = valorConvertido;
}
function ConverterRealParaBitcoin() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);
  var valorEmBitcoin = valorEmRealNumerico * 108.040;
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado Convertido me Real é R$ " + valorEmBitcoin.toFixed(2);
  elementoValorConvertido.innerHTML = valorConvertido;
}