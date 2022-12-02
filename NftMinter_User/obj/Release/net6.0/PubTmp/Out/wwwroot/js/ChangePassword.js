let errorMsg = {
    incorrect: "비밀번호 양식이 올바르지 않습니다.",
    noSame: "비밀번호가 일치하지 않습니다.",
}

const submitBtn = document.querySelector('button[type=submit]');
const alertArea = document.querySelector('.error_msg');
const alertAreaText = document.querySelector('.error_msg p');

let passwordRule = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;


document.querySelectorAll('.password').forEach(ev => {
    ev.addEventListener('input', () => {
        ev.classList.remove('error');
        alertArea.classList.remove('on');
    })
})

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const pw = document.getElementById('pw');
    const rePw = document.getElementById('re_pw');

    if (pw.value === "") {
        pw.classList.add('error');
        pw.focus();
        return;

    } else if (!passwordRule.exec(pw.value)) {
        alertArea.classList.add('on');
        alertAreaText.textContent = errorMsg.incorrect;
        pw.focus();
        pw.classList.add('error');
        return;

    }

    if (rePw.value === "") {
        rePw.classList.add('error');
        rePw.focus();
        return;

    } else if (!passwordRule.exec(rePw.value)) {
        alertArea.classList.add('on');
        alertAreaText.textContent = errorMsg.incorrect;
        rePw.classList.add('error');
        rePw.focus();
        return;
    }

    if (pw.value !== rePw.value) {
        rePw.classList.add('error');
        rePw.focus();
        alertArea.classList.add('on');
        alertAreaText.textContent = errorMsg.noSame;
        return;
    }

    Swal.fire({
        icon: 'success',
        title: '',
        text: '비밀번호가 변경되었습니다. 로그인 화면으로 이동합니다.',
    }).then(result => {
        location.href = "/Sign/Login2";
    })
})