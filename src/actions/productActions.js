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
}

export function editProduct(productObj) {
    return (dispatch) => {
        let configureObj = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(productObj)
        };
        fetch(`http://localhost:3001/products/${productObj.id}`, configureObj)
            .then(res => res.json())
            .then(product => dispatch({
                type: 'EDIT_PRODUCT',
                payload: product
            }))
    }
}

export function deleteProduct(productId) {
    return (dispatch) => {
        fetch(`http://localhost:3001/products/${productId}`, {method: 'DELETE'})
            .then(res => res.json())
            .then(product => dispatch({
                type: 'DELETE_PRODUCT',
                payload: product
            }))
    }
}

export function incrementProduct(id) {
    console.log(id)
    return (dispatch) => {
        let configuredObj = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({})
        }
        fetch(`http://localhost:3001/products/${id}/increment`, configuredObj)
            .then(res => res.json())
            .then(product => dispatch({
                type: 'INCREMENT_COUNT',
                payload: product
            }))
    }
}

export function decrementProduct(id) {
    return (dispatch) => {
        let configuredObj = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({})
        }
        fetch(`http://localhost:3001/products/${id}/decrement`, configuredObj)
            .then(res => res.json())
            .then(product => dispatch({
                type: 'DECREMENT_COUNT',
                payload: product
            }))
    }
}