var GirlFrendAddController = function($scope, $http, $location){
    $scope.inputs = {
        ten: '',
        biet_danh: '',
        tuoi: 0,
        dia_chi:'',
        so_thich: '',
        trang_thai: 0,
        image: ''
    }
    $scope.onSave = function(){
        $http.post(API_NY, $scope.inputs).then(
            function(res){$location.path('/quan-ly')},
            function(err){}
            )
    }
}