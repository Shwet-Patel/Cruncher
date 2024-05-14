//icons
import { PiShirtFoldedFill } from "react-icons/pi";
import { CiPizza } from "react-icons/ci";
import { GiBiceps } from "react-icons/gi";

//Components
import InputType1 from "./InputType1";
import InputType2 from "./InputType2";
import Displaybox from "./Displaybox";

//react utilities
import { useState } from "react";

const Bodyfat = () =>{
    //hooks and it's handlers
    const [system , setSystem] = useState(1);
    const [gender , setGender] = useState(2);
    const [age , setAge] = useState(27);
    const [height , setHeight] = useState(171);
    const [weight , setWeight] = useState(75);
    const [bfp , setBfp] = useState(0);
    const [review , setReview] = useState("not so much");

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
    
    
    function handleBodyfat(){
        let val, bmival,unitlbs,unitkgs;

        unitlbs = (weight/(height*height))*703;
        unitkgs = (weight/(height*height))*10000;

        bmival = (system === 1) ? (unitlbs) : (unitkgs);
        
        if(age >= 18)
        {
            //adult
            val = (gender === 1) ? ((1.20 * bmival) +( 0.23 * age) - 16.2) : ((1.20 * bmival) +( 0.23 * age) - 5.4);
        }
        else
        {
            //not-adult
            val = (gender === 1) ? ((1.51 * bmival) -( 0.70 * age) - 2.2) : (( 1.51 * bmival) - (0.70 * age) + 1.4);
        }

        setBfp(val);

        //review text
        if((gender === 1 && val <= 5) || (gender === 2 && val <= 13))
            setReview("Essential fat");
        else if((gender === 1 && val <= 13) || (gender === 2 && val <= 20))
            setReview("Athletes")
        else if((gender === 1 && val <= 17) || (gender === 2 && val <= 24))
            setReview("Fitness enthusiast")
        else if((gender === 1 && val <= 24) || (gender === 2 && val <= 31))
            setReview("Healthy Average")
        else
            setReview("Dangerously High")

    };

    return(
        <>
           <div>
                {/* title section */}
                <div className="flex flex-wrap border-b-2 border-darkcream py-4 pl-8 gap-x-4 opacity-85">
                    <PiShirtFoldedFill size={27} className="text-darkblue"/>
                    <h1 className=" font-sans text-lg text-darkblue font-bold">Bodyfat Calculator</h1>
                </div>

                <div className="  grid grid-cols-[60%,40%]">
                    {/* inputs */}
                    <div className=" mt-1 px-8 font-sans text-darkblue opacity-90 mb-4">
                        <h1 className=" text-2xl tracking-wider font-bold ">Calculate Your Bodyfat</h1>
                        <h3 className=" opacity-80 text-sm tracking-wide font-medium">Keep track of your bodyfat now using our Bodyfat calculator.</h3>

                        <div className="mt-4">
                        <InputType1  label={"System"} options={[{id: 1 , text:"Imperial\n(lbs/in)"},{id:2 , text:"Metric\n(Kg/cm)"}]} defaultval={system} callback={handleSystem}/>
                            <InputType1  label={"I'm a"} options={[{id:1 , text:"Male"} , {id:2 , text:"Female"}]} defaultval={gender} callback={handleGender}/>
                            <InputType2 label1={"I am"} label2={"years young"} minval={1} maxval={100} defaultval={age} callback={handleAge}/>
                            <InputType2 label1={"My Height:"} label2={heightunit} minval={1} maxval={250} defaultval={height} callback={handleHeight}/>
                            <InputType2 label1={"Current Weight:"} label2={weightunit} minval={1} maxval={180} defaultval={weight} callback={handleWeight}/>
                            
                        </div>

                        {/* submit button */}
                        <button onClick={handleBodyfat} className=" mt-8 w-full py-2 bg-lightpink text-lg tracking-wider font-bold rounded-lg hover:bg-pink-500 duration-300">Calculate body fat</button> 
                    </div>

                    {/* Display output */}
                    <div className= " bg-darkcream px-8 py-4 font-sans text-darkblue opacity-90">
                        <div className="flex flex-col place-items-center">
                            <h1 className="text-2xl tracking-wide font-bold">Your Bodyfat percentage</h1>
                            <div className="inline-flex flex-col mt-6 bg-gradient-to-b from-lightcream to-lightpink  rounded-full px-4 py-4">
                                <div className=" bg-lightcream flex flex-col px-4 py-10 place-items-center rounded-full">
                                    <h1 className="text-2xl tracking-wider font-bold duration-300 min-w-24 text-center">{bfp.toFixed(1)}%</h1>
                                    <h3 className="opacity-80 text-sm tracking-wide font-medium">{review}</h3>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h1 className="pt-4 opacity-80 text-sm tracking-wide font-medium">Mass distribution</h1>
                            <div className=" grid grid-cols-2">
                                <Displaybox label={"Fat mass"} val={`${(bfp * 0.01 * weight).toFixed(1)} ${weightunit}`} icon={<CiPizza size={30}/>} />
                                <Displaybox label={"Lean mass"} val={`${((100 - bfp)*0.01*weight).toFixed(1)} ${weightunit}`} icon={<GiBiceps size={30}/>} />
                            </div>
                        </div>


                        {/* additional description */}
                        <h1 className=" mt-8 text-2xl tracking-wider font-bold text-center">Our formula for you</h1>
                        <div>
                            <p className="text-center pt-4 opacity-80 text-sm tracking-normal font-medium">
                                We are using BMI value for calculating Body fat percentage. 
                                You can find out more about how to reduce body fat and other 
                                essential information here.
                            </p>
                            <a className=" flex mt-4 place-content-center text-lg tracking-wide text-lightpink font-bold w-full py-1 border-2 border-lightpink rounded-md" href="https://www.forbes.com/health/wellness/body-fat-percentage/">Body fat charts</a>
                        </div>
                        
                    </div>
                </div>
            </div>    
        </>
    );
}

export default Bodyfat;