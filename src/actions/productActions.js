export function fetchProducts() {
    return (dispatch) => {
        fetch('http://localhost:3001/products')
            .then(res => res.json())
            .then(products => dispatch({
                type: 'FETCH_PRODUCTS',
                payload: products
            }))
    }
}

export function createProduct(productObj) {
    console.log(productObj)
    return (dispatch) => {
        let configurationObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(productObj)
        };
        fetch('http://localhost:3001/products/', configurationObject)
            .then(res => res.json())
            .then(product => dispatch({
                type: 'ADD_PRODUCT',
                payload: product
            }))
    }
    // TODO
}

export function editProduct(productObj) {
    console.log(productObj)
    // TODO
}

export function deleteProduct(productId) {
    console.log(productId)
    // TODO
}