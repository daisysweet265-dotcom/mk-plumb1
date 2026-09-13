(() => {
  const services = [
    {
      src: "./images/narrowboat-heating.jpg",
      alt: "Engineer servicing a heating system inside a narrowboat",
      caption: "Heating systems",
    },
    {
      src: "./images/narrowboat-kitchen.jpg",
      alt: "Finished narrowboat galley kitchen with sink and plumbing access",
      caption: "Kitchen plumbing",
    },
    {
      src: "./images/narrowboat-bathroom.jpg",
      alt: "Finished bathroom and shower inside a narrowboat",
      caption: "Bathroom fitting",
    },
  ];

  const tabs = [...document.querySelectorAll(".narrowboat-tabs button")];
  const panel = document.querySelector("#narrowboat-service-image");
  const image = panel?.querySelector("img");
  const caption = panel?.querySelector(".narrowboat-image-label strong");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      const service = services[index];
      tabs.forEach((item) => item.setAttribute("aria-selected", "false"));
      tab.setAttribute("aria-selected", "true");
      if (image) {
        image.src = service.src;
        image.alt = service.alt;
      }
      if (caption) caption.textContent = service.caption;
    });
  });

  document.querySelectorAll(".mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => link.closest("details")?.removeAttribute("open"));
  });
})();
