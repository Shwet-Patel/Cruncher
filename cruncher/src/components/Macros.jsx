import { IoPieChartSharp } from "react-icons/io5";

const Macros = () =>{
    return(
        <div>
            {/* title section */}
            <div className="flex flex-wrap border-b-2 border-darkcream py-4 pl-8 gap-x-4 opacity-85">
                <IoPieChartSharp size={27} className="text-darkblue"/>
                <h1 className=" font-sans text-lg text-darkblue font-bold">Macros Calculator</h1>
            </div>

            <div className=" mt-1 grid grid-cols-[60%,40%]">
                <div className="pl-8 font-sans text-darkblue opacity-90">
                    <h1 className=" text-2xl tracking-wider font-bold ">Calculate Your Macros</h1>
                    <h3 className=" opacity-80 text-sm tracking-wide font-medium">Craft your ideal micronutrient ratio now using our macros calculator.</h3>
                </div>

                <div className="">
                    col-2
                </div>
            </div>
        </div>
    );
}

export default Macros;