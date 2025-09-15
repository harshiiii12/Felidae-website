document.addEventListener("DOMContentLoaded", () => {
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");


menuToggle.addEventListener("click", () => {
navLinks.classList.toggle("showing");
});


// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();
document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior: 'smooth'
});
navLinks.classList.remove("showing");
});
});


// Animate elements on scroll
const cards = document.querySelectorAll('.card');
const revealOnScroll = () => {
cards.forEach(card => {
const rect = card.getBoundingClientRect();
if(rect.top < window.innerHeight - 50) {
card.classList.add("visible");
}
});
};


window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
});
