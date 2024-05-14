//assets
import { IoPieChartSharp } from "react-icons/io5";
import { FaDumbbell } from 'react-icons/fa';
import { GiFruitBowl , GiFrenchFries} from "react-icons/gi";
import chart from "../assets/chart.png";

//Components
import InputType1 from "./InputType1";
import InputType2 from "./InputType2";
import Displaybox from "./Displaybox";

//react utilities
import {useState} from "react";

const Macros = () =>{

    // hooks and it's handlers
    const [system , setSystem] = useState(1);
    const [gender , setGender] = useState(2);
    const [goal , setGoal] = useState(3);
    const [age , setAge] = useState(27);
    const [height , setHeight] = useState(171);
    const [weight , setWeight] = useState(75);
    const [Activity , setActivity] = useState(3);
    const [macro , setMacro] = useState(1927);

    //local constants
    const heightunit = (system === 1 ? "in" : "cm");
    const weightunit = (system === 1 ? "lbs" : "kgs");
    
    function handleSystem(val){
        setSystem(val);
    };
    
    function handleGender(val){
        setGender(val);
    };

    function handleGoal(val){
        setGoal(val);
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

    function handleActivity(val){
        setActivity(val);
    };

    function handleMacro(){
        var bmival;
        var val;
        
        if(system === 2)
            bmival = (gender === 1) ? (10*weight + 6.25*height - 5*age + 5) : ( 10*weight + 6.25*height - 5*age - 161) ;
        else
            bmival = (gender === 1) ? (4.536*weight + 15.88*height - 5*age + 5) : ( 4.536*weight + 15.88*height - 5*age - 161) ;

        
        if(Activity === 1)
            bmival = 1.2 * bmival;
        else if(Activity === 2)
            bmival = 1.55 * bmival;
        else
            bmival = 1.7 * bmival;

        if(goal === 1)
            val = bmival - 400;
        else if(goal === 2)
            val = bmival;
        else
            val = bmival + 400;

        val = Math.floor(val);
        setMacro(val);
    }


    return(
        <div>
            {/* title section */}
            <div className="flex flex-wrap border-b-2 border-darkcream py-4 pl-8 gap-x-4 opacity-85">
                <IoPieChartSharp size={27} className="text-darkblue"/>
                <h1 className=" font-sans text-lg text-darkblue font-bold">Macros Calculator</h1>
            </div>

            
            <div className="  grid md:grid-cols-[60%,40%]">
                {/* inputs */}
                <div className=" mt-1 px-8 font-sans text-darkblue opacity-90 mb-4">
                    <h1 className=" text-2xl tracking-wider font-bold ">Calculate Your Macros</h1>
                    <h3 className=" opacity-80 text-sm tracking-wide font-medium">Craft your ideal micronutrient ratio now using our macros calculator.</h3>

                    <div className="mt-4">
                        <InputType1  label={"System"} options={[{id: 1 , text:"Imperial\n(lbs/in)"},{id:2 , text:"Metric\n(Kg/cm)"}]} defaultval={system} callback={handleSystem}/>
                        <InputType1  label={"I'm a"} options={[{id:1 , text:"Male"} , {id:2 , text:"Female"}]} defaultval={gender} callback={handleGender}/>
                        <InputType1  label={"What is your main weight goal?"} options={[{id:1 , text:'Lose'} , {id:2  ,text:'Maintain'} , {id:3 , text:'Gain'}]} defaultval={goal}  callback={handleGoal}/>

                        <InputType2 label1={"I am"} label2={"years young"} minval={1} maxval={100} defaultval={age} callback={handleAge}/>
                        <InputType2 label1={"My Height:"} label2={heightunit} minval={1} maxval={250} defaultval={height} callback={handleHeight}/>
                        <InputType2 label1={"Current Weight:"} label2={weightunit} minval={1} maxval={180} defaultval={weight} callback={handleWeight}/>

                        <InputType1 label={"Activity level"} options={[{ id: 1, text: "Sedentary\n(no exercise)" },{ id: 2, text: "Moderate\n(3x-4x per week)" },{ id: 3, text: "Active\n(5x+ per week)" }]} defaultval={Activity} callback={handleActivity}/>
                    </div>

                    {/* submit button */}
                    <button onClick={handleMacro} className=" mt-4 w-full py-2 bg-lightpink text-lg tracking-wider font-bold rounded-lg hover:bg-pink-500 duration-300">Calculate Macros</button> 
                </div>

                {/* Display output */}
                <div className= " bg-darkcream px-8 py-4 font-sans text-darkblue opacity-90">
                    <div className="flex flex-col place-items-center">
                        <h1 className="text-2xl tracking-wider font-bold">Your Daily Macro Goals</h1>
                        <div className="inline-flex flex-col mt-8 bg-gradient-to-b from-lightcream to-lightpink  rounded-full px-4 py-4">
                            <div className=" bg-lightcream flex flex-col px-6 py-5 place-items-center rounded-full">
                                <h3 className="opacity-80 text-sm tracking-wide font-medium">Total</h3>
                                <h1 className="text-2xl tracking-wider font-bold duration-300">{macro}</h1>
                                <h3 className="opacity-80 text-sm tracking-wide font-medium">kcal</h3>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className="pt-8 opacity-80 text-sm tracking-wide font-medium">Daily Macros</h1>
                        <div className=" grid grid-cols-3 gap-x-4">
                            <Displaybox label={"Protein"} val={`${Math.floor(macro*0.35*0.25)}g`} icon={<FaDumbbell size={25} />}/>
                            <Displaybox label={"Carbs"} val={`${Math.floor(macro*0.40*0.25)}g`} icon={<GiFruitBowl  size={25}  />}/>
                            <Displaybox label={"Fat"} val={`${Math.floor(macro*0.25*0.11)}g`} icon={<GiFrenchFries  size={25}  />}/>
                        </div>
                    </div>

                    {/* additional description */}
                    <div className="mt-8 text-center md:text-left">
                        <h1 className="text-2xl tracking-wider font-bold">Our formula for you</h1>
                        <div className="grid md:grid-cols-[55%,45%]">
                            <div>
                                <p className=" pt-4 opacity-80 text-sm tracking-normal  font-medium">If you're counting macros for bodybuilding and 
                                    muscle gain, you'll want to add overall calories 
                                    to put on weight. Try this range of macro ratio:
                                    40% Carbs, 35% protein, 25% fat.
                                </p>
                                <a className=" flex mt-4 place-content-center text-lg tracking-wide text-lightpink font-bold w-full py-1 border-2 border-lightpink rounded-md" href="https://www.forbes.com/health/nutrition/what-are-macros/">Find out more</a>
                            </div>
                            <div>
                                <img className=" mt-6 " src={chart}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Macros;