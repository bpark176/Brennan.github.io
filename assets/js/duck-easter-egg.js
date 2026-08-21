(() => {
  const sequence = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a",
  ];
  let progress = 0;
  let active = false;

  function releaseDuck(top, size, fromLeft) {
    const duck = document.createElement("span");
    duck.textContent = "🦆";
    duck.setAttribute("aria-hidden", "true");
    Object.assign(duck.style, {
      position: "fixed",
      top,
      fontSize: size,
      zIndex: "999999",
      pointerEvents: "none",
      transition: "transform 12s linear",
    });

    if (fromLeft) {
      duck.style.left = "-100px";
      document.body.appendChild(duck);
      requestAnimationFrame(() => {
        duck.style.transform = "translateX(120vw)";
      });
    } else {
      duck.style.right = "-100px";
      duck.style.transform = "scaleX(-1)";
      document.body.appendChild(duck);
      requestAnimationFrame(() => {
        duck.style.transform = "translateX(-120vw) scaleX(-1)";
      });
    }

    window.setTimeout(() => duck.remove(), 12000);
  }

  function activate() {
    if (active) return;
    active = true;
    releaseDuck("40px", "50px", true);
    releaseDuck("300px", "35px", false);
    releaseDuck("550px", "70px", true);
    window.setTimeout(() => {
      active = false;
    }, 12000);
  }

  document.addEventListener("keydown", event => {
    const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
    progress = key === sequence[progress] ? progress + 1 : key === sequence[0] ? 1 : 0;
    if (progress === sequence.length) {
      progress = 0;
      activate();
    }
  });
})();
