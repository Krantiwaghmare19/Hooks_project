import React,{useState} from "react";

const ShortCircuitEvaluation =()=>{
    const[demo,setDemo]=useState("");

    return(
        <>
            <div>
                <h1>{demo || 
                    <>
                    <h1>kranti</h1>
                    <p>You can do anything?</p>
                    </>
                }</h1>
                    
                <h1>{demo && "priti"}</h1>

            </div>
        </>
    )
}
export default ShortCircuitEvaluation;