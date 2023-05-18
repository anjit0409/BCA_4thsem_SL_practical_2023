


const element = document.getElementById("intro");
document.getElementsByClassName("demo").innerHTML =
   "This example is an introduction of a " + element.innerHTML;

var p_tag_collection = document.getElementsByTagName("p");
console.log(p_tag_collection);

var parent_node = document.getElementById("parent-node");
var element_to_remove = document.getElementById("removing-element");

parent_node.removeChild(element_to_remove);

document.getElementById("intro").title = "Test Title";