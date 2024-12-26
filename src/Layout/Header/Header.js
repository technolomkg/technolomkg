import React, {useContext} from 'react';
import './Header.scss';
import Logo from '../img_layout/OIG4.bRQyA27fOQHol3m8z.z5.png';
import Email from '../img_layout/free-icon-email-482138.png';
import Phone from '../img_layout/free-icon-contact-4450258.png';
import {Link} from 'react-router-dom';
import {CustomContext} from "../../Context";

const Header = () => {
    const {toTop, mobelMenu, menu} = useContext(CustomContext);

    return (
        <header className='header'>
            <div className="header__loptop">
                <Link className='header__loptop__logo' to='/'>
                    <img className='header__loptop__logo__img' src={Logo} alt="Logo"/>
                    <p className='header__loptop__logo__p'>TECHNOLOM.KG</p>
                </Link>
                <div className="header__loptop__info">
                    <p><img src={Email} alt=""/> technolomkg@gmail.com</p>
                    <p><img src={Phone} alt=""/> +996 990 22 21 38</p>
                </div>
                <div className="header__loptop__line"></div>

                <nav>

                    <p><Link onClick={() => toTop()} to='/'>главная</Link></p>
                    <p><Link onClick={() => toTop()} to='/about-us'>о нас</Link></p>
                    <p><Link onClick={() => toTop()} to='/contacts'>контакты</Link></p>
                    <p><Link onClick={() => toTop()} to='/buying-boards'>скупка</Link></p>

                </nav>
                <div onClick={() => mobelMenu(menu === true ? false : true)}
                     className="header__mobel_version__button">

                    <div className="header__mobel_version__button__top"></div>
                    <div className="header__mobel_version__button__center"></div>
                    <div className="header__mobel_version__button__bottom"></div>
                </div>
            </div>
            <div className={`header__mobel_version ${menu === true ? 'rabotaetBlock' : 'rabotaetNone'}`}>
                <div className="header__mobel_version__nav">

                    <Link onClick={() => toTop() || mobelMenu(menu === true ? false : true)} to='/'>
                        <p>
                            главная
                        </p>
                    </Link>

                    <Link onClick={() => toTop() || mobelMenu(menu === true ? false : true)}
                          to='/about-us'>
                        <p>
                            о нас
                        </p>
                    </Link>
                    <Link onClick={() => toTop() || mobelMenu(menu === true ? false : true)}
                          to='/contacts'>
                        <p>
                            контакты
                        </p>
                    </Link>
                    <p onClick={() => toTop() || mobelMenu(menu === true ? false : true)}>
                        <Link
                            to='/buying-boards'
                            className="header__mobel_version__nav__filter__p"
                        >
                            скупка
                        </Link>
                    </p>





                </div>
            </div>
        </header>
    );
};

export default Header;
