const changeThemeBtn = document.querySelector("#change-theme");

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// salva a preferência do usuário
function loadTheme() {
  const darkMode = localStorage.getItem("dark");

  if (darkMode) {
    toggleDarkMode();
  }
}

loadTheme();

changeThemeBtn.addEventListener("change", function () {
  toggleDarkMode();

 
  //Salva ou remove dark mode
  localStorage.removeItem("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }
});