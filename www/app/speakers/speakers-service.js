angular.module('confboilerplate.speakers.services')

.service('Speakers', function ($http, $q){

  this.get = function() {
    var dfd = $q.defer();

    $http.get('data/speakers.json')
    .success(function(data) {
      dfd.resolve(data);
    })
    .error(function(data) {
      dfd.reject(data);
    });

    return dfd.promise;
  };
});
