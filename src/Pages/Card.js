import React, { useEffect, useState } from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
function Card() {

    const [mydata, setmydata] = useState([])
    useEffect(() => {
        fetch("https://northwind.vercel.app/api/products")
            .then((response) => response.json())
            .then((data) => setmydata(data))
    }, [])


    return (
        <>
            <div>
           
                <button class="glow-on-hover" type="button" onClick={() => { setmydata([...mydata].sort((a, b) => (a.unitPrice > b.unitPrice) ? 1 : ((b.unitPrice > a.unitPrice)) ? -1 : 0)) }}>Price:Low to high</button>
                <button class="glow-on-hover" type="button" onClick={() => { setmydata([...mydata].sort((a, b) => (a.unitPrice < b.unitPrice) ? 1 : ((b.unitPrice < a.unitPrice)) ? -1 : 0)) }}>Price:High to low</button>
            </div>
            {mydata.map((element) => {

                return (
                    <body>
                        <main>
                            <div class="card">
                                <div class="card__title">
                                    <div class="icon">
                                        <a href="#"><i class="fa fa-arrow-left"></i></a>
                                    </div>
                                    <h3>Vasivvv</h3>
                                </div>
                                <div class="card__body">
                                    <div class="half">
                                        <div class="featured_text">
                                            <h4>{element.name}</h4>
                                            <p className='price'>{element.unitPrice}₼</p>
                                            {/* <h4>{element.title}</h4> 
                                            <p class="sub">{element.category}</p>
                                            <p class="price">{element.price}₼</p> */}
                                        </div>
                                    </div>
                                    <div class="half">
                                        <div class="description">
                                            <p>Quantity Per Unit; {element.quantityPerUnit}</p>
                                            {/* <p>{element.description}</p> */}
                                        </div>
                                        <span class="stock"><i class="fa fa-pen"></i><p className='sub'>{element.unitsInStock}</p> In stock</span>
                                        <div class="reviews">
                                            <ul class="stars">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star-o"></i></li>
                                            </ul>
                                            {/* <span>rate:{element.rating.rate}</span> */}
                                        </div>
                                    </div>
                                </div>
                                <div class="card__footer">
                                    <div class="recommend">
                                        <p>count</p>
                                        {/* <h3>{element.rating.count}</h3> */}
                                    </div>
                                    <div class="action">
                                        {<button>Add to cart</button>}
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
