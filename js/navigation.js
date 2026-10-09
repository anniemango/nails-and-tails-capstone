// Save the Menu button and the nav list so the rest of the script can use them
const button = document.querySelector(".menu-button");
const list = document.querySelector("#primary-nav");

// Add the js class to <html> so CSS knows JavaScript is running
// If the script fails, the list is not hidden and all links stay usable
document.documentElement.classList.add("js");

// Show the button. It starts hidden because it only works with JavaScript
button.hidden = false;

// Make the menu start closed, matching aria-expanded="false" in the HTML
list.dataset.open = "false";

// Update aria-expanded (for screen readers) and data-open (for CSS) together
// so they always match
function setMenuOpen(isOpen) {
  button.setAttribute("aria-expanded", String(isOpen));
  list.dataset.open = String(isOpen);
}

// On click, open the menu if aria-expanded isn't "true", otherwise close it.
// It's a real <button>, so Enter and Space trigger click
button.addEventListener("click", () => {
  setMenuOpen(button.getAttribute("aria-expanded") !== "true");
});

// Listen on the whole document so Escape works from anywhere, even inside the menu
// If the menu is open, close it and move focus back to the button
// so keyboard users don't lose their place
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    button.focus();
  }
});
