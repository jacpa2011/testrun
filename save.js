function Save() {
    if(localStorage) {
        localStorage.setItem("highscore", JSON.stringify((player.highscorenumber)));
        localStorage.setItem("reversehighscore", JSON.stringify((player.reverse_highscorenumber)));
        localStorage.setItem("averagehighscore", JSON.stringify((player.averagehighscoreraw)));
    }
}

function Get() {
    if (localStorage) {
        const highscorenumbersave = localStorage.getItem("highscore");
        if (highscorenumbersave) {
            player.highscorenumber = JSON.parse(highscorenumbersave)
            highscore.textContent = `Lowest Time: ${player.highscorenumber} s`
            highscore.textContent = `Lowest Time: ${player.highscorenumber.toFixed(2)} s`
        }
        const reversehighscorenumbersave = localStorage.getItem("reversehighscore");
        if (reversehighscorenumbersave) {
                player.reverse_highscorenumber = JSON.parse(reversehighscorenumbersave)
            if (player.reverse_highscorenumber.toFixed(0) != -1) {
            reversehighscore.textContent = `Highest Time: ${player.reverse_highscorenumber} s`
            reversehighscore.textContent = `Highest Time: ${player.reverse_highscorenumber.toFixed(2)} s`
            }
        }
        const averagehighscorenumbersave = localStorage.getItem("averagehighscore");
        if (averagehighscorenumbersave) {
            player.averagehighscoreraw = JSON.parse(averagehighscorenumbersave)
            calculateaveragefunction()
        }
    }
}

function HardReset() {
    localStorage.clear();
}
