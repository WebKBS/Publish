const submitBtn = document.querySelector('button[type=submit]');

let passwordRule = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const pw = document.getElementById('pw');
    const rePw = document.getElementById('re_pw');

    if (pw.value === "") {
        Swal.fire({ icon: 'error', text: 'Please enter a password.' })
        pw.focus();
        return;

    } else if (!passwordRule.exec(pw.value)) {
        Swal.fire({ icon: 'error' })
        pw.focus();
        Swal.fire({
            icon: 'error', text: 'The password format is incorrect.' })
        return;

    }

    if (rePw.value === "") {
        Swal.fire({ icon: 'error', text: 'Please re-enter your password.' })
        rePw.focus();
        return;

    } else if (!passwordRule.exec(rePw.value)) {
        Swal.fire({
            icon: 'error', text: 'The password format is incorrect.' })
        rePw.focus();
        return;
    }

    if (pw.value !== rePw.value) {
        rePw.focus();
        Swal.fire({
            icon: 'error', text: 'Passwords do not match.'})
        return;
    }

    Swal.fire({
        icon: 'success',
        title: '',
        text: 'Your password has been changed.You will be taken to the login screen.',
    }).then(result => {
        location.href = "/Sign/Login";
    })
})