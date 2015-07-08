angular
  .module("web-forum")
  .controller("NavController", ["$scope", "$rootScope", "Person", 'LoopBackAuth',
    function($scope, $rootScope, Person, LoopBackAuth){
        $scope.name = "It Works!";

        $(".button-collapse").sideNav();
        $('.modal-trigger').leanModal();

        getCurrentUser();

        $scope.logout = function(){
          Person.logout();
          $rootScope.currentUser = null;
        };

        $scope.openLoginModal = function(){
          $('.button-collapse').sideNav('hide');

          $('#LoginModal').openModal();

          $scope.submitLogin = function(){
            Person.login($scope.login, function(response){

              LoopBackAuth.currentUserId = response.userId;
              LoopBackAuth.accessTokenId = response.id;
              LoopBackAuth.save();

              $rootScope.currentUser = response.user;

              $('#LoginModal').closeModal();
            });
          };
        };

        $scope.openRegisterModal = function(){
          $('.button-collapse').sideNav('hide');

          $('#RegisterModal').openModal();

          $scope.submitRegister = function(){
            if($scope.register.password !== $scope.register.confirm){
              return Materialize.toast('Passwords do not match', 4000);
            }

            var newPerson = {
              email: $scope.register.email,
              fullname: $scope.register.fullname,
              password: $scope.register.password
            };

            var loginFields ={
              email: $scope.register.email,
              password: $scope.register.password
            };

            Person.create(newPerson,
              function(response){
                Materialize.toast('Success!! Logging you in.', 4000);

                Person.login(loginFields, function(response){
                  LoopBackAuth.currentUserId = response.userId;
                  LoopBackAuth.accessTokenId = response.id;
                  LoopBackAuth.save();
                });

                $('#RegisterModal').closeModal();
              },
              function(error){
                Materialize.toast('You\'ve already registered dummy', 4000);
              });
          };
        };

        function getCurrentUser(){
          Person.getCurrent(function(response){
              $rootScope.currentUser = response;
            },
            function(error){
              if(error.status !== 401)
                Person.logout();
            });
        }

    }]);
