export function addToCart(product_id, currentUserId) {
    console.log(product_id, currentUserId)
    return (dispatch) => {
        let configureObj = {
            method: 'Post',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                line_item: {
                    product_id
                },
                customer_id: {
                    currentUserId
                }
            })
        };
        fetch('http://localhost:3001/line_items', configureObj)
            .then(res => res.json())
            .then(product => dispatch({
                type: 'ADD_TO_CART',
                payload: product.line_item
            }))
        // TODO
        // make sure this works
    }
}