// Mobile Menu Toggle

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close menu when link clicked

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// Sticky Navbar

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    navbar.classList.toggle(
        "sticky",
        window.scrollY > 50
    );
});


// Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Reservation Form

const form = document.querySelector(".reservation form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value;

    alert(
        `Thank you ${name}! Your table reservation request has been received.`
    );

    form.reset();
});


// Fade In Animation on Scroll

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});


document.querySelectorAll(
    ".card, .review, .about-content, .about-image, .special-box"
).forEach(el => {
    observer.observe(el);
});


// Back To Top Button

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        topBtn.classList.add("visible");
    } else {
        topBtn.classList.remove("visible");
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
let cartCount = 0;
let total = 0;

function AddToCart(name, price) {
    cartCount++;
    total += price;

    document.getElementById("cart-count").innerText = cartCount;
    document.getElementById("total").innerText = total;

    const li = document.createElement("li");
    li.innerText = `${name} - ₹${price}`;

    document.getElementById("cart-items").appendChild(li);
}