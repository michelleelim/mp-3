import { useState } from "react";

export default function useCalc() {
    const [firstNum, setFirstNum] = useState("");
    const [secondNum, setSecondNum] = useState("");
    const [result, setResult] = useState<number | null>(null);  //store number or null so it displays nothing when calc is cleared

    function calculate(operator: string) {
        let first = Number(firstNum);
        let second = Number(secondNum);
        let answer = 0;

        if (operator === "+") {
            answer = first + second;
        }
        else if (operator === "-") {
            answer = first - second;
        }
        else if (operator === "*") {
            answer = first * second;
        }
        else if (operator === "/") {
            answer = first / second;
        }
        else if (operator === "**") {
            answer = 1;

            for (let i = 0; i < second; i++) {
                answer = answer * first;
            }
        }

        setResult(answer);
    }

    function clearCalc() {
        setFirstNum("");
        setSecondNum("");
        setResult(null);
    }

    return {
        firstNum, setFirstNum,
        secondNum, setSecondNum,
        result, calculate, clearCalc
    };
}