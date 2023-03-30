var ChiTietController = function($scope, $routeParams){
    $scope.ma_ny = $routeParams.id;
    $scope.ten_ny = $routeParams.ten;
    $scope.anh_ny = $routeParams.image;

    // console.log("routeParams.id , $routeParams.ten");
}