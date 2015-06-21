angular
  .module("web-forum")
  .controller("PostController", ["$scope", "$stateParams",
    function($scope, $stateParams){
        $scope.name = "Post Controller";
        console.log($stateParams);
    }
  ]);
