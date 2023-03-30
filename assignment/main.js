var app = angular.module('angularjs-route' , ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/' , {
        templateUrl:'./pages/DanhSachBDS.html',
        controller: DanhSachBDS
    })
})