import React, {useContext,useEffect} from 'react';
import {useLocation} from "react-router-dom"
import './buying_boards.scss'
import Home from './img__buying/free-icon-home-7543165.png'
import {Link} from 'react-router-dom'
import Email from "../Layout/img_layout/free-icon-email-482138.png";
import Phone from "../Layout/img_layout/free-icon-contact-4450258.png";
import {CustomContext} from "../Context";

const BuyingBoards = () => {
    const {product, filter, proba, toTop, renderHeader,modalImage, openModal, closeModal,cotegori,filterCotegori} = useContext(CustomContext);

    return (
        <section className='buying'>
            <div className="buying__banner">
                <h1>{renderHeader()}</h1>
                <p><img src={Home} alt=""/> <Link to='/'>Home</Link> <span>></span>
                    {renderHeader()}
                </p>
            </div>
            <div className="buying__info container">
                <div className="buying__info__left">

                    <div className="buying__info__left__filter">
                        <button className='buying__info__left__filter__but' onClick={() => cotegori()}>
                            ФИЛЬТР КАТЕГОРИЙ
                        </button>
                        <div className={`buying__info__left__filter__button ${filterCotegori === true ? 'rabotaetFlex' : 'rabotaetNone'}`} >
                            <button onClick={() => {proba("12") ; cotegori()}}>СКУПКА ТРАНЗИСТОРОВ</button>
                            <button onClick={() => {proba("13") ; cotegori()}}>СКУПКА КОНДЕНСАТОРОВ</button>
                            <button onClick={() => {proba("11") ; cotegori()}}>СКУПКА ПЛАТ</button>
                            <button onClick={() => {proba("14") ; cotegori()}}>СКУПКА РЕЗИСТОРОВ</button>
                            <button onClick={() => {proba("15") ; cotegori()}}>СКУПКА РАЗЪЕМОВ</button>
                            <button onClick={() => {proba("16") ; cotegori()}}>СКУПКА ДИОДОВ</button>
                            <button onClick={() => {proba("17") ; cotegori()}}>СКУПКА РЕЛ</button>
                            <button onClick={() => {proba("18") ; cotegori()}}>СКУПКА ПРОЦЕССОРОВ</button>
                        </div>
                    </div>

                    {
                        filter === "11" ?
                            <div className="buying__info__left__top">
                                <h2>Скупка плат</h2>
                                <p>Цена указана за 1кг <br/>
                                    Берём абсолютно любые платы. <br/>
                                    <br/>Срезкой являются детали, не проходящие по типу, паспорту или наименованию.</p>
                            </div>
                            :
                            ""
                    }

                    <div className="buying__info__left__product">
                        <div className="buying__info__left__product__top">
                            <p className="buying__info__left__product__top__img">Изображение</p>
                            <p className="buying__info__left__product__top__title">Название</p>
                            <p className="buying__info__left__product__top__discription">Примечание</p>
                            <p className="buying__info__left__product__top__price">Цена</p>
                        </div>


                        <div className="buying__info__left__product__all">
                            {
                                product
                                    .filter((el) => {
                                        if (filter === '') {
                                            return true
                                        } else {
                                            return el.category === filter
                                        }

                                    })
                                    .map((el, idx) => (
                                        <div>
                                            <div
                                                className={`${idx % 2 ? "buying__info__left__product__all__one_product" : "buying__info__left__product__all__one_product_beck"}`}>
                                                <div className="buying__info__left__product__all__one_product__img">
                                                    <img src={el.img} alt={el.title} onClick={() => openModal(el.img)}/>
                                                </div>
                                                <div className="buying__info__left__product__all__one_product__title">
                                                    <p>{el.title}</p>
                                                </div>
                                                <div
                                                    className="buying__info__left__product__all__one_product__discription">
                                                    <p><strong>{el.description_dop}</strong></p>
                                                    <p>
                                                        {
                                                            el.category === "платы" || el.category === "конденсаторы"
                                                                ?
                                                                el.description === ""
                                                                    ?
                                                                    <p>{el.description_info_price}</p>
                                                                    :
                                                                    <span>Для приема:</span>
                                                                :
                                                                <p></p>
                                                        }
                                                        {el.description}
                                                    </p>
                                                </div>
                                                {/*<button onClick={()=>deleteProduct(el.id)}>*/}
                                                {/*    удалить*/}
                                                {/*</button>*/}
                                                {/*<Link to={`/patch/${el.id}`}>*/}
                                                {/*    <button onClick={()=>toTop()}>*/}
                                                {/*        Редактировать*/}
                                                {/*    </button>*/}
                                                {/*</Link>*/}

                                                <div className="buying__info__left__product__all__one_product__price">
                                                    {el.category === "транзисторы" || el.category === "диоды" ?
                                                        <p>
                                                            {el.price_new} за нов <br/>
                                                            {el.price_old === '' ? <p></p> :
                                                                <p>{el.price_old} за б/у</p>}
                                                        </p>
                                                        :
                                                        <p>{el.price_new} сом</p>}
                                                </div>
                                            </div>
                                        </div>

                                    ))
                            }
                            {
                                product.filter((el) => {
                                    return el.img === modalImage
                                })
                                    .map((el) => (
                                        <div className="buying__info__modal__overlay" onClick={closeModal}>
                                            <div className="buying__info__modal__content"
                                                 onClick={(e) => e.stopPropagation()}>
                                                <div className="buying__info__modal__header">
                                                    <h2>{el.title}</h2>
                                                    <button className="buying__info__modal__close"
                                                            onClick={closeModal}>Закрыть
                                                    </button>
                                                </div>
                                                <div className="buying__info__modal__body">
                                                    <img src={modalImage} alt={el.title}
                                                         className="buying__info__modal__image"/>
                                                </div>
                                            </div>
                                        </div>

                                    ))}

                        </div>
                    </div>
                    <div className="buying__info__left__discription">
                        <div className="buying__info__left__discription__top">
                            <h2>Требования к электронным платам</h2>
                            <p>
                                Убрать: <br/>
                                1. Металлические рамки,части и блоки. <br/>
                                2. Аллюминиевые радиаторы и стойки <br/>
                                3. Медные катушки(более 2 см) <br/>
                                4. Конденсаторы К-50, аллюминиевые и пластмассовые(более 2 см) <br/>
                                5. Весь пластик и провода <br/>
                                6. По дорогим позициям: все платы должны быть целые, с чипами и ламелями
                            </p>
                        </div>
                        <div className="buying__info__left__discription__line">

                        </div>
                        <div className="buying__info__left__discription__bottom">
                            <p>Если вас интересует скупка плат, то вы обратились по адресу. Компания «Радиолом22»
                                предлагает
                                свои услуги по выкупу разнообразных плат отечественного и импортного производства. <br/>
                                <br/>
                                Мы работаем на постоянной основе. Нас интересуют любые объемы и партии как от частных,
                                так и
                                юридических лиц. Вне зависимости от того, новые вы предлагаете детали или б/у, мы рады
                                каждому поставщику и способны предоставить одни из лучших условий для
                                сотрудничества. <br/>
                                <br/>
                                Скупка плат — один из основных видов нашей деятельности. Постоянные и оптовые клиенты
                                могут
                                рассчитывать на более выгодные условия. Наша компания осуществляет полностью законную
                                скупку
                                плат не первый год. За это время мы накопили солидный опыт в скупке старых плат и
                                оборудования. Перечень принимаемых нами изделий обширен. <br/>
                                <br/>
                                Наши специалисты проводят профессиональную оценку, содержащихся в оборудовании элементов
                                и
                                выносят вердикт по его стоимости. Вам даже нет необходимости разбирать на детали. Мы
                                сделаем
                                это за вас. <br/>
                                <br/>
                                Цена на скупку плат не стабильна — она определяется на момент сдачи. Основой выступают
                                котировки биржи драгоценных металлов. На стоимость влияет тип изделия, год производства,
                                состояние, наличие маркировки и отдельные нюансы каждого элемента. Обо всех факторах,
                                влияющих на конечную стоимость специалист открыто проинформирует. <br/>
                                <br/>
                                При согласовании стоимости общая сумма вознаграждения подлежит уплате немедленно в день
                                обращения и в 100% объеме. Способ выплаты Вы выбираете самостоятельно. Квитанция – также
                                обязательный атрибут сделки. Бухгалтерские документы для юридических лиц выдаются по
                                запросу. <br/>
                                <br/>
                                Если вы хотите максимально дорого сдать технические драгметаллы или не разобранные
                                элементы/оборудование, то мы предложим наиболее привлекательные условия сотрудничества.
                                Даже
                                с учетом постоянного колебания стоимости ценного сырья, мы готовы предложить максимально
                                возможную цену. Поэтому мы стараемся поддерживать на стабильно высоком уровне
                                предлагаемую
                                стоимость.
                            </p>
                        </div>
                    </div>

                </div>

                <div className="buying__info__right">
                    <h3>Скупка радиодеталей</h3>
                    <div className="buying__info__right__line_h3"></div>
                    <div className="buying__info__right__nav">
                        <p onClick={() => {proba("11") ; toTop()}}>Платы</p>
                        <div className="buying__info__right__nav__line"></div>
                        <p onClick={() => {proba("12") ; toTop()}}>Транзисторы</p>
                        <div className="buying__info__right__nav__line"></div>
                        <p onClick={() => {proba("13") ; toTop()}}>Конденсаторы</p>
                        <div className="buying__info__right__nav__line"></div>
                        <p onClick={() => {proba("14") ; toTop()}}>Резисторы</p>
                        <div className="buying__info__right__nav__line"></div>
                        <p onClick={() => {proba("15") ; toTop()}}>Разъемы</p>
                        <div className="buying__info__right__nav__line"></div>
                        <p onClick={() => {proba("16") ; toTop()}}>Диоды</p>
                        <div className="buying__info__right__nav__line"></div>
                        <p onClick={() => {proba("17") ; toTop()}}>Реле</p>
                        <div className="buying__info__right__nav__line"></div>
                        <p onClick={() => {proba("18") ; toTop()}}>Процессоры</p>
                        <div className="buying__info__right__nav__line"></div>
                    </div>
                    <h4>Свяжитесь с нами!</h4>
                    <p className='buying__info__right__contact'><img src={Home} alt=""/> Кыргызская республика г. Токмок
                        - Бишкек</p>
                    <p className='buying__info__right__contact'><img src={Phone} alt=""/> +996 990 22 21 38</p>
                    <p className='buying__info__right__contact'><img src={Phone} alt=""/> +996 509 08 02 99</p>
                    <p className='buying__info__right__email'><img src={Email} alt=""/> technolomkg@gmail.com</p>
                    <div className="buying__info__right__nav__line"></div>
                </div>
            </div>
        </section>
    );
};

export default BuyingBoards;