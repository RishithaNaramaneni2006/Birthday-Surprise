/* =========================
   SHOW SECTION
========================= */

function showSection(id) {

    document
        .querySelectorAll("section")
        .forEach(section => {

            section.classList.remove("active");

        });

    document
        .getElementById(id)
        .classList.add("active");

    window.scrollTo(0, 0);
}


/* =========================
   START SURPRISE
========================= */

function startSurprise() {

    showSection("countdown");

    let number = 3;

    const counter =
        document.getElementById("countNumber");

    counter.textContent = number;

    const interval =
        setInterval(() => {

            number--;

            if (number > 0) {

                counter.textContent = number;

                counter.style.animation = "none";

                void counter.offsetWidth;

                counter.style.animation =
                    "countAnim 1s ease";

            }

            else {

                clearInterval(interval);

                showSection("birthday");

                createConfetti();

                fireworks();

            }

        }, 1000);
}


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    for (let i = 0; i < 150; i++) {

        const confetti =
            document.createElement("div");

        confetti.className =
            "confetti";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.background =
            `hsl(${Math.random() * 360}, 100%, 60%)`;

        confetti.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        confetti.style.animationDelay =
            Math.random() * 2 + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 6000);
    }
}


/* =========================
   SECRET LETTER
========================= */

function openLetter() {

    const message =
        document.getElementById(
            "secretMessage"
        );

    message.style.display = "block";

    document.getElementById(
        "giftButton"
    ).style.display = "inline-block";

    createConfetti();
}


/* =========================
   GIFT GAME
========================= */

function chooseGift(number) {

    const result =
        document.getElementById(
            "giftResult"
        );

    if (number === 1) {

        result.innerHTML =
            "😂 Nice try! This gift contains unlimited hugs! 🤗";

    }

    else if (number === 2) {

        result.innerHTML =
            "❤️ You found love, happiness and lots of smiles!";

    }

    else {

        result.innerHTML =
            "🎉 YOU FOUND THE FINAL SURPRISE! 🎉";

        document.getElementById(
            "finalButton"
        ).style.display = "inline-block";

        createConfetti();

        fireworks();
    }
}


/* =========================
   FINAL SCREEN
========================= */

function showFinal() {

    showSection("final");

    createConfetti();

    fireworks();
}


/* =========================
   FIREWORKS
========================= */

function fireworks() {

    for (let i = 0; i < 30; i++) {

        setTimeout(() => {

            const firework =
                document.createElement("div");

            firework.style.position =
                "fixed";

            firework.style.left =
                Math.random() * 100 + "vw";

            firework.style.top =
                Math.random() * 70 + "vh";

            firework.style.width =
                "8px";

            firework.style.height =
                "8px";

            firework.style.borderRadius =
                "50%";

            firework.style.background =
                `hsl(${Math.random() * 360},100%,60%)`;

            firework.style.boxShadow =
                "0 0 20px currentColor";

            firework.style.zIndex =
                "9999";

            document.body.appendChild(
                firework
            );

            firework.animate(

                [
                    {
                        transform: "scale(1)",
                        opacity: 1
                    },

                    {
                        transform: "scale(8)",
                        opacity: 0
                    }
                ],

                {
                    duration: 1000,
                    easing: "ease-out"
                }

            );

            setTimeout(() => {

                firework.remove();

            }, 1000);

        }, i * 100);
    }
}