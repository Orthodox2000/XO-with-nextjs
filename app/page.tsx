'use client'
import MainContainer from "./components/MainContainer"

export default function Home() {
  const refresh=()=>
{
  window.location.reload();
}
 
  
  return (
    <div className="flex flex-col h-dvh justify-center items-center w-1/1 ">
      <div className="w-1/1 flex flex-col items-center justify-center text-5xl h-30 "> 
      XO GAME 
       <button className="mt-5 w-1/10 border-1 text-xl max-md:w-1/5 rounded-lg hover:bg-white hover:text-black" 
       onClick={refresh}>RESET</button></div>
       <noscript>
        <p>Your JavaScript is disabled. It's not my fault app isnt working. Enable please enable JS.
        </p>
      </noscript>
      <MainContainer/>
     
    </div>
  );
}

