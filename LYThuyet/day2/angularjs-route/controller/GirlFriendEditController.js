var GirlFriendEditController = function($scope , $routeParams , $http , $location){
    var id = $routeParams.id;
    $scope.inputs = {
        ten: '',
        biet_danh: '',
        tuoi: 0,
        dia_chi:'',
        so_thich: '',
        trang_thai: 0,
        image: ''
    };

    $scope.onGetDetail = function(){
        $http.get(`${API_NY}/${id}`).then(
            function(res){
                // Hiển thị dữ liệu cũ lên màn hình để người dùng sửa
                $scope.inputs = {...res.data}
            },
            function(err){}
            );
    }
    $scope.onGetDetail();
    // Khi bấm lưu sec call API kèm dữ liệu mới nhất để lưu
    $scope.onSave = function(){
        $http.put(`${API_NY}/${id}`, $scope.inputs) .then(
            function(res){$location.path('/quan-ly')},
            function(err){}
        )
    }
}