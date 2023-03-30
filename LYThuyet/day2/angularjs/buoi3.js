var app = angular.module('nguoiYeuApp', []);
            app.controller('MainController', function ($scope) {
                $scope.thong_tin_ca_nhan = {
                    ten: 'Nguyen Duc Hieu',
                    tuoi: 20,
                    dia_chi: 'Nghe An'
                };
                $scope.nguoi_yeu = [
                    {
                        id: 1,
                        ten: 'Nguyen Thi B',
                        biet_danh: 'Meomeo',
                        tuoi: 18,
                        dia_chi: 'Royal city',
                        so_thich: 'Thich Anh',
                        trang_thai: 0,// 0 hoac 1
                        image: 'img/image 46.jpg'
                    },
                    {
                        id: 2,
                        ten: 'Nguyen Thi B',
                        biet_danh: 'Meomeo',
                        tuoi: 18,
                        dia_chi: 'Royal city',
                        so_thich: 'Thich Anh',
                        trang_thai: 0,// 0 hoac 1
                        image: 'img/image 46.jpg'
                    }
                ];
                var luu_tru_tuoi = 0;
                $scope.tangTuoi = function () {
                    $scope.thong_tin_ca_nhan.tuoi = luu_tru_tuoi;
                };
                $scope.layTuoi = function (e) {
                    luu_tru_tuoi = e.target.value;
                };
                //    isShowform thể hiện trạng tráng hiển thị của form
                $scope.isShowform = false;
                //    khi bấm thêm mới thì zẽ cập nhật giá trị cho isShowform = true
                $scope.showForm = function () {
                    $scope.isShowform = true;
                };
                $scope.hideForm = function () {
                    $scope.isShowform = false;
                };
                // $scope.Edit = function(){
                //     $scope.isShowform = true;
                // };
                // chỉ cần thay đổi nội dung inputs có ng-model thì sẽ tự động gán luôn
                $scope.inputs = {
                    ten: '',
                    tuoi: 0
                };
                $scope.inputs = 
                [
                    {
                        ten: '',
                        biet_danh: '',
                        tuoi: 0 ,
                        dia_chi: '',
                        so_thich: '',
                        trang_thai: 0,// 0 hoac 1
                        image: ''
                    }
                ];
                // console.log($scope.inputs.ten);
                // khi bấm lưu sẽ gọi vào onSave
                $scope.onSave = function () {
                    var newObj = {
                        ...$scope.inputs, // lấy toàn bộ thuộc tính obj nhét vào đây
                        tuoi: +$scope.inputs.tuoi, //ép kiểu chuỗi về số
                        id: $scope.nguoi_yeu.length + 1 //lấy dộ dài của mảng + 1
                    };
                    if($scope.editId == 0){
                        // thêm mới phần tử vào danh sách
                        $scope.nguoi_yeu.push(newObj);
                    }else{
                        // thêm giá trị id vào cho bảm ghi đang muoond sưae
                        newObj.id = newObj.editId;
                        for(i = 0; i < $scope.nguoi_yeu.length; i++){
                            if($scope.nguoi_yeu[i].id == $scope .editId){
                                $scope.nguoi_yeu[i] = newObj;
                                break;
                            }
                        }
                    }
                    console.log(newObj);
                    // thêm phần tử mới vào danh sách
                    // $scope.nguoi_yeu.push(newObj);
                    // bỏ giá trị dang có ở inpust về mặc định
                    $scope.inputs.ten = "";
                    $scope.inputs.tuoi = 0;
                    // ẩn form thêm mới
                    $scope.hideForm();
                    //  xóa
                };  
                $scope.onDelete = function(deleteId)
                    {
                        // xác nhận xáo
                       var isConfirm = confirm("Are you sure you want to delete");
                       if (!isConfirm) {
                        return;
                       }

                       var newList = $scope.nguoi_yeu.filter(function(item) {
                        return item.id != deleteId;
                       });
                       $scope.nguoi_yeu = newList;
                    };
                    //Sửa
                // $scope.onEdit = (id) => {
                //     var item = $scope.nguoi_yeu.find((item) => {
                //         return item.id == id;
                //     });
                //     $scope.inputs = {
                //         ...item
                //     }
                //     $scope.isShowform = true;
                    
                // }
                // xác định trạng thái chỉnh sửa
                $scope.editId = 0;
                // lấy dữ liệu cần chỉnh sửa
                $scope.onEdit = function (editId){
                    $scope.editId = editId;
                    // tìm ra thông tin bản ghi đang được chỉnh sửa
                    // find chỉ trả về một phần tử duy nhất thỏa mãn điều kiện
                    var editData = $scope.nguoi_yeu.find(function (item){
                        return item.id == editId;
                    });
                    if(!editData){
                        return alert("Please");
                    }
                    // hiển thị form lên
                    $scope.showForm();
                    // gán giá trị mới ch   o các ô inpust
                    $scope.inputs.ten = editData.ten;
                    $scope.inputs.tuoi = editData.tuoi;
                    $scope.inputs.image = editData.image;

                }
            });