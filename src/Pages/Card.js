import React, { useEffect, useState } from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
function Card() {

    const [mydata, setmydata] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => setmydata(data))
    }, [])


    return (
        <>

            {mydata.map((element) => {

                return (
                    <body>
                        <main>
                            <div class="card">
                                <div class="card__title">
                                    <div class="icon">
                                        <a href="#"><i class="fa fa-arrow-left"></i></a>
                                    </div>
                                    <h3>New products</h3>
                                </div>
                                <div class="card__body">
                                    <div class="half">
                                        <div class="featured_text">
                                            <h4>{element.title}</h4>
                                            <p class="sub">{element.category}</p>
                                            <p class="price">{element.price}₼</p>
                                        </div>
                                        <div class="image">
                                            <img src={element.image} alt="" />
                                        </div>
                                    </div>
                                    <div class="half">
                                        <div class="description">
                                            <p>{element.description}</p>
                                        </div>
                                        <span class="stock"><i class="fa fa-pen"></i> In stock</span>
                                        <div class="reviews">
                                            <ul class="stars">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            <span>rate:{element.rating.rate}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="card__footer">
                                    <div class="recommend">
                                        <p>count</p>
                                        <h3>{element.rating.count}</h3>
                                    </div>
                                    <div class="action">
                                        <Link to={`/about/${element.id}`}><button>Add to cart</button></Link>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </body>
                )
            })}



        </>
    )
}

export default Card
