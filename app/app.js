var app = angular.module("Songapp", ["ngRoute"]);

app.config(["$routeProvider",
  function($routeProvider) {
    $routeProvider.
      when("/", {
        templateUrl: "partials/song-list.html",
        controller: "SongCtrl"
      }).
      when("/songs/:songId", {
        templateUrl: "partials/song-form.html",
        controller: "SongFormCtrl"
      }).
      when("/songs/:songId", {
        templateUrl: "partials/song-detail.html",
        controller: "SongDetailCtrl"
      }).
      otherwise ({
        redirectTo: "/"
      });
  }]);


