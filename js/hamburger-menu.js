function toggleMenu() {
var x = document.getElementById("toggle-menu");
  if (x.className === "nav-menu-links") {
      // gör navigation menu visible genom att lägga till en ny klass
      x.className += " show-menu";
      document.getElementById("hamburg-menu").style.visibility = "hidden";
      document.getElementById("close-hamburg-menu").style.visibility = "visible";
  } else {
      x.className = "nav-menu-links";
      document.getElementById("hamburg-menu").style.visibility = "visible";
      document.getElementById("close-hamburg-menu").style.visibility = "hidden";
  }
}