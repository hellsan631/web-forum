angular
  .module("web-forum", [
    'ui.router',
    'ngResource',
    'lbServices',
    'angular-redactor'
  ])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    AppConfig
  ])
  .controller('AppController', [
    '$scope',
    '$rootScope',
    'Person',
    AppController
  ]);

function AppConfig ($stateProvider, $urlRouterProvider) {

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

function AppController($scope, $rootScope, Person){
  $(".button-collapse").sideNav();
  $('.modal-trigger').leanModal();

  Person.getCurrent(function(response){
      $rootScope.currentUser = response;
    },
    function(error){
      localStorage.clear();
    });
}
