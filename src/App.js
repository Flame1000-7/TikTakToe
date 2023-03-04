import { useState } from "react";
import "./App.css";

function App() {
    const mass = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    const [pole, setPole] = useState(["", "", "", "", "", "", "", "", ""]);
    const [symbol, setSymbol] = useState("X");
    return (
        <div className="TikTakToe">
            {pole.map((item, index) => {
                return (
                    <div
                        className="play"
                        onClick={() => {
                            const newPole = pole.slice(0);
                            newPole[index] = symbol;
                            if (symbol == "X") {
                                setSymbol("O");
                            }
                            if (symbol != "X") {
                                setSymbol("X");
                            }
                            setTimeout(() => {
                                let a = true;
                                for (let i = 0; i < mass.length; i++) {
                                    if (
                                        newPole[mass[i][0]] == "X" &&
                                        newPole[mass[i][1]] == "X" &&
                                        newPole[mass[i][2]] == "X"
                                    ) {
                                        alert("ВЫИГРАЛИ КРЕСТИКИ");
                                        a = false;
                                    }
                                    if (
                                        newPole[mass[i][0]] == "O" &&
                                        newPole[mass[i][1]] == "O" &&
                                        newPole[mass[i][2]] == "O"
                                    ) {
                                        alert("ВЫИГРАЛИ НОЛИКИ");
                                        a = false;
                                    }
                                    if (
                                        
                                    ) {
                                        alert("НИЧЬЯ");
                                        a = false;
                                    }
                                }
                                if (a == false) {
                                    setPole([
                                        "",
                                        "",
                                        "",
                                        "",
                                        "",
                                        "",
                                        "",
                                        "",
                                        "",
                                    ]);
                                }
                            }, 0);
                            setPole(newPole);
                        }}
                    >
                        <p>{pole[index]}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default App;
