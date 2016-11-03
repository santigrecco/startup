app.controller("controller", ["$scope","$cookies",function(scope, cookies){
  if(cookies.getObject('movies') != undefined){
    scope.movies = cookies.getObject('movies');
  }else{
    scope.movies = [];
  }
  scope.title;
  scope.year;
  scope.description;
  scope.santi = 'santi';

  scope.add = function(){
    if(scope.movieToAdd != ''){
      var movieToAdd = new Movie(scope.title, scope.year, scope.description);
      scope.movies.push(movieToAdd);
      scope.title ='';
      scope.year ='';
      scope.description= '';
      cookies.putObject('movies',scope.movies);
    }
  }


}]);




app.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});
