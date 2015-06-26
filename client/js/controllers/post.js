angular
  .module("web-forum")
  .controller("PostController", ["$scope", "$stateParams", "Topic",
    function($scope, $stateParams, Topic){
      $scope.name = "Post Controller";

      Topic.findById(
        {
          id: $stateParams.id,
          filter: {
            include: {posts: "person"}
          }
        },
        function(results){
          $scope.name = results.title;
          $scope.topic = results;
          console.log(results);
        });

    }]);
