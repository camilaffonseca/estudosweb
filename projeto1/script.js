var peso = document.getElementById('peso');
var altura = document.getElementById('altura');
var titulo = document.querySelector('.title');
var botao = document.querySelector('#botao');


function imc(peso,altura){
	var imc = parseFloat(peso) / (parseFloat(altura)*parseFloat(altura));

	return imc;
}


botao.addEventListener('click', function(){
	var resultado = imc(peso.value, altura.value);

	titulo.innerHTML = resultado.toFixed(2);
})

