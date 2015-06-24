angular
  .module("web-forum")
  .controller("TopicsController", ["$scope", "$state", function($scope, $state){

      $scope.name = "Topics Controller";

      $scope.goToPost = function(postId){
        $state.go('post', {id: postId});
      };

  }]);
