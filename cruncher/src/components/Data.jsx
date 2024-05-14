import { IoPieChartSharp } from "react-icons/io5";
import { TbCalculatorFilled } from "react-icons/tb";
import { PiShirtFoldedFill } from "react-icons/pi";
import { FaFeather } from "react-icons/fa";

export const SidebarItems = [
    { id:1 , title : "Macros Calc" , icon:  <IoPieChartSharp  size={20} className="text-darkblue place-self-center"/>},
    { id:2 , title : "BMI Calc", icon : <TbCalculatorFilled  size={20} className="text-darkblue place-self-center" /> },
    { id:3 , title : "Body fat Calc" , icon : <PiShirtFoldedFill   size={20} className="text-darkblue place-self-center"/>},
    { id:4 , title : "Ideal Weight" , icon : <FaFeather  size={20} className="text-darkblue place-self-center"/> },
];

export const BmiTable = [
    { id:1 , range : "Under 18.5" , category : "Underweight"},
    { id:2 , range : "18.5 - 24.9", category : "Normal"},
    { id:3 , range : "25 - 29.9" , category : "Overweight"},
    { id:4 , range : "30 and over" , category : "Obese"},
];