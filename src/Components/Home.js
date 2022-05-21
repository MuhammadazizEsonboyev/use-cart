    import React from 'react'
    import ItemCard from './ItemCard'
    import data from '../data.js'
    import './style.css'
    import Caroul from './Caroul'
    import LineSection from './LineSection'



    export default function Home() {
        return (
            <>
            <Caroul/>
            <div className='sectionBg'>
                <h1 className='allitems'>Barcha Mahsulotlar</h1>    
            </div>
                <section className='py-4 container'>
                    <div className="row justify-content-center">
                        {data.productData.map((res, index) => {
                            return(
                                <>
                                    <ItemCard 
                                    img={res.img} 
                                    title={res.title}
                                    description={res.description}
                                    price={res.price} 
                                    item={res} 
                                    key={index}/>
                                </>
                            )
                        })}
                    </div>
                </section>
            <LineSection/>
                
            </>
        )
    }
