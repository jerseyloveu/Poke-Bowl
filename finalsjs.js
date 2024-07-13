console.log("INF222_FINALS_USMAN_JERSEY");

document.addEventListener("DOMContentLoaded", function() {
    const contactUsElement = document.getElementById("contact-us");

    contactUsElement.addEventListener("click", function() {
        alert("Call us at 555-5555");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const audioButton = document.getElementById("audio-button");

    audioButton.addEventListener("click", function() {

        const redCard = audioButton.closest(".red-card");


        redCard.classList.toggle("blue-background");

        const definition = redCard.querySelector(".definition");
        definition.classList.toggle("blue-text");

        const audioSrc = audioButton.getAttribute("audioSrc");
        if (audioSrc) {
            const audio = new Audio(audioSrc);
            audio.play();
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const contactNumber = document.getElementById("contact-number").value;


        const message = `Name: ${name}\nEmail: ${email}\nContact Number: ${contactNumber}`;
        alert(message);

        contactForm.reset();
    });
});