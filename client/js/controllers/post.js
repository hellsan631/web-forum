angular
  .module("web-forum")
  .controller("PostController", ["$scope", "$stateParams", "Topic",
    function($scope, $stateParams, Topic){




      Topic.findById(
        {
          id: $stateParams.id,
          filter: {
            include: {posts: "person"}
          }
        },
        function(results){
          $scope.topic = results;

          console.log(results);
        });

    }]);
