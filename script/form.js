document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Эта функция из EmailJS отправит данные формы
    emailjs.sendForm('your-service-id', 'your-template-id', this)
        .then(function () {
            alert('Сообщение успешно отправлено!');
        }, function (error) {
            alert('Ошибка отправки: ' + JSON.stringify(error));
        });
});

console.log("Hej you right here");