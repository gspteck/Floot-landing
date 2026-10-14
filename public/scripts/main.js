(() => {
  // Soft reveal for in-view sections (progressive enhancement).
  const nodes = document.querySelectorAll(".band, .quote-panel");
  if (!("IntersectionObserver" in window) || !nodes.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  nodes.forEach((el) => io.observe(el));
})();
