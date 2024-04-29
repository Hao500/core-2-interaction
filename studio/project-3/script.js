// 确保文档加载完毕后再绑定事件
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.grid-item').forEach(item => {
        item.addEventListener('click', function() {
            var modal = document.getElementById("modal");
            var modalImg = document.getElementById("modalImg");
            modal.style.display = "block";
            modalImg.src = this.children[0].src; // 假设每个.grid-item下面都是一个img元素
        });
    });
});

