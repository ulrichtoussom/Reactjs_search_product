 import React , { useState } from 'react'

import Checkbox from './components/form/Checkbox'
import Input from './components/form/Input'
import InputRange from './components/form/InputRange'

import ProductRow from './components/product/ProdutRow'

import { ProductCat } from './components/product/productCat'

import './App.css'




export default App



function App(){

  const [showOnlyStocked,  SetShowOnlyStocked] = useState(false)
  const [search , setSearch]= useState('')

  const [searchByPrice, setSearchByPrice] = useState(0)

  const PRODUCTS = [  
    {category: "Fruits", price: "$10", stocked: true, name: "Apple"},  
    {category: "Fruits", price: "$15", stocked: true, name: "Dragonfruit"},  
    {category: "Fruits", price: "$20", stocked: false, name: "Passionfruit"},  
    {category: "Vegetables", price: "$6", stocked: true, name: "Spinach"},  
    {category: "Vegetables", price: "$7", stocked: false, name: "Pumpkin"},  
    {category: "Vegetables", price: "$4", stocked: true, name: "Peas"}  
]

  console.log(searchByPrice)


  const filterProduct = PRODUCTS.filter(product => {

      const priceValue = parseInt(product.price.slice(1))

      if(showOnlyStocked && !product.stocked){
          return false 
      }
      if(search && !product.name.toLowerCase().includes(search.toLowerCase()) ){{
        return false 
      }}

      if(priceValue < searchByPrice){
        return false 
      }

      return true 
  })



  return (
    <div className='container'>

      <SearchBar search={search} onSearch={setSearch} showOnlyStocked={showOnlyStocked} changeShowOnlyStocked={SetShowOnlyStocked} searchByPrice = {searchByPrice} onChangeSearchPrice ={setSearchByPrice}  />
      <TableRow productList={filterProduct}/>

    </div>
  )


}



/**
 * 
 * @typedef {Object} PropsSearchBar
 * @property {string} search
 * @property {() => string} onSearch
 * @property {boolean} showOnlyStocked
 * @property {() => boolean} changeShowOnlyStocked
 * @property {number} searchByPrice
 * @property {()=> number } onChangeSearchPrice
 *  
 * 
 * 
 */

/**
 * 
 * @param {PropsSearchBar} param 
 * @returns 
 */

  const SearchBar = function({search, onSearch, showOnlyStocked, changeShowOnlyStocked, searchByPrice, onChangeSearchPrice}){


  return (
    <>
      <Input value={search} onChangeValue={onSearch} />
      <Checkbox ischecked={showOnlyStocked}  onChangeChecked={changeShowOnlyStocked} />
      <InputRange searchByPrice={searchByPrice} onChangeSearchPrice={onChangeSearchPrice}/>

    </>
  )
}

/**
 * @typedef {Object} Product
 * @property {string}   category
 * @property {number}   price
 * @property {boolean}  stocked
 * @property {string}   name
 */

/**
 * @typedef {Object} PropsTableRow 
 * @property {Array<Product>} productList
 */

/**
 * 
 * @param {PropsTableRow} param 
 */


const TableRow =  function({productList}){

    const tablejsx = []
    let categ = ''

    for (const product of productList){

        
        if (categ !== product.category){
          tablejsx.push(<ProductCat key={product.category} product={product} />)
          categ = product.category
        }
        tablejsx.push(<ProductRow key={product.name} product={product} />)
    }

    return(
      <table className='table table-striped mt-5'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {tablejsx}
        </tbody>
      </table>
    )

}



