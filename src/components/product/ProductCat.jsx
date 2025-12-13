


/**
 * @typedef {Object} product
 * @property {string} name 
 * @property {number} price
 * @property {string} category
 * @property {boolean} stocked
 */

/**
 * @typedef {Object} Product
 * @property {product} product
 */

/**
 * 
 * @param {Product} object 
 * @returns 
 */
export function ProductCat({product}){


    return(
        <tr>
            <td colSpan='2'>< strong> {product.category} </strong></td>
        </tr>
    )
}