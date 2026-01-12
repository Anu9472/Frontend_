import React, { useState }  from "react";

function Counter(){

const[count,setCount] = useState(92)
const[name,setName] = useState("Anushka")


function incfun(){
    setCount(count + 1)
} 
 
function decfun(){
    setCount(count - 1)
}


    return(
      <div>
        <h1>{count}</h1>
        <button onClick={incfun}>Increment</button>
        <button onClick={decfun}>Decrement</button>

        <br />
        <br />

        <h1>
            {name}
            <button onClick={()=> setName("Yashsvi")} > Change Name
</button>
        </h1>
      </div>
    )
}

export default Counter