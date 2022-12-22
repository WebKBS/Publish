const signInBtn = document.getElementById('signInBtn');
const email = document.querySelector('.email');
const pw = document.querySelector('.password');
let emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;


const signFunc = (e) => {
    e.preventDefault()

    if (email.value === "") {
        Swal.fire(
            {
                icon: 'error',
                text: '아이디를 입력해주세요',
            }
        )
        return;
    } else if (!emailReg.test(email.value)) {
        Swal.fire(
            {
                icon: 'error',
                text: '아이디 형식이 올바르지 않습니다.',
            }
        )
        return;
    }
    if (pw.value === "") {
        Swal.fire(
            {
                icon: 'error',
                text: '비밀번호를 입력해주세요.',
            }
        )
        return;
    }

    location.href = '/';
}

signInBtn.addEventListener('click', signFunc)