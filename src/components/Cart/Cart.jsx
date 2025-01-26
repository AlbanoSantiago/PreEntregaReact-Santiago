import { useContext } from "react"
import { CartContext } from "../../context/CartContex.jsx"

const Cart = () => {
    const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext)

  return (
    <div>
      <h1>Productos en el Carrito</h1>
        {
          cart.length > 0 ? (
            cart.map((productCart)=> (
            <div key={productCart.id} style={ { display: "flex", justifyContent: "space-around", margin: "20px 0"}}>
               <img
            src={productCart.image[0] || "/img/placeholder.png"} // Si no hay imágenes, usa placeholder.png
            alt={productCart.name}
            style={{ width: "100px", height: "auto" }}
            onError={(e) => (e.target.src = "/img/placeholder.png")} // Imagen de respaldo
          />
                <p>{productCart.name}</p>
                <p> Precio de c/u ${productCart.price} MXN</p>
                <p>cantidad: {productCart.quantity}</p>
                <p>Precio Parcial: ${productCart.price * productCart.quantity}</p>
                <button onClick={ ()=> deleteProductById(productCart.id) }>Eliminar</button>
            </div>
            ))
          ): (
            <p>No hay Productos en el Carrito.</p>
          )
        }
      <div>
            <p>Precio total:${totalPrice()} MXN </p>
            <button onClick={deleteCart} >Vaciar Carrito</button>
      </div>
    </div>
  )
}

export default Cart