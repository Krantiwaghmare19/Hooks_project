import React, { useState } from "react";

const ArrayUseState = () => {
    const bioData = [
        {
            id: 0,
            name: "Kranti",
            age: 21,
        },

        {
            id: 1,
            name: "Priti",
            age: 20,
        },

        {
            id: 2,
            name: "Divya",
            age: 22,
        },
    ];

    const [array, setArray] = useState(bioData);

    const clearArray = () => {
        setArray([]);
    };

    const removeElement = (id) => {
        const newArray = array.filter((data) => data.id !== id);
        setArray(newArray);
    };

    return (
        <>
            {array.map((data) => {
                return (
                    <div key={data.id} className="h1style">
                        Name: {data.name} Age: {data.age}
                        <button onClick={() => removeElement(data.id)}>Remove</button>
                    </div>
                );
            })}
            <button className="btn" onClick={clearArray}>
                Clear
            </button>
        </>
    );
};

export default ArrayUseState;