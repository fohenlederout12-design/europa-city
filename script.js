
const enterButton = document.getElementById("enterButton");
const header = document.querySelector("header");
const hub = document.getElementById("hub");

enterButton.addEventListener("click", () => {

    // Animation de sortie
    header.style.transition = "opacity 0.8s ease";
    header.style.opacity = "0";

    setTimeout(() => {

        header.style.display = "none";

        hub.style.display = "block";
        hub.style.opacity = "0";
        hub.style.transition = "opacity 0.8s ease";

        setTimeout(() => {
            hub.style.opacity = "1";
        }, 50);

    }, 800);

});

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        alert("Cette page sera disponible dans la prochaine mise à jour 🚀");

    });

});
