import React from "react";
import { Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { incrementProduct, decrementProduct } from "../../actions/productActions";

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            count: 0
        }
    }

    handleAddCount = (id) => {
        this.props.incrementCount(id);
    }

    handleSubtractCount = (id) => {
        this.props.decrementCount(id);
    }

     render() {
        return (
            <Card
                className="m-3"
                key={this.props.id}
                style={{width: '30rem'}}>
                <Card.Img height="478px" variant="top" src={this.props.image === "" ? this.props.defaultImg : this.props.image }/>
                <Card.Body>
                    <Card.Title style={{fontFamily: "Lobster"}}>{this.props.name}</Card.Title>
                    <Card.Text style={{fontFamily: "Serif"}}>
                        {this.props.description}
                    </Card.Text>
                    <Button
                        style={{backgroundColor: "#9c77a9", borderColor: "#9c77a9", fontFamily: "Serif"}}
                        onClick={() => this.props.togglePopup(this.props.id)}
                    >
                        View Product
                    </Button>
                    <Button onClick={() => this.handleSubtractCount(this.props.id)}>-</Button>
                    <span>Count: {this.props.count}</span>
                    <Button onClick={() => this.handleAddCount(this.props.id)}>+</Button>
                </Card.Body>
            </Card>
        )
     }
}

const mapDispatchToProps = dispatch => {
    return {
        incrementCount: id => dispatch(incrementProduct(id)),
        decrementCount: id => dispatch(decrementProduct(id))
    }
}

export default connect(null, mapDispatchToProps)(Product);