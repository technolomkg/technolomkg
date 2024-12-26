import {useLocation} from "react-router-dom"
import {createContext, useEffect, useState, useRef} from "react";
import emailjs from "emailjs-com"
import axios from "axios";
import {animateScroll} from "react-scroll";


export const CustomContext = createContext();

export const Context = (props) => {
    const product = [

        {
            "id": "1",
            "img": "utilse/--e1653985386823.jpg",
            "title": "Скупка СРЕЗКИ с плат (без крупных конденсаторов и алюминия)",
            "description": "Детали с плат, не подходящие по году, наименованию или другим причинам. Они имеют минимальное количество драгоценных металлов и особой ценности не имеют.",
            "price_new": "250",
            "price_old": "",
            "category": "11",
            "description_dop": "",
            "description_info_price": ""
        },
        {
            "id": "3",
            "img": "utilse/11-советские.jpg",
            "title": "Скупка СОВЕТСКИХ плат (от советских телевизоров, магнитофонов и прочей советской техники)",
            "description": "Без железа, пластика, проводки, алюминиевых или пластиковых конденсаторов (К50), медных катушек!",
            "price_new": 240,
            "price_old": 0,
            "category": "11"
        },
        {
            "id": "4",
            "img": "utilse/-матер--e1653886495796.jpg",
            "title": "Скупка новых материнских плат",
            "description": "11 от поколения Pentium 4. Без батарейки, пластика, радиаторов, все 18 должны быть на месте, 15 целые.",
            "price_new": "150",
            "price_old": "",
            "category": "11",
            "description_dop": "",
            "description_info_price": ""
        },
        {
            "id": "5",
            "img": "utilse/-матер--e1653886495796 (1).jpg",
            "title": "Скупка старых материнских плат",
            "description": "11 до поколения Pentium 4 ( Socket 3, 5, 7, 8, 370, 426) до Socket 462 и 423. Без батарейки, пластика, радиаторов, все 18 должны быть на месте, 15 целые.",
            "price_new": "250",
            "price_old": "",
            "category": "11",
            "description_dop": "",
            "description_info_price": ""
        },
        {
            "id": "7",
            "img": "utilse/периферия.jpg",
            "title": "[З] Скупка периферийных плат (плат управления)",
            "description": "Без засора, медных катушек, алюминия, пластика, железа.",
            "price_new": 250,
            "price_old": 0,
            "category": "11"
        },
        {
            "id": "8",
            "img": "utilse/8aa19012-0221-46fc-8474-a59b60ac9c2b.jpg",
            "title": "[Д/З] Периферийные 11 (зеленого цвета) Не менее 3-х чипов (желтых)",
            "description": "Без железа, пластика, провода, алюминиевых радиаторов, батареек",
            "price_new": 300,
            "price_old": 0,
            "category": "11"
        },
        {
            "id": "9",
            "img": "utilse/--e1653985262922.png",
            "title": "Скупка плат из ноутбуков",
            "description": "Без батарейки, пластика, радиаторов, все 18 должны быть на месте, 15 целые.",
            "price_new": 800,
            "price_old": 0,
            "category": "11"
        },
        {
            "id": "10",
            "img": "utilse/GSM-плат-стандарт-scaled.jpg",
            "title": "Скупка GSM плат (стандарт)",
            "description": "Без засора, медных катушек алюминия, пластика. ЦЕНА ОТ 450!",
            "price_new": 800,
            "price_old": 0,
            "category": "11"
        },
        {
            "id": "11",
            "img": "utilse/одна-сторона-желтая-gsm.jpg",
            "title": "Скупка GSM одна сторона желтая (стандарт) 1мм – 1.5мм",
            "description": "Без засора, медных катушек алюминия, пластика, железа.",
            "price_new": "800",
            "price_old": "",
            "category": "11",
            "description_dop": "",
            "description_info_price": ""
        },
        {
            "id": "12",
            "img": "utilse/желтые-дорожки-gsm.jpg",
            "title": "Скупка GSM желтые дорожки",
            "description": "Без засора, медных катушек алюминия, пластика, железа.",
            "price_new": 800,
            "price_old": 0,
            "category": "11"
        },
        {
            "id": "13",
            "img": "utilse/Скупка-желтой-ОЗУ.jpg",
            "title": "(DDR) Скупка желтой оперативной памяти",
            "description": "Ламель и чипы должны присутствовать.",
            "price_new": 2500,
            "price_old": 0,
            "category": "11"
        },
        {
            "id": "17",
            "img": "utilse/Скупка-CD-ROM-плат.jpg",
            "title": "Скупка CD-ROM плат",
            "description": "Разъем питания на месте, все чипы на месте.",
            "price_new": 600,
            "price_old": 0,
            "category": "11"
        },
        {
            "id": "19",
            "img": "utilse/планшеты-без-корпуса.jpg",
            "title": "Скупка плат от планшетов",
            "description": "Без экранов и аккумуляторов, вибромоторчиков, камеры, шлейфов и проводов, клавиатуры, алюминия, железных пластин и пластмассы.",
            "price_new": "550",
            "price_old": "",
            "category": "11",
            "description_dop": "",
            "description_info_price": ""
        },
        {
            "id": "20",
            "img": "utilse/сенсорные-без-корп.jpg",
            "title": "Скупка плат от сенсорных сотовых телефонов",
            "description": "Без экранов и аккумуляторов, вибромоторчиков, камеры, шлейфов и проводов, клавиатуры, алюминия, железных пластин и пластмассы.",
            "price_new": 2000,
            "price_old": 0,
            "category": "11"
        },
        {
            "id": "21",
            "img": "utilse/кноп-без-корпуса.jpg",
            "title": "Скупка плат от кнопочных сотовых телефонов",
            "description": "Без экранов и аккумуляторов, вибромоторчиков, камеры, шлейфов и проводов, клавиатуры, алюминия, железных пластин и пластмассы, 11 только односимочные.",
            "price_new": "1500",
            "price_old": "",
            "category": "11",
            "description_dop": "",
            "description_info_price": ""
        },
        {
            "id": "22",
            "img": "utilse/банкоматы.jpg",
            "title": "Скупка плат с терминалов и банкоматов",
            "description": "Без экранов и аккумуляторов, вибромоторчиков, камеры, шлейфов и проводов, клавиатуры, алюминия, железных пластин и пластмассы.",
            "price_new": 2500,
            "price_old": 0,
            "category": "11"
        },
        {
            "id": "23",
            "img": "utilse/11-игровых-автоматов.jpg",
            "title": "Скупка плат от игровых автоматов",
            "description": "Без пластмассы , чипы целые , дорожки целые.",
            "price_new": 700,
            "price_old": 0,
            "category": "11"
        },
        {
            "id": "24",
            "img": "utilse/11-с-жк-тв-1.jpg",
            "title": "Скупка плат от ЖК телевизоров",
            "description": "Без засоров, медных катушек, пластика, железа, проводов.",
            "price_new": 700,
            "price_old": 0,
            "category": "11"
        },
        {
            "id": "25",
            "img": "utilse/155-импорт.jpg",
            "title": "Скупка К-155 импортных плат (с микросхемами)",
            "description": "не менее 80% микросхем на плате присутствует.",
            "price_new": 500,
            "price_old": 0,
            "category": "11"
        },
        {
            "id": "27",
            "img": "utilse/куча-мобильных-телефонов-старый-и-новая-модель-146404300.jpg",
            "title": "Скупка мобильных телефонов в корпусе (цена за 1 кг)",
            "description": "Цена указана за 1 кг",
            "price": 250,
            "category": "11",
            "price_new": "130",
            "price_old": "",
            "description_dop": "",
            "description_info_price": ""
        },
        {
            "id": "29",
            "img": "utilse/hqdefault-1.jpg",
            "title": "Скупка транзисторов – КТ315 и полубочонки",
            "description": "",
            "description_dop": "Цена указана за 1 кг",
            "price_new": "1,200сом",
            "price_old": "",
            "category": "12",
            "description_info_price": ""
        },
        {
            "id": "30",
            "img": "utilse/--e1653886672872.jpg",
            "title": "Скупка транзисторов – КТ 814-817 “Дырочки” (внутри желтые)",
            "description_dop": "Цена указана за 1 шт.",
            "description": "Внутри должны бытьжёлтыми!",
            "price_new": "6сом",
            "price_old": "",
            "category": "12",
            "description_info_price": ""
        },
        {
            "id": "32",
            "img": "utilse/КТ-802.jpg",
            "title": "Скупка транзисторов КТ 802, 803, 808, 908 (по 1989 год)",
            "price_new": "42сом",
            "description_dop": "Цена указана за 1 шт.",
            "description": "Маркировки:802, 803, 808, 908",
            "price_old": "",
            "category": "12",
            "description_info_price": ""
        },
        {
            "id": "34",
            "img": "utilse/201--e1653985902715.png",
            "title": "(201) Скупка транзисторов КТ201 | КТ203 (желтые с короткими ногами)",
            "price_new": "20сом",
            "price_old": "17сом",
            "description_dop": "цена указанна за 1 шт.",
            "description": "",
            "category": "12",
            "description_info_price": ""
        },
        {
            "id": "36",
            "img": "utilse/603--e1653985860562.png",
            "title": "(603ж) Скупка транзисторов КТ603 | КТ601 | КТ605 | КТ608 (желтых)",
            "price_new": "78сом",
            "price_old": "61сом",
            "description_dop": "цена указанна за 1 шт.",
            "description": "",
            "category": "12"
        },
        {
            "id": "37",
            "img": "utilse/603б--e1653985773931.png",
            "title": "(603б) Скупка транзисторов КТ603 | КТ601 | КТ605 | КТ608 (белых)",
            "price_new": "30сом",
            "price_old": "",
            "description_dop": "цена указанна за 1 шт.",
            "description": "",
            "category": "12",
            "description_info_price": ""
        },
        {
            "id": "38",
            "img": "utilse/630-e1653985738243.png",
            "title": "(630) Скупка транзисторов КТ630 | КТ830 | КТ831 | КТ505",
            "price_new": "45сом",
            "price_old": "40сом",
            "description_dop": "цена указанна за 1 шт.",
            "description": "",
            "category": "12",
            "description_info_price": ""
        },
        {
            "id": "39",
            "img": "utilse/312-e1653985694672.png",
            "title": "(312ж) Скупка транзисторов КТ312 | КТ306 | КТ301 | КТ316 (жёлтых)",
            "price_new": "40сом",
            "price_old": "32сом",
            "description_dop": "цена указанна за 1 шт.",
            "description": "",
            "category": "12",
            "description_info_price": ""
        },
        {
            "id": "40",
            "img": "utilse/312-e1653985694672.png",
            "title": "Скупка транзисторов КТ312 | КТ306 | КТ301 | КТ316 (белых)",
            "price_new": "24сом",
            "price_old": "",
            "description_dop": "цена указанна за 1 шт.",
            "description": "",
            "category": "12"
        },
        {
            "id": "41",
            "img": "utilse/602ж--e1653985619854.png",
            "title": "(602ж) Скупка транзисторов КТ602 | КТ604 (крупные) желтые",
            "price_new": "50сом",
            "price_old": "45сом",
            "description_dop": "цена указанна за 1 шт.",
            "description": "",
            "category": "12",
            "description_info_price": ""
        },
        {
            "id": "42",
            "img": "utilse/602б--e1653985659367.png",
            "title": "(602б) Скупка транзисторов КТ602 | КТ604 (крупные) белые",
            "price_new": "51сом",
            "price_old": "",
            "description_dop": "цена указанна за 1 шт.",
            "description": "",
            "category": "12"
        },
        {
            "id": "43",
            "img": "utilse/920-верт-сред-e1653985467432.png",
            "title": "Скупка транзисторов КТ920 | КТ922 | КТ911 и подобных (вертолёт)",
            "price_new": "150сом",
            "price_old": "120сом",
            "description_dop": "цена указанна за 1 шт.",
            "description": "",
            "category": "12",
            "description_info_price": ""
        },
        {
            "id": "44",
            "img": "utilse/610верт--e1653985575348.png",
            "title": "Скупка транзисторов КТ610 | КТ613 и подобных (мал. вертолёт)",
            "price_new": "100сом",
            "price_old": "90сом",
            "description_dop": "цена указанна за 1 шт.",
            "description": "",
            "category": "12",
            "description_info_price": ""
        },
        {
            "id": "45",
            "img": "utilse/-норм--e1653985425725.png",
            "title": "Скупка транзисторов КТ904 | КТ907 | КТ914 (болт)",
            "price_new": "138сом",
            "price_old": "130сом",
            "description_dop": "цена указанна за 1 шт.",
            "description": "",
            "category": "12"
        },
        {
            "id": "46",
            "img": "utilse/311-e1653985813906.png",
            "title": "Скупка транзисторов 1т311 (Желтые внутри) КГ",
            "price_new": "4.000сом",
            "price_old": "33сом",
            "description_dop": "Цена указана за 1 кг",
            "description": "",
            "category": "12",
            "description_info_price": ""
        },
        {
            "id": "47",
            "img": "utilse/2Т866А.jpg",
            "title": "Скупка транзисторов 2Т866А и подобных",
            "price_new": "190сом",
            "price_old": "160сом",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "category": "12",
            "description_info_price": ""
        },
        {
            "id": "48",
            "img": "utilse/КТ909.jpg",
            "title": "Скупка транзисторов КТ909 и подобных",
            "price_new": "78сом",
            "price_old": "",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "category": "12"
        },
        {
            "id": "49",
            "img": "utilse/КТ919.jpg",
            "title": "Скупка транзисторов КТ919 и подобных",
            "price_new": "118сом",
            "price_old": "105сом",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "category": "12"
        },
        {
            "id": "50",
            "img": "utilse/КТ930.jpg",
            "title": "Скупка транзисторов КТ930 | КТ931 | КТ958",
            "price_new": "130сом",
            "price_old": "115сом",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "category": "12",
            "description_info_price": ""
        },
        {
            "id": "51",
            "img": "utilse/КТ606.jpg",
            "title": "Скупка транзисторов КТ606 (белые болты)",
            "price_new": "7сом",
            "price_old": "",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "category": "12"
        },
        {
            "id": "53",
            "img": "utilse/импортных-транзисторов-микросхем.jpg",
            "title": "Скупка импортных транзисторов (на вес)",
            "price_new": "13сом",
            "price_old": "",
            "description_dop": "Цена указана за 1 грамм.",
            "description": "",
            "category": "12"
        },
        {
            "id": "54",
            "img": "utilse/КТ-970А.jpg",
            "title": "Скупка транзисторов КТ 970А",
            "price_new": "110сом",
            "price_old": "100сом",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "category": "12",
            "description_info_price": ""
        },
        {
            "id": "55",
            "img": "utilse/fml-gr--e1653886776327.jpg",
            "title": "Скупка конденсаторов КМ зел. – Н90, F ,M, L (общая группа)",
            "price_new": "75",
            "description_dop": "Цена указана за 1 г.",
            "description": "Ножки удалять под корень!",
            "category": "13",
            "price_old": "",
            "description_info_price": ""
        },
        {
            "id": "56",
            "img": "utilse/v--e1653985186323.jpg",
            "title": "Скупка конденсаторов КМ зел. – V, М1500",
            "price_new": "80",
            "description_dop": "Цена указана за 1 грамм.",
            "description": "Ножки удалять под корень!",
            "category": "13",
            "price_old": "",
            "description_info_price": ""
        },
        {
            "id": "58",
            "img": "utilse/30--e1653886740439.jpg",
            "title": "Скупка конденсаторов КМ зел. – Н30",
            "price_new": "90",
            "description_dop": "Цена указана за 1 г.",
            "description": "Ножки удалять под корень!",
            "category": "13"
        },
        {
            "id": "59",
            "img": "utilse/fml-or--e1653886814674.jpg",
            "title": "Скупка конденсаторов КМ рыж. — Н90, F ,M, L (общая группа)",
            "price_new": "50",
            "description_dop": "Цена указана за 1 г.",
            "description": "Ножки удалять под корень!",
            "category": "13",
            "price_old": "",
            "description_info_price": ""
        },
        {
            "id": "62",
            "img": "utilse/unnamed-1.jpg",
            "title": "Скупка конденсаторов КМ рыж. – [H90] 1М5, 2M2 (с годом)",
            "price_new": "100",
            "description_dop": "Цена указана за 1 г.",
            "description": "Ножки удалять под корень!",
            "category": "13",
            "price_old": "",
            "description_info_price": ""
        },
        {
            "id": "64",
            "img": "utilse/50--e1653886385420.jpg",
            "title": "Скупка конденсаторов КМ рыж. – Н50",
            "price_new": "110",
            "description_dop": "Цена указана за 1 г.",
            "description": "Ножки удалять под корень!",
            "category": "13"
        },
        {
            "id": "70",
            "img": "utilse/Скупка-конденсаторов-К10-28-47-Н30-D-Н50-Н90.jpg",
            "title": "Скупка конденсаторов К10-28; 47 Н30; D; Н50; Н90",
            "price_new": "35",
            "description_dop": "Цена указана за 1 г.",
            "description": "",
            "category": "13"
        },
        {
            "id": "71",
            "img": "utilse/Скупка-конденсаторов-К52-2-5.jpg",
            "title": "Скупка конденсаторов К52-2; К52-5 крупные",
            "price_new": "180",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "Цена на салатовые -50%",
            "category": "13"
        },
        {
            "id": "73",
            "img": "utilse/Снимок-1.png",
            "title": "Скупка конденсаторов – ЭТО крупные",
            "price_new": "205",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "category": "13"
        },
        {
            "id": "76",
            "img": "utilse/Скупка-конденсаторов-К52-2.jpg",
            "title": "Скупка конденсаторов К52-2С; K52-5C (чёрная крышка)",
            "price_new": "300",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "category": "13",
            "price_old": "",
            "description_info_price": ""
        },
        {
            "id": "77",
            "img": "utilse/Скупка-конденсаторов-К52-2С-c-чёрной-крышкой.png",
            "title": "Скупка конденсаторов К52-2С (чёрная крышка) мелкие",
            "price_new": "190",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "category": "13"
        },
        {
            "id": "78",
            "img": "utilse/e8c74a5e-d53a-4b8f-aea7-e8f34dc937c3.jpg",
            "title": "Скупка конденсаторов К52-5 длинные",
            "price_new": "400",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "Цена зависитот размера!",
            "category": "13"
        },
        {
            "id": "79",
            "img": "utilse/--e1653986037931.png",
            "title": "Скупка серебряной срезки (флажки)",
            "price_new": "220",
            "description_dop": "Цена указана за 1 кг.",
            "description": "",
            "description_info_price": "",
            "category": "13"
        },
        {
            "id": "80",
            "img": "utilse/Скупка-конденсаторов-К-53-1-мелких.jpg",
            "title": "Скупка конденсаторов К53-1 мелких",
            "price_new": "600",
            "description_dop": "Цена указана за 1 кг.",
            "description": "Только маркировки 53-1А, 53-1",
            "description_info_price": "",
            "category": "13",
            "price_old": ""
        },
        {
            "id": "82",
            "img": "utilse/Скупка-конденсаторов-ЭТ-ЭТН.png",
            "title": "Скупка конденсаторов ЭТ; ЭТН и подобных",
            "price_new": "2000",
            "description_dop": "Цена указана за 1 кг.",
            "description": "",
            "description_info_price": "",
            "category": "13",
            "price_old": ""
        },
        {
            "id": "83",
            "img": "utilse/Скупка-конденсаторов-К52-7.jpg",
            "title": "Скупка конденсаторов К52-7 и другие",
            "price_new": "200",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "13",
            "price_old": ""
        },
        {
            "id": "84",
            "img": "utilse/Скупка-конденсаторов-К52-9.jpg",
            "title": "Скупка конденсаторов К52-9 и другие",
            "price_new": "3000",
            "description_dop": "Цена указана за 1 кг.",
            "description": "",
            "description_info_price": "",
            "category": "13",
            "price_old": ""
        },
        {
            "id": "85",
            "img": "utilse/Скупка-конденсаторов-К52-1.jpg",
            "title": "Скупка конденсаторов К52-1 и подобных",
            "price_new": "3000",
            "description_dop": "Цена указана за 1 кг.",
            "description": "",
            "description_info_price": "",
            "category": "13",
            "price_old": ""
        },
        {
            "id": "87",
            "img": "utilse/Скупка-конденсаторов-Б18-11.jpg",
            "title": "Скупка конденсаторов Б18-11 и подобных",
            "price_new": "30",
            "description_dop": "Цена указана за 1 г.",
            "description": "",
            "description_info_price": "",
            "category": "13"
        },
        {
            "id": "88",
            "img": "utilse/Скупка-конденсаторов-К10-48-Н30.jpg",
            "title": "Скупка конденсаторов К10-48 Н30 и других",
            "price_new": "32",
            "description_dop": "Цена указана за 1 г.",
            "description": "",
            "description_info_price": "",
            "category": "13"
        },
        {
            "id": "89",
            "img": "utilse/Скупка-конденсаторов-К10-47-Н90-25В-50В-1мо-1м5-2м2.jpg",
            "title": "Скупка конденсаторов К10-47 Н90 25В; 50В; 1мо; 1м5; 2м2",
            "price_new": "50",
            "description_dop": "Цена указана за 1 г.",
            "description": "",
            "description_info_price": "",
            "category": "13",
            "price_old": ""
        },
        {
            "id": "90",
            "img": "utilse/Скупка-конденсаторов-К10-47-Н30-25В-50В-1мо-1м5-2м2.jpg",
            "title": "Скупка конденсаторов К10-47; Н30; 25В; 50В; 1мо; 1м5; 2м2",
            "price_new": "55",
            "description_dop": "Цена указана за 1 г.",
            "description": "",
            "description_info_price": "",
            "category": "13"
        },
        {
            "id": "91",
            "img": "utilse/К10-28-Н30-1М0-1МОВ-1м5-2м2.jpg",
            "title": "Скупка конденсаторов К10-28; Н30; 1М0; 1МОВ; 1м5; 2м2",
            "price_new": "150",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "13"
        },
        {
            "id": "93",
            "img": "utilse/Скупка-конденсаторов-К10-26.jpg",
            "title": "Скупка конденсаторов К10-26 зеленых",
            "price_new": "50",
            "description_dop": "Цена указана за 1 г.",
            "description": "Ножки удалять под корень!",
            "description_info_price": "",
            "category": "13"
        },
        {
            "id": "94",
            "img": "utilse/radiolom-287.jpg",
            "title": "Скупка резисторов СП5-1, 2 (кроме 28, 30, 50) до 1990 года",
            "price_new": "12",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "14"
        },
        {
            "id": "95",
            "img": "utilse/radiolom-296.jpg",
            "title": "Скупка резисторов ПП3-40-47 любые, кроме знака «МУ» или «Э» до 1990 года",
            "price_new": "12",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "14"
        },
        {
            "id": "96",
            "img": "utilse/radiolom-295.jpg",
            "title": "Скупка резисторов ПП3-40-47 до 1982 года, с 82 до 90 года с военной приёмкой (ромб), кроме знака «МУ» или «Э»",
            "price_new": "110",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "До 1982 года,либо с ромбом",
            "category": "14"
        },
        {
            "id": "97",
            "img": "utilse/radiolom-288.jpg",
            "title": "Скупка резисторов СП5 прямоугольных алюминий/пластик",
            "price_new": "15",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "14"
        },
        {
            "id": "98",
            "img": "utilse/radiolom-289.jpg",
            "title": "Скупка резисторов СП5 прямоугольные с алюминиевой вставкой до 1990 года",
            "price_new": "15",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "14"
        },
        {
            "id": "99",
            "img": "utilse/radiolom-290.jpg",
            "title": "Скупка резисторов СП5-14 на 10, 15 Ом до 1990 года",
            "price_new": "30",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "14"
        },
        {
            "id": "100",
            "img": "utilse/radiolom-291.jpg",
            "title": "Скупка резисторов СП5-14 на 22, 33, 47, 68 Ом до 1990 года\n",
            "price_new": "60",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "14"
        },
        {
            "id": "101",
            "img": "utilse/radiolom-292.png",
            "title": "Скупка резисторов СП5-21А; Б до 1990 года",
            "price_new": "22",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "14"
        },
        {
            "id": "102",
            "img": "utilse/radiolom-292.jpg",
            "title": "Скупка резисторов СП5-35 до 1990 года",
            "price_new": "30",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "14"
        },
        {
            "id": "103",
            "img": "utilse/radiolom-293.jpg",
            "title": "Скупка резисторов СП5-39 А/Б",
            "price_new": "35",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "14"
        },
        {
            "id": "108",
            "img": "utilse/radiolom-274.jpg",
            "title": "Скупка лигатуры с советских разъемов РС (маленькие 15)",
            "price_new": "750",
            "description_dop": "Цена указана за 1 контакт.",
            "description": "",
            "description_info_price": "",
            "category": "15",
            "price_old": ""
        },
        {
            "id": "109",
            "img": "utilse/radiolom-275.jpg",
            "title": "Скупка лигатуры с советских соединителей (с вольтметра)",
            "price_new": "100",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15",
            "price_old": ""
        },
        {
            "id": "110",
            "img": "utilse/radiolom-228.jpg",
            "title": "Скупка лигатуры с разъемов РС (колодка)",
            "price_new": "50",
            "description_dop": "Цена указана за 1 г.",
            "description": "",
            "description_info_price": "",
            "category": "15",
            "price_old": ""
        },
        {
            "id": "111",
            "img": "utilse/radiolom-277.jpg",
            "title": "Скупка лигатуры с советских соединителей",
            "price_new": "60",
            "description_dop": "Цена указана за 1 г.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "112",
            "img": "utilse/radiolom-265.jpg",
            "title": "Скупка лигатуры с импортных соединителей",
            "price_new": "1000",
            "description_dop": "Цена указана за 1 кг.",
            "description": "",
            "description_info_price": "",
            "category": "15",
            "price_old": ""
        },
        {
            "id": "113",
            "img": "utilse/radiolom-276.jpg",
            "title": "Скупка лигатуры с РХ-соединителей (с внутренним стержнем) (вилка) [цена за розетку + 35%]",
            "price_new": "30",
            "description_dop": "Цена указана за 1 г.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "114",
            "img": "utilse/radiolom-264.jpg",
            "title": "Скупка качественной лигатуры с советских приборов",
            "price_new": "100",
            "description_dop": "Цена указана за 1 г.",
            "description": "",
            "description_info_price": "",
            "category": "15",
            "price_old": ""
        },
        {
            "id": "115",
            "img": "utilse/radiolom-249.jpg",
            "title": "Скупка лигатуры с советских разъемов (РР, либо МИКС из разной лигатуры)",
            "price_new": "3500",
            "description_dop": "Цена указана за 1 кг.",
            "description": "",
            "description_info_price": "",
            "category": "15",
            "price_old": ""
        },
        {
            "id": "116",
            "img": "utilse/radiolom-245.jpg",
            "title": "Скупка импортной лигатуры",
            "price_new": "4500",
            "description_dop": "Цена указана за 1 кг.",
            "description": "",
            "description_info_price": "",
            "category": "15",
            "price_old": ""
        },
        {
            "id": "117",
            "img": "utilse/radiolom-241.jpg",
            "title": "Скупка лигатуры ШР МР (розетка)",
            "price_new": "48",
            "description_dop": "Цена указана за 1 г.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "118",
            "img": "utilse/radiolom-239.jpg",
            "title": "Скупка лигатуры ШР МР (вилка)",
            "price_new": "27",
            "description_dop": "Цена указана за 1 г.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "119",
            "img": "utilse/radiolom-234.jpg",
            "title": "Скупка лигатуры ШР РС (розетка)",
            "price_new": "55",
            "description_dop": "Цена указана за 1 г.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "120",
            "img": "utilse/radiolom-232.jpg",
            "title": "Скупка лигатуры ШР РС (вилка)",
            "price_new": "32",
            "description_dop": "Цена указана за 1 г.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "121",
            "img": "utilse/radiolom-192.jpg",
            "title": "Скупка лигатуры с разъемов СНП (вилка)",
            "price_new": "55",
            "description_dop": "Цена указана за 1 г.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "122",
            "img": "utilse/radiolom-258.jpg",
            "title": "Скупка разъемов ТАН-2 (розетка)",
            "price_new": "210",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "123",
            "img": "utilse/radiolom-259.jpg",
            "title": "Скупка разъемов ТАН-2 (вилка)",
            "price_new": "120",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "124",
            "img": "utilse/radiolom-190.jpg",
            "title": "Скупка разъемов СНП 59-64 (розетка)",
            "price_new": "400",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15",
            "price_old": ""
        },
        {
            "id": "125",
            "img": "utilse/radiolom-189.jpg",
            "title": "Скупка разъемов СНП 59-64 (вилка)",
            "price_new": "330",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "126",
            "img": "utilse/radiolom-187.jpg",
            "title": "Скупка разъемов СНП 59-48 (вилка)",
            "price_new": "200",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "127",
            "img": "utilse/radiolom-186.jpg",
            "title": "Скупка разъемов СНП 59-32 (вилка)",
            "price_new": "165",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "128",
            "img": "utilse/radiolom-185.jpg",
            "title": "Скупка разъемов СНП 59-32 (розетка)",
            "price_new": "330",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "129",
            "img": "utilse/radiolom-191.jpg",
            "title": "Скупка разъемов СНП 59-96 (розетка)",
            "price_new": "1150",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "130",
            "img": "utilse/radiolom-184.jpg",
            "title": "Скупка разъемов СНП 58-64 (вилка, локальная, только до 1990 года)",
            "price_new": "100",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "131",
            "img": "utilse/radiolom-183.jpg",
            "title": "Скупка разъемов СНП 58-32 (вилка, локальная, только до 1990 года)",
            "price_new": "60",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "132",
            "img": "utilse/radiolom-182.jpg",
            "title": "Скупка разъемов СНП 41-120 (розетка)",
            "price_new": "1500",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15",
            "price_old": ""
        },
        {
            "id": "133",
            "img": "utilse/radiolom-180.jpg",
            "title": "Скупка разъемов СНП 34-135 (вилка, локальная)",
            "price_new": "330",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "134",
            "img": "utilse/radiolom-179.jpg",
            "title": "Скупка разъемов СНП 34-135 (вилка)",
            "price_new": "990",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "135",
            "img": "utilse/radiolom-178.jpg",
            "title": "Скупка разъемов СНП 34-135 (розетка)",
            "price_new": "900",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15",
            "price_old": ""
        },
        {
            "id": "136",
            "img": "utilse/radiolom-177-1.jpg",
            "title": "Скупка разъемов СНП 34-113 (вилка, локальная)",
            "price_new": "330",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "137",
            "img": "utilse/radiolom-177.jpg",
            "title": "Скупка разъемов СНП 34-113 (вилка, полная)",
            "price_new": "820",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "138",
            "img": "utilse/radiolom-176.jpg",
            "title": "Скупка разъемов СНП 34-90 (розетка)",
            "price_new": "1300",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "139",
            "img": "utilse/radiolom-175.jpg",
            "title": "Скупка разъемов СНП 34-69 (вилка, локальная)",
            "price_new": "210",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "140",
            "img": "utilse/radiolom-173.jpg",
            "title": "Скупка разъемов СНП 34-69 (розетка)",
            "price_new": "1120",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "141",
            "img": "utilse/radiolom-174.jpg",
            "title": "Скупка разъемов СНП 34-69 (вилка)",
            "price_new": "540",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "142",
            "img": "utilse/radiolom-172.jpg",
            "title": "Скупка разъемов СНП34-46 (розетка)",
            "price_new": "690",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "143",
            "img": "utilse/radiolom-171.jpg",
            "title": "Скупка разъемов СНП 34-46 (вилка)",
            "price_new": "480",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "144",
            "img": "utilse/radiolom-170.jpg",
            "title": "Скупка разъемов СНП 34-30 (вилка, локальная)",
            "price_new": "100",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "145",
            "img": "utilse/radiolom-168.jpg",
            "title": "Скупка разъемов СНП 34-30 (вилка)",
            "price_new": "200",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "146",
            "img": "utilse/radiolom-167.jpg",
            "title": "Скупка разъемов СНП 17-52 (розетка)",
            "price_new": "970",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "147",
            "img": "utilse/radiolom-169.png",
            "title": "Скупка разъемов СНП 34-30 (розетка)",
            "price_new": "430",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "148",
            "img": "utilse/radiolom-167.png",
            "title": "Скупка разъемов СНП 14-112 (розетка)",
            "price_new": "1130",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "149",
            "img": "utilse/radiolom-166.jpg",
            "title": "Скупка разъемов СНП 14-72 (розетка)\n",
            "price_new": "725",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "150",
            "img": "utilse/radiolom-202.jpg",
            "title": "Скупка разъемов СНО 64-96 (розетка)",
            "price_new": "1150",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "151",
            "img": "utilse/radiolom-200.jpg",
            "title": "Скупка разъемов СНО 64-48 (розетка)",
            "price_new": "530",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "152",
            "img": "utilse/radiolom-201.jpg",
            "title": "Скупка разъемов СНО 64-64 (розетка)",
            "price_new": "710",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "153",
            "img": "utilse/radiolom-199.jpg",
            "title": "Скупка разъемов СНО 64-32 (розетка)",
            "price_new": "330",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "154",
            "img": "utilse/radiolom-195.jpg",
            "title": "Скупка разъемов СНО 59-135 (розетка)",
            "price_new": "1400",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15",
            "price_old": ""
        },
        {
            "id": "155",
            "img": "utilse/radiolom-194.jpg",
            "title": "Скупка разъемов СНО 59-135 (вилка)",
            "price_new": "1200",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "156",
            "img": "utilse/radiolom-285.jpg",
            "title": "Скупка разъемов ОНП-КС (вилка)",
            "price_new": "3",
            "description_dop": "Цена указана за 1 контакт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "157",
            "img": "utilse/radiolom-284.jpg",
            "title": "Скупка разъемов ОНП-КС (розетка)",
            "price_new": "3",
            "description_dop": "Цена указана за 1 контакт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "158",
            "img": "utilse/radiolom-283.jpg",
            "title": "Скупка разъемов ОНП-ВГ (розетка)",
            "price_new": "8",
            "description_dop": "Цена указана за 1 контакт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "159",
            "img": "utilse/radiolom-282.jpg",
            "title": "Скупка разъемов ОНП-ВГ (вилка)",
            "price_new": "6",
            "description_dop": "Цена указана за 1 контакт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "160",
            "img": "utilse/radiolom-282.png",
            "title": "Скупка разъемов ОНП-ВС-224 (розетка)",
            "price_new": "2000",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15",
            "price_old": ""
        },
        {
            "id": "161",
            "img": "utilse/radiolom-282.png",
            "title": "Скупка разъемов ОНП-ВС-224 (вилка)",
            "price_new": "460",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "162",
            "img": "utilse/radiolom-224.jpg",
            "title": "Скупка разъемов ОНП-ВГ-37-140 (вилка)",
            "price_new": "970",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "163",
            "img": "utilse/radiolom-223.jpg",
            "title": "Скупка разъемов ОНП-ВГ-37-140 (розетка)",
            "price_new": "1350",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "164",
            "img": "utilse/radiolom-217.jpg",
            "title": "Скупка разъемов ГРППМ 7-90Г1 (розетка)",
            "price_new": "575",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "165",
            "img": "utilse/radiolom-216.jpg",
            "title": "Скупка разъемов ГРППМ 7-90ША1 (вилка)",
            "price_new": "164",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "166",
            "img": "utilse/radiolom-218.jpg",
            "title": "Скупка лигатуры с разъемов ГРППМ 7-90 (розетка)",
            "price_new": "44",
            "description_dop": "Цена указана за 1 г.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "167",
            "img": "utilse/radiolom-212.jpg",
            "title": "Скупка разъемов РППМ 17-52-3 (розетка)",
            "price_new": "560",
            "description_dop": "Цена указана за 1 шг.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "168",
            "img": "utilse/radiolom-210.jpg",
            "title": "Скупка разъемов РППМ 17-48-3 (розетка)",
            "price_new": "525",
            "description_dop": "Цена указана за 1 шг.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "169",
            "img": "utilse/radiolom-209.jpg",
            "title": "Скупка разъемов РППМ 16-288 (розетка) (до 1990 года)",
            "price_new": "4600",
            "description_dop": "Цена указана за 1 шг.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "170",
            "img": "utilse/radiolom-280.jpg",
            "title": "Скупка разъемов РППМ 40 (розетка)",
            "price_new": "13",
            "description_dop": "Цена указана за 1 контакт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "171",
            "img": "utilse/radiolom-219.jpg",
            "title": "Скупка разъемов РППМ 16-72 (розетка)",
            "price_new": "1150",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "172",
            "img": "utilse/radiolom-220.jpg",
            "title": "Скупка лигатуры с разъемов РППМ",
            "price_new": "65000",
            "description_dop": "Цена указана за 1 кг.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "173",
            "img": "utilse/radiolom-286.jpg",
            "title": "Скупка разъемов УК1-1",
            "price_new": "3",
            "description_dop": "Цена указана за 1 контакт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "174",
            "img": "utilse/radiolom-281.jpg",
            "title": "Скупка разъемов РРМ47 (розетка)",
            "price_new": "12",
            "description_dop": "Цена указана за 1 контакт (желтого цвета).",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "175",
            "img": "utilse/radiolom-279.jpg",
            "title": "Скупка разъемов импортных “Tesla” (в карболите) (розетка)",
            "price_new": "1",
            "description_dop": "Цена указана за 1 контакт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "176",
            "img": "utilse/radiolom-278.jpg",
            "title": "Скупка лигатуры с разъемов РХ (внутренняя часть) (розетка)",
            "price_new": "190000",
            "description_dop": "Цена указана за 1 кг.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "177",
            "img": "utilse/radiolom-273.jpg",
            "title": "Скупка лигатуры с разъемов ГРПМ (розетка) (с желтыми проволочками)",
            "price_new": "4",
            "description_dop": "Цена указана за 1 г.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "178",
            "img": "utilse/radiolom-272.jpg",
            "title": "Скупка разъемов РШАГ (вилка)",
            "price_new": "8",
            "description_dop": "Цена указана за 1 контакт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "179",
            "img": "utilse/radiolom-271.jpg",
            "title": "Скупка разъемов РШАГ (розетка)",
            "price_new": "10",
            "description_dop": "Цена указана за 1 контакт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "180",
            "img": "utilse/radiolom-270.jpg",
            "title": "Скупка разъемов ГРПМ1-122ШУ1 (вилка)",
            "price_new": "1300",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "181",
            "img": "utilse/radiolom-269.jpg",
            "title": "Скупка импортных разъемов “Tesla”, “Eltra”",
            "price_new": "30",
            "description_dop": "Цена указана за 1 шт. (зависит от кол-ва контактов)",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "182",
            "img": "utilse/radiolom-268.jpg",
            "title": "Скупка импортных разъемов “WK” (полный, 84 контакта)",
            "price_new": "250",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "183",
            "img": "utilse/radiolom-263.jpg",
            "title": "Скупка разъемов РПМ 12-32",
            "price_new": "9",
            "description_dop": "Цена указана за 1 контакт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "184",
            "img": "utilse/radiolom-257.jpg",
            "title": "Скупка разъемов РГ 1Н (только розетка)",
            "price_new": "425",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "185",
            "img": "utilse/radiolom-255.png",
            "title": "Скупка разъемов 6Р-150 (розетка)",
            "price_new": "3500",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "186",
            "img": "utilse/radiolom-254.jpg",
            "title": "Скупка разъемов 6Р-100А (розетка)",
            "price_new": "2570",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "187",
            "img": "utilse/radiolom-253.jpg",
            "title": "Скупка разъемов 6Р-100 (вилка) (локальный)",
            "price_new": "640",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "188",
            "img": "utilse/radiolom-252.jpg",
            "title": "Скупка разъемов РПН 23 (розетка)",
            "price_new": "10",
            "description_dop": "Цена указана за 1 контакт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "189",
            "img": "utilse/radiolom-251.png",
            "title": "Скупка новых разъемов РПН 23 вилка",
            "price_new": "5,03",
            "description_dop": "Цена указана за 1 контакт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "190",
            "img": "utilse/radiolom-250.jpg",
            "title": "Скупка разъемов РПМ 23 (розетка)",
            "price_new": "10",
            "description_dop": "Цена указана за 1 контакт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "191",
            "img": "utilse/radiolom-248.jpg",
            "title": "Скупка разъемов РР",
            "price_new": "1",
            "description_dop": "Цена указана за 1 контакт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "192",
            "img": "utilse/radiolom-247.jpg",
            "title": "Скупка разъемов “Eltra” (крупные)",
            "price_new": "1",
            "description_dop": "Цена указана за 1 контакт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "193",
            "img": "utilse/radiolom-244.jpg",
            "title": "Скупка советской ламели (белой)",
            "price_new": "2600",
            "description_dop": "Цена указана за 1 кг.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "194",
            "img": "utilse/radiolom-243.jpg",
            "title": "Скупка советской ламели (жёлтой)",
            "price_new": "17700",
            "description_dop": "Цена указана за 1 кг.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "195",
            "img": "utilse/radiolom-242.jpg",
            "title": "Скупка импортной ламели (только жёлтая)",
            "price_new": "9860",
            "description_dop": "Цена указана за 1 кг.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "196",
            "img": "utilse/radiolom-240.jpg",
            "title": "Скупка разъемов ШР МР (розетка) (скупка контактами)",
            "price_new": "12",
            "description_dop": "Цена указана за 1 контакт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "197",
            "img": "utilse/radiolom-238.jpg",
            "title": "Скупка разъемов ШР МР (вилка) (скупка контактами)",
            "price_new": "7",
            "description_dop": "Цена указана за 1 контакт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "198",
            "img": "utilse/radiolom-236.jpg",
            "title": "Скупка разъемов СНЦ / ОНЦ (скупка контактами)",
            "price_new": "6",
            "description_dop": "Цена указана за 1 контакт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "199",
            "img": "utilse/radiolom-233.jpg",
            "title": "Скупка разъемов ШР РС (розетка) (скупка контактами)",
            "price_new": "16",
            "description_dop": "Цена указана за 1 контакт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "200",
            "img": "utilse/radiolom-231.jpg",
            "title": "Скупка разъемов ШР РС (вилка) (скупка контактами)",
            "price_new": "6",
            "description_dop": "Цена указана за 1 контакт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "201",
            "img": "utilse/radiolom-230.jpg",
            "title": "Скупка разъемов РПМ-32",
            "price_new": "330",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "202",
            "img": "utilse/radiolom-229.jpg",
            "title": "Скупка украинских разъемов (прозрачный корпус) (розетка)",
            "price_new": "6",
            "description_dop": "Цена указана за 1 контакт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "203",
            "img": "utilse/radiolom-222.jpg",
            "title": "Скупка разъемов РПС 1-37 (локальный)",
            "price_new": "130",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "204",
            "img": "utilse/radiolom-221.jpg",
            "title": "Скупка разъемов РПС 1-37 (полный)",
            "price_new": "300",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "205",
            "img": "utilse/radiolom-215.jpg",
            "title": "Скупка разъемов РППГ 2-48 (розетка) (жёлтые контакты)",
            "price_new": "1450",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "206",
            "img": "utilse/radiolom-208.jpg",
            "title": "Скупка разъемов РПКМ 4-67 Г1",
            "price_new": "3000",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "207",
            "img": "utilse/radiolom-198.jpg",
            "title": "Скупка разъемов СНО 64-16 (розетка)",
            "price_new": "175",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "15"
        },
        {
            "id": "208",
            "img": "utilse/--e1653886593655.jpg",
            "title": "Скупка диодов – АЛС крупных 14 ног",
            "price_new": "20сом",
            "price_old": "25сом",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "16"
        },
        {
            "id": "209",
            "img": "utilse/radiolom-5.jpg",
            "title": "Скупка диодов – АЛС (мелких, зелёных) 6 ног",
            "price_new": "5сом",
            "price_old": "5сом",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "16"
        },
        {
            "id": "210",
            "img": "utilse/radiolom-6.jpg",
            "title": "Скупка диодов – АЛС (мелких, красных) 8, 10 ног",
            "price_new": "15сом",
            "price_old": "9сом",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "16"
        },
        {
            "id": "211",
            "img": "utilse/radiolom-8.jpg",
            "title": "Скупка диодов – Алс-362 (мелкие)",
            "price_new": "10сом",
            "price_old": "8сом",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "16"
        },
        {
            "id": "212",
            "img": "utilse/radiolom-7.jpg",
            "title": "Скупка диодов – отечественные, 14 ног",
            "price_new": "25сом",
            "price_old": "19сом",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "16"
        },
        {
            "id": "213",
            "img": "utilse/radiolom-15.jpg",
            "title": "Скупка диодов – 2А 510Б",
            "price_new": "8сом",
            "price_old": "5сом",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "16"
        },
        {
            "id": "214",
            "img": "utilse/radiolom-14.jpg",
            "title": "Скупка диодов – ГИ 404А",
            "price_new": "9сом",
            "price_old": "6сом",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "16"
        },
        {
            "id": "215",
            "img": "utilse/radiolom-13.jpg",
            "title": "Скупка диодов – ГИ 401А",
            "price_new": "15сом",
            "price_old": "13сом",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "16"
        },
        {
            "id": "216",
            "img": "utilse/radiolom-12.jpg",
            "title": "Скупка диодов – КДС 628 и подобных",
            "price_new": "35сом",
            "price_old": "24сом",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "16"
        },
        {
            "id": "217",
            "img": "utilse/radiolom-11.jpg",
            "title": "Скупка диодов – КДС 627 и подобных",
            "price_new": "15сом",
            "price_old": "15сом",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "16"
        },
        {
            "id": "218",
            "img": "utilse/radiolom-10.jpg",
            "title": "Скупка диодов – КД 906 и подобных",
            "price_new": "9сом",
            "price_old": "7сом",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "16"
        },
        {
            "id": "219",
            "img": "utilse/radiolom-4.jpg",
            "title": "Скупка диодов – “лампочки” (жёлтые внутри)",
            "price_new": "1сом",
            "price_old": "",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "16"
        },
        {
            "id": "220",
            "img": "utilse/radiolom-1.jpg",
            "title": "Скупка диодов – “лампочки” в металлическом корпусе",
            "price_new": "8сом",
            "price_old": "",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "16"
        },
        {
            "id": "221",
            "img": "utilse/radiolom-3.jpg",
            "title": "Скупка диодов 2Д504 (жёлтые ноги)",
            "price_new": "5сом",
            "price_old": "3сом",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "16"
        },
        {
            "id": "222",
            "img": "utilse/radiolom-299.jpg",
            "title": "Скупка 17 – РЭС 7",
            "price_new": "1060",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "223",
            "img": "utilse/radiolom-300.jpg",
            "title": "Скупка 17 – РЭС 8 – до 71.12 года [050, 051, 052]",
            "price_new": "790",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "224",
            "img": "utilse/radiolom-301.jpg",
            "title": "Скупка 17 – РЭС 8 – до 66.12 года [050, 051, 052]",
            "price_new": "990",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "225",
            "img": "utilse/radiolom-302.jpg",
            "title": "Скупка 17 – РЭС 9 – до 82 года [201, 202, 207, 208]",
            "price_new": "226",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "226",
            "img": "utilse/radiolom-303.jpg",
            "title": "Скупка 17 – РЭС 9 – до 82 года [213, 215-218]",
            "price_new": "380",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "227",
            "img": "utilse/radiolom-304.jpg",
            "title": "Скупка 17 – РЭС 9 – с 82 по 85.07 год [01, 02, 06]",
            "price_new": "210",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "228",
            "img": "utilse/radiolom-305.jpg",
            "title": "Скупка 17 – РЭС 9 – с 82 до 90 года [09, 11-14]",
            "price_new": "380",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "229",
            "img": "utilse/radiolom-306.jpg",
            "title": "Скупка 17 – РЭС 10 – до 82 года половинка [300, 305, 308]",
            "price_new": "52",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "230",
            "img": "utilse/radiolom-307.jpg",
            "title": "Скупка 17 – РЭС 10 – до 82 года половинка [311, 316]",
            "price_new": "97",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "231",
            "img": "utilse/radiolom-308.jpg",
            "title": "Скупка 17 – РЭС 10 – с 82 до 83.11 года половинка [01, 06, 07, 031-01, 06, 07]",
            "price_new": "52",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "232",
            "img": "utilse/radiolom-309.jpg",
            "title": "Скупка 17 – РЭС 10 – с 82 до 90 года половинка [031-08, 13]",
            "price_new": "97",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "233",
            "img": "utilse/radiolom-310.jpg",
            "title": "Скупка 17 – РЭС 10 – до 82 года целая [301, 302, 303, 304]",
            "price_new": "92",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "234",
            "img": "utilse/radiolom-311.jpg",
            "title": "Скупка 17 – РЭС 10 – с 82 до 83.12 года целая [031-02, 03, 04, 05]",
            "price_new": "92",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "235",
            "img": "utilse/radiolom-312.jpg",
            "title": "Скупка 17 – РЭС 10 – до 82 года целая [312, 313, 314, 315]",
            "price_new": "178",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "236",
            "img": "utilse/radiolom-313.jpg",
            "title": "Скупка 17 – РЭС 10 – с 82 до 90 года целая [031-09, 10, 11, 12]",
            "price_new": "178",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "237",
            "img": "utilse/radiolom-314.jpg",
            "title": "Скупка 17 – РЭС 10 – до 82 года целая [320]",
            "price_new": "178",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "238",
            "img": "utilse/radiolom-315.gif",
            "title": "Скупка 17 – РЭС 10 – с 82 до 90 года целая [050-02]",
            "price_new": "178",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "239",
            "img": "utilse/radiolom-316.jpg",
            "title": "Скупка 17 – РЭС 10 – до 82 года целая [319]",
            "price_new": "92",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "240",
            "img": "utilse/radiolom-315.gif",
            "title": "Скупка 17 – РЭС 10 – до 82.12 года целая [050-01]",
            "price_new": "92",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "241",
            "img": "utilse/radiolom-317.jpg",
            "title": "Скупка 17 – РЭС 15 – до 73 года [001-007]",
            "price_new": "70",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "242",
            "img": "utilse/radiolom-318.jpg",
            "title": "Скупка 17 – РЭС 22 – до 74 года [200-299] (желтые контакты)",
            "price_new": "1330",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "243",
            "img": "utilse/radiolom-319.jpg",
            "title": "Скупка 17 – РЭС 22 – до 82 года [200-299] (желтые контакты)",
            "price_new": "1040",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "244",
            "img": "utilse/radiolom-320.jpg",
            "title": "Скупка 17 – РЭС 22 – до 90 года [09, 10, 11, 12, 13] (желтые контакты)",
            "price_new": "500",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "245",
            "img": "utilse/radiolom-321.jpg",
            "title": "Скупка 17 – РЭС 32 – до 82 года [354, 355]",
            "price_new": "1070",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "246",
            "img": "utilse/radiolom-322.jpg",
            "title": "Скупка 17 – РЭС 32 – до 90 года [06, 07]",
            "price_new": "500",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "247",
            "img": "utilse/radiolom-323.jpg",
            "title": "Скупка 17 – РЭС 48 – до 92 года [201-207]",
            "price_new": "45",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "248",
            "img": "utilse/radiolom-324.jpg",
            "title": "Скупка 17 – РЭС 48 – до 90.12 года [213-218]",
            "price_new": "95",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "249",
            "img": "utilse/radiolom-326.jpg",
            "title": "Скупка 17 – РЭС 78 – до 90 года [00-07]",
            "price_new": "56",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "250",
            "img": "utilse/radiolom-327.jpg",
            "title": "Скупка 17 – РЭС 78 – до 90 года [08-13]",
            "price_new": "95",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "251",
            "img": "utilse/ргк15.jpg",
            "title": "Скупка 17 – РГК-15 (жёлтые ноги)",
            "price_new": "13",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "252",
            "img": "utilse/radiolom-329.jpg",
            "title": "Скупка 17 – РП – 4, 5, 7 до 66 года",
            "price_new": "288",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "253",
            "img": "utilse/radiolom-330.jpg",
            "title": "Скупка 17 – РП – 4, 5, 7 до 68.02 года",
            "price_new": "258",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "254",
            "img": "utilse/radiolom-331-1.jpg",
            "title": "Скупка 17 – РПС – 3, 4, 5, 7, 15 до 72 года",
            "price_new": "288",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "255",
            "img": "utilse/radiolom-331-1.jpg",
            "title": "Скупка 17 – РПС – 3, 4, 5, 7, 15 до 90 года",
            "price_new": "258",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "256",
            "img": "utilse/radiolom-331-1.jpg",
            "title": "Скупка 17 – РПС – 3, 4, 5, 7, 15 после 90 года [08-14] (золото-никелевые контакты)",
            "price_new": "108",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "257",
            "img": "utilse/radiolom-332.jpg",
            "title": "Скупка 17 – РПС 11 до 68 года",
            "price_new": "201",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "258",
            "img": "utilse/radiolom-333.jpg",
            "title": "Скупка 17 – РПС 18 до 79 года",
            "price_new": "201",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "259",
            "img": "utilse/radiolom-334.jpg",
            "title": "Скупка 17 – РПС 18 до 90 года",
            "price_new": "172",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "260",
            "img": "utilse/radiolom-335.jpg",
            "title": "Скупка 17 – РПС 20 до 66.12 года",
            "price_new": "172",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "261",
            "img": "utilse/radiolom-336-1.jpg",
            "title": "Скупка 17 – РПС 20 [756, 760, 761, 762, 763]",
            "price_new": "325",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "262",
            "img": "utilse/radiolom-337.jpg",
            "title": "Скупка 17 – РПС 32 до 91 года [209-216]",
            "price_new": "420",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "263",
            "img": "utilse/radiolom-338.jpg",
            "title": "Скупка 17 – РПС 32 до 92 года [201-208]",
            "price_new": "188",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "264",
            "img": "utilse/radiolom-339.jpg",
            "title": "Скупка 17 – РПС 34 до 91 года [231, 232, 233]",
            "price_new": "350",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "265",
            "img": "utilse/radiolom-339.jpg",
            "title": "Скупка 17 – РПС 34 до 79.12 года [234, 235, 236]",
            "price_new": "260",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "266",
            "img": "utilse/radiolom-340.jpg",
            "title": "Скупка 17 – РПС 36 до 91 года [251, 252, 253]",
            "price_new": "620",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "267",
            "img": "utilse/radiolom-341.jpg",
            "title": "Скупка 17 – РПС 36 до 79.12 года [254, 255, 256, 264]",
            "price_new": "900",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "268",
            "img": "utilse/radiolom-342.jpg",
            "title": "Скупка 17 – РПВ 2/7",
            "price_new": "50",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "269",
            "img": "utilse/radiolom-343.jpg",
            "title": "Скупка 17 – ДП 12 до 90 года [902, 903, 906]",
            "price_new": "1912",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "270",
            "img": "utilse/radiolom-345.jpg",
            "title": "Скупка 17 – РКМ-1 с ПЛи 10",
            "price_new": "1447",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "271",
            "img": "utilse/radiolom-349.jpg",
            "title": "Скупка 17 – РВ-5А; Б",
            "price_new": "68",
            "description_dop": "Цена указана за 1 шт.",
            "description": "",
            "description_info_price": "",
            "category": "17"
        },
        {
            "id": "272",
            "img": "utilse/radiolom-165.jpg",
            "title": "Скупка ПРОЦЕССОРОВ пластмассовых без ног",
            "price_new": "420",
            "description_dop": "Цена указана за 1 кг.",
            "description": "",
            "description_info_price": "",
            "category": "18"
        },
        {
            "id": "273",
            "img": "utilse/radiolom-164.jpg",
            "title": "Скупка ПРОЦЕССОРОВ пластмассовых с ногами",
            "price_new": "700",
            "description_dop": "Цена указана за 1 кг.",
            "description": "",
            "description_info_price": "",
            "category": "18"
        },
        {
            "id": "274",
            "img": "utilse/radiolom-163.jpg",
            "title": "Скупка ПРОЦЕССОРОВ зеленых/коричневых без радиаторов (крупные)",
            "price_new": "2400",
            "description_dop": "Цена указана за 1 кг.",
            "description": "",
            "description_info_price": "",
            "category": "18"
        },
        {
            "id": "275",
            "img": "utilse/radiolom-162.jpg",
            "title": "Скупка ПРОЦЕССОРОВ черных пластмассовых (крупные)",
            "price_new": "2700",
            "description_dop": "Цена указана за 1 кг.",
            "description": "",
            "description_info_price": "",
            "category": "18"
        },
        {
            "id": "276",
            "img": "utilse/radiolom-161.jpg",
            "title": "Скупка ПРОЦЕССОРОВ керамических (без желтых пластин)",
            "price_new": "2000",
            "description_dop": "Цена указана за 1 кг.",
            "description": "",
            "description_info_price": "",
            "category": "18",
            "price_old": ""
        },
        {
            "id": "277",
            "img": "utilse/radiolom-160.jpg",
            "title": "Скупка ПРОЦЕССОРОВ керамических (с желтой пластиной)",
            "price_new": "1700",
            "description_dop": "Цена указана за 1 кг.",
            "description": "",
            "description_info_price": "",
            "category": "18",
            "price_old": ""
        }


    ];
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);

        console.log('Данные формы:', {
            from_name: formData.get('from_name'),
            namber_user: formData.get('namber_user'),
            message: formData.get('message'),
        });

        emailjs
            .sendForm(
                'service_eplzjji',      // Ваш Service ID
                'template_0fetif2',     // Ваш Template ID
                form.current,           // Форма
                'iCTr7YvPOeeP0Hf7l'     // Ваш Public Key (User ID)
            )
            .then(
                (result) => {
                    console.log('Успешно отправлено:', result.text);
                    setStatus('Сообщение отправлено!');
                    form.current.reset(); // Очищаем форму
                },
                (error) => {
                    console.error('Ошибка отправки:', error.text);
                    setStatus('Ошибка при отправке сообщения.');
                }
            );
    };
    const [filter, setFilter] = useState('11');
    const proba = (el) => {
        setFilter(el)
    };
    const renderHeader = () => {
        switch (filter) {
            case "12":
                return "💲Скупка транзисторов в Токмоке 🔧 – лучшие цены!";
            case "13":
                return "🔋Скупка конденсаторов в Токмоке🚀";
            case "14":
                return "🔧 Скупка резисторов в Токмоке – лучшие цены!📈";
            case "15":
                return "🔌Скупка разъемов в Токмоке💥- Выгодно и Быстро";
            case "16":
                return "⚡Скупка диодов в Токмоке | Выгодные цены и быстрая оценка!💡";
            case "17":
                return "⚙️Скупка реле в Токмоке🔄 – выгодные условия!";
            case "18":
                return "🖥️ Скупка процессоров в Токмоке💰";
            default:
                return "Скупка электронных плат в Токмоке";
        }
    };




    const deleteProduct = (id) => {
        axios.delete(`http://localhost:3031/product/${id}`);
        window.location.reload()
    };

    const toTop = () => {
        animateScroll.scrollToTop({
            delay: 0,
            duration: 0,
            smooth: true
        })
    };

    const [menu, setMenu] = useState(false);


    // Функция для открытия/закрытия обычного меню
    const mobelMenu = () => {
        setMenu(prevState => !prevState);
    };






    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");

    const openModal = (img) => {
        setModalImage(img);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalImage("");
    };

    const [filterCotegori,setFilterCotegori] = useState(false);

    const cotegori = () =>{
        setFilterCotegori(prevState => !prevState)
    };


    const value = {
        isModalOpen,
        modalImage,
        openModal,
        closeModal,
        toTop,
        product,
        filter,
        proba,
        renderHeader,
        deleteProduct,
        mobelMenu,
        menu,
        sendEmail,
        form,
        status,
        cotegori,
        filterCotegori
    };
    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}