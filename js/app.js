var app = angular.module('SaberApp', ["ngRoute"]);

/*app.config(function($stateProvider, $urlRouterProvider){
   $stateProvider
       .state('home',{
           url: '/home',
           templateUrl: 'templates/menu_principal.html'
       })

    $urlRouterProvider.otherwise('/home');
});*/

/*.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl'
        })

        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl'
        })

        .state('mensajes', {
            url: '/mensajes',
            templateUrl: 'templates/mensajes.html',
            controller: 'MensajesCtrl'
        })

        .state('estudiante', {
            url: '/estudiante',
            templateUrl: 'templates/menuEstudiante.html',
            controller: 'EstudianteCtrl'
        })

        .state('vigencia', {
            url: '/vigencia',
            templateUrl: 'templates/menuVigencia.html',
            controller: 'CuentaCtrl'
        })

        .state('cuenta', {
            url: '/cuenta',
            templateUrl: 'templates/estadoDeCuenta.html',
            controller: 'CuentaCtrl'
        });
    $urlRouterProvider.otherwise('/login');
});*/

app.config(function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl: "templates/menu_principal.html"
        })
});


/*var app = angular.module('app', ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            controller: "simuladorController",
            templateUrl: "templates/simulacion.html"
        })
        .when("/simulaciones-listado", {
            controller: "simuladorController",
            templateUrl: "templates/simulaciones-listado.html"
        })
        .when("/estadisticas-simulacion", {
            controller: "simuladorController",
            templateUrl: "templates/estadisticas-simulacion.html"
        })
});*/