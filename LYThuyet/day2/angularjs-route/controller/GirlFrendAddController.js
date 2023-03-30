var GirlFrendAddController = function($scope, $http, $location){
    $scope.inpust = {
        ten: '',
        tuoi: 0
    }
    $scope.onSave = function(){
        $http.post(API_NY, $scope.inpust).then(
            function(res){$location.path('/quan-ly')},
            function(err){}
            )
    }
}