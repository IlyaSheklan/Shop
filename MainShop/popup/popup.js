const openPopup = (name, brand, img, rating, price, decsription) => {

    POPUP.innerHTML = `
        <div class="popup__bg">
            <div class="popup">
            <img class="popup-close" src="MainShop/icon/close.png"/>
                <div class="popup__container">
                    <div class="popup__flex-container">
                        <div class="popup__img-desc-block">
                            <div class="popup__img-block">
                                <img class="popup-img" src="${img}"/>
                            </div>
                            <div class="popup__desc-block">
                                <div class="popup__label">О продукте:</div>
                                <div class="popup-desc">${decsription}</div>
                            </div>
                        </div>
                        <div class="popup__main-block">
                            <div class="popup__name-block">
                                <div class="popup__label">Название</div>
                                <div class="popup__prod-name">${name}</div>
                            </div>
                            <div class="popup__brand-block">
                                <div class="popup__label">Бренд</div>
                                <div class="popup__prod-brand">${brand}</div>
                            </div>
                            <div class="popup__rating-block">
                                <div class="popup__label">Рейтинг</div>
                                <div class="popup__prod-rating"><img src="MainShop/icon/star.png"/>${rating}</div>
                            </div>
                            <div class="popup__price-block">
                                <div class="popup__label">Цена</div>
                                <div class="popup__prod-price">${price}$</div>
                            </div>
                        </div>
                    </div>
                    <div class="popup__button">
                        <button class="btn-buy-product">Купить</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    const popupBg = document.querySelector('.popup__bg');
    const popup = document.querySelector('.popup');
    const closeCross = document.querySelector('.popup-close');
    const btns = document.querySelectorAll('.btn-buy-product');
        
    popupBg.classList.add('active');
    popup.classList.add('active');

    const closePopup = () => {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }

    closeCross.addEventListener('click', () => {
        closePopup();
    });

    document.addEventListener('click', (e) => { 
        if(e.target === popupBg) { 
            closePopup();
        }

        for(const btn of btns){
            if(e.target === btn){
                closePopup();

                console.log('Товар куплен');
            }
        }
    });

    
}



