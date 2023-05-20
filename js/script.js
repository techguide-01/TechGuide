// Function to update the visitor count for the specific page
function updateCounter() {
    // Check if the current page is the specific page where you want to track the visitor count
    if (window.location.pathname === "/index.html") {
      // HTML element where the visitor count will be displayed
      var counterElement = document.getElementById("counter");
  
      // Get the current count from local storage
      var count = localStorage.getItem("visitorCount");
  
      // Check if count exists
      if (count) {
        // Increment the count
        count = parseInt(count) + 1;
      } else {
        // Initialize the count to 1
        count = 1;
      }
  
      // Update the local storage with the new count
      localStorage.setItem("visitorCount", count);
  
      // Update the counter element
      counterElement.textContent = "Visitor Count: " + count;
  
      // Modify the font size
      counterElement.style.fontSize = "1.5rem";

      counterElement.style.color = "#777";
    }
  }
  
  // Call the updateCounter function when the page loads
  window.addEventListener("load", updateCounter);



// main
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

