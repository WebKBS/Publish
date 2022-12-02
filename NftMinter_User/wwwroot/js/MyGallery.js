const collectionBtn = document.querySelector('.collection_button');
const collectionList = document.querySelector('.collection_list');
const changeNameBtn = document.querySelector('.change_name_btn');
const changeNameModal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal_close_btn');

const collectionItems = document.querySelectorAll('.collection_list li');

// 모바일 상단 컬렉션리스트
toggleClassHandler(collectionBtn, collectionList);

// 이름 변경 클릭
addClassList(changeNameBtn, changeNameModal);
// 이름 변경 모달 닫기
removeClassList(closeModalBtn, changeNameModal)

// 모달 아이템 클래스 on

collectionItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        collectionItems.forEach(list => {
            list.classList.remove('on');
        })
        e.currentTarget.classList.add('on');
    })
});