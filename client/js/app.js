angular
  .module("web-forum", [
    'ui.router',
    'ngResource',
    'lbServices'
  ])
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('topics', {
          url: '/topics',
          templateUrl: 'views/topics.html',
          controller: 'TopicsController'
        })
        .state('post', {
          url: '/post/{id}',
          templateUrl: 'views/post.html',
          controller: 'PostController'
        });

      $urlRouterProvider.otherwise('topics');

    }
  ]);
