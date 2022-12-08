const accordionBtn = document.querySelectorAll('.table_wrap ul li > button');
const content = document.querySelectorAll('.content');


for (btn of accordionBtn) {

    btn.addEventListener('click', (e) => {
        const target = e.currentTarget
        const nextElement = target.nextElementSibling;

        if (!nextElement.classList.contains('on')) {
            content.forEach(cont => {
                cont.classList.remove('on');
            })
        }
        nextElement.classList.add("on");
    })

}
