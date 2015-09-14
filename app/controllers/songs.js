define([
  'angular',
  'angularRoute',
  'firebase'
], function(angular) {
  angular.module('SongApp.song', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "partials/song-list.html",
        controller: "SongCtrl"
      });
    }])
  .controller('SongCtrl', ["$scope", "$firebaseArray",
    function($scope, $firebaseArray) {
    
      $scope.title = "Music History";

      var ref = new Firebase("https://popping-torch-5281.firebaseio.com/songs");

      $scope.songs = $firebaseArray(ref);
      console.log("$scope.songs", $scope.songs);

      $scope.delSong = function(song) {
        var songIndex = $scope.songs.indexOf(song);
        $scope.songs.$remove($scope.songs[songIndex]);
      };
  }]);
});




// define([
//   'angular',
//   'angularRoute'
//   ], function(angular, angularRoute) {

// angular.module("SongCtrl", ["$scope", "$firebaseArray", function($scope, $firebaseArray) {

//  }]);
// });
 

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


