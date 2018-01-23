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

