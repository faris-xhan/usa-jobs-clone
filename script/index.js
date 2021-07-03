const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((navItem) => {
  navItem.onclick = (e) => {
    navItems.forEach(
      (i) => i.classList.contains("active") && i.classList.remove("active")
    );
    e.target.classList.add("active");
  };
});
