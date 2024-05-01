// 设置弹出拟态框，确保文档加载完毕后再绑定事件
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.grid-item').forEach(item => {
        item.addEventListener('click', function() {
            var modal = document.getElementById("modal");
            var modalImg = document.getElementById("modalImg");
            var clock = document.getElementById("clock");
            modal.style.display = "block";
            clock.style.display = "block";
            modalImg.src = this.children[0].src; // 假设每个.grid-item下面都是一个img元素
        });
    });
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


function scrollToNext() {
    // Find the currently active section
    let currentSection = document.querySelector('.section.active');
    if (currentSection.nextElementSibling) {
        // Scroll to the next sibling element
        currentSection.nextElementSibling.scrollIntoView({behavior: 'smooth'});
    }
}
