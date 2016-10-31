'use strict'

$(document).ready(function(){
  var movie = new Movie('cindirella','1999',100);
  var movie2 = new Movie('white snow','1995',90);
  var movie3 = new Movie('lion king','2001',110);

  var events = new EventEmmiter();
   movie = new EventEmmiter();



});


function Movie(title, year, duration){
  this.title = title;
  this.year = year;
  this.duration = duration;
  this.play = function(){
    return 'playing';
  }
  this.pause = function(){
    return 'paused';
  }
  this.resume = function(){
    return 'resumed';
  }
};

function EventEmmiter(){
  this.listening;
  this.func;
  this.play = function(){
    this.emit('play');
  }
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
