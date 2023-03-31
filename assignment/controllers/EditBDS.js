var EditBDS = function($scope, $routeParams,$http, $location){
    var id = $routeParams.id;
    $scope.inpust = {
        name: '',
        type_id: 0,
        area: 0,
        price: 0,
        image_url: '',
        status: ''
    };

    $scope.onGetDetail = function(){
        $http.get(`${API_BDS}/${id}`).then(
            function(res){
                // Hiển thị dữ liệu cũ lên màn hình để người dùng sửa
                $scope.inpust = {...res.data}
            },
            function(err){}
            );
    }
    $scope.onGetDetail();
    // Khi bấm lưu sec call API kèm dữ liệu mới nhất để lưu
    $scope.onSave = function(){
        $http.put(`${API_BDS}/${id}`, $scope.inpust) .then(
            function(res){$location.path('/')},
            function(err){}
        )
    }
}