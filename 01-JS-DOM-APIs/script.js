var matrix = [
  ['1', '2', '3', '4'],
  ['hello', 'how', 'are', 'you'],
  ['hello', 'how', 'are', 'you'],
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
        var jsonData = JSON.parse(data.responseText);
        section.text(jsonData.value.joke);
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

  matrixToDOMWithoutJquery(matrix, 'clase', 'table');
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

function matrixToDOMWithoutJquery(matrix, tableClass, appendToId){
  var table = document.createElement('table');
  table.className = 'tableClass';
  matrix.forEach(function(el,index,arr){
    var tr = document.createElement('tr');
    el.forEach(function(element){
      if(index == 0){
        var th = document.createElement('th');
        th.className = 'th';
        th.appendChild(document.createTextNode(element));
        tr.appendChild(th);
      }else{
        var td = document.createElement('td');
        td.className = 'td';
        td.appendChild(document.createTextNode(element));
        tr.appendChild(td);
      }
    });
    table.appendChild(tr);
  });

  $('#'+appendToId).append(table);
}
