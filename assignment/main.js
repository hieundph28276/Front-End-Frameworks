var app = angular.module('angularjs-route' , ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/' , {
        templateUrl:'./pages/DanhSachBDS.html',
        controller: DanhSachBDS
    })
    .when('/them-moi' , {
        templateUrl : './pages/them-moi-bds.html',
        controller: AddBdsController
    })
    .when('/lien-he' , {
        templateUrl : './pages/thong-tin-sv.html',
        controller: ThongTinSV
    })
    .when('/sua-bds/:id' , {
        templateUrl : './pages/sua-bds.html',
        controller: EditBDS
    })
})