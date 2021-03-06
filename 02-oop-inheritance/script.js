'use strict'

$(document).ready(function(){

  EventEmmiter.call(Movie.prototype);

  var movie = new Movie('Toy Story','1999',100);
  var movie2 = new Movie('White Snow','1995',90);
  var movie3 = new Movie('Lion King','2001',110);

  // var events = new EventEmmiter();
  // events.on('play', function(){
  //   console.log('play');
  // })
  // events.emit('play');

  var logger = new Logger();

  movie.on('play', logger.log);
  movie.play();


  // Social.call(movie);
  Object.assign(movie, Social);
  console.log(movie.share('santi'));
  console.log(movie.like('santi'));

  var morgan = new Actor('Morgan Freeman', 60); //aprox
  var cast = [
    new Actor('timon',3),
    new Actor('scar', 5),
    new Actor('mufasa', 7),
    new Actor('pumba', 4)
  ];
  var simba = new Actor('simba', 3);

  movie3.addCast(cast);


  movie3.addCast(simba);


});


function Movie(title, year, duration){
  this.title = title;
  this.year = year;
  this.duration = duration;
  this.cast = [];
  this.play = function(){
    this.func('play');
  }
  this.pause = function(){
    return 'paused';
  }
  this.resume = function(){
    return 'resumed';
  }
  this.addCast = function(obj){
    if(Object.prototype.toString.call( obj ) === '[object Array]'){  //check if obj is an array
      for (var i = 0; i < obj.length; i++) {
        this.cast.push(obj[i]);
      }
    }else{
      this.cast.push(obj);
    }
  }
};

function EventEmmiter(){
  this.listening;
  this.func;
  this.emit = function(e){
    if(e == this.listening){
      this.func();
    }
  }
  this.on = function(e,  _callback){
        this.listening = e;
        this.func = _callback;

  }
  this.off = function(){
    this.listening = null;
    this.func = null;
  }
}


function Actor(name, age){
  this.age = age;
  this.name = name;
}

function Logger(){
  this.log = function(info){
    console.log(info);
  }
}

// function Social(){
//   this.share = function(name){
//     return 'share ' + this.title + ' with ' + name;
//   }
//   this.like = function(name){
//     return name + ' like ' + this.title;
//   }
// }

var Social = {
  share: function(name){
    return 'share ' + this.title + ' with ' + name;
  },
  like: function(name){
    return name + ' like ' + this.title;
  }
}
