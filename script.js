let clock = document.querySelector("#clock");

// function Online() {
//   alert("Successfully joined");
// }

// function Offline() {
//   alert("Sorry:You are out of internet");
// }

// ononline = () => {
//   Online();
// };

// onoffline = () => {
//   Offline();
// };

function Clock() {
  const data = new Date();
  let h = data.getHours();
  let m = data.getMinutes();
  let s = data.getSeconds();

  let fullClock = h + ":" + m + ":" + s;
  return (clock.innerHTML = fullClock);
}

const time = setInterval(Clock, 1000);

setTimeout(() => {
  clock.innerHTML = "Hello world";
    clearInterval(time);
}, 10000);
