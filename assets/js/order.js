// 'use strict'

const orderListActive = document.querySelectorAll('.order-menu .item'),
    orderListCount = document.querySelectorAll('.order-menu .item .count')

orderListActive.forEach(item => {
    item.addEventListener('click', () => {
        // Barcha elementlardan 'active' klassini olib tashlash
        orderListActive.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });

        // Bosilgan elementga 'active' klassini qo'shish yoki olib tashlash
        if (!item.classList.contains('active')) {
            item.classList.add('active');
        }
    });
});

orderListCount.forEach(countItem => {
    if (countItem.innerText == false) {
        countItem.style.backgroundColor = 'transparent';
    }
});

