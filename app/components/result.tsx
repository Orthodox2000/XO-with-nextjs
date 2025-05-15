const match:any=["0","1","2","3","4","5","6","7","8"];
let winner:string="";
export function updateres(scorer:string,key:number)
{
    if(scorer=="usero"|| scorer=="userx")
    match[key]=scorer;  
    const patterns :any= [
    [0,3,6], // top row
    [1,4,7], // middle row
    [2,5,8], // bottom row
    [0,1,2], // left column
    [3,4,5], // middle column
    [6,7,8], // right column
    [0,4,8], // diagonal from top-left
    [6,4,2], // diagonal from top-right
  ];

  for (const pattern of patterns) {
    const [a, b, c] = pattern;
    if (
      match[a] != null && 
      match[a] == match[b] && 
      match[a] == match[c]
    ) {
      const temp= match[a] as 'userx' | 'usero';
      winner=temp;
      return temp;
    }
  }
  let draw=false;
 for(let i =0;i<9;i++)
 {if(match[i]=="userx"||match[i]=="usero")
  continue;
  else return null;

 } 
 winner="draw";
  return winner; // no winner

}
export default function win()
{
    if(winner=="userx")
    {
       return(<div className="absolute bottom-1/2 left-[-1/2] translate-x-[-1/2] translate-y-1/2
        bg-red-800 border-double p-4 text-6xl border-2 text-white max-md:text-4xl">
            WINNER IS USER-X !
        </div>)
    } 
    else if(winner=="usero")
    {
         return(<div className="absolute bottom-1/2 left-[-1/2] translate-x-[-1/2] translate-y-1/2
        bg-blue-900 border-double p-4 text-6xl border-2 text-white max-md:text-4xl">
            WINNER IS USER-O !
        </div>)
    }
    else if(winner=="draw")
    {
         return(<div className="absolute bottom-1/2 left-[-1/2] translate-x-[-1/2] translate-y-1/2
        bg-white border-double p-4 text-6xl border-2 text-black max-md:text-4xl">
            IT'S A DRAW !
        </div>)
    }
}