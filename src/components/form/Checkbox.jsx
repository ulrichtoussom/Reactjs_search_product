
/**
 * 
 * @param {{ 
*      check:boolean,
*      onChange:()=>void,
*      label:string,
*      id:string
* }} param0 
* @returns 
*/

export default function Checkbox({check, onChange, label, id}) {


        
    

   return(
       <div className="form-check my-2">
           <input type="checkbox" className="form-check-input" checked={check} onChange={(e)=>onChange(e.target.checked)} id={id} />
           <label id={id} className="form-check-label" htmlFor={id}>{label}</label>
       </div>
   )
}