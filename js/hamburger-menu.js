function toggleMenu() {
var element = document.getElementById("toggle-menu");
  if (element.className === "nav-menu-container") {
      // gör navigation menu visible genom att lägga till en ny klass
      element.className += " show-menu";
      document.getElementById("hamburg-menu").style.display = "none";
      document.getElementById("close-hamburg-menu").style.display = "block";
  } else {
      element.className = "nav-menu-container";
      document.getElementById("hamburg-menu").style.display = "block";
      document.getElementById("close-hamburg-menu").style.display = "none";
  }
}
