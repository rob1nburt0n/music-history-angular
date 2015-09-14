
app.directive("songRating", function() {
  return {
    restrict: "E",
    templateUrl: "partials/song-test.html",
    scope: {
      message: '='
    },
    link: function(scope, elem, attrs) {
      console.log(scope.message);
    }
  };
});

