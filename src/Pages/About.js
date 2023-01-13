import react, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import React from 'react'
import './about.scss'

function About() {
    let { id } = useParams();
    const [mydata, setmydata] = useState([])
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => setmydata(data))
    }, [])
    return (

        <div class="container">
            {console.log(mydata)}
            <div class="header">
                <div class="header-logo">
                    Product Page
                </div>
                <nav class="header-nav">
                    <i class="ion-ios-cart"></i>
                    <div></div>
                </nav>
            </div>
            <div class="product">
                <div class="product-photo">
                    <img src={mydata.image} alt="eli" />
                    <img src={mydata.image} />
                </div>
                <div class="product-detail">
                    <h1 class="product__title">Textured Biker Jacket</h1>
                    <div class="product__price">$79.99</div>
                    <div class="product__subtitle">Biker jacket with lapel collar and long sleeves. Features side zip pockets, belt with buckle detail, front zip-up fastening and contrasting, textured fabric lining.</div>
                    <div class="product__color">
                        <form action="">
                            <fieldset>
                                <input type="radio" name="color" />
                                <label for="straw">
                                    <i class="ion-android-done"></i>
                                </label>
                            </fieldset>
                            <fieldset>
                                <input type="radio" name="color" />
                                <label for="brown">
                                    <i class="ion-android-done"></i>
                                </label>
                            </fieldset>
                        </form>
                    </div>
                    <a class="product__button" href="#" onClick="buttonAnimate()">
                        <span>Add to cart</span>
                        <span>Success</span>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default About