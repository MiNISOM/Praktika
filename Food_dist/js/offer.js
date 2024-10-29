class MyComponent extends HTMLElement {
    constructor() {
        super();

        // Создание Shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Использование шаблонной строки для создания HTML
        const template = `
            <link rel="stylesheet" href="css/style.css">
            <link rel="stylesheet" href="css/adaptive.css">
            <section class="offer">
                <div class="bgc_y"></div>
                <div class="container">
                    <div class="offer__text">
                        <h2 class="title">Что мы можем вам предложить?</h2>
                        <div class="offer__descr">
                            Наша основная идея - это правильное питание. Оно может быть простым и вкусным. Мы не просто доставка, мы сервис! Мы взяли на себя все расчеты БЖУ, калорийности, объемов порций и прочие важные, но скучные аспекты. Вам остается только полезная, сытная и правильная еда, которую мы привозим прямо под дверь.
                        </div>
                    </div>
                    <div class="offer__action">
                        <button class="btn btn_dark">Связаться с нами</button>
                    </div>
                </div>
                <div class="container">
                    <div class="offer__advantages">
                        <h2>Быстро и полезно</h2>
                        <div class="offer__advantages-text">
                            Готовка дома занимает много сил, времени и нервов. Мы привозим еду сразу на целый день, и ты можешь действовать так, как тебе удобно, не подстраиваясь ни под кого и будучи уверенным в качестве продукта!
                        </div>
                        <h2>Правильный рацион</h2>
                        <div class="offer__advantages-text">
                            Мы разработали специальное меню, где учтены все нюансы правильного питания, от баланса БЖУ до их приготовления и дробления рациона.
                        </div>
                    </div>
                    <div class="offer__slider">
                        <div class="offer__slider-counter">
                            <div class="offer__slider-prev">
                                <img src="icons/left.svg" alt="prev">
                            </div>
                            <span id="current">03</span>
                            /
                            <span id="total">04</span>
                            <div class="offer__slider-next">
                                <img src="icons/right.svg" alt="next">
                            </div>
                        </div>
                        <div class="offer__slider-wrapper">
                            <div class="offer__slide">
                                <img src="img/slider/pepper.jpg" alt="pepper">
                            </div>
                            <!-- <div class="offer__slide">
                                <img src="img/slider/food-12.jpg" alt="food">
                            </div>
                            <div class="offer__slide">
                                <img src="img/slider/olive-oil.jpg" alt="oil">
                            </div>
                            <div class="offer__slide">
                                <img src="img/slider/paprika.jpg" alt="paprika">
                            </div> -->
                        </div>
                    </div>
                </div>
            </section>
        `;

        shadow.innerHTML = template;
    }
}

customElements.define('for-offer', MyComponent);