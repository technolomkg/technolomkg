import React, {useContext} from 'react';
import './Home.scss'
import {CustomContext} from "../Context";
import {Link} from 'react-router-dom'
import Mous from './img_home/Frame.png'
import TronzistorImg from './img_home/lom-600x218.webp'

const Home = () => {
    const {toTop, proba} = useContext(CustomContext)

    return (
        <main className='home'>
            <section className='home__baner'>
                <h1>ТЕХНОЛОМ.KG</h1>
                <p>ПОКУПКА ЛОМА РАДИОДЕТАЛЕЙ ПО ВЫСОКИМ РЫНОЧНЫМ ЦЕНАМ.</p>
                <div className="home__baner__line">

                </div>
                <Link to='/buying-boards'>
                    <button>СМОТРЕТЬ ЦЕНЫ</button>
                </Link>
                <img src={Mous} alt=""/>
            </section>
            <section className='home__buying_parts'>
                <h2>СКУПКА <span>РАДИОДЕТАЛЕЙ, ПРИБОРОВ И ПЛАТ</span></h2>
                <div className="home__buying_parts__line"></div>
                <p>Мы покупаем платы, приборы и радиодетали у любых поставщиков. Ознакомьтесь с нашими ценами, чтобы
                    оценить стоимость ваших устройств, и свяжитесь с нами для организации продажи вашего
                    оборудования</p>
                <div className="home__buying_parts__buttons">
                    <Link to='/buying-boards' onClick={() => toTop()}>
                        <button onClick={() => proba("12")}>СКУПКА ТРАНЗИСТОРОВ</button>
                    </Link>
                    <Link to='/buying-boards' onClick={() => toTop()}>
                        <button onClick={() => proba("13")}>СКУПКА КОНДЕНСАТОРОВ</button>
                    </Link>
                    <Link to='/buying-boards' onClick={() => toTop()}>
                        <button onClick={() => proba("11")}>СКУПКА ПЛАТ</button>
                    </Link>
                    <Link to='/buying-boards' onClick={() => toTop()}>
                        <button onClick={() => proba("14")}>СКУПКА РЕЗИСТОРОВ</button>
                    </Link>
                    <Link to='/buying-boards' onClick={() => toTop()}>
                        <button onClick={() => proba("15")}>СКУПКА РАЗЪЕМОВ</button>
                    </Link>
                    <Link to='/buying-boards' onClick={() => toTop()}>
                        <button onClick={() => proba("16")}>СКУПКА ДИОДОВ</button>
                    </Link>
                    <Link to='/buying-boards' onClick={() => toTop()}>
                        <button onClick={() => proba("17")}>СКУПКА РЕЛЕ</button>
                    </Link>
                    <Link to='/buying-boards' onClick={() => toTop()}>
                        <button onClick={() => proba("18")}>СКУПКА ПРОЦЕССОРОВ</button>
                    </Link>
                </div>
                <div className="home__buying_parts__line_bottom"></div>
                <div className="home__buying_parts__img">
                    <div className="home__buying_parts__img__2">
                        <img src={TronzistorImg} alt=""/>
                    </div>
                </div>
            </section>
        </main>

    );
};

export default Home;