var myApp = angular.module('myApp', []);

myApp.controller('mainController',['$scope', '$http', function($scope, $http) {
  console.log('inside main controller');

  $scope.login = function(){

    var userInfo = {
      username: $scope.username,
      password: $scope.password
    };
    
    $http({
      method: 'POST',
      url: '/',
      data: userInfo
    }).then(function successCallback(response) {
      console.log(response);
    }, function errorCallback(error) {
      console.log(error);
    });
  };
}]);

myApp.controller('registerController',['$scope', '$http', '$location', '$window',
  function($scope, $http, $location, $window) {
  console.log('inside register controller');

  $scope.register = function() {
    var userInfo = {
      username: $scope.username,
      password: $scope.password
    };

    $http({
      method: 'POST',
      url: '/register',
      data: userInfo
    }).then(function successCallback(response) {
      console.log('success', response);
      $window.location.href = '/';
    }, function errorCallback(error) {
      console.log('error occurred!');
    });
  };
}]);
