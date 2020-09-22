import React from "react";
import {Button, Card} from "react-bootstrap";

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            count: 0
        })
    }

    handleAddCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleSubtractCount = () => {
        this.setState({
            count: this.state.count - 1
        })
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
                    <Button onClick={this.handleSubtractCount}>-</Button>
                    <span>Count: {this.state.count}</span>
                    <Button onClick={this.handleAddCount}>+</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default Product;