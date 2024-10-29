class Menu extends HTMLElement {
    constructor() {
        super();

        // Создание Shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Использование шаблонной строки для создания HTML
        const template = `
            <link rel="stylesheet" href="css/style.css">
            <link rel="stylesheet" href="css/adaptive.css">
            <section class="menu">
                <h2 class="title">Наше меню на день</h2>

                <div class="menu__field">
                    <div class="container">
                        <div class="menu__item">
                            <img src="img/tabs/vegy.jpg" alt="vegy">
                            <h3 class="menu__item-subtitle">Меню "Фитнес"</h3>
                            <div class="menu__item-descr">Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!</div>
                            <div class="menu__item-divider"></div>
                            <div class="menu__item-price">
                                <div class="menu__item-cost">Цена:</div>
                                <div class="menu__item-total"><span>229</span> грн/день</div>
                            </div>
                        </div>
                        <div class="menu__item">
                            <img src="img/tabs/elite.jpg" alt="elite">
                            <h3 class="menu__item-subtitle">Меню “Премиум”</h3>
                            <div class="menu__item-descr">В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!</div>
                            <div class="menu__item-divider"></div>
                            <div class="menu__item-price">
                                <div class="menu__item-cost">Цена:</div>
                                <div class="menu__item-total"><span>550</span> грн/день</div>
                            </div>
                        </div>
                        <div class="menu__item">
                            <img src="img/tabs/post.jpg" alt="post">
                            <h3 class="menu__item-subtitle">Меню "Постное"</h3>
                            <div class="menu__item-descr">Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков. </div>
                            <div class="menu__item-divider"></div>
                            <div class="menu__item-price">
                                <div class="menu__item-cost">Цена:</div>
                                <div class="menu__item-total"><span>430</span> грн/день</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;

        shadow.innerHTML = template;
    }
}

customElements.define('for-menu', Menu);