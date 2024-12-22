const Item = ({ product }) => {
  return (
    <div className="item">
        <img src= {product.imagen} width={100} alt="" />
        <p>{product.nombre}</p>
          <p>{product.descripcion}</p>
          <p>precio: {product.precio}</p>

  </div>
  )
}

export default Item