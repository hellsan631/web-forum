angular
  .module("web-forum")
  .controller("TopicsController", ["$scope", "$rootScope", "$state", "Topic", "Post",
    function($scope, $rootScope, $state, Topic, Post){

        $scope.name = "Topics Controller";

        $scope.topics = [];

        Topic.find({filter: {include: "person"}}, function(result){
          $scope.topics = result;
        });

        $scope.goToPost = function(postId){
          $state.go('post', {id: postId});
        };

        $scope.openNewTopicModal = function(){
          $('#NewTopic').openModal();
        };

        $scope.createNewTopic = function(){

          $scope.topic.personId = $scope.post.personId = $rootScope.currentUser.id;

          Topic.create($scope.topic).$promise
            .then(function(result){
              console.log(result);

              $scope.post.topicId = result.id;

              Post.create($scope.post, function(res){
                console.log(res);
              });
            });
        };

    }]);
