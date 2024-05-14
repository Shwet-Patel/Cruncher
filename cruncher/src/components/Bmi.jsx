//icons
import { TbCalculatorFilled } from "react-icons/tb";


//Components
import InputType1 from "./InputType1";
import InputType2 from "./InputType2";
import { BmiTable } from "./Data";

//react utilities
import { useState } from "react";

const Bmi = () =>{
    //hooks and it's handlers
    const [system , setSystem] = useState(1);
    const [gender , setGender] = useState(2);
    const [age , setAge] = useState(27);
    const [height , setHeight] = useState(171);
    const [weight , setWeight] = useState(75);
    const [bmi , setBmi] = useState(0);
    const [review , setReview] = useState('No idea');

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

    function handleWeight(val){
        setWeight(val);
    };

    function handleBmi(){
        var val,unitlbs,unitkgs;

        unitlbs = (weight/(height*height))*703;
        unitkgs = (weight/(height*height))*10000;

        val = (system === 1) ? (unitlbs) : (unitkgs);
        setBmi(val);

        if(val <= 18.5)
            setReview("Underweight");
        else if(val <= 24.9)
            setReview("Normal");
        else if(val <= 29.9)
            setReview("Overweight");
        else
            setReview("Obese");
    };


    return(
        <>
            <div>
                {/* title section */}
                <div className="flex flex-wrap border-b-2 border-darkcream py-4 pl-8 gap-x-4 opacity-85">
                    <TbCalculatorFilled size={27} className="text-darkblue"/>
                    <h1 className=" font-sans text-lg text-darkblue font-bold">BMI Calculator</h1>
                </div>

                <div className="  grid lg:grid-cols-[60%,40%]">
                    {/* inputs */}
                    <div className=" mt-1 px-8 font-sans text-darkblue opacity-90 mb-4">
                        <h1 className=" text-2xl tracking-wider font-bold ">Calculate Your BMI</h1>
                        <h3 className=" opacity-80 text-sm tracking-wide font-medium">Know your BMI (Body mass index) now using our BMI calculator.</h3>

                        <div className="mt-4">
                        <InputType1  label={"System"} options={[{id: 1 , text:"Imperial\n(lbs/in)"},{id:2 , text:"Metric\n(Kg/cm)"}]} defaultval={system} callback={handleSystem}/>
                            <InputType1  label={"I'm a"} options={[{id:1 , text:"Male"} , {id:2 , text:"Female"}]} defaultval={gender} callback={handleGender}/>
                            <InputType2 label1={"I am"} label2={"years young"} minval={1} maxval={100} defaultval={age} callback={handleAge}/>
                            <InputType2 label1={"My Height:"} label2={heightunit} minval={1} maxval={250} defaultval={height} callback={handleHeight}/>
                            <InputType2 label1={"Current Weight:"} label2={weightunit} minval={1} maxval={180} defaultval={weight} callback={handleWeight}/>
                        </div>

                        {/* submit button */}
                        <button onClick={handleBmi} className=" mt-4 w-full py-2 bg-lightpink text-lg tracking-wider font-bold rounded-lg hover:bg-pink-500 duration-300">Calculate Bmi</button> 
                    </div>

                    {/* Display output */}
                    <div className= "flex flex-col place-items-center bg-darkcream px-8 py-4 font-sans text-darkblue opacity-90">
                        <div className="flex flex-col place-items-center">
                            <h1 className="text-2xl tracking-wider font-bold">Your BMI</h1>
                            <div className="inline-flex flex-col mt-6 bg-gradient-to-b from-lightcream to-lightpink  rounded-full px-4 py-4">
                                <div className=" bg-lightcream flex flex-col px-3 py-8 place-items-center rounded-full">
                                    <h1 className="text-2xl tracking-wider font-bold duration-300 min-w-24 text-center">{bmi.toFixed(1)}</h1>
                                    <h3 className="opacity-80 text-sm tracking-wide font-medium">{review}</h3>
                                </div>
                            </div>
                        </div>

                        {/* additional description */}
                        <h1 className=" mt-8 text-2xl tracking-wider font-bold">General BMI Range</h1>
                        <div className="mt-4 bg-lightcream px-4 py-2 text-center rounded-md">
                            <table>
                                <thead>
                                    <tr className="border-b-2 border-lightpink">
                                        <th className="px-4 py-2">Bmi Range</th>
                                        <th className="px-4 py-2">Category</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {BmiTable.map((entry) => {
                                        return(
                                        <tr key={entry.id} className=" opacity-80 text-sm tracking-wide font-medium">
                                            <td>{entry.range}</td>
                                            <td>{entry.category}</td>
                                        </tr>
                                    );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
}

export default Bmi;