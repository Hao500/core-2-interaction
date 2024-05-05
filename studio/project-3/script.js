//-------------------------------
// JS Flower example:

petalArray = []; // add petal data here

function addPetal(dayOfMonth) {
  let day = document.getElementById(dayOfMonth);
  let flowerPetal = document.createElement("div");
  flowerPetal.classList.add("flower-petal");
  console.log(flowerPetal);
  day.appendChild(flowerPetal);
}

addPetal("item-11");
addPetal("item-16");
addPetal("item-16");



// END JS Flower example
// -------------------

const gridContainer = document.querySelector(".grid-container");
const overlay = document.querySelector(".overlay");


gridContainer.addEventListener("click", () => {
  // This toggles the display style between 'flex' and 'none' each time a grid-item is clicked
  if (overlay.style.display === "flex") {
    overlay.style.display = "none";
  } else {
    overlay.style.display = "flex";
  }
});

overlay.addEventListener("click", () => {
  // This toggles the display style between 'flex' and 'none' each time a grid-item is clicked
  if (overlay.style.display === "flex") {
    overlay.style.display = "none";
  } else {
    overlay.style.display = "flex";
  }
});


var modal = document.getElementById("modal");
modal.onclick = function() {
    this.style.display = "none";
    var clock = document.getElementById("clock");
    clock.style.display = "none";
}

// 设置clock
function updateClock() {
    var now = new Date();
    var hours= now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    var timeString = hours + ":" + minutes + ":" + seconds;

    document.getElementById("clock").textContent = timeString;

}

setInterval(updateClock,1000);




