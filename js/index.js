const scrollingHeader = () => {
  let lastScroll = 0;
  const step = 200;
  const header = document.querySelector(".header");

  const scrollPosition = () =>
    window.scrollY || document.documentElement.scrollTop;
  const containsHide = () => header.classList.contains("hide");

  window.addEventListener("scroll", () => {
    if (
      scrollPosition() > lastScroll &&
      !containsHide() &&
      scrollPosition() > step
    ) {
      header.classList.add("hide");
    } else if (scrollPosition() < lastScroll && containsHide()) {
      header.classList.remove("hide");
    }

    lastScroll = scrollPosition();
  });
};

scrollingHeader();
