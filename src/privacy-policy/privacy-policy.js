import React, {useContext} from 'react';
import './privacy-policy.scss'
import Home from "../buying_boards/img__buying/free-icon-home-7543165.png";
import Phone from "../Layout/img_layout/free-icon-contact-4450258.png";
import Email from "../Layout/img_layout/free-icon-email-482138.png";
import '../buying_boards/buying_boards.scss'
import {Link} from "react-router-dom";
import {CustomContext} from "../Context";

const PrivacyPolicy = () => {
    const {toTop, proba} = useContext(CustomContext)

    return (
        <section className='privacy-policy'>
            <div className="privacy-policy__banner">
                <h1>Политика конфиденциальности</h1>
                <p><img src={Home} alt=""/> <Link to='/'>Home</Link> <span>></span> Политика конфиденциальности
                </p>
            </div>
            <div className="privacy-policy__info">
                <div className="privacy-policy__info__left">
                    <h2>Кто мы</h2>
                    <p>Наш адрес сайта: https://radiolom.kg.</p>
                    <h2>Какие персональные данные мы собираем и с какой целью</h2>
                    <h3>Медиафайлы</h3>
                    <p>Если вы зарегистрированный пользователь и загружаете фотографии на сайт, вам возможно следует
                        избегать загрузки изображений с метаданными EXIF, так как они могут содержать данные вашего
                        месторасположения по GPS. Посетители могут извлечь эту информацию скачав изображения с
                        сайта.</p>
                    <h3>Формы контактов</h3>
                    <h3>Куки</h3>
                    <p>Если вы оставляете комментарий на нашем сайте, вы можете включить сохранение вашего имени, адреса
                        email и вебсайта в куки. Это делается для вашего удобства, чтобы не заполнять данные снова при
                        повторном комментировании. Эти куки хранятся в течение одного года. <br/><br/>
                        Если у вас есть учетная запись на сайте и вы войдете в неё, мы установим временный куки для
                        определения поддержки куки вашим браузером, куки не содержит никакой личной информации и
                        удаляется при закрытии вашего браузера. <br/><br/>
                        При входе в учетную запись мы также устанавливаем несколько куки с данными входа и настройками
                        экрана. Куки входа хранятся в течение двух дней, куки с настройками экрана – год. Если вы
                        выберете возможность “Запомнить меня”, данные о входе будут сохраняться в течение двух недель.
                        При выходе из учетной записи куки входа будут удалены. <br/><br/>
                        При редактировании или публикации статьи в браузере будет сохранен дополнительный куки, он не
                        содержит персональных данных и содержит только ID записи отредактированной вами, истекает через
                        1 день. <br/><br/>
                    </p>
                    <h3>Встраиваемое содержимое других вебсайтов</h3>
                    <p>Статьи на этом сайте могут включать встраиваемое содержимое (например видео, изображения, статьи
                        и др.), подобное содержимое ведет себя так же, как если бы посетитель зашел на другой
                        сайт. <br/><br/>
                        Эти сайты могут собирать данные о вас, использовать куки, внедрять дополнительное отслеживание
                        третьей стороной и следить за вашим взаимодействием с внедренным содержимым, включая
                        отслеживание взаимодействия, если у вас есть учетная запись и вы авторизовались на том сайте.
                    </p>
                    <h3>Веб-аналитика</h3>
                    <h2>Как долго мы храним ваши данные</h2>
                    <p>
                        Если вы оставляете комментарий, то сам комментарий и его метаданные сохраняются неопределенно
                        долго. Это делается для того, чтобы определять и одобрять последующие комментарии автоматически,
                        вместо помещения их в очередь на одобрение. <br/><br/>
                        Для пользователей с регистрацией на нашем сайте мы храним ту личную информацию, которую они
                        указывают в своем профиле. Все пользователи могут видеть, редактировать или удалить свою
                        информацию из профиля в любое время (кроме имени пользователя). Администрация вебсайта также
                        может видеть и изменять эту информацию.
                    </p>
                    <h2>Какие у вас права на ваши данные</h2>
                    <p>При наличии учетной записи на сайте или если вы оставляли комментарии, то вы можете запросить
                        файл экспорта персональных данных, которые мы сохранили о вас, включая предоставленные вами
                        данные. Вы также можете запросить удаление этих данных, это не включает данные, которые мы
                        обязаны хранить в административных целях, по закону или целях безопасности.
                    </p>
                    <h2>Куда мы отправляем ваши данные</h2>
                    <p>Комментарии пользователей могут проверяться автоматическим сервисом определения спама.</p>
                </div>
                <div className="privacy-policy__info__line">

                </div>
                <div className="privacy-policy__info__right">
                    <div className="privacy-policy__info__right__line_h3">

                    </div>
                    <div className="buying__info__right">
                        <h3>Скупка радиодеталей</h3>
                        <div className="buying__info__right__line_h3"></div>
                        <div className="buying__info__right__nav">
                            <Link to='/buying-boards'>
                                <p onClick={() => proba("платы") || toTop()}>Платы</p>
                                <div className="buying__info__right__nav__line"></div>
                            </Link>
                            <Link to='/buying-boards'>
                                <p onClick={() => proba("транзисторы") || toTop()}>Транзисторы</p>
                                <div className="buying__info__right__nav__line"></div>
                            </Link>
                            <Link to='/buying-boards'>
                                <p onClick={() => proba("конденсаторы") || toTop()}>Конденсаторы</p>
                                <div className="buying__info__right__nav__line"></div>
                            </Link>
                            <Link to='/buying-boards'>
                                <p onClick={() => proba("резисторы") || toTop()}>Резисторы</p>
                                <div className="buying__info__right__nav__line"></div>
                            </Link>
                            <Link to='/buying-boards'>
                                <p onClick={() => proba("разъемы") || toTop()}>Разъемы</p>
                                <div className="buying__info__right__nav__line"></div>
                            </Link>
                            <Link to='/buying-boards'>
                                <p onClick={() => proba("диоды") || toTop()}>Диоды</p>
                                <div className="buying__info__right__nav__line"></div>
                            </Link>
                            <Link to='/buying-boards'>
                                <p onClick={() => proba("реле") || toTop()}>Реле</p>
                                <div className="buying__info__right__nav__line"></div>
                            </Link>
                            <Link to='/buying-boards'>
                                <p onClick={() => proba("процессоры") || toTop()}>Процессоры</p>
                                <div className="buying__info__right__nav__line"></div>
                            </Link>
                        </div>
                        <h4>Свяжитесь с нами!</h4>
                        <p className='buying__info__right__contact'><img src={Home} alt=""/> Кыргызская республика г.
                            Токмок
                            - Бишкек</p>
                        <p className='buying__info__right__contact'><img src={Phone} alt=""/> +996 990 22 21 38</p>
                        <p className='buying__info__right__contact'><img src={Phone} alt=""/> +996 509 08 02 99</p>
                        <p className='buying__info__right__email'><img src={Email} alt=""/> technolomkg@gmail.com</p>
                        <div className="buying__info__right__nav__line"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;