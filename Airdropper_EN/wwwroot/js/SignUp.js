const checkBox = document.querySelectorAll('.list input[type=checkbox]');
const AllCheckBtn = document.getElementById('all_check');
const nextButton = document.querySelector('.next_btn');
const requireCheck = document.querySelectorAll(".list input[type=checkbox][data-required=true]");

AllCheckBtn.addEventListener('click', e => {

    if (e.target.checked) { // 모든 동의 클릭시 전체 check true
        for (let check of checkBox) {
            check.checked = true;
            nextButton.disabled = false;
        }
    } else {
        for (let check of checkBox) {
            check.checked = false;
            nextButton.disabled = true;
        }
    }
});

// check박스 개별 클릭시
for (let check of checkBox) {
    check.addEventListener('input', e => {
        checkRequire();
        checkAll();
    })
}

const checkRequire = () => {
    for (let check of requireCheck) {
        if (!check.checked) {
            nextButton.disabled = true;
            return;
        }
    }
    result = true;
   
    nextButton.disabled = false;
}

const checkAll = () => {
    let isAllChecked = true;
    checkBox.forEach(el => {
        if (!el.checked) {
            isAllChecked = false;
            return;
        }
    });

    if (isAllChecked) {
        AllCheckBtn.checked = true;
    } else {
        AllCheckBtn.checked = false;
    }
};



nextButton.addEventListener('click', (e) => {
    e.preventDefault();
    let consentMarketingEl = document.querySelector(".list input[type=checkbox][data-required=false]");

    let consentMarketing = consentMarketingEl.checked ? true : false;

    location.href = `/Sign/SignUpInfo?ConsentMarketing=${consentMarketing}`;
});


/* 상세보기 */
const detailViews = document.querySelectorAll(".detail");
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal_close_btn');

detailViews.forEach(e => {
    e.addEventListener('click', (event) => {
        event.preventDefault();
        modal.classList.add('on');
    })
})
//modalCloseBtn.addEventListener('click', (e) => {
//    e.currentTarget.closest('.modal').classList.remove('on');
//})

