var botao = document.querySelector('.menu-button');
var sidebar = document.querySelector('.sidebar');

botao.addEventListener('click', function(){
	sidebar.classList.toggle('ativo');
});