import React, { useState } from 'react'
import './Hoodie_1.css'

export default function Hoodie_2() {

    const [count , setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)   
    }

    const decrement = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <>
            <div className='hoodies'>
                
                <div className='hoodie-img'>
                    <img height={'400px'} src="Images/Hoodie-2.webp" alt="hoodie" />
                </div>

                <div className="hoodie-description">
                    <p>Hoodie</p>
                    <p><img style={{height : '14px'}} src="Images\rupeeSymbol.png" alt="rupeeSymbol" />1,599.00</p>
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
