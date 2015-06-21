angular
  .module("web-forum")
  .controller("TopicsController", ["$scope", "$state", function($scope, $state){
      $scope.name = "Topics Controller";

      $scope.goToPost = function(id){
        $state.go('post', {id: id});
      };

  }]);
