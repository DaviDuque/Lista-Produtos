var app = angular.module("app");
app.controller("HomeController", function($scope, $filter, $http, produtosAPI){
				$scope.app = "Lista de Produtos";
				$scope.produtos = [];
				$scope.comentarios = [];
				$scope.comentarioForm = {};

				
				$scope.adicionarComentario = function(comentario, produto){
					comentario.id = produto;
					produtosAPI.saveComentario(comentario)
					.then(function successCallback(response) {	
						//jquery limpa formulario
						$(some).each (function(){
						  this.reset();
						});
						carregarComentarios();
						
	
						});				
				}
				
				$scope.classe = "selecionado";
				$scope.apagarProduto = function(produtos){
					$scope.produtos = produtos.filter(function(produto){
						if(!produto.selecionado)return produto;
					});
					
				}
				
			
				
				var carregarProduto = function(){
						produtosAPI.getProdutos()
						.then(function successCallback(response, status) {
							$scope.produtos = response.data;
						}, function errorCallback(response, status){
						    $scope.mensagem = "Ops! aconteceu um erro" + response;
						});	
				};
				
				var carregarComentarios = function(){
						produtosAPI.getComentarios()
						.then(function successCallback(response, status) {
							$scope.comentarios = response.data;
						}, function errorCallback(response, status){
						    $scope.mensagem = "Ops! aconteceu um erro" + response;
						});	
				};
				
				
				carregarProduto();
				carregarComentarios();
				
				var setPristine = function(comentarioForm){
					if(comentarioForm.$setPristine){//only supported from v1.1.x
						comentarioForm.$setPristine();
					}else{

						_.each(comentarioForm, function (input)
						{
							if (input.$dirty) {
								input.$dirty = false;
							}
						});
					}
				};
				
});
				