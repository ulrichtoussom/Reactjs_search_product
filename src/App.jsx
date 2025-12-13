 import React , { useState } from 'react'

import Checkbox from './components/form/Checkbox'
import Input from './components/form/Input'

import ProductRow from './components/product/ProdutRow'

import { ProductCat } from './components/product/productCat'

import './App.css'

function App() {



/**
 * @type {boolean}
 */
const [isStocked, SetIsStoked] = useState(false)

const [phrase , setPhrase] = useState('')

  

  return (
      <div className=''>
        
        <Serchbar stocked={isStocked} onStocked={SetIsStoked} message={phrase} setPhrase={setPhrase}  />
        <TableRow isStocked={isStocked} searchMessage = {phrase} />
 
      </div>
  )
}



/**
 * @typedef {Object} PropSearch
 * @property {boolean} stocked
 * @property {()=>boolean} onStocked
 * @property {string} message 
 * @property {()=> string} OnMessage
 */

/**
 * 
 * @param {PropSearch} props
 * @returns 
 */
const Serchbar = ({stocked , onStocked, message, setPhrase})=>{

  return (
    <div className="container my-3">
       <Input placeHolder='Entrer votre recherche ...' value={message} onChanged={setPhrase} />
       <Checkbox id='search' check={stocked} onChange={onStocked} label="N'afficher que les  produits en stock " />
    </div>
  )
}



/**
 * @typedef {Object}PropsTableRow
 * @property {boolean} isStocked
 * @property {string} searchMessage
 */

/**
 * 
 * @param {PropsTableRow} param0 
 * @returns 
 */

const TableRow = function({isStocked,searchMessage}){


  const [PRODUCTS, setPRODUCT] = useState([  
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},  
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},  
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},  
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},  
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},  
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}  
  ])

  
  
  const filterProduct = PRODUCTS.filter( (product) => {

        const matchSearch = product.name.toLowerCase().startsWith(searchMessage.toLowerCase())
        const matchStock = isStocked ? product.stocked : true 

        return matchSearch && matchStock
  })

  console.log(filterProduct)


  let fruits = []
  let vegetables = []
  
  vegetables =filterProduct.filter(product =>( product.category==='Vegetables'))
  fruits = filterProduct.filter(product => (product.category==='Fruits'))
  
  
  const jsxFruit = fruits.map( fruit => {
    return(
      <React.Fragment key={fruit.name}>
          <ProductCat product={fruit}/> 
          <ProductRow product={fruit} />
      </React.Fragment>
    )
  })

  const jsxvegetables = vegetables.map( vegetable => {
    return(
      <React.Fragment key={vegetable.name}>
          <ProductCat product={vegetable}/>
          <ProductRow product={vegetable} />
      </React.Fragment>
    )
  })

  

  return(
    <div className="container">
      Bonjour le Monde 
      <table className='table table-striped'>
         
        <tbody>
          {jsxFruit}
          {jsxvegetables}      
        </tbody>
      </table>
      
    </div>
  )
}

export default App




