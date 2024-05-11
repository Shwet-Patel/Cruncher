import { useState } from "react";
import { FaFire } from "react-icons/fa6";
import { SidebarItems } from "./components/Data";
import Content from "./components/Content";

function App() {
  const [index, setIndex] = useState(1);

  return (
    // Background
    <div className=" bg-dimblue min-h-screen py-16">
      {/* card */}
      <div className=" bg-darkcream  grid grid-cols-[20%,80%]  min-h-[90vh]  mx-auto max-w-6xl  shadow-xl rounded-lg">
        
        {/* Sidebar */}

        {/* sidebar title */}
        <div>
          <div className="flex flex-row pl-8 mt-4 gap-x-3">
            <FaFire size={32} color="Orange" />
            <h1 className=" font-bold text-darkblue text-3xl">Cruncher</h1>
          </div>

          {/* Sidebar Navigation */}
          <div className="flex flex-col mt-16 ">
            {SidebarItems.map((item) => {
              const { id, title , icon } = item;

              return (
                <button
                  key={id}
                  onClick={() => {setIndex(id)}}
                  className={`flex flex-wrap gap-x-2 min-h-12 min-w-full pl-8
                  ${id === index ? 'bg-orange-200 text-orange-950 border-l-4 border-orange-600':
                  'opacity-80 hover:bg-orange-100 hover:text-orange-900 duration-300'}`}
                >
                  {icon}
                  <span className="text-left place-self-center tracking-wide text-lg font-sans font-semibold">{title}</span>
                </button>
              );
            })}
          </div>
        </div>


        {/* Main Content */}
        <div className=" bg-lightcream rounded-r-lg">
          {/* This component will display selected component */}
          <Content id={index} />
        </div>
      </div>
    </div>
  );
}

export default App;
