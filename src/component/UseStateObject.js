import React, { useState } from "react";

const UseStateObject = () => {
    const [object, setObject] = useState({
        name: "kranti",
        age: 21
    });

    const changeObject = () => {



        setObject({ ...object, name: "Divya", age: 22 });
    };

    return (
        <>
            <div>
                <h1>Name: {object.name} & Age: {object.age}</h1>
                <button onClick={changeObject}>Update</button>
            </div>
        </>
    );
};

export default UseStateObject;