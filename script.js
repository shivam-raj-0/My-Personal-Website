const scriptURL = 'https://script.google.com/macros/s/AKfycbzSgliXl8r7VjASL5-1Ksv99ZNwCZiYr-TXqtLKJ1_Sa4D-8udSIjj-gKh9qNdma3-S/exec';
const form = document.getElementById('contactForm');
const btn = document.getElementById('submitBtn');

form.addEventListener('submit', e => {
    e.preventDefault();
    btn.disabled = true;
    btn.innerHTML = "Sending...";

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            alert("Success! Your data has been stored.");
            btn.disabled = false;
            btn.innerHTML = "Send Message";
            form.reset();
        })
        .catch(error => {
            console.error('Error!', error.message);
            alert("Error! Please check your internet or script settings.");
            btn.disabled = false;
            btn.innerHTML = "Send Message";
        });
});

let l = document.querySelector(".fa-youtube");
function open_github() {
    window.location.href = "https://github.com/shivam-raj-0";
}
function open_linkedin() {
    window.location.href = "https://www.linkedin.com/in/shivam-raj-619b65329/";
}
function open_insta() {
    window.location.href = "https://www.instagram.com/royal_rajput_shivam_/?hl=en";
}
function open_youtube() {
    window.location.href = "https://www.youtube.com/@royalhindurashtra";
}

var typed = new Typed("#auto-type", {
    strings: ['', 'Frontrnt Developer. ', 'Web Developer. ', 'YouTuber. ', 'UI UX Designer. '],
    typeSpeed: 150,
    loop: true,
    loopCount: Infinity,
    backSpeed: 130,
    backDelay: 500,
})

function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
}

function flipCard(icon) {
    let card = icon.parentElement;
    let imgDiv = card.querySelector(".imgs");
    let card_p = card.querySelector("p");

    imgDiv.classList.toggle("imgs_hide");
    card.classList.toggle("size");

    let newDesc = icon.getAttribute("data-desc");
    let link = icon.getAttribute("data-link");

    if (!card_p.getAttribute("data-old")) {
        card_p.setAttribute("data-old", card_p.innerText);
    }

    let oldText = card_p.getAttribute("data-old");

    if (card_p.innerText === oldText) {
        card_p.innerHTML = `
            ${newDesc}
            <br><a href="${link}" target="_blank">more</a>
        `;
    } else {
        card_p.innerText = oldText;
    }
}

let circle = document.getElementById("progressCircle");
let text = document.getElementById("progressText");
let skillName = document.getElementById("skillName");

function animateProgress(skill, targetPercent) {
    let current = 0;
    skillName.innerText = skill;

    let interval = setInterval(() => {
        if (current >= targetPercent) {
            clearInterval(interval);
        } else {
            current++;
            text.innerText = current + "%";

            circle.style.background =
                `conic-gradient(
                    red 0% ${current - 10}%,
                    #222 ${current + 3}% ${current + 6}%,
                    #222 ${current + 6}% 100%
                )`;
        }
    }, 15);
}

function open_python() { animateProgress("Python", 75); }
function open_c() { animateProgress("C Programming", 83); }
function open_html() { animateProgress("HTML", 96); }
function open_css() { animateProgress("CSS", 93); }
function open_js() { animateProgress("JavaScript", 80); }
function open_bootstrap() { animateProgress("Bootstrap", 86); }
function open_web() { animateProgress("Web Development", 65); }
function open_api() { animateProgress("API", 48); }

let skills = document.querySelectorAll(".skill");
let skillRange = document.querySelector(".skill_range");

skills.forEach((item) => {
    item.addEventListener("click", () => {
        skillRange.classList.remove("skill_range_hide");
    });
});
