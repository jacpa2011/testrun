function Save() {
    if(localStorage) {
        localStorage.setItem("highscore", JSON.stringify((player.highscorenumber)));

    }
}

function Get() {
    if (localStorage) {
        const highscorenumbersave = localStorage.getItem("highscore");
        if (highscorenumbersave) {
            player.highscorenumber = JSON.parse(highscorenumbersave)
            let highscorenumbersave2 = JSON.parse(highscorenumbersave)
            highscore.textContent = `Lowest Time: ${highscorenumbersave2} s`
        }
    }
}
function HardReset() {
    localStorage.setItem("highscore", JSON.stringify((99999)));
}
