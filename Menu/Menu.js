// const toggleMenu = () => {
//   // Toggle the "menu--open" class on your menu refence.
//   menu.classList.toggle("menu--open");
// };

// // Start Here: Create a reference to the ".menu" class
// const menu = document.querySelector(".menu");
// // create a reference to the ".menu-button" class
// const menuButton = document.querySelector(".menu-button");
// // Using your menuButton reference, add a click handler that calls toggleMenu
// menuButton.addEventListener("click", toggleMenu);

{
  /* <div class="menu">
  <ul>
    <li>Students</li>
    <li>Faculty</li>
    <li>What's New</li>
    <li>Tech Trends</li>
    <li>Music</li>
    <li>Log Out</li>
  </ul>
</div> */
}

const menu = document.querySelector(".menu");

const uList = document.createElement("ul");
const chList = document.createElement("li");
