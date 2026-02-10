function toggleTheme() {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
}

// load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}
