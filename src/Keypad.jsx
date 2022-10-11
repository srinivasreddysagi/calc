import React from "react";
import keys from "./keys";

function Keypad({ exec }) {
    return (
        <div className="keypad">
            {keys.map((set) => (
                <KeyRow keySet={set} exec={exec}></KeyRow>
            ))}
        </div>
    );
}

function KeyRow({ keySet, exec }) {
    return (
        <div className="keyrow">
            {keySet.map((i) => (
                <Key exec={exec} keyName={i.keyName} {...i}></Key>
            ))}
        </div>
    );
}

function Key({ keyName, keyID, color, colspan, exec }) {
    return (
        <button
            style={colspan ? { width: "50%" } : { width: "25%" }}
            className={color ? "btn " + color : "btn"}
            id={keyID}
            onClick={() => exec(keyName)}
        >
            {keyName}
        </button>
    );
}

export default Keypad;
