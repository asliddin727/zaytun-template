'use strict'

const orderListActive = document.querySelectorAll('.order-menu .item'),
    orderListCount = document.querySelectorAll('.order-menu .item .count'),
    orderEmptyContainer = document.querySelector('.my-order-container-empty'),
    orderContainer = document.querySelector('.my-order-container'),
    orderTypes = document.querySelector('.my-order .order-types'),
    orderStatus = document.querySelectorAll('.order-item-header .status')

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


if(orderContainer.innerHTML == false){
    orderContainer.style.display = 'none';
    orderTypes.style.display = 'none';
    orderEmptyContainer.style.display = 'flex';
}


orderStatus.forEach(item => {
    if(item.innerText === 'Ожидается оплата'){
        item.style.backgroundColor = '#F2994A';
    }else if(item.innerText === 'Доставляется'){
        item.style.backgroundColor = 'orange';
    }else if(item.innerText === 'Обрабока заказа'){
        item.style.backgroundColor = 'gray';
    }
})



