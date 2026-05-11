// Menu visibility
function menu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}
// Menu visibility

// Change mode
function mode() {
    document.body.classList.toggle("dark");

    var btn = document.querySelector('.mode');
    btn.textContent = document.body.classList.contains("dark") 
        ? "White Mode" 
        : "Black Mode";
}
// Change mode

// Load Menu
function loadMenu() {
    var container = document.getElementById("menuComp");
    if (!container) return;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./Comp/menu.html", true);
    xhr.onload = function () {
        if (xhr.status === 200 || xhr.status === 0) {
            container.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}
// Load Menu

// Clipboard
function copy(id) {
      const text = document.getElementById(id).innerText;
      navigator.clipboard.writeText(text)
}
// Clipboard

// Run After Page
document.addEventListener("DOMContentLoaded", loadMenu);
// Run After Page
