var app = angular.module("app");

app.factory("produtosAPI", function($http){
	var _getEnderecos = function(){
		return $http.get('https://plausible-nitrogen.glitch.me/addresses');
	};
	var _getComentarios = function(){
		return $http.get('http://localhost:3412/comentarios');
	};
	var _getProdutos = function(){
		return $http.get('http://localhost:3412/produtos');
	};
	
	var _saveComentarios = function(comentario){
		return $http.post('http://localhost:3412/comentarios', comentario);
	};
	return {
		getEnderecos: _getEnderecos,
		getComentarios: _getComentarios,
		getProdutos: _getProdutos,
		saveComentario: _saveComentarios,
	}
});
