var DanhSachBDS = function ($scope, $http) {
    $scope.du_lieu_bds = [];
    $scope.loading = true;
    $scope.onGetlist = function () {
        $http.get(API_BDS)
            .then(
                function (res) {
                    $scope.loading = false;
                    $scope.du_lieu_bds = res.data;
                },
                function (err) {
                    console.log(err);
                }
            )
    };
    $scope.onGetlist();
    $scope.onDelete = function (deleteId) {
        var isConfirm = confirm('Are you sure you want to delete');
        if (!isConfirm) {
            return;
        }
        $http.delete(`${API_BDS}/${deleteId}`).then(
            function (res) {
                // console.log(res);
                // $scope.onGetList();
            },
            function (err) {
                // console.log(err); 
            }
        );
    }
}