const sequence = "somet".toLowerCase();
let i = 0;

function handleClick(e) {
    if (e.key.toLowerCase() === sequence.charAt(i)) {
        i++;
        if (i === sequence.length) {
            console.log(`${sequence} was entered`);
            cornify_add()
            i = 0;
        }
    } else {
        i = 0;
    }
}

window.addEventListener("keypress", handleClick);