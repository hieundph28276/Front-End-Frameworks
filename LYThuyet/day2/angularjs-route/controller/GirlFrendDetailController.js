// GirlFriendDetailController.js
var GirlFriendDetailController = function ($scope, $routeParams, $location) {
    $scope.ma_ny = $routeParams.id; // $routeParams.ten_thuoc_tinh ở when
    $scope.ten_ny = $routeParams.name; // $routeParams.ten_thuoc_tinh ở when
    // $scope.dia_chi_ny = $routeParams.diachi; // $routeParams.ten_thuoc_tinh ở when
    // $scope.anh_ny = $routeParams.image;
    // console.log($scope.ma_ny, $scope.ten_ny);

    // Để chuyển sang màn hình khác mà không ảnh hưởng việc render
    // $location.path('/quan-ly-them-moi');
};