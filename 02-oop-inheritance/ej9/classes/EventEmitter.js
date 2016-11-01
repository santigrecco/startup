class EventEmitter {
  constructor(){
    this.listening;
    this.func;
  
  }
  emit(e){
    if(e == this.listening){
      this.func();
    }
  }
  on(e,  _callback){
        this.listening = e;
        this.func = _callback;

  }
  off(){
    this.listening = null;
    this.func = null;
  }
}
