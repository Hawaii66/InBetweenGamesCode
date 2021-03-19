import { ShowGameWindow } from "../Socket/socketEmit.js";

export function ChooseGame(index) {
    console.log("EST");
    let currentGameIndex = -1;
    if (index === 0) {
        currentGameIndex = index;
        const toSend = {
            gameIndex: currentGameIndex
        }
        console.log("TEST");
        ShowGameWindow(toSend, (data) => {
            console.log("TES");
        });
    }
}