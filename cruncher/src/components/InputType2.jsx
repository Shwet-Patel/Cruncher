import { useState } from "react";

const InputType2 = ({label1 , label2 ,minval , maxval , defaultval , callback})=> {
    const [value, setValue] = useState(defaultval);

    const handleChange = (val)=>{
        setValue(val);
        callback(val);
    }
    
    return(
        <>
        <div className=" py-2">
        <h1 className="opacity-80 text-sm tracking-wide font-medium pb-1">{label1} {value} {label2}</h1>
        
            <input
                type="range"
                class="w-full h-2  appearance-none cursor-pointer border-transparent bg-darkcream opacity-90 accent-darkblue  rounded-full"
                onChange={(e) => {handleChange(e.target.value)}}
                
                min={minval}
                max={maxval}
                step="1"
                value={value}
            />
        </div>

        </>
    );
}

export default InputType2;