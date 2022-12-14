window.addEventListener('resize', () => {
    windowSizeCheck();
})
windowSizeCheck();

function windowSizeCheck() {
    if (window.innerWidth < 1024 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.body.style.display = "none";
        alert('1024p이하 해상도 및 모바일에서는 접속 하실수 없습니다.\nPC를 이용해주시길 바랍니다.');
    } else {
        document.body.style.display = "block";
    }
}