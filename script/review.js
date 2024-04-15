document.addEventListener('DOMContentLoaded', function () {
    const sliderItems = document.querySelectorAll('.slider_item');
    const reviewContents = document.querySelectorAll('.reviews__wrap__content');

    sliderItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            // Удалить класс 'pagination-item__selected' у всех элементов
            sliderItems.forEach(el => {
                el.classList.remove('pagination-item__selected');
                el.classList.add('pagination-item__default');
            });
            // Добавить класс 'pagination-item__selected' к текущему элементу
            item.classList.add('pagination-item__selected');
            item.classList.remove('pagination-item__default');

            // Скрыть все слайды
            reviewContents.forEach(content => {
                content.style.display = 'none';
            });
            // Показать выбранный слайд
            if (reviewContents[index]) {
                reviewContents[index].style.display = 'flex';
            }
        });
    });
});
