const player = document.querySelector(".player");
const viewer = player.querySelector(".viewer");

const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");

const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

function togglePlay() {
    if (viewer.paused) {
        viewer.play();
        toggle.innerText = "";
    } else {
        viewer.pause();
    }
}

function updateToggle() {
    toggle.innerText = this.paused ? '►' : '❚ ❚';
}

function skip() {
    viewer.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    viewer[this.name] = this.value;
}

function handleProgress() {
    const percent = viewer.currentTime / viewer.duration * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    viewer.currentTime = e.offsetX / progress.offsetWidth * viewer.duration;
}

toggle.addEventListener("click", togglePlay);
viewer.addEventListener("click", togglePlay);

viewer.addEventListener("play", updateToggle);
viewer.addEventListener("pause", updateToggle);
viewer.addEventListener("timeupdate", handleProgress);
skipButtons.forEach(button => button.addEventListener("click", skip));
ranges.forEach(range => range.addEventListener("mousemove", handleRangeUpdate));

let mousedown = false;
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);
progress.addEventListener("mousemove", e => mousedown && scrub(e));
progress.addEventListener("click", scrub);
