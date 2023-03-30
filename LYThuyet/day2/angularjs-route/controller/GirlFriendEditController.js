var GirlFriendEditController = function($scope , $routeParams , $http , $location){
    var id = $routeParams.id;
    $scope.inputs = {
        ten: ''
    };

    $scope.onGetDetail = function(){
        $http.get(`${API_NY}/${id}`).then(
            function(res){
                inputs = {...res.data}
            },
            function(err){}
            );
    }
    $scope.onGetDetail();
    $scope.onSave = function(){
        $http.put(`${API_NY}/${id}`, $scope.inputs) .then(
            function(res){$location.path('/quan-ly')},
            function(err){}
        )
    }
}