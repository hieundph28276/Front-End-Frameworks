var app = angular.module('angularjs-route', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        // template: '<h1>{{content}}</h1>',
        // controller: function ($scope){
        //     $scope.content = 'Trang chủ 123'
        // }
        templateUrl:'./pages/trang-chu.html',
        controller: HomeController
    })
    .when('/lien-he', {
        templateUrl: './pages/lien-he.html',
        controller: ContactController
    })
    .when('/chi-tiet/:id/:ten', {
        templateUrl: './pages/chi-tiet.html',
        controller : ChiTietController
    })
})