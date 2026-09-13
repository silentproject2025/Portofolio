// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Respect reduced-motion: skip the hero trace draw-in entirely
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (prefersReducedMotion) {
  document.querySelectorAll(".hero-traces .trace, .hero-traces .pad").forEach((el) => {
    el.style.animation = "none";
    el.style.strokeDashoffset = "0";
    el.style.opacity = "1";
  });
}
