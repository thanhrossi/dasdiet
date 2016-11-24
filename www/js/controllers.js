angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


.controller('ChapListsCtrl', function ($scope) {
  $scope.chapLists = [
    { title: '1- Nguyên lí căn bản của DAS Diet', id: 1},
    { title: '2- Qui tắc Đèn Giao Thông', id: 2},
    { title: '3- Relax - duy trì vóc dáng', id: 3},
    { title: '4- Lowcarb diet và lợi ích đối với sức khỏe', id: 4},
    { title: '5- Giảm mỡ và giảm cân', id: 5},
    { title: '6- Kiểm tra quá trình ketosis bằng que thử', id: 6},
    { title: '7- Áp dụng DAS vào cuộc sống hàng ngày, biến thành Life Style', id: 7},
    { title: '8- Hướng dẫn sử dụng đậu phụ và các chế phẩm của đậu nành trong quá trình DAS', id: 8},
    { title: '9- Các loại đuờng ăn kiêng', id: 9},
    { title: '10- Giới thiệu về DAS Diet', id: 10},
    { title: 'Phần I: Lịch sử phát triển của chế độ ăn ít chất tinh bột, đường ( Low Carb )', id: 11},
    { title: 'Phần II: Sự phát triển của chế độ dinh dưỡng Low Carb ở Việt Nam', id: 12},
    { title: 'Phần III: Giới thiệu về Atkins’ Diet và DAS Diet', id: 13},
  ];


})
