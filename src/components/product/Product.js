import React from "react";
import { Card, Button } from 'react-bootstrap';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        const defaultImg = "http://placekitten.com/478/478"
        const productItems = this.props.products.map(product => (
            <Card
                className="m-3"
                key={product.id}
                style={{width: '30rem'}}>
                <Card.Img height="478px" variant="top" src={product.image === "" ? defaultImg : product.image }/>
                <Card.Body>
                    <Card.Title style={{fontFamily: "Lobster"}}>{product.name}</Card.Title>
                    <Card.Text style={{fontFamily: "Serif"}}>
                        {product.description}
                    </Card.Text>
                    <Button
                        style={{backgroundColor: "#9c77a9", borderColor: "#9c77a9", fontFamily: "Serif"}}
                        onClick={() => this.props.toggleProduct(product.id)}
                    >
                        View Product
                    </Button>
                </Card.Body>
            </Card>
        ));
        return (
            <div
                className="d-flex flex-md-column flex-lg-row flex-lg-wrap align-items-md-center justify-content-lg-center my-5"
            >
                {productItems}
            </div>
        )
    }
}

export default Product;