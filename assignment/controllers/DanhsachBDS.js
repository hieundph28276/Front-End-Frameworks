var DanhSachBDS = function($scope, $http){
    $scope.du_lieu_bds = [];
    $scope.loading = true;  
    $http.get('http://localhost:3000/BDS')
    .then(
        function(res){
            $scope.loading = false;
            $scope.du_lieu_bds = res.data;
        },
        function(err){
            console.log(err);
        }
    )
}