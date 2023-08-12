function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
    var darkModeIcon = document.getElementById("darkModeIcon");
    darkModeIcon.textContent = body.classList.contains("dark-mode") ? "🔆" : "🌕";
  }
  