import React from "react";

const DeleteProductButton = props => {
    return (
        <button onClick={props.deleteProduct}>Delete</button>
    )
}

export default DeleteProductButton;