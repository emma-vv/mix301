// Star toggle functionality
document.querySelectorAll(".star-button").forEach((button) => {
  button.addEventListener("click", function () {
    const svg = this.querySelector("svg");
    const isStarred = svg.getAttribute("opacity") !== "0.3";

    if (isStarred) {
      // Unstar
      svg.setAttribute("opacity", "0.3");
      svg.querySelector("path").setAttribute("fill", "none");
      svg.querySelector("path").setAttribute("stroke", "white");
      svg.querySelector("path").setAttribute("stroke-width", "1");
    } else {
      // Star
      svg.setAttribute("opacity", "1");
      svg.querySelector("path").setAttribute("fill", "white");
      svg.querySelector("path").removeAttribute("stroke");
      svg.querySelector("path").removeAttribute("stroke-width");
    }
  });
});

