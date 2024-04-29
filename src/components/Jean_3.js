import React, { useState } from 'react'
import './Hoodie_1.css'

export default function Jean_3() {

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
                    <img height={'400px'} src="Images/jean-3.webp" alt="jean" />
                </div>

                <div className="hoodie-description">
                    <p>Jean</p>
                    <p><img style={{height : '14px'}} src="Images\rupeeSymbol.png" alt="rupeeSymbol" />2,499.00</p>
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
