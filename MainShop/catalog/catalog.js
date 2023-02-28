'use strict';

const catalogHTML = `
    <div class="catalog-items-block">
        <ul class="catalog-list">
            <li class="list-item" data-category="smartphones">
                <a class="list-item-link" href="#">Смартфоны</a><i class="fa-solid fa-photo-film"></i>
            </li>
            <li class="list-item" data-category="laptops">
                <a class="list-item-link" href="#">Ноутбуки</a><i class="fa-solid fa-laptop"></i>
            </li>
            <li class="list-item" data-category="fragrances">
                <a class="list-item-link" href="#">Духи</a><i class="fa-solid fa-spray-can-sparkles"></i>
            </li>
            <li class="list-item" data-category="skincare">
                <a class="list-item-link" href="#">Уход за кожей</a><i class="fa-solid fa-explosion"></i>
            </li>
            <li class="list-item" data-category="groceries">
                <a class="list-item-link" href="#">Бакалея</a><i class="fa-solid fa-cookie"></i>
            </li>
            <li class="list-item" data-category="home-decoration">
                <a class="list-item-link" href="#">Для дома</a><i class="fa-solid fa-couch"></i>
            </li>
        </ul>
    </div>
    <div class="content"></div>
`;

document.addEventListener("DOMContentLoaded", () => {
    const li = document.querySelectorAll('.list-item');
    
    for(let item of li){
        item.addEventListener('click', () => {
            getProducts(item.dataset.category);
        });
    }
});

const getProducts = (category) => {
    fetch('https://dummyjson.com/products/category/' + category)
    .then(res => res.json())
    .then(data => showProducts(data));
}

const showProducts = (data) => {
    const content = document.querySelector('.content');
    let cardsList = '';
    const products = data.products;
    console.log(products)

    products.map(product => {
        cardsList += `
            <div class="pruduct-card" onclick="openPopup('${product.title}', '${product.brand}', '${product.images[0]}', ${product.rating}, ${product.price}, '${product.description}');">
                <div class="title-product">${product.title}</div>
                <div class="brand-product">${product.brand}</div>
                <div class="price-product">${product.price}$</div>
                <img class="image-product" src="${product.images[0]}"/>
                <div class="product-button">
                    <button class="btn-buy-product">Купить</button>
                </div>
            </div>
        `
    });

    content.innerHTML = cardsList;
}

CATALOG.innerHTML = catalogHTML;