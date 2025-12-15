

/**
 * 
 * @param {{
*       value:string,
*       onChangeValue:()=>string,
*       placeHolder:string
 * 
 * }}
 * @returns 
 */

export default function Input({value,placeHolder,onChangeValue}){

    return (
        <input type="text" 
            value={value} 
            className="form-control mt-3"
            onChange={(e)=> onChangeValue(e.target.value)}
            placeholder={placeHolder} />
    )
}