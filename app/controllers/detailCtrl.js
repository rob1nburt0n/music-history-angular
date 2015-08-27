app.controller("SongDetailCtrl", ["$scope", "$q", "$routeParams", "song-storage", 
  function($scope, $q, $routeParams, song_storage) {

  $scope.title = "Music History";

  $scope.id = $routeParams.songId;

   song_storage.then(
    function(promiseResolutionData) {
      console.log("promiseResolutionData", promiseResolutionData);
     $scope.songs = promiseResolutionData;
    },
   function(promiseRejectionError) {
      console.log("error", promiseRejectionError);
  });
 
}]);