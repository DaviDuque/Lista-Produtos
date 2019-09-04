var app = angular.module("app");
app.controller("EnderecoController", function($scope, $filter, $http, produtosAPI){
				$scope.enderecos = [];			
				var carregarEnderecos = function(){
						produtosAPI.getEnderecos()
						.then(function successCallback(response, status) {
							$scope.enderecos = response.data;
						}, function errorCallback(response, status){
						    $scope.mensagem = "Ops! aconteceu um erro" + response;
						});	
				};
							
				carregarEnderecos();
			
});
				