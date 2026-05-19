function showProfile() {
    document.querySelector(".welcome").style.display = "none";
    document.getElementById("profile-section").style.display = "block";
}

const text = "Computer Engineer | Full Stack Developer | AI Enthusiast";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 60);
    }
}

window.onload = typeWriter;