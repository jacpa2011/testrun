const count = document.querySelector("#counter");
let incrementcounter = 0
const Input1 = document.getElementById("input")
const outp1 = document.getElementById("output")

Input1.addEventListener("input", () => {
    if (Input1.value == 123) {outp1.value = "yay🥳"} else {outp1.value = ""}
    console.log(Input.value);
})
setInterval(function() {
    if (Input1.value != 123) {
        incrementcounter = incrementcounter + 1/50
        count.textContent = incrementcounter.toFixed(2) + " s" 
    } 
}, 20)