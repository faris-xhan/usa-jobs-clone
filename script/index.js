const navLinks = document.querySelectorAll(".nav-link");
const searchBtn = document.querySelector(".search-btn");
const header3 = document.querySelector(".header-3");

// Clear the nav-bar active links
const clearNavLinks = () => {
  navLinks.forEach(
    (l) => l.classList.contains("active") && l.classList.remove("active")
  );
};

navLinks.forEach((link) => {
  link.onclick = (e) => {
    // Remove search-bar and search-bar-btn active status
    searchBtn.classList.remove("active");
    header3.classList.remove("active");
    clearNavLinks(); // clear nav
    // add active status to current clicked link
    link.classList.add("active");
  };
});

searchBtn.onclick = (e) => {
  clearNavLinks();

  // Manages Search Bar Status and Buttons
  if (e.target.classList.contains("active")) {
    // if search-bar-btn is active make search-bar appear
    e.target.classList.remove("active");
    header3.classList.remove("active");
  } else {
    // if search-bar-btn is inactive make search-bar disappear
    e.target.classList.add("active");
    header3.classList.add("active");
  }
};
