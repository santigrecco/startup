class Movie extends EventEmitter {
  constructor(title, year, duration){
    super();
    this.title = title;
    this.year = year;
    this.duration = duration;
    this.cast = [];
  }
  play(){
    this.func('play');
  }
  pause(){
    return 'paused';
  }
  resume(){
    return 'resumed';
  }
  addCast(obj){
    if(Object.prototype.toString.call( obj ) === '[object Array]'){  //check if obj is an array
      for (var i = 0; i < obj.length; i++) {
        this.cast.push(obj[i]);
      }
    }else{
      this.cast.push(obj);
    }
  }
}
