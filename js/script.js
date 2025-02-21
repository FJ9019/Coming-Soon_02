// Set the date we're counting down to
const countDownDate = new Date("Feb 21, 2025 00:00:00").getTime();

// Update the countdown every 1 second
const countdownFunction = setInterval(() => {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the countdown date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the elements
    document.getElementById("days").innerHTML = days < 10 ? `0${days}` : days;
    document.getElementById("hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.querySelector(".countdown").innerHTML = "NOUS SOMMES EN DIRECT !";
    }
}, 1000);

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    alert(`Nous vous remercions ! Nous vous informerons à l'adresse suivante ${email} au moment du lancement.`);
    document.getElementById("email").value = ""; // Clear the input
});
