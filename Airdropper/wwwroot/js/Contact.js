$(document).ready(function () {
    //여기 아래 부분
    $('#summernote').summernote({
        height: 300,                 // 에디터 높이
        minHeight: null,             // 최소 높이
        maxHeight: null,             // 최대 높이
        focus: true,                  // 에디터 로딩후 포커스를 맞출지 여부
        lang: "ko-KR",					// 한글 설정
        //placeholder: '최대 2048자까지 쓸 수 있습니다'	//placeholder 설정

    });
});

const sendBtn = document.getElementById('send_btn');
const title = document.querySelector('.input_title');
const selectInput = document.querySelector('select');
const noteTextArea = document.querySelector('.note-codable');
const emailInput = document.querySelector('.email');
const chainSelectBtn = document.getElementById('selectChain');

chainSelectBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openMenu(e);

});




const removeClassSelectList = () => {
    document.querySelectorAll('.select_list > ul').forEach(ev => {
        ev.classList.remove('on');
    })
}

// select 열기
const openMenu = (event) => {
    const target = event.currentTarget;
    const nextElement = target.parentElement.nextElementSibling;

    removeClassSelectList();

    nextElement.classList.add('on');
}

// select 닫기
document.body.addEventListener('click', (e) => {
    const target = e.target
    const isSelect = target.classList.contains('select_list') || target.closest('.select_list');

    if (isSelect) return;
    removeClassSelectList();
})

document.querySelectorAll('.chain_list li button').forEach(ev => {
    ev.addEventListener('click', (e) => {
        removeClassSelectList();
        chainSelectBtn.querySelector('.select').textContent = ev.children[0].textContent;
        document.querySelector('.select_wrap').classList.remove('default');
        chainSelectBtn.dataset.select = true;
    })
})


sendBtn.addEventListener('click', () => {
    if (title.value === "") {
        Swal.fire({
            icon: 'error',
            text: '문의제목을 입력해주세요.',
        }).then(e => {
            title.focus();
        });

    } else if (chainSelectBtn.dataset.select !== "true") {
        Swal.fire({
            icon: 'error',
            text: '문의유형을 선택해주세요.',
        });
    } else if ($("#summernote").summernote('code') === "<p><br></p>") {
        Swal.fire({
            icon: 'error',
            text: '내용을 입력해 주세요.',
        });

    } else if (emailInput.value === "") {
        Swal.fire({
            icon: 'error',
            text: '이메일을 입력해 주세요.',
        }).then(e => {
            emailInput.focus();
        });
    } else {
        /////////////전송
    }

})
