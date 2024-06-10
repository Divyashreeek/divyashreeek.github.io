// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const skills = {
        html: 90,
        css: 80,
        javascript: 70
    };

    for (const skill in skills) {
        const progressElement = document.getElementById(skill);
        progressElement.style.width = skills[skill] + '%';
    }
});
function showDescription(id) {
    const desc = document.getElementById(id);
    if (desc.style.display === "none" || desc.style.display === "") {
        desc.style.display = "block";
    } else {
        desc.style.display = "none";
    }
}

function toggleVisibility(id) {
    const element = document.getElementById(id);
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}
function toggleVisibility(id) {
    const element = document.getElementById(id);
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}
