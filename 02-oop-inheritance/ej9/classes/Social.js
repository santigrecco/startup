var Social = {
  share: function(name){
    return 'share ' + this.title + ' with ' + name;
  },
  like: function(name){
    return name + ' like ' + this.title;
  }
}
