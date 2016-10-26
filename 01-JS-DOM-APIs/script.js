var matrix = [
  ['hello', 'how', 'are', 'you'],
  ['hello', 'how', 'are', 'you'],
  ['hello', 'how', 'are', 'you'],
];

$(document).ready(function(){
  var section = $('section');
  section.fadeIn(1000);
  section.css('display','flex');

  $('.btn').click(function(){
    httpRequest('http://api.icndb.com/jokes/random', function(data){
      if(data.status == 200){
        section.text(data.responseText);
      }else{
        section.css('color','red');
        section.text('error:' + error.status);
      }
    });

  });
  httpRequest('https://api.github.com/search/repositories?q=javascript',chargeGithubList);

  $('#go_btn').click(function(){
    $('.github_list').empty();
    var srch = $('#srch').val();
    httpRequest('https://api.github.com/search/repositories?q='+srch, chargeGithubList);
  })

  matrixToDOM(matrix, 'clase', 'table');
});


function httpRequest(url, _callback){
  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.send(null);
  request.onload = function(){
    if(request.status == 200){
      _callback(request);
    }else{
      var error = {
        status: request.status
      }
      _callback(error);
    }
  }
}


function chargeGithubList(data){
  var list = $('.github_list');
  var parsedData = JSON.parse(data.responseText);
  var dataArray = parsedData.items;
  dataArray.forEach(function(el){
    var container = $('<li class="gh_container"></li>')
    var htmlToAdd = $('<h4 class="gh_element"></h4>');
    htmlToAdd.text(el.full_name);
    container.append(htmlToAdd);
    list.append(container);
  })
}

function matrixToDOM(matrix, tableClass, appendToId){
  var table = $('<table class="'+tableClass+'"></table>');
  matrix.forEach(function(el,index,arr){
    var tr = $('<tr></tr>');
    el.forEach(function(element){
      if(index == 0){
        tr.append('<th class="th">'+element+'</th>');
      }else{
        tr.append('<td class="td">'+element+'</td>')
      }
    });
    table.append(tr);
  });

  $('#'+appendToId).append(table);
}
