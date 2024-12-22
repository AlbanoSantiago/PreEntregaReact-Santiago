const getProducts = () => {
    return fetch ("https://api-products.glitch.me/api/productos")
    .then( (response) => response.json() )
    .catch( (error)=> console.log(error))
    
 }  

const addProduct =(newProduct ) => {
    return fetch("https://api-products.glitch.me/api/productos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct)
    })
        .then((response) => response.json())
        .catch((error) => console.log(error))
}

const modProductById = (idProduct, mod) => {
 return fetch( `https://api-products.glitch.me/api/productos/${idProduct}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(mod)
 })
 .then((response) => response.json())
 .catch((error) => console.log(error))
}

const deleteProductById = (idproduct) => {
    return fetch(`https://api-products.glitch.me/api/productos/${idProduct}`, {
        method: "DELETE"
    })
    .then((response) => response.json())
    .catch((error) => console.log(error))
   
}

 export { getProducts, addProduct, modProductById, deleteProductById}
