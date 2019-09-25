

setInterval(function(){
	var slideAtivo = document.querySelector('.slide.ativo');
	var proximo = slideAtivo.nextElementSibling;

	if(proximo ==null){
		proximo = document.querySelector('.slide');
	}

	slideAtivo.classList.remove('ativo');
	proximo.classList.add('ativo');

}, 3000);