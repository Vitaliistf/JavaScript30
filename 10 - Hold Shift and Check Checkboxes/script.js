const inputs = document.querySelectorAll(".inbox input[type=checkbox]");

let lastChecked;

inputs.forEach(
    input => {
        input.addEventListener("click", handleCheck);
    });

function handleCheck(e) {
    if (e.shiftKey && this.checked) {
        let inBetween = false;
        inputs.forEach(input => {
            if (input === this || input === lastChecked) {
                inBetween = !inBetween;
            }
            if (inBetween) {
                input.checked = true;
            }
        })
    }
    lastChecked = this;
}