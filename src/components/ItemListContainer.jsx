import { useState, useEffect } from "react"
import ItemList from "./ItemList.jsx"
import { getProducts, addProduct, modProductById, deleteProductById } from "../utils/fetchApi.js"

import "./itemlistcontainer.css"

const ItemListContainer = ({ saludo}) => {
  const [products, setProducts] = useState ([])

  const newProduct = {
    nombre: "Playera Calle N",
  descripcion: "Playera negra",
  imagen: "/imgproducts/playera-negra.png",
  precio: 250,
  stock: 5,
  categoria: "Vestuario Calle"
  }

  const mod = {
    nombre: "producto modificado",
    precio: 300
  }
  
  useEffect(()=>{
    getProducts()
    .then ( (data)=> setProducts(data) )
  }, [])

  const clickEvento = () => {
   /*
    addProduct(newProduct)
      .then((data) => setProducts(data))
    

      modProductById(2, mod)
      .then((data) => setProducts(data))
   */    
    deleteProductById(2)
    .then((data)=> setProducts(data))
  }


  
  //? Variable
  /*const promesa = new Promise ( (resolve, reject) => {
    if(condicion ===true){
    resolve("se resolvio")
     }else{
      reject("se rechazo")
    }
  })
*/
  
  //! Funcion, lo ideal es manejarlo con una Función
  /*const promesa =() => {
    return new Promise( (resolve, reject) => {
      if(condicion === true){
        resolve("se resolvio")
      }else{
        reject("se rechazo")
      }
    })
  }
  */
  
 
  /*promesa
    .then((respuesta)=> {
      console.log(respuesta)
    })
    .catch((error)=>{
      console.error(error)
    })
    .finally(()=> {
      console.log("termino la promesa")
    })
  */
    
  return (
    <div className="item-list-container">
        <h1>{ saludo }</h1>
        <button onClick={clickEvento}> Eliminar producto</button>
        <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer