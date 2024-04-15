document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Эта функция из EmailJS отправит данные формы
    emailjs.sendForm('service_snx3yur', 'template_f1ban5t', this)
        .then(function () {
            alert('Your request has been successfully sent');
        }, function (error) {
            alert('Sending error: ' + JSON.stringify(error));
        });
});
