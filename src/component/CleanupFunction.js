import { } from '@testing-library/react';

import React,{useState, useEffect} from "react";

const CleanupFunction = () => {
    const [widthCount, setWidthCount] = useState(window.screen.width);

    const actualWidth = () => {
        console.log(window.innerWidth);
        setWidthCount(window.innerWidth );
    }

    useEffect(() => {
        console.log("add Event");
        window.addEventListener("resize", actualWidth);

        return()=>{
            console.log("remove Event");
            window.removeEventListeneraddEventListener("resize",actualWidth);
        }
        

    });

    


    return(
        <>
            <div>
                <p>The actual size of the window is:</p>
                <h1>{widthCount}</h1>
            </div>
        </>
    )
}
export default CleanupFunction;