import React from 'react'
import { Card , Button} from 'react-bootstrap'
import {useCart} from 'react-use-cart'
import './style.css'

export default function ItemCard(props) {
    const { addItem } = useCart()
    return (
     <>
    <Card className='col-11 col-md-6 col-lg-3 mx-0 mb-4 '>
    <Card.Img variant="top" src={props.img} style={{height: "100%"}} />
    <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
            {props.description}
        </Card.Text>
        <Card.Text>
            {props.price}$
        </Card.Text>
        <Button variant="primary" onClick={() => addItem(props.item)}>Add Card</Button>
    </Card.Body>
    </Card>
     </>
    )
}
