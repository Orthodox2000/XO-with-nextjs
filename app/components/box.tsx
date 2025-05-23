'use client'
import { useState } from "react";   
import Image from 'next/image'
import baseimg from "../../public/m.png";
import ximage from "../../public/cross.png";
import oimage from "../../public/o.png"; 
import {updateres} from "./result" 
interface boxprop {
    unique_key:number;
    scorer:string;
}
let user=false;
let resultflag=false; 
const box : React.FC<boxprop>=({unique_key,scorer})=>
{  
    const [curstat,setcurstat]=useState(<Image src={baseimg} alt="click" width={500} height={500}/>); 
    
const update_s=()=>
{  if(curstat.props.src==baseimg && resultflag==false)
    { 
        if(user==false)
        {
            setcurstat(<Image src={ximage} alt="click" width={500} height={500}/>);
            user=true;
            scorer="userx";  
            
        }
        else
        {
            setcurstat( <Image src={oimage} alt="click" width={500} height={500}/>);
            user= false;
            scorer="usero"; 
        }
        
        
    } 
    

    const resultant:any=updateres(scorer,unique_key);
    if (resultant)
    {
        resultflag=true;  
    } 
    
}
    
    return (
    <div className="border-white border-1 rounded-full aspect-square w-1/1 flex justify-center items-center text-black" 
    onClick={update_s}  > {curstat} 
    </div>
    );

} 
 
export default box;

