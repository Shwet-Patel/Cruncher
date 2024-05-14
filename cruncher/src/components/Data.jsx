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

export const Quotes = [
    { id: 1, quote: "The only bad workout is the one that didn't happen." },
    { id: 2, quote: "Strive for progress, not perfection." },
    { id: 3, quote: "Push yourself because no one else is going to do it for you." },
    { id: 4, quote: "Sweat is just fat crying." },
    { id: 5, quote: "Fitness is not about being better than someone else, it's about being better than you used to be." },
    { id: 6, quote: "The only bad workout is the one you didn't do." },
    { id: 7, quote: "You are stronger than you think." },
    { id: 8, quote: "Wake up with determination. Go to bed with satisfaction." },
    { id: 9, quote: "Your body can stand almost anything. It's your mind that you have to convince." },
    { id: 10, quote: "Success isn't always about greatness. It's about consistency. Consistent hard work leads to success. Greatness will come." },
    { id: 11, quote: "The only way to do great work is to love what you do." },
    { id: 12, quote: "Make time for it. Just get it done. Nobody ever got strong or got in shape by thinking about it. They did it." },
    { id: 13, quote: "Don't wish for it, work for it." },
    { id: 14, quote: "The body achieves what the mind believes." },
    { id: 15, quote: "The harder the battle, the sweeter the victory." },
    { id: 16, quote: "Your body hears everything your mind says. Stay positive." },
    { id: 17, quote: "If it doesn't challenge you, it doesn't change you." },
    { id: 18, quote: "Success is the sum of small efforts, repeated day in and day out." },
    { id: 19, quote: "The pain you feel today will be the strength you feel tomorrow." },
    { id: 20, quote: "You don't have to be great to start, but you have to start to be great." },
    { id: 21, quote: "Don't stop when you're tired. Stop when you're done." },
    { id: 22, quote: "The only way to define your limits is by going beyond them." },
    { id: 23, quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle." },
    { id: 24, quote: "Make yourself a priority. At the end of the day, you're your longest commitment." },
    { id: 25, quote: "The pain you feel today will be the strength you feel tomorrow." }
];
