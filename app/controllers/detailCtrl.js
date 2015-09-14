define([
  'angular',
  'angularRoute',
  'firebase'
], function(angular) {
  angular.module('SongApp.SongDetail', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when("/songs/:songId", {
        templateUrl: "partials/song-detail.html",
        controller: "SongDetailCtrl",
        controllerAs: "detail"
      });
  }])
  .controller('SongDetailCtrl', ["$routeParams", "$firebaseArray",
    function($routeParams, $firebaseArray) {
    
      this.title = "Music History";

      this.id = $routeParams.songId;

      var ref = new Firebase("https://popping-torch-5281.firebaseio.com/songs");

      this.songs = $firebaseArray(ref);

      this.songs.$loaded()
        .then(function(x) {
          this.selectedSong = this.songs.$getRecord(this.id);
        }.bind(this))
        .catch(function(error) {
          console.log("Error:", error);
        }.bind(this));   
  }]);
});


// define([
//   'angular',
//   'angularRoute'
//   ], function(angular, angularRoute) {

// angular.module("SongDetailCtrl", ["$routeParams", "$firebaseArray",
//   function($routeParams, $firebaseArray) {

 
//  }]);
// });
