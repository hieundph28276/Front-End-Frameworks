var AddBdsController = function ($scope, $routeParams, $http, $location) {
    $scope.inpust = {
        name: '',
        type_id: 0,
        area: '',
        price: '',
        image_url: '',
        status: ''
    };
    $scope.onSave = function() {
        $http.post(API_BDS, $scope.inpust).then(
            function(res){$location.path('/')},
            function(err){}
        )
    };

};