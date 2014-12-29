var MicNightControllers = angular.module('MicNightControllers', []);

MicNightControllers.controller('SongListController', function($scope, $http) {
    $http.get('/data/songs.json', { cache: true}).success(function(data) {    
        $scope.songs = data;
    });

    $scope.send = function($scope){    
        playTrack($scope.track, $http);    
    };

    $scope.currentArtist = '-1';
    $scope.CreateHeader = function(artist) {
          showHeader = (artist!=$scope.currentArtist); 
           $scope.currentArtist = artist;
          return showHeader;
    }
});

function playTrack (track, $http) {
    $http.get('/api/songs/play/'+track);
};

MicNightControllers.controller('ToolsController', function($scope, $http) {
  $scope.USBMode = function(){
    USBMode($http);
  }
    $scope.GUIMode = function(){
    GUIMode($http);
  }
});

function USBMode ($http) {
    $http.get('/api/remote/karaoke/USBMode');
    console.log('Called USBMode');
};

function GUIMode ($http) {
    $http.get('/api/remote/karaoke/GUIMode');
    console.log('Called GUIMode');
};