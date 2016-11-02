app.controller("controller",["$scope", "$cookies", function(scope, $cookies){
  $cookies.put('something', 'something');
  var value = $cookies.get('something');
  console.log(value);

  // if($cookies.movies != undefined){
  //   scope.movies = cookies.movies;
  // }else{
  //   scope.movies = [];
  // }
  // scope.movieToAdd;
  // scope.santi = 'santi';
  //
  // scope.add = function(){
  //   if(scope.movieToAdd != ''){
  //     scope.movies.push(scope.movieToAdd);
  //     scope.movieToAdd ='';
  //     cookies.movies = scope.movies;
  //
  //   }
  // }


}]);
