



/**
 * @typedef {Object} PropsInputRange
 * @property {number} searchByPrice 
 * @property { ()=> number} onChangeSearchPrice 
 * 
 */

/**
 * 
 * @param {PropsInputRange} param
 * @returns 
 */


export default function InputRange({searchByPrice, onChangeSearchPrice}){

    return(
        <>
             <input 
                type="range" 
                className="form-range" 
                id = "searhRange"
                value={searchByPrice} 
                min="0" max="25" step="2" id="range2" 
                onChange={(e)=>onChangeSearchPrice(e.target.value)}
            />
            <output htmlFor="searchRange" id="SearchRangeValue"> <strong>price</strong> : {searchByPrice} $ </output>
        </>
       


    )

}