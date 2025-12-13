

/**
 * 
 * @param {{
*       value:string,
*       onChanged:()=>string,
*       placeHolder:string
 * 
 * }}
 * @returns 
 */

export default function Input({value, onChanged, placeHolder}){

    return (
        <input type="text" 
            value={value} 
            className="form-control"
            onChange={(e)=> onChanged(e.target.value)}
            placeholder={placeHolder} />
    )
}