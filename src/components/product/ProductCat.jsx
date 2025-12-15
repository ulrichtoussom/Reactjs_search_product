


/**
 * @typedef {Object} Product
 * @property {string} name 
 * @property {number} price
 * @property {string} category
 * @property {boolean} stocked
 */

/**
 * @typedef {Object} PropsProductCat
 * @property {Product} product
 */

/**
 * 
 * @param {PropsProductCat}  
 * @returns 
 */
export function ProductCat({product}){


    return(
        <tr>
            <td colSpan='2'>< strong> {product.category} </strong></td>
        </tr>
    )
}


