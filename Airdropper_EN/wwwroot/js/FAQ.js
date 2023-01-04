const accordionBtn = document.querySelectorAll('.table_wrap ul li > button');
const content = document.querySelectorAll('.content');


for (btn of accordionBtn) {

    btn.addEventListener('click', (e) => {
        const target = e.currentTarget;
        const nextElement = target.nextElementSibling;

        if (!nextElement.classList.contains('on')) {
            document.querySelectorAll('.table_wrap li > button p').forEach(ev => {
                ev.classList.remove('on');
            })
            content.forEach(cont => {
                cont.classList.remove('on');
            })
        }
        nextElement.classList.toggle("on");
        //target.querySelector('p').classList.toggle('on');
    })

}
