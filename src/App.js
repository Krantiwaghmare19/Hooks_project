import React from "react";
import "./App.css";
import UseStateObject from "./component/UseStateObject";
import ArrayUsestate from "./component/ArrayUsestate";
import ButtonToggle from "./component/ButtonToggle"
import ShortCircuitEvaluation from "./component/ShortCircuitEvaluation";
import BasicForm from "./component/BasicForm";
import UseEffect from "./component/UseEffect";
// import CleanupFunction from "./component/CleanupFunction";
import  UseReducer from "./component/UseReducer";
const App = () => {
    return(
        <>
            <ButtonToggle/>
            <ArrayUsestate/>
            <UseStateObject/>
            <ShortCircuitEvaluation/>
            <BasicForm/>
            <UseEffect/>
            {/* <CleanupFunction/> */}
            <UseReducer/>
            

        
        </>
    )

}
export default App;