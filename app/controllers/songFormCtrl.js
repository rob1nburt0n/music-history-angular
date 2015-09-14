define([
  'angular',
  'angularRoute',
  'firebase'
], function(angular) {
  angular.module('SongApp.SongForm', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when("/songs/add", {
        templateUrl: "partials/song-form.html",
        controller: "SongFormCtrl"
      });
  }])
  .controller('SongFormCtrl', ["$scope", "$firebaseArray",
    function($scope, $firebaseArray) {
      var ref = new Firebase("https://popping-torch-5281.firebaseio.com/songs");

      $scope.songs = $firebaseArray(ref);

      $scope.addSong = function() {
      $scope.songs.$add({
        name: $scope.newSong.name, 
        artist: $scope.newSong.artist,
        album: $scope.newSong.album
      });
      $scope.newSong = {"":""};
      };
    
  }]);
});




// define([
//   'angular',
//   'angularRoute'
//   ], function(angular, angularRoute) {

// angular.module("SongFormCtrl", ["$scope", "$firebaseArray",
//   function($scope, $firebaseArray) {

//    

//   }]);
// });