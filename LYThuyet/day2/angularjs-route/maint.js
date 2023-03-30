var app = angular.module('angularjs-route', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        // Nội dung html được hiển thị ở vị tri ng-view
        // template: '<h1>{{content}}</h1>',
        // controller: function ($scope){
        //     $scope.content = 'Trang chủ'
        // }
        templateUrl: './pages/trang-chu.html',
        controller: HomeController, 
    })
    .when('/quan-ly', {
        templateUrl: './pages/quan-ly.html',
        controller: GirlFrendController,
    })
    // nếu đường đãn cần nhận giá trị thì đặt vào sau dấu : 
    // trong controller sẽ dung $location.params.id để lấy giá trị
    .when('/quan-ly-chi-tiet/:id', {
        templateUrl: './pages/quan-ly-chi-tiet.html',
        controller: GirlFriendDetailController,
    })
    .when('/quan-ly-sua/:id', {
        templateUrl: './pages/quan-ly-sua.html',
        controller: GirlFriendEditController,
    })
    .when('/quan-ly-them-moi', {
        templateUrl: './pages/quan-ly-them-moi.html',
        controller: GirlFrendAddController,
    })
    .when('/lien-he', {
        // template:' <p>lIen he</p>',
        templateUrl: './pages/lien-he.html',
        controller: ContactController,
    })
    .when('/not-found', {
        template: '<h1>404 Not Found</h1>'
    })
    .otherwise({
         redirectTo : '/not-found'
    })
})