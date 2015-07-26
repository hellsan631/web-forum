angular
  .module("web-forum")
  .controller("TopicsController", ["$scope", "$rootScope", "$route", "Topic", "Post",
    function($scope, $rootScope, $route, Topic, Post){

        $scope.name = "Topics Controller";
        var newTopicModal = $('#NewTopic');

        $scope.topics = [];

        Topic.find({filter: {include: "person"}}, function(result){
          $scope.topics = result;
        });

        $scope.goToPost = function(postId){
          location.hash = '/post/' + postId;
        };

        $scope.openNewTopicModal = function(){
          newTopicModal.openModal();
        };

        $scope.createNewTopic = function(){

          $scope.topic.personId = $scope.post.personId = $rootScope.currentUser.id;

          Topic.create($scope.topic).$promise
            .then(function(result){

              newTopicModal.closeModal();

              $scope.post.topicId = result.id;

              Post.create($scope.post, function(res){
                $route.reload();
              });
            });
        };

    }]);
