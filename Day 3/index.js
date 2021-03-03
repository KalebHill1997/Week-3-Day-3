let thingy = document.getElementById('theButton');
thingy.addEventListener('click', function(event) {
    let userEnteredThis = prompt("Enter your to do");

    var node = document.createElement("ul");
    var textnode = document.createTextNode(userEnteredThis);
    node.appendChild(textnode);
    document.getElementById("theList").appendChild(node);
})


var oneOfTheListItems = document.getElementById('theList');
oneOfTheListItems.addEventListener('click', function(e) {
    var li = e.target;
    var listItems = document.querySelectorAll("li"); 
    var ul = document.getElementById("ul");
    li.parentNode.removeChild(li); 
})