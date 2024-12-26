import React, {useContext} from 'react';
import './footer.scss'
import Baner from '../img_layout/Баннер-2-1024x392-1.webp'
import Email from "../img_layout/free-icon-email-482138.png";
import Phone from "../img_layout/free-icon-contact-4450258.png";
import {CustomContext} from "../../Context";
import {Link} from 'react-router-dom'
import '../../all__adaptations.scss'

const Footer = () => {
    const {toTop} = useContext(CustomContext)

    return (
        <footer className='footer'>
            <section className='footer__info'>
                <div className="footer__info__company">
                    <h2>TECHNOLOM.KG</h2>
                    <div className="footer__info__company__line__top"></div>
                    <p>Компания Технолом.kg — это удачный вариант для желающих подзаработать без особых усилий. Стоит
                        воспользоваться таким видом заработка, ведь получить реальные деньги не так сложно. Звоните по
                        телефонам Технолом.kg и мы поможем подобрать оптимальный вариант сотрудничества и
                        привлекательную цену.</p>
                    <div className="footer__info__company__line__bottom"></div>
                </div>
                <div className="footer__info__line"></div>
                <div className="footer__info__baner">
                    <img src={Baner} alt=""/>
                </div>
                <div className="footer__info__line"></div>
                <div className="footer__info__contact">
                    <h2>Контактные данные</h2>
                    <div className="footer__info__contact__line"></div>
                    <p><img src={Phone} alt=""/> +996 990 22 21 38</p>
                    <p><img src={Phone} alt=""/> +996 509 08 02 99</p>
                    <p><img src={Email} alt=""/> technolomkg@gmail.com</p>
                </div>
            </section>
            <div className="footer__line"></div>
            <section className='footer__intro'>
                <p>© TECHNOLOM.KG | Все права защищены.</p>
                <div className="footer__intro__line"></div>
                <Link onClick={() => toTop()} to='/privacy-policy'>
                    <p>Политика конфиденциальности</p>
                </Link>
            </section>
        </footer>
    );
};

export default Footer;