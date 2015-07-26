angular
  .module("web-forum")
  .controller("PostController", ["$scope", "$routeParams", "Topic",
    function($scope, $routeParams, Topic){

      Topic.findById(
        {
          id: $routeParams.id,
          filter: {
            include: {posts: "person"}
          }
        },
        function(results){
          $scope.topic = results;

          console.log(results);
        });

    }]);
