import React from 'react'
import { Card } from 'react-bootstrap'
// import '../styles/Cataloge.css'

function Product({product}) {

  return (
    
    <Card className='my-3' style={{width:"19rem", display:"grid", float:"left", margin:"0.8rem",}}>
        <Card.Img style={{width:"18rem", height:"10rem"}} src={product.image}/>

        <Card.Body>
            <Card.Title as="div" className='productText semi-bold'> <strong>{product.Name}</strong> </Card.Title>
            <div ><strong>Price</strong>: $<strong>{product.Price}</strong> 
            </div>
            <Card.Text>
                <strong>Area</strong>: <span>{product.Sqft}sqft</span><br/>
                <strong>Location</strong>: <span>{product.Location}</span><br/>
            </Card.Text>

            
        </Card.Body>
    </Card>
  )
}

export default Product