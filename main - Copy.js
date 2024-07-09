var typed = new Typed(".text", {
    strings: ["Frontend Developer", "ML Enthusiast","Programmer",],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});
var typed = new Typed(".sub-title", {
    strings: ["Skills"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});
document.addEventListener('DOMContentLoaded', function() {
    const skills = {
        "html": "95%",
        "css": "90%",
        "javascript": "75%",
        "python": "50%",
        "c-plus-plus": "70%",
        "java": "40%",
        "machine-learning": "65%",
        "canva":"90%",
        "figma":"30%",
    };

    for (const [skill, percentage] of Object.entries(skills)) {
        const progressLine = document.querySelector(`.${skill} span`);
        progressLine.style.setProperty('--progress-width', percentage);
        // progressLine.textContent = percentage;
    }
});
var typed = new Typed(".projects", {
    strings: ["Portfolio"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});
 