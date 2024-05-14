import React from "react";

const Displaybox = ({label,val,icon}) => {
    return (
        <div className=" mt-2 flex flex-col place-items-center">
            <div className=" z-10">{icon}</div>
            <div className=" -mt-3 px-4 flex flex-col place-items-center bg-lightcream py-5 rounded-lg">
                <h1 className="text-2xl tracking-wider font-bold duration-300">{val}</h1>
                <h3 className="opacity-80 text-sm tracking-wide font-medium">{label}</h3>
            </div>
        </div>
    );
}

export default Displaybox;