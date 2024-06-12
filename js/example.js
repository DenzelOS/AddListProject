document.addEventListener("DOMContentLoaded", function() {
// ADD NEW ITEM TO END OF LIST
var itemEnd = document.createElement('li');
  itemEnd.textContent = 'cream';
  document.querySelector('ul').appendChild(itemEnd);

// ADD NEW ITEM START OF LIST
 var itemStart = document.createElement('li');
 itemStart.textContent = 'kale';
  var list = document.querySelector('ul');
  list.insertBefore(itemStart, list.firstChild);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var listItems = document.querySelectorAll('ul li');
  listItems.forEach(function(item) {
    item.classList.add('cool');
  });

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2');
  var itemCount = listItems.length
  var span = document.createElement('span');
  span.textContent = itemCount;
  heading.appendChild(span);
});