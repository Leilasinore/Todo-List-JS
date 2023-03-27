// var form = document.getElementById('addForm');
// var itemList = document.getElementById('items');
// var filter = document.getElementById('filter');
// var date = new Date();
// var id = "" + date.getMinutes(); + date.getSeconds() + date.getMilliseconds() + "";
// var lin;
// var ids;
// var lio;

// // Form submit event
// // form.addEventListener('submit', addItem);
// // Delete event
// itemList.addEventListener('click', removeItem);
// // Edit event
// itemList.addEventListener('click', editItem);
// // Filter event
// filter.addEventListener('keyup', filterItems);

// // Add item
// function addItem(e){

//     e.preventDefault();

//   // Get input value
//   var newItem = document.getElementById('item').value;

//   // Create new li element
//   var li = document.createElement('li');
//       li.id = "li_" + id;
//   // Add class
//   li.className = 'list-group-item';

//     var span = document.createElement('span');
//     span.id = "li_" + id;
//     span.innerHTML = newItem;

//   //  console.log(span.innerHTML);

//   // Add text node with input value
//   li.appendChild(span);

//   // Create del button element
//   var deleteBtn = document.createElement('button');

//   // Add classes to del button
//   deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

//   // Append text node
//   deleteBtn.appendChild(document.createTextNode('X'));

//   // Append button to li
//   li.appendChild(deleteBtn);

//     // Create edit button element
//   var editBtn = document.createElement('button');

//   // Add classes to del button
//   editBtn.className = 'btn btn-primary btn-sm float-right edit btn-primary-spacing';

//   // Append text node
//   editBtn.appendChild(document.createTextNode('Edit'));

//   // Append button to li
//   li.appendChild(editBtn);

//   // Append li to list
//   itemList.appendChild(li);
//   document.getElementById('item').value = "";
// }

// // Edit item
// function editItem(e){
//   if(e.target.classList.contains('edit')){

//     if(confirm('Are You Sure?')){

//         lin = e.target.parentElement;

//         var text = lin.getElementsByTagName('span')[0].textContent;
//          ids = lin.id;
//         document.getElementById('item').value = text;
//         var btnNew = document.getElementById('btnAdd');
//         btnNew.innerHTML = 'Edit';
//       //  var buttonText = button.innerText;
//      //   var fullText = button.parentElement.innerText;
//     //    var wanted = fullText.replace(buttonText, '');
//        // console.log(li);
//        // console.log(text);
//      //   console.log(fullText);

//     }
//   }

// }

// var btnNew = document.getElementById('btnAdd');
// btnNew.onclick = function() {
//     if (this.innerHTML == 'Submit') {
//         var inItemText = document.getElementById('item');

//         var itemText = inItemText.value;
//         if (!itemText || itemText === "" || itemText === " ") {
//             return false;
//         }

//       form.addEventListener('submit', addItem);
//     } else if (this.innerHTML == 'Edit') {
//       this.innerHTML = 'Submit';
//        var ItemTexts = document.getElementById('item').value;

//              lio = document.getElementById(ids);
//              lio.getElementsByTagName('span')[0].textContent = ItemTexts;

//             console.log(lio);
//             itemList.appendChild(lio);
//             document.getElementById('item').value = "";

//         if (!itemText || itemText === "" || itemText === " ") {
//             return false;
//         }

//         document.getElementById('items').value="";
//     }
// }

// // Remove item
// function removeItem(e){
//   if(e.target.classList.contains('delete')){
//     if(confirm('Are You Sure?')){
//       var li = e.target.parentElement;
//       itemList.removeChild(li);
//         console.log(li);
//     }
//   }
// }

// // Filter Items
// function filterItems(e){
//   // convert text to lowercase
//   var text = e.target.value.toLowerCase();
//   // Get lis
//   var items = itemList.getElementsByTagName('li');
//   // Convert to an array
//   Array.from(items).forEach(function(item){
//     var itemName = item.firstChild.textContent;
//     if(itemName.toLowerCase().indexOf(text) != -1){
//       item.style.display = 'block';
//     } else {
//       item.style.display = 'none';
//     }
//   });
// }

// console.log(document.all);
// console.log(document.title);
// console.log(document.body);
// const item = document.querySelector(".list-group-item");
// item.textContent = "Item-no-one";
// const items = document.querySelectorAll(".list-group-item");

// for (i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "yellow";
// }
//different selectors,multiple or single element selectors
//for sigle we have getElementById and queryselector
//for multiple we have getElemetsByClassName and getElementByTagName and and querySelectorAll

// var itemList = document.querySelector("#items"); //this selects the unordered list
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4"; //the .parentNode selects the parent of the #items which is the div with id of main

// var addButton = document.getElementById("btnAdd");
// addButton.addEventListener("click", runEvent);

// function runEvent(e) {
//   e.preventDefault();
//   document.getElementById("output7").innerHTML = "<h2>item7</h2>";
//   console.log("button cicked");
// }

// //get form and the input
// var itemInput = document.getElementById("item");
// var form = document.querySelector("form");
// var select = document.querySelector("select");

// //add event listener to the input
// itemInput.addEventListener("keydown", handleInput);

// //define the event handler function
// //managed to display input to ui...how do i put the same input into the ui on clicking te submit button
// function handleInput(e) {
//   console.log(e.target.value);
//   document.getElementById("output").innerHTML =
//     "<h2>" + e.target.value + "</h2";
// }
// //add eventListener for select
// select.addEventListener("change", handleSelect);

// //add event handler for submit
// function handleSelect(e) {
//   console.log(e.target.value);
// }

// //add event listener for the form
// form.addEventListener("submit", handleSubmit);

// //add handlesubmit function
// function handleSubmit(e) {
//   e.preventDefault();
//   console.log("form submitted successfully");
// }

//start of project implimentation
var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

//listen for a submit event on the form

form.addEventListener("submit", addItem);

//delete functionality,listen for event on the itemlist
itemList.addEventListener("click", removeItem);

//listen for keyup event
filter.addEventListener("keyup", filterItem);

//create a function to handle the submit event

function addItem(e) {
  e.preventDefault();

  //get the input
  var newItem = document.getElementById("item").value;
  //create a new element
  var li = document.createElement("li");

  //add a classname to the element we have created
  li.className = "listitem5";
  //add a text node to the element we have created
  li.appendChild(document.createTextNode(newItem));

  //creating the button element
  var deleteBtn = document.createElement("button");

  //adding a class to the delete btn
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  //creating a text node and
  deleteBtn.appendChild(document.createTextNode("X"));
  //Append the btn to the li
  li.appendChild(deleteBtn);

  //add the li to the ul
  itemList.appendChild(li);
  //
}
//define function to remove Item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItem(e) {
  //convert to lowercase
  var text = e.target.value.toLowerCase();
  //get lis
  var items = itemList.getElementsByTagName("li"); //we need to convert this html collection to an array
  //convert to array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
