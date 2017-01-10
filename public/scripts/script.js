var myApp = angular.module('myApp', []);

myApp.controller('mainController',['$scope', '$http', function($scope, $http) {

}]);

myApp.controller('registerController',['$scope', '$http', function($scope, $http) {
  console.log('inside register controller');

  $scope.register = function() {
    var userInfo = {
      username: $scope.username,
      password: $scope.password
    };

    console.log('userInfo ->', userInfo);

    $http({
      method: 'POST',
      url: '/register',
      data: userInfo
    }).then(function() {
      console.log('register success!');
    });
  };
}]);
