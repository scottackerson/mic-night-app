var micNightApp = angular.module('micNightApp', ['ngRoute', 'MicNightControllers']);

micNightApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/partials/song-list.html',
        controller: 'SongListController'
      }).
      when('/api/songs/play/:track', {

      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

