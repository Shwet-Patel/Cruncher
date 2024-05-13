//icons
import { FaFeather } from "react-icons/fa";

//components
import InputType1 from "./InputType1";
import InputType2 from "./InputType2";

//react utilities
import { useState } from "react";

const Idealweight = () =>{
    //hooks and handlers
    const [system , setSystem] = useState(1);
    const [gender , setGender] = useState(2);
    const [age , setAge] = useState(27);
    const [height , setHeight] = useState(171);
    
    
    //local constants
    const heightunit = (system === 1 ? "in" : "cm");
    const weightunit = (system === 1 ? "lbs" : "kgs");

    function handleSystem(val){
        setSystem(val);
    };

    function handleGender(val){
        setGender(val);
    };

    function handleAge(val){
        setAge(val);
    };

    function handleHeight(val){
        setHeight(val);
    };

    return(
        <div>
            {/* title section */}
            <div className="flex flex-wrap border-b-2 border-darkcream py-4 pl-8 gap-x-4 opacity-85">
                <FaFeather size={27} className="text-darkblue"/>
                <h1 className=" font-sans text-lg text-darkblue font-bold">Ideal Weight Calculator</h1>
            </div>

            <div className="  grid grid-cols-[60%,40%]">
                {/* inputs */}
                <div className=" mt-1 px-8 font-sans text-darkblue opacity-90 mb-4">
                    <h1 className=" text-2xl tracking-wider font-bold ">Calculate Your Ideal Weight</h1>
                    <h3 className=" opacity-80 text-sm tracking-wide font-medium">Know how much your weight should be, using our ideal weight calculator.</h3>

                    <div className="mt-4">
                        <InputType1  label={"System"} options={[{id: 1 , text:"Imperial\n(lbs/in)"},{id:2 , text:"Metric\n(Kg/cm)"}]} defaultval={system} callback={handleSystem}/>
                        <InputType1  label={"I'm a"} options={[{id:1 , text:"Male"} , {id:2 , text:"Female"}]} defaultval={gender} callback={handleGender}/>
                        <InputType2 label1={"I am"} label2={"years young"} minval={1} maxval={100} defaultval={age} callback={handleAge}/>
                        <InputType2 label1={"My Heighth:"} label2={heightunit} minval={1} maxval={250} defaultval={height} callback={handleHeight}/>
                    </div>

                    {/* submit button */}
                    <button  className=" mt-4 w-full py-2 bg-lightpink text-lg tracking-wider font-bold rounded-lg hover:bg-pink-500 duration-300">Calculate ideal weight</button> 
                </div>

                {/* Display output */}
                <div className= " bg-darkcream px-8 py-4 font-sans text-darkblue opacity-90">
                    hello from col-2
                </div>
            </div>
        </div>
    );
}

export default Idealweight;