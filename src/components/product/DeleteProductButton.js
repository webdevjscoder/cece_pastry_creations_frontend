import React from "react";
import {Button} from 'react-bootstrap';

const DeleteProductButton = props => {
    return (
        <Button
            style={{backgroundColor: "#9c77a9", borderColor: "#9c77a9"}}
            // className="mx-md-3"
            onClick={props.deleteProduct}>Delete</Button>
    )
}

export default DeleteProductButton;