window.addEventListener('resize', () => {

    windowSizeCheck();
})
windowSizeCheck();

function windowSizeCheck() {

    const elementMsg = `<div id="windowCheckErrorMsg" style="text-align: center; padding: 100px 24px; word-break: keep-all">1024p이하 해상도 및 모바일에서는 접속 하실수 없습니다.
                <br>
                PC를 이용해주시길 바랍니다.
                <br><br>
                1024p or lower resolution and cannot be accessed on mobile devices.
                <br>
                Please use a PC.
                </div>`


    if (window.innerWidth < 1024 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        if (document.getElementById("wrap").style.display === "none") {
            return;
        }

        document.getElementById("wrap").style.display = "none";
        alert('1024p이하 해상도 및 모바일에서는 접속 하실수 없습니다.\nPC를 이용해주시길 바랍니다.');
        document.body.insertAdjacentHTML('beforeend', elementMsg);

        //document.querySelectorAll('.timer').forEach(ev => {
        //    let num = 10;

        //    const timer = setInterval(() => {
        //        num -= 1;
        //        ev.textContent = num;
        //        if (num === 0) {
        //            window.location.href = history.back();
        //            clearInterval(timer);
        //        }
        //    }, 1000)
        //})

    } else {
        document.getElementById("wrap").style.display = "block";
        if (document.getElementById('windowCheckErrorMsg')) {
            document.getElementById('windowCheckErrorMsg').remove();
            return;
        }
    }
}