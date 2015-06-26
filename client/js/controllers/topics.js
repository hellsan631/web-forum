angular
  .module("web-forum")
  .controller("TopicsController", ["$scope", "$state", "Topic",
    function($scope, $state, Topic){

        $scope.name = "Topics Controller";

        $scope.topics = [];

        Topic.find({filter: {include: "person"}}, function(result){
          $scope.topics = result;
        });

        $scope.goToPost = function(postId){
          $state.go('post', {id: postId});
        };

    }]);
