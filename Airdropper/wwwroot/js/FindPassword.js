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
                text: '이메일 입력해주세요',
            }
        )
        return;
    } else if (!emailReg.test(email.value)) {
        Swal.fire(
            {
                icon: 'error',
                text: '이메일 형식이 올바르지 않습니다.',
            }
        )
        return;
    } else if (sendBtn.classList.contains('on')) {
        Swal.fire(
            {
                icon: 'error',
                text: '인증번호 발송버튼을 눌러주세요.',
            }
        )

    } else if (certification.value === "") {
        Swal.fire(
            {
                icon: 'error',
                text: '인증번호를 입력해주세요.',
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