export function formSubmit() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzdRZe36yzlLdJzlJGwnTSpOKzepkTtWit19XU-EM1-YqpgGl5233D7zvfjM1zTimqFAw/exec'

    const form = document.forms['contact-form']

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => alert("Thank you! your form is submitted successfully."))
            .then(() => { window.location.reload(); })
            .catch(error => console.error('Error!', error.message))
    })
}