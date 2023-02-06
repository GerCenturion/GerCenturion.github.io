alert ("Este es el proyecto final de Gerson Centurion");

const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
  };
  
  const toggleLightMode = () => {
    document.body.classList.remove("dark-mode");
  };
  
  const darkModeButton = document.getElementById("toggle-dark-mode");
  darkModeButton.addEventListener("click", toggleDarkMode);
  
  const lightModeButton = document.getElementById("toggle-light-mode");
  lightModeButton.addEventListener("click", toggleLightMode);
  