

/**
 * @typedef {Object} Product
 * @property {string} name 
 * @property {number} price
 * @property {boolean} stocked
 * @property {category} category 
 */
/**
 * @typedef {Object} PropsProductRow
 * @property {Product} product
 */

/**
 * 
 * @param {PropsProductRow} param
 * @returns 
 */

export  default function ProductRow({product}){

    const style = product.stocked ? {color:'green'} : {color:'red'} 

    return (
        <tr> 
            <td style={style}>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    )
}