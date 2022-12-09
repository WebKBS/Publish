const submitBtn = document.querySelector('button[type=submit]');

let passwordRule = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const pw = document.getElementById('pw');
    const rePw = document.getElementById('re_pw');

    if (pw.value === "") {
        Swal.fire({ icon: 'error', text: '비밀번호를 입력해주세요.' })
        pw.focus();
        return;

    } else if (!passwordRule.exec(pw.value)) {
        Swal.fire({ icon: 'error' })
        pw.focus();
        Swal.fire({ icon: 'error', text: '비밀번호 양식이 올바르지 않습니다.' })
        return;

    }

    if (rePw.value === "") {
        Swal.fire({ icon: 'error', text: '비밀번호 재입력을 입력해주세요.' })
        rePw.focus();
        return;

    } else if (!passwordRule.exec(rePw.value)) {
        Swal.fire({ icon: 'error', text: '비밀번호 양식이 올바르지 않습니다.' })
        rePw.focus();
        return;
    }

    if (pw.value !== rePw.value) {
        rePw.focus();
        Swal.fire({ icon: 'error', text: '비밀번호가 일치하지 않습니다.'})
        return;
    }

    Swal.fire({
        icon: 'success',
        title: '',
        text: '비밀번호가 변경되었습니다. 로그인 화면으로 이동합니다.',
    }).then(result => {
        location.href = "/Sign/Login";
    })
})