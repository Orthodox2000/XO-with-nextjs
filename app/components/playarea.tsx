'use client'
import Box from './box';

export default function playarea()
{ 
    const boxset=[]
   for(let i=0;i<9;i++)
   {
    boxset.push(
        <Box unique_key={i} scorer='A'/>
    )
   }
   return(
    <div className="w-100 aspect-square  grid grid-flow-col grid-rows-3 gap-10 max-md:w-80">            
         {  boxset.map
            ((obj)=>
                (
                    <div key={obj.props.unique_key}>{obj}</div>
                )
            )}
     </div>
   )
}