const sideOpenBtn = document.querySelector('.side_open_btn');
const sideCloseBtn = document.querySelector('.side_close_btn');
const sideMenu = document.querySelector('.side_menu');
const myPageBtn = document.querySelector('.my_page button');
const myPageList = document.querySelector('.my_page ul');


/* ����� ���̵� �޴� */
const openSideMenu = () => {
    sideMenu.classList.add('on');
    document.body.classList.add('on');
    document.querySelector('html').classList.add('on');
}

const closeSideMenu = () => {
    sideMenu.classList.remove('on');
    document.body.classList.remove('on');
    document.querySelector('html').classList.remove('on');
}

sideOpenBtn.addEventListener('click', openSideMenu);
sideCloseBtn.addEventListener('click', closeSideMenu);


/*myPageBtn.addEventListener('click', () => {
    myPageList.classList.add('on');
});*/

/* ���� �޴� Ŭ���� */
document.addEventListener('click', (e) => {
    if (document.getElementById('myPageListOpen') === null) {
        return
    }

    if (e.target.id === "myPageListOpen") {
        myPageList.classList.add('on');
    } else {
        myPageList.classList.remove('on');
        return
    }
});




const sideNoticeBtn = document.querySelector('.notice_btn');
sideNoticeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.currentTarget.nextElementSibling.classList.toggle('on');
    console.dir(e.currentTarget.nextElementSibling);
})



/* ��� Ŭ���� */
const toggleClassHandler = (button, target) => {
    button.addEventListener('click', () => {
        target.classList.toggle('on');
    });

}


/* ����� ���� �ƴ��� üũ */
const mobileCheck = document.querySelectorAll('[data-isMobile=""]');
let mobileReg = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i

const checkEventListener = (e) => {
    if (mobileReg.test(navigator.userAgent)) {
        Swal.fire({
            icon: "error",
            text: "Only available on PC",
        });
        e.preventDefault();
        return
    }
}
for (mobile of mobileCheck) {
    mobile.addEventListener('click', checkEventListener);
}


/* �̸��� ���Խ� üũ */
const EmailRegExp = (emailInput, success = null) => {
    let emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (emailInput.value === "") {
        Swal.fire(
            {
                icon: 'error',
                text: 'Please enter your e-mail.',
            }
        )
        return;
    } else if (!emailReg.test(emailInput.value)) {
        Swal.fire(
            {
                icon: 'error',
                text: 'Email form is incorrect.',
            }
        )
        return;
    }
    console.log(success)
}



/* ��й�ȣ ������ ���� */
const eyeBtnAll = document.querySelectorAll('[data-eye]');
const viewPassword = (button) => {
    button.classList.toggle('on');
    if (button.previousElementSibling.attributes[0].value === "password") {
        button.previousElementSibling.setAttribute('type', "text");
    } else {
        button.previousElementSibling.setAttribute('type', "password");
    }
}
eyeBtnAll.forEach(eyeBtn => {
    eyeBtn.addEventListener('click', () => {
        viewPassword(eyeBtn);
    })
})


/* on Ŭ���� �߰� */
const addClassList = (button, target) => {
    button.addEventListener('click', () => {
        target.classList.add('on');
    })
}

/* on Ŭ���� ���� */
const removeClassList = (button, target) => {
    button.addEventListener('click', () => {
        target.classList.remove('on');
    })
}