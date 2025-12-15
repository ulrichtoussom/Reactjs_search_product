

/**
 * @typedef {Object} PropsCheckbox
 * @property {boolean} isChecked
 * @property {()=> boolean} onChangeChecked
 */ 

/**
 * 
 * @param {PropsCheckbox} param0
 * @returns 
 */
export default function Checkbox({isChecked, onChangeChecked}) {


        
    

   return(
        <div className="form-check my-2">
            <input 
                className="form-check-input" 
                type="checkbox" 
                checked = {isChecked}
                onChange = {((e)=>onChangeChecked(e.target.checked))}
                id="checkDefault" />
            <label className="form-check-label" htmlFor="checkDefault">
                Show Only stocked 
            </label>
        </div>
   )
}