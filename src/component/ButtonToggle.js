import React, { useState } from "react";

const ButtonToggle = () => {
    const [button, setButton] = useState("ON");

    const handleClick = () => {

        if (button === "ON") {
            setButton("OFF")
        } else {
            setButton("ON")
        }

    }

    return (
        <div>
            <button className="btn" onClick={handleClick}>{button}</button>
        </div>
    );
};
export default ButtonToggle;