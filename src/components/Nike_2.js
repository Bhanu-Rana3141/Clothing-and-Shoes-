import React, { useState } from 'react'
import './RedTape_1.css'

export default function Nike_2() {

    const [count , setCount] = useState(0)

    const increment = () => {
        if(count == 5) {
            alert('You can select 5 items !!')
        }
        setCount(count + 1)   
    }

    const decrement = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <>
            <div className='container'>
                
                <div className='image'>
                    <img height={'400px'} src="Images/Nike-2.webp" alt="nike" />
                </div>

                <div className="description">
                    <p>Nike Athleisure Shoes for Men |Cultured Round-Toe Shape, Cushioning Technology & Smart Ventilation</p>
                    <p><img style={{height : '14px'}} src="Images\rupeeSymbol.png" alt="rupeeSymbol" />3999.00</p>
                    <div className="quantitySelector">
                        <span className='minus' onClick={decrement} >-</span>
                        <span className='num'>{count}</span>
                        <span className='plus' onClick={increment} >+</span>
                    </div>
                    <button className='addCartBtn'>Add To Cart</button>
                </div>   

            </div>
        </>
    )
}
