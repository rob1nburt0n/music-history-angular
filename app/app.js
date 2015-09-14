define([
  'angular',
  'angularRoute',
  'angularFire',
  'controllers/detailCtrl',
  'controllers/songFormCtrl',
  'controllers/songs'
  ], function(angular, angularRoute, af, detailCtrl, SongFormCtrl, songs) {
    return angular.module("SongApp", [
      'ngRoute',
      'firebase',
      'SongApp.SongDetail',
      'SongApp.SongForm',
      'SongApp.song'
      ]).

// var app = angular.module("Songapp", ["ngRoute", "firebase"]);

config(["$routeProvider",
  function($routeProvider) {
    $routeProvider.
      // when("/", {
      //   templateUrl: "partials/song-list.html",
      //   controller: "SongCtrl"
      // }).
      // when("/songs/add", {
      //   templateUrl: "partials/song-form.html",
      //   controller: "SongFormCtrl"
      // }).
      // when("/songs/:songId", {
      //   templateUrl: "partials/song-detail.html",
      //   controller: "SongDetailCtrl",
      //   controllerAs: "detail"
      // }).
      otherwise ({
        redirectTo: "/"
      });
  }]);
});

