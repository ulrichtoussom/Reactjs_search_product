
import { useState } from "react"
import Input from "./components/form/Input"



export default function Test(){

    const [ message , OnMessage] = useState('')


    return(
        <div>
            <Input value={message} onChanged={OnMessage} placeHolder="entrer ..."  />
        </div>
    )
}