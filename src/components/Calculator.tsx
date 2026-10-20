import useCalc from "../hooks/useCalc";

export default function Calculator() {
    const {
        firstNum, setFirstNum,
        secondNum, setSecondNum,
        result, calculate, clearCalc
    } = useCalc();

    return (
        <div id="calc">
            <h4>Dazzling JavaScript Calculator</h4>
            <div className="calc-inputs">
                {/*//update firstNum and secondNum whenever there's a new input*/}
                <input type="text" value={firstNum}
                       onChange={(e) => setFirstNum(e.target.value)}
                />
                <input
                    type="text" value={secondNum}
                    onChange={(e) => setSecondNum(e.target.value)}
                />
            </div>

            <div className="calc-buttons">
                <button onClick={() => calculate("+")}>+</button>
                <button onClick={() => calculate("-")}>-</button>
                <button onClick={() => calculate("*")}>*</button>
                <button onClick={() => calculate("/")}>/</button>
                <button onClick={() => calculate("**")}>**</button>
                <button onClick={clearCalc}>Clear</button>
            </div><br/>

            <div className="calc-output">
                <h4 style={{color: result !== null && result < 0 ? "red" : "black"}}>
                    {result}
                </h4>
            </div>
        </div>
    );
}