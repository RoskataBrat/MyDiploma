import { useState } from "react"
import { Button } from "react-bootstrap"
import { FaMinus, FaPlus } from "react-icons/fa"

const QuantityBox =  () =>{

    const[inputVal, setInputVal] = useState(1);

    const minus=()=>{
        if(inputVal!==1 && inputVal>0){
            setInputVal(inputVal-1)
        }
    }

    const plus=()=>{
        setInputVal(inputVal+1);
    }

    return(
    <div className='quantityDrop d-flex align-items-center'>
        <Button onClick={minus}><FaMinus></FaMinus></Button>
        <input type='text' value={inputVal}></input>
        <Button onClick={plus}><FaPlus></FaPlus></Button>
    </div>
    )
}

export default QuantityBox;