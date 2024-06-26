//icons
import { FaFire } from "react-icons/fa6";
import { CiMenuFries } from "react-icons/ci";

//components
import { SidebarItems, Quotes } from "./components/Data";
import Content from "./components/Content";

//react utilities
import { useState } from "react";


function App() {
  const [index, setIndex] = useState(1);
  const [menu , setMenu] = useState(false);

  return (
    // Background
    <div className="bg-dimblue min-h-screen py-16 px-4">
      {/* card */}
      <div className="min-h-full bg-darkcream grid lg:grid-cols-[20%,80%] mx-auto max-w-6xl shadow-xl rounded-lg">
        
        {/* Sidebar */}
        <div className="flex lg:flex-col flex-row justify-between">
          {/* sidebar title */}
          <div className="flex flex-row pl-8 mt-4 gap-x-3">
            <FaFire size={32} color="Pink" />
            <h1 className="font-bold text-darkblue text-3xl">Cruncher</h1>
          </div>

          {/* Sidebar Navigation */}
          <div className=" hidden lg:flex flex-col mt-16">
            {SidebarItems.map((item) => {
              const { id, title, icon } = item;

              return (
                <button
                  key={id}
                  onClick={() => setIndex(id)}
                  className={`flex flex-wrap gap-x-2 min-h-12 min-w-full pl-8 text-darkblue
                  ${id === index ? 'bg-lightpink opacity-85 border-l-4 border-pink-600':
                  'opacity-80 hover:bg-pink-300 duration-300'}`}
                >
                  {icon}
                  <span className="text-left place-self-center tracking-wide text-lg font-sans font-semibold">{title}</span>
                </button>
              );
            })}
          </div>

          {/* Navigation dropdown button for mobile */}
          <div className="lg:hidden relative block text-left my-4 mr-4">
            <div>
              <button type="button" onClick={()=>{setMenu(!menu)}} className= {`inline-flex w-full justify-center gap-x-1.5 rounded-md ${menu ? (" bg-dimblue") : (" bg-lightcream")} duration-200 px-2 py-1 text-sm font-semibold text-darkblue shadow-sm `} id="menu-button">
                <CiMenuFries size={30} />
              </button>
            </div>
            
          </div>

          
          {/* Quote */}
          <div className="hidden lg:block text-darkblue opacity-85 bg-slate-300 italic font-normal font-sans rounded-b-md p-4 mt-auto">
            <p>{Quotes[Math.floor(Math.random()*25)].quote}</p>
          </div>
        </div>

        {
          menu && 
          <div className=" my-2 w-full bg-darkcream opacity-80 transition-opacity duration-500">
            {SidebarItems.map((item) => {
              const { id, title, icon } = item;

              return (
                <button
                  key={id}
                  onClick={() => {
                    setMenu(!menu);
                    setIndex(id);
                  }}
                  className={`flex flex-wrap gap-x-2 min-h-12 min-w-full pl-8 text-darkblue
                  ${id === index ? 'bg-lightpink opacity-85 border-l-4 border-pink-600':
                  'opacity-80 hover:bg-pink-300 duration-300'}`}
                >
                  {icon}
                  <span className="text-left place-self-center tracking-wide text-lg font-sans font-semibold">{title}</span>
                </button>
              );
            })}
          </div>
          }

        {/* Main Content */}
        <div className="bg-lightcream rounded-r-lg shadow-md">
          {/* This component will display selected component */}
          <Content id={index} />
        </div>

        {/* Quote for mobile */}
        <div className="lg:hidden block text-center text-darkblue opacity-85 bg-slate-300 italic font-normal font-sans rounded-b-md p-4 mt-auto">
          <p>{Quotes[Math.floor(Math.random()*25)].quote}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
