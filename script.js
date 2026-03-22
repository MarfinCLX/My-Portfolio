function playShot(number) {
    const sound = document.getElementById("audio" + number)
   sound.currentTime = 0;
    sound.play();
}
const targetDate = new Date ("July,31,2027, 00:00:00").getTime();

const countdownElement = document.getElementById("countdown");

function updateCountdown () {
const now = new Date().getTime();
const distance = targetDate - now;


const days = Math.floor(distance / (1000 * 60 * 60 *24 ));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

countdownElement.innerHTML = days + " <span class=\"unit\">Days</span> " +
 hours + " <span class=\"unit\">Hours</span> " +
  minutes + " <span class=\"unit\">Minutes</span> " +
   seconds + " <span class=\"unit\">Seconds</span>";

   if (distance < 0) {
clearInterval(x)
   

   countdownElement.innerHTML = "EXPIRED";
   }
}
updateCountdown();

const x = setInterval(updateCountdown, 1000);
