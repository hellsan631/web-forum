var async = require('async');

module.exports = function(app) {

  var Person  = app.models.Person,
      Topic   = app.models.Topic,
      Post    = app.models.Post;

  if (app.dataSources.db.name !== 'Memory') {
    //check to see if we already imported data
  }else{
    createDefaultData();
  }

  function createDefaultData(){

    var whiplash = {
      email: "whip@lash.com",
      password: "kitten",
      fullname: "Whiplash"
    };

    var drevan = {
      email: "drev@an.com",
      password: "squids",
      fullname: "Drevan"
    };

    var topic = {
      title: "Hello World"
    };

    async.series([
      function(callback){
        Person.create(whiplash, function(error, response){
          if(error){
            callback(error);
          }else{
            whiplash = response;
            callback(null, response);
          }
        });
      },
      function(callback){
        Person.create(drevan, function(error, response){
          if(error){
            callback(error);
          }else{
            drevan = response;
            callback(null, response);
          }
        });
      }
    ],
    function(err, results){
      console.log(results);
    });

  }

};
