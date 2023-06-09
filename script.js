let lists = document.getElementsByClassName("list");
let leftBox = document.getElementById("left");
let rightBox = document.getElementById("right");
var clear = document.querySelector(".clear");

clear.addEventListener("click", function() {
    var rightBoxChildren = Array.from(rightBox.children);
    for (var i = 0; i < rightBoxChildren.length; i++) {
      if (rightBoxChildren[i] !== clear) {
        leftBox.appendChild(rightBoxChildren[i]);
      }
    }
  });

for (const list of lists) {
  list.addEventListener("dragstart", function (e) {
    let selected = e.target;
    rightBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    rightBox.addEventListener("drop", function (e) {
      e.preventDefault();
      rightBox.appendChild(selected);
      selected = null;
    });
  });
}
