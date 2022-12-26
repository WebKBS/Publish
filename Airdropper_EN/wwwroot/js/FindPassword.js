const submitBtn = document.getElementById('submitBtn');
const email = document.querySelector('.email');
const certification = document.querySelector('.certification');
const sendBtn = document.querySelector('.send');
let emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

submitBtn.addEventListener('click', checkFunc)

// 유효성 함수
function checkFunc(e) {
    e.preventDefault()

    if (email.value === "") {
        Swal.fire(
            {
                icon: 'error',
                text: 'Please enter your e-mail.',
            }
        )
        return;
    } else if (!emailReg.test(email.value)) {
        Swal.fire(
            {
                icon: 'error',
                text: 'Email format is incorrect.',
            }
        )
        return;
    } else if (sendBtn.classList.contains('on')) {
        Swal.fire(
            {
                icon: 'error',
                text: 'Please click the send verification code button.',
            }
        )
        return;

    } else if (certification.value === "") {
        Swal.fire(
            {
                icon: 'error',
                text: 'Please enter your verification code.',
            }
        )
        return;
    }

    location.href = "/Sign/ChangePassword"
}



document.querySelector('.send').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.send').classList.remove('on');
    document.querySelector('#timer').classList.add('on');
    timerStart();
});

document.querySelector('.resend').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.resend').classList.remove('on');
    document.querySelector('.error_msg').classList.remove('on');
    document.querySelector('#timer').classList.add('on');
    document.querySelector('#timer').textContent = "5:00";
    timerStart();
});

function timerStart() {
    let time = 299; // 5분
    let min;
    let sec;

    let timer = setInterval(() => {
        min = parseInt(time / 60);
        sec = time % 60;
        //console.log(time)
        //console.log(sec)
        //min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;

        document.querySelector('#timer').innerHTML = min + ":" + sec;
        time--

        if (time < 0) {
            clearInterval(timer)
            document.querySelector('#timer').classList.remove('on');
            document.querySelector('.error_msg').classList.add('on');
            document.querySelector('.resend').classList.add('on');
        }
    }, 1000);
}