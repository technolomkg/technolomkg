import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {useLocation} from "react-router-dom";
import {useForm} from "react-hook-form";
import './patch.scss'
import {CustomContext} from "../Context";

const Patch = () => {
    const {proba} = useContext(CustomContext);

    const [oneProduct, setOneProduct] = useState({});

    const id = useLocation().pathname.split('/').at(-1);


    useEffect(() => {
        axios(`http://localhost:3031/product/${id}`)
            .then(({data}) => setOneProduct(data))
    }, []);

    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const patchProduct = (obj) => {
        axios.patch(`http://localhost:3031/product/${id}`, obj);
        window.location.pathname = "/buying-boards"
    };
    return (
        <section className='patch'>
            <h1>
                Чтоб изменения сохранились нужно нажать на каждое поле . <br/>
                Не важно пустое или нет . <br/>
                Иначе сохраниться только то что изменяли а остальное исчезнет <br/>
                Без возможности на востановление
            </h1>
            <form onSubmit={handleSubmit(patchProduct)}>
                <div className="">
                    <p>title</p>
                    <input {...register('title')} defaultValue={oneProduct.title} type="text"/>
                </div>

                <div className="">
                    <p>price_new</p>
                    <input {...register('price_new')} defaultValue={oneProduct.price_new} type="text"/>
                </div>


                <div>
                    <p>price_old</p>
                    <input {...register('price_old')} defaultValue={oneProduct.price_old} type="text"/>
                </div>


                <div>
                    <p>description</p>
                    <input {...register('description')} defaultValue={oneProduct.description} type="text"/>
                </div>


                <div>
                    <p>description_dop</p>
                    <input {...register('description_dop')} defaultValue={oneProduct.description_dop}
                           type="text"/>
                </div>

                <div>
                    <p>description_info_price</p>
                    <input {...register('description_info_price')}
                           defaultValue={oneProduct.description_info_price} type="text"/>
                </div>

                <div className="">
                    <p>category</p>
                    <input {...register('category')} defaultValue={oneProduct.category} type="text"/>
                </div>

                <button onClick={() => proba(`${oneProduct.category}`)}>изменить</button>
            </form>
        </section>
    );
};

export default Patch;