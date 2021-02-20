

// //Create a "close" button and append it to each list item
//  var myNodelist = document.getElementsByTagName('li');
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// // Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);

// // Create a new list item when clicking on the "Add" button
// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput").value;
//   var t = document.createTextNode(inputValue);
//   var list = li.appendChild(t);
//   function store() {
//     window.localStorage.myitems = list.innerHTML;
//   }
  
//    // window.localStorage.setItem("data" , "Min Khant Kyaw");
//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";
//   store();

//   // let goalIds = JSON.parse(localStorage.getItem('goalIds'));
//   //       goalIds.push(id);
//   //       localStorage.setItem('goalIds', JSON.stringify(goalIds));
//   //       localStorage.setItem('goal-' + id, JSON.stringify([inputValue]));
//   //     }
//   // document.getElementById("myUL").appendChild(li) = window.localStorage.getItem("data");
  
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }
// var username = document.getElementById("name");
// document.getElementById('username').innerHTML = '<i class="fa fa-list"></i> ' + username;

var d = new Date();

var month = d.getMonth()+1;
var day = d.getDate();

var output = ((''+day).length<2 ? '0' : '') + day + '/' +
    ((''+month).length<2 ? '0' : '') + month + '/' + d.getFullYear() ;
    var days = [
    ' (Sunday)',
    ' (Monday)',
    ' (Tuesday)',
    ' #Wednesday',
    ' (Thursday)',
    ' (Friday)',
    ' (Saturday)'
];

d = new Date();
x = d.getDay();


document.getElementById('date').innerHTML = '<i class="fa fa-clock"></i> '+ output + days[x];



(function(){
  
  var list = document.querySelector('#myUL');
      sform = document.querySelector('#newListS'),
      lform = document.querySelector('#newListL')
      item = document.querySelector('#myInput');
  
  sform.addEventListener('click',function(e){
    e.preventDefault();
    
    if (item.value === '') {
    alert("You must write something!");
    } else {
    list.innerHTML += '<li>' + item.value  + '</li>';
    item.value = "";
    store(); 
    
        }
  },false)
  lform.addEventListener('click',function(e){
    e.preventDefault();
    
    if (item.value === '') {
    alert("You must write something!");
    } else {
    list.innerHTML += '<li>' + item.value  + '</li>';
    item.value = "";
    store(); 
    
        }
  },false)

  
  list.addEventListener('click',function(e){
    var t = e.target;
    if(t.classList.contains('checked')){
      var ask = confirm("Would you like to delete this?");
      // alert(ask);
      if (ask == true)
      t.parentNode.removeChild(t);
       
    } else {
      t.classList.add('checked');
    }
    store();
  },false)
  
  function store() {
    window.localStorage.myitems = list.innerHTML;
  }
  
  function getValues() {
    var storedValues = window.localStorage.myitems;
    // if(storedValues) {
      
    // }
    // else
      list.innerHTML = storedValues;
    
  }
  getValues();
})();
