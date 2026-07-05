```javascript
const btn = document.getElementById("openInvitation");
const opening = document.getElementById("opening");
const main = document.getElementById("mainContent");
const music = document.getElementById("music");

btn.addEventListener("click", () => {

opening.style.display = "none";
main.style.display = "block";

music.play();

window.scrollTo({
top:0,
behavior:"smooth"
});

});

const params = new URLSearchParams(window.location.search);

const guest = params.get("to");

if(guest){
document.getElementById("guestName").innerHTML =
decodeURIComponent(guest);
}

const targetDate =
new Date("2026-07-29T07:00:00").getTime();

setInterval(() => {

const now = new Date().getTime();

const distance = targetDate - now;

const days =
Math.floor(distance / (1000 * 60 * 60 * 24));

const hours =
Math.floor(
(distance % (1000 * 60 * 60 * 24))
/
(1000 * 60 * 60)
);

const minutes =
Math.floor(
(distance % (1000 * 60 * 60))
/
(1000 * 60)
);

const seconds =
Math.floor(
(distance % (1000 * 60))
/
1000
);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

},1000);
```
