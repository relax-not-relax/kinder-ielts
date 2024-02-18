import { renderSubBannerList } from "./utils";
// import { dragableCarousel } from "./utils/carousel";
// import { formSubmit } from "./utils/form";
// import { scrollToSection } from "./utils/scroll";

function formSubmit() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwscZ0n1WH5BWffVw-8HSF9KKeWVXAfWnpCmXoIWR4_5YDYXT0j9cuvF0szKiEbhvd8ZA/exec'

    const form = document.forms['contact-form']
    var thankYouModal = new bootstrap.Modal(document.getElementById("myModalBangVang"));
    const preloaderWrapper = document.getElementById('load-wrapper-hatgiong');


    form.addEventListener('submit', e => {
        e.preventDefault();
        // preloaderWrapper.classList.add('fade-out-anim');
        preloaderWrapper.style.display = "flex";
        preloaderWrapper.style.alignItems = "center";
        preloaderWrapper.style.justifyContent = "center";
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                if (response.ok) {
                    // Show the thank you modal

                    preloaderWrapper.classList.add('fade-out-anim');

                    thankYouModal.show();
                    // Reload the page after a delay (e.g., 2 seconds)
                    setTimeout(() => {
                        thankYouModal.hide();
                        location.reload();
                    }, 3700);
                } else {
                    console.error('Form submission failed.');
                }
            })

            .catch(error => console.error('Error!', error.message))
    })
}


(() => {
    const subBannerListTutor = [
        {
            id: 1,
            title: 'Kiến thức',
            description: 'Bài thi IELTS đơn giản là bài thi tiếng Anh thiết kế phục vụ mục đích học thuật. Vậy nên, Kinder IELTS chú trọng nền tảng học thuật cho học viên xuyên suốt khóa học.',
            thumbnail: 'https://firebasestorage.googleapis.com/v0/b/testform-b2a34.appspot.com/o/sb-icon-1.png?alt=media&token=020077e2-bca6-4664-abbf-cf1c735b1f83'
        },
        {
            id: 1,
            title: 'Kỹ Năng',
            description: 'Kỹ năng làm bài là điều tối cần thiết trong IELTS hay bất kì bài thi nào. Vì vậy, Kinder IELTS đưa ra những phương pháp làm bài từ chính quá trình dạy - học của tutors để học viên đạt điểm theo mong muốn.',
            thumbnail: 'https://firebasestorage.googleapis.com/v0/b/testform-b2a34.appspot.com/o/sb-icon-2.png?alt=media&token=16856c5c-5dd9-4f2c-9ca9-96b2975eb259'
        },
        {
            id: 1,
            title: 'Luyện tập ',
            description: 'Mỗi buổi học của Kinder IELTS luôn có thời gian để học viên làm bài tập và được chữa ngay tại lớp. Điều này giúp học viên vừa vận dụn vừa hiểu bài, cũng như làm quen với kỹ năng làm bài.',
            thumbnail: 'https://firebasestorage.googleapis.com/v0/b/testform-b2a34.appspot.com/o/sb-icon-3.png?alt=media&token=64160d00-fa86-40d8-9c1a-3c6418d72bb3'
        },
    ];

    renderSubBannerList('subBannerListTutor', subBannerListTutor);
    formSubmit();
    //scrollToSection();
})();