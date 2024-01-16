const count = document.querySelector("#counter");
let incrementcounter = 0
const Input1 = document.getElementById("input")
const restart = document.getElementById("restart")
const highscore = document.getElementById("highscore")
const averagehighscore = document.getElementById("averagehighscore")
let averagehighscoreoutput = 0
const reversehighscore = document.getElementById("reversehighscore")
const hardreset = document.getElementById("hardreset")
player = {
    highscorenumber: 99999
    ,reverse_highscorenumber: -1
    ,averagehighscoreraw: []
}


function loop() {
    loopconst = 
        setInterval(function() {
        if (Input1.value != 123) {
            incrementcounter = incrementcounter + 1/50
            count.textContent = `${incrementcounter.toFixed(2)} s` 
            restart.hidden = true
        } 
        else {
            Input1.hidden = true
            restart.hidden = false
            if (incrementcounter < player.highscorenumber) {
            highscore.textContent = `Lowest Time: ${count.textContent}`
            player.highscorenumber = incrementcounter
            }
            else {
                if (incrementcounter > player.reverse_highscorenumber) {
                    reversehighscore.textContent = `Highest Time: ${count.textContent}`
                    player.reverse_highscorenumber = incrementcounter
                }
            }
            calculateaveragefunction(incrementcounter)
            Save()
            clearInterval(loopconst)
        }
}, 20)
}
loop()

restart.addEventListener("click", function() {
    Input1.hidden = false
    restart.hidden = true
    Input1.value = ""
    incrementcounter = 0
    count.textContent = `${incrementcounter.toFixed(2)} s`
    Save() 
    loop()
})

hardreset.addEventListener("click", function(){
    if (confirm('Are you sure you want to Hard Reset? (all scores will be gone!)')) {
        HardReset()
        location.reload(true)
    }
})

function calculateaveragefunction(c) {
    if (c) {
    player.averagehighscoreraw.push(c)
    }
    let averagehighscoreoutput = 0
    player.averagehighscoreraw.forEach(x => {
        averagehighscoreoutput += x
    });
    averagehighscoreoutput = (averagehighscoreoutput)/player.averagehighscoreraw.length
    averagehighscore.textContent = `Average Time: ${averagehighscoreoutput.toFixed(2)} s`}