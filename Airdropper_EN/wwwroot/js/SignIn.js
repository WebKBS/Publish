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
                text: 'Please enter your ID.',
            }
        )
        return;
    } else if (!emailReg.test(email.value)) {
        Swal.fire(
            {
                icon: 'error',
                text: 'The ID format is incorrect.',
            }
        )
        return;
    }
    if (pw.value === "") {
        Swal.fire(
            {
                icon: 'error',
                text: 'Please enter a password.',
            }
        )
        return;
    }

    location.href = '/';
}

signInBtn.addEventListener('click', signFunc)