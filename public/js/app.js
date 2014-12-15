var micNightApp = angular.module('micNightApp', ['ngRoute', 'MicNightControllers']);

micNightApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/partials/song-list.html',
        controller: 'SongListController'
      }).
      when('/tools', {
        templateUrl: '/partials/tools.html',
        controller: 'ToolsController'
      }).
      otherwise({
        redirectTo: '/sdf'
      });
  }]);

