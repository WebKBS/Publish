const emailInput = document.querySelector('.email_input');
const emailSendBtn = document.querySelector('.submit_btn');

const ab = "asdasdasd"


emailSendBtn.addEventListener('click', () => {
    EmailRegExp(emailInput);
})