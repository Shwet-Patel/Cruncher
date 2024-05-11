import { IoPieChartSharp } from "react-icons/io5";
import { TbCalculatorFilled } from "react-icons/tb";
import { PiShirtFoldedFill } from "react-icons/pi";
import { FaFeather } from "react-icons/fa";

export const SidebarItems = [
    { id:1 , title : "Macros Calculator" , icon:  <IoPieChartSharp  size={20} className="text-darkblue place-self-center"/>},
    { id:2 , title : "BMI Calculator", icon : <TbCalculatorFilled  size={20} className="text-darkblue place-self-center" /> },
    { id:3 , title : "Body fat Calculator" , icon : <PiShirtFoldedFill   size={20} className="text-darkblue place-self-center"/>},
    { id:4 , title : "Ideal Weight" , icon : <FaFeather  size={20} className="text-darkblue place-self-center"/> },
];