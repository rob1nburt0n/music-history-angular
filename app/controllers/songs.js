app.controller("SongCtrl", ["$scope", "$q","song-storage", function($scope, $q, song_storage) {
  $scope.title = "Music History";

  $scope.delSong = function(song) {
    var songIndex = $scope.songs.indexOf(song);
    if (songIndex >= 0) {
      $scope.songs.splice(songIndex, 1);
    }
  };
  $scope.addSong = function() {
    $scope.songs.push({
      name: $scope.newSong.name, 
      artist: $scope.newSong.artist,
      album: $scope.newSong.album
    });
  };

  song_storage.then(
    function(promiseResolutionData) {
      console.log("promiseResolutionData", promiseResolutionData);
     $scope.songs = promiseResolutionData;
    },
   function(promiseRejectionError) {
      console.log("error", promiseRejectionError);
    });

  }]);
 

  // function getSongList() {
  //   // perform some asynchronous operation, resolve or reject the promise when appropriate.
  //   return $q(function(resolve, reject) {

  //     $.ajax({
  //       url: "./data/songs.json"
  //     })
  //     .done(function(response) {
  //       resolve(response.songs);
  //     })
  //     .fail(function(xhr, status, error) {
  //       reject(error);
  //     });

  //   });
  // }

  // getSongList()
  //   .then(
  //     function(promiseResolutionData) {
  //       $scope.songs = promiseResolutionData;
  //     },
  //     function(error) {
  //       console.log("error", error);
  // });

  //   function getSongTwoList() {
  //   return $q(function(resolve, reject) {

  //     $.ajax({
  //       url: "./data/songsTwo.json"
  //     })
  //     .done(function(response) {
  //       resolve(response.songs);
  //     })
  //     .fail(function(xhr, status, error) {
  //       reject(error);
  //     });

  //   });
  // }

  // getSongTwoList()
  //   .then(
  //     function(songs) {
  //       for (var i = 0; i < songs.length; i++) {
  //       $scope.songs.push(songs[i]);
  //      }
  //     },function(error) {
  //       console.log("error", error);
  // });


