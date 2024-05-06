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

// 调取info button
// 打开模态窗口的函数
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'block';  // 显示模态窗口
    } else {
      console.error('Modal with ID ' + modalId + ' does not exist.');
    }
  }
  
  // 关闭模态窗口的函数
  function closeInfoModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'none';  // 隐藏模态窗口
    } else {
      console.error('Modal with ID ' + modalId + ' does not exist.');
    }
  }
  




