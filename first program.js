const Input = document.getElementById("input")
const outp = document.getElementById("output")

Input.addEventListener("input", () => {
    if (Input.value == 123) {outp.value = "yay🥳"} else {outp.value = ""}
    console.log(Input.value);
})