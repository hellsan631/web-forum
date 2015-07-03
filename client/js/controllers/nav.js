angular
  .module("web-forum")
  .controller("NavController", ["$scope", "Person",
    function($scope, Person){
        $scope.name = "It Works!";

        $(".button-collapse").sideNav();
        $('.modal-trigger').leanModal();

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
                Materialize.toast('Success!!', 4000);

                Person.login(loginFields, function(response){
                  console.log(response);
                });
              },
              function(error){
                Materialize.toast('You\'ve already registered dummy', 4000);
              });
          };
        };

    }]);
