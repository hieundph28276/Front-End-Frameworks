var HomeController = function ($scope){
    $scope.nguoi_yeu = 
    [
        {
            id: 1,
            ten:'Nguyễn Thị Bé',
            image: 'https://antimatter.vn/wp-content/uploads/2022/05/hinh-anh-gai-xinh-cap-2-3.jpg',
            tuoi: 18
        },
        {
            id: 2,
            ten:'Nguyễn Thị Bé',
            image: 'https://antimatter.vn/wp-content/uploads/2022/05/hinh-anh-gai-xinh-cap-2-3.jpg',
            tuoi: 18
        }
    ]
    $scope.inpust = [
        {
            ten: '',
            image: '',
            tuoi:0
        }
    ]
    $scope.isShowForm = false;
    $scope.showForm = function() {
        $scope.isShowForm = true;
    };
    $scope.hideForm = function() {
        $scope.isShowForm = false;  
    };
    $scope.onSave = function() {
        var newObj = {
            ...$scope.inpust,
            tuoi: +$scope.inpust.tuoi,
            id: $scope.nguoi_yeu.length +1
        };
        if($scope.editId == 0){
            $scope.nguoi_yeu.push(newObj);
        }
        else{
            newObj.id = newObj.editId;
            for(i = 0; i < $scope.nguoi_yeu.length; i++){
                if($scope.nguoi_yeu[i].id == $scope.editId){
                   $scope.nguoi_yeu[i] = newObj;
                   break; 
                }
            }
        }
        console.log(newObj);
        $scope.inpust.ten = "";
        $scope.inpust.tuoi = 0;
        $scope.hideForm();
    };
    // $scope.onEdit = (id) => {
    //     var item = $scope.nguoi_yeu.find((item) =>{
    //         return item.id == id;
    //     })
    //     $scope.inpust = {
    //         ...item
    //     }
    //     $scope.isShowForm = true;
    // }
    $scope.editId = 0;
    $scope.onEdit = function (editId){
        $scope.editId = editId;
        var editData = $scope.nguoi_yeu.find(function (item) {
            return item.id == editId;
        });
        if (!editData) {
            return alert("Please");
        }
        $scope.showForm();
        $scope.inpust.ten = editData.ten;
        $scope.inpust.image = editData.image;
        $scope.inpust.tuoi = editData.tuoi;
    }
}