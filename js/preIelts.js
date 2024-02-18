function formSubmit() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwscZ0n1WH5BWffVw-8HSF9KKeWVXAfWnpCmXoIWR4_5YDYXT0j9cuvF0szKiEbhvd8ZA/exec'

    const form = document.forms['contact-form']
    var thankYouModal = new bootstrap.Modal(document.getElementById("myModalPre"));
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
    formSubmit();
})();