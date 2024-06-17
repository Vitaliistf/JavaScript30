const times = [...document.querySelectorAll('li[data-time]')];

let seconds = times
  .map(el => el.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':');
    return Number(mins) * 60 + Number(secs);
  })
  .reduce((acc, videoSeconds) => acc + videoSeconds, 0);

const hours = Math.floor(seconds / 3600);
seconds %= 3600;

const minutes = Math.floor(seconds / 60)
seconds %= 60;

console.log(hours, minutes, seconds);