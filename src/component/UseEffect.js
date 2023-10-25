import React, { useState, useEffect } from "react";

const UseEffect = () => {
    const [count, setCount] = useState(0);


    useEffect(() => {
        console.log("I am kranti")
        if (count >= 1) {
            document.title = `Chats(${count})`

        } else {
            document.title = `Chats`
        }

    }, [count]);

    useEffect(() => {
        console.log("inside hook");

    }, []);

    console.log("outside hook");

    return (
        <>
            <div>
                <h1>{count}</h1>
                <button onClick={() => setCount(count + 1)}>click</button>
            </div>
        </>
    )
}
export default UseEffect;