'use client'
import { useState } from "react";
import Playarea from "./playarea" ;
import Win from "./result";
export default function MainContainer()
{  
    const [winstate,setwinstate]=useState(<Win/>);
    const update=()=>
    {
        setwinstate(<Win/>)
    }
    return (
    <div className='w-1/1 mt-5 flex items-center justify-center flex-col'onClick={update}>
        {winstate}
        <Playarea/>
        <div className="mt-5 w-1/1 flex items-center justify-center text-center">CURRENTLY THIS IS MULTI-PLAYER GAME. SINGLE PLAYER AI INTEGRATION COMING SOON !</div>
        </div>
    );
} 

