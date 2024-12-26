import React, {useContext} from 'react';
import './contacts.scss'
import Geoloc from './img__contacts/geolokation.png'
import Phone from './img__contacts/phone.png'
import Gmail from './img__contacts/gmail.png'
import Razgovor from './img__contacts/speeking.jpg'
import {CustomContext} from "../Context";

const Contacts = () => {
    const {sendEmail,form,status} = useContext(CustomContext)

    return (
        <section className='contacts'>
            <div className="contacts__left">
                <h2>Наш офис <div className="contacts__left__line_h2__top"></div></h2>
                <p><img src={Geoloc} alt=""/> Кыргызская республика г. Токмок - Бишкек</p>
                <p><img src={Phone} alt=""/> +996 990 22 21 38 +996 509 08 02 99</p>
                <p className="contacts__left__gmail"><img src={Gmail} alt=""/> technolomkg@gmail.com</p>
                <h2>Режим работы <div className="contacts__left__line_h2__bottom"></div></h2>
                <p><img src={Phone} alt=""/> После 18:00 и в воскресенье до 15:00
                    </p>
                <img className="contacts__left__img" src={Razgovor} alt=""/>
            </div>
            <div className="contacts__line">

            </div>
            <div className="contacts__right">
                <h2>Обратная связь <div className="contacts__right__line_h2"></div></h2>
                <div className="contacts__right__form">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="contacts__right__form__input__top">
                            <p><strong>Ваше имя (обязательно)</strong></p>
                            <input type="text" name="from_name" required />
                        </div>
                        <div className="contacts__right__form__input__top">
                            <p><strong>Ваш телефон (обязательно)</strong></p>
                            <input type="text" name="namber_user" required />
                        </div>
                        <div className="contacts__right__form__input__bottom">
                            <p><strong>Сообщение</strong></p>
                            <textarea name="message" rows="4" required></textarea>
                            <button type="submit">Отправить</button>
                        </div>
                    </form>


                    {status && <p>{status}</p>}
                </div>
            </div>
        </section>
    );
};

export default Contacts;