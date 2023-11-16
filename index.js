document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('burger').addEventListener('click', function () {
        document.querySelector('.header').classList.toggle('open');
    });
});

const items = document.querySelectorAll('.menu__link');
items.forEach(function (item) {
    item.addEventListener('click', function () {
        document.querySelector('.header').classList.remove('open');
    });
});
