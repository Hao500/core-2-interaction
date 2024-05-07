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

    //获取点击时的元素，此时是img
    const target = event.target;
    //找到父元素，此时是item的div
    var item = target.parentNode;
    //获得item的id，接下来根据id来展示不同的日历
    console.log(item.id);
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

function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block'; // 确保模态窗口是可见的
        modal.style.transform = 'translateX(-50%) translateY(100vh)'; // 设置初始位置在屏幕底部
        setTimeout(() => {
            modal.style.transform = 'translateX(-50%) translateY(-50%)'; // 移动到中央
        }, 10); // 延迟确保从底部开始动画
    } else {
        console.error('Modal with ID ' + modalId + ' does not exist.');
    }
}


// 关闭模态窗口的函数
function closeInfoModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        // 添加动画使元素平滑地移动回屏幕下方
        modal.style.transform = 'translateX(-50%) translateY(100vh)';
        setTimeout(() => { // 等待动画完成后再隐藏元素
            modal.style.display = 'none';
        }, 500); // 这里的延迟时间应与 CSS 中的 transition 时间相匹配
    } else {
        console.error('Modal with ID ' + modalId + ' does not exist.');
    }
}

  




