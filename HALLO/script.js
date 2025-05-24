/* ---------- Dark-Mode ---------- */
function toggleDarkMode() {
    document.body.classList.toggle("dark");
    localStorage.setItem(
      "dark-mode",
      document.body.classList.contains("dark") ? "enabled" : "disabled"
    );
  }
  // Dark Mode beim Laden anwenden
  if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark");
  }
  
  /* ---------- Scroll-Einblendeffekt ---------- */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("visible", entry.isIntersecting);
      });
    },
    { threshold: 0.45 }
  );
  document.querySelectorAll("section").forEach((sec) => observer.observe(sec));
  
  /* ---------- Formspree-Feedback ---------- */
  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const res = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        alert("Danke! Deine Nachricht wurde gesendet.");
        form.reset();
      } else {
        alert("Fehler beim Senden. Bitte später erneut versuchen.");
      }
    });
  });
  