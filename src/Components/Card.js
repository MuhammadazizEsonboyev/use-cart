import React from 'react'
import {useCart} from 'react-use-cart'

export default function Card() {
    const {
        items, 
        totalUniqueItems, 
        isEmpty, 
        totalItems, 
        cartTotal, 
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart()
        if(isEmpty){
            <h1 className='text-center'>Your Cart is Empty</h1>
        }  
        

    return (
        <>
        <section className='py-4  container section1'>
            <div className='row justify-content-center'>
            <div className='col-9'>
                <h1>Card ({totalUniqueItems}) total Item : ({totalItems})</h1>
                <table className='table table-light table-hover m-0'>
                    <tbody>
                    {items.map((res, index) => {
                        return(
                            <>  
                            <tr key={index} className="cartItemSection">
                            <img src={res.img} style={{height: '6rem'}} alt='jpg'/>
                            <td>{res.title}</td>
                            <td>{res.price}$</td>
                            <td>Miqdori ({res.quantity})</td>
                            <td className='btnbuttons'>
                                <button
                                 className='btn btn-info ms-2'
                                onClick={() => updateItemQuantity(res.id, res.quantity -1)}
                                 >-</button>
                                <button 
                                className='btn btn-info ms-2'
                                onClick={() => updateItemQuantity(res.id, res.quantity +1)}
                                >+</button>
                                <button 
                                className='btn btn-danger ms-2'
                                onClick={()  => removeItem(res.id)}
                                >Remove Item</button>
                            </td>
                            </tr>
                            </>
                        )
                    })}    
                    </tbody>
                </table>   
            </div>
            <div className='col-auto ms-auto sectionDiv'>
            <h2>Barcha Summa: ${cartTotal}</h2>
            <div className='divSection'>
                <button className='btn btn-danger m-2' onClick={() => emptyCart()}>Clear Card</button>
            </div>
            </div>
            </div>
        </section>
        </>
    )
}
