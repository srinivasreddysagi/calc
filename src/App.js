import { useState } from "react";
import "./App.css";
import Keypad from "./Keypad";

function App() {
    const [exp, setExp] = useState("0");

    function exec(ch) {
        if (ch !== "AC" && ch !== "DELETE" && ch !== "=" && exp !== "0") {
            setExp(exp + ch);
        } else if (ch === "AC") {
            setExp("0");
        } else if (ch === "DELETE") {
            if (exp.length === 1 || exp === "Math Error") {
                setExp("0");
            } else if (exp !== "0") {
                setExp(exp.slice(0, -1));
            } else {
                setExp(exp.slice(0, -1));
            }
        } else if (ch === "=") {
            let result = "";
            try {
                // eslint-disable-next-line no-new-func
                result = String(Function("return " + exp)());
                if (result === "Infinity") {
                    result = "Math Error";
                }
            } catch (error) {
                result = "Math Error";
            }
            setExp(result);
        } else {
            setExp(ch);
        }
    }

    return (
        <>
            <main className="calc">
                <h3 className="heading">Simple Calculator</h3>
                <p className="output" id="result">
                    {exp}
                </p>
                <Keypad exec={exec}></Keypad>
            </main>
        </>
    );
}

export default App;
