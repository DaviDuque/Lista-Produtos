angular.module('app', ['ui.router']);
var app = angular.module('app', ['ui.router']);

// Definindo Rotas
app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  
  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'paginas/home.html',
      controller: 'HomeController'
    })
    .state('endereco', {
      url: '/endereco',
      templateUrl: 'paginas/endereco.html',
      controller: 'EnderecoController'
    });
    
    // Utilizando o HTML5 History API
    // $locationProvider.html5Mode(true);
});



