$(document).ready(function(){
  var movie = new Movie('Fight Club', 2001, 120);
  var events =  new EventEmitter();
  var logger = new Logger();
  var actor =  new Actor('brad pitt', 50);
  var cast = [
    new Actor('extra1',20),
    new Actor('extra2',21),
    new Actor('extra3',22),
    new Actor('extra4',23),
    new Actor('extra5',24)
  ];

  Object.assign(movie, Social);

  movie.on('play', function(){
    alert(this.title + ' playing');
  });
  movie.emit('play');

  movie.on('play', logger.log);
  movie.play();
  movie.addCast(actor);
  console.log(movie.cast);
  movie.addCast(cast);
  console.log(movie.cast);


  console.log(movie.share('santi'));
  console.log(movie.like('santi'));
});
