angular
  .module("web-forum", [
    'ngRoute',
    'ngResource',
    'ngSanitize',
    'lbServices',
    'angular-redactor'
  ])
  .config([
    '$routeProvider',
    AppConfig
  ])
  .controller('AppController', [
    '$scope',
    '$rootScope',
    'Person',
    'LoopBackAuth',
    AppController
  ]);

function AppConfig ($routeProvider) {

  $routeProvider
    .when('/topics', {
      templateUrl: 'views/topics.html',
      controller: 'TopicsController'
    })
    .when('/post/:id', {
      templateUrl: 'views/post.html',
      controller: 'PostController'
    });

  $routeProvider
    .otherwise({
      redirectTo: '/topics'
    });

}

function AppController($scope, $rootScope, Person, LoopBackAuth){
  $(".button-collapse").sideNav();
  $('.modal-trigger').leanModal();

  Person.getCurrent(
    function(response){
      $rootScope.currentUser = response;
    },
    function(error){
      LoopBackAuth.clearStorage();
      $rootScope.currentUser = null;
    });
}
