const upload = document.getElementById('upload');
const label = document.querySelector('label[for="upload"]');
const labelText = document.querySelector('label[for="upload"] span');

const saveBtn = document.querySelector('.save_btn');
const nameInput = document.querySelector('.name_input');

saveBtn.addEventListener('click', () => {
    if (nameInput.value === "") {
        Swal.fire({
            icon: "error",
            text: "컬렉션 이름을 입력해주세요."
        });
    } else if (upload.value === "") {
        Swal.fire({
            icon: "error",
            text: "파일을 업로드 해주세요."
        });
    } else {

        location.href = "/Generator/Generator";
    }
});




/* 파일 업로드 영역 */

upload.addEventListener('change', () => {
    const fileLength = upload.files;
    if (fileLength.length < 1) {
        upload.value = "";
        labelText.style.color = "#E57373";
        label.classList.remove('on');
        label.classList.add('error');
        labelText.textContent = "파일 업로드를 취소하였습니다.";
        return;
    }

    for (let file of upload.files) {

        let fileName = file.name;

        if (!fileName.includes('png')) {
            Swal.fire(
                '다시 시도해 주십시오.',
                'png형식이 아닌 파일이 포함되어있습니다.!',
                'error'
            )

            upload.value = "";
            labelText.style.color = "#E57373";
            label.classList.remove('on');
            label.classList.add('error');
            labelText.textContent = "파일 업로드에 실패하였습니다.";

        } else {
            labelText.style.color = "#1273EB";
            label.classList.add('on');
            label.classList.remove('error');
            labelText.textContent = "파일 첨부 완료";
        }

    }
})
