// Toggle flip on click/Enter/Space
document.addEventListener("click", e => {
  const btn = e.target.closest(".flip-card");
  if (!btn) return;
  const expanded = btn.getAttribute("aria-expanded") === "true";
  btn.setAttribute("aria-expanded", String(!expanded));
});
document.addEventListener("keydown", e => {
  if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("flip-card")) {
    e.preventDefault();
    const btn = e.target;
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!expanded));
  }
});
