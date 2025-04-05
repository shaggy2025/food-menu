"use strict";

// Toggle the navigation menu
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");

menuToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuToggleBtn.classList.toggle("active");
  });
}

// Activate the header and back-to-top button when scrolling
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  const shouldBeActive = window.scrollY >= 100;
  header.classList.toggle("active", shouldBeActive);
  backTopBtn.classList.toggle("active", shouldBeActive);
});

// Filter food items
const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach((button) => {
  button.addEventListener("click", function () {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
    const selectedFilter = this.getAttribute("data-filter");
    updateMenuDisplay(selectedFilter);
  });
});

// Display all menu items by default
document.addEventListener("DOMContentLoaded", (event) => {
  updateMenuDisplay("All");
});

// Define the menu items with descriptions and benefits
const menuItems = [
  {
    name: "Chicken Adobo",
    price: 120,
    imageSrc: "./images/ChickenAdobo.jpg",
    imageAlt: "Chicken Adobo",
    category: "Main Dishes",
    description: "Classic Filipino dish with chicken marinated in vinegar, soy sauce, garlic, and spices.",
    benefits: "High in protein, rich in flavor, and contains antimicrobial properties from garlic and vinegar."
  },
  {
    name: "Pancit",
    price: 120,
    imageSrc: "./images/Pancit.png",
    imageAlt: "Pancit",
    category: "Main Dishes",
    description: "Traditional Filipino stir-fried noodles with vegetables and meat.",
    benefits: "Good source of carbohydrates for energy and contains vegetables for fiber and vitamins."
  },
  {
    name: "Chicken Sopas",
    price: 80,
    imageSrc: "./images/sopas.jpg",
    imageAlt: "Chicken sopas",
    category: "Main Dishes",
    description: "Creamy chicken noodle soup with vegetables and milk.",
    benefits: "Comfort food that provides protein from chicken and calcium from milk."
  },
  {
    name: "Lumpia",
    price: 30,
    imageSrc: "./images/Lumpia.jpg",
    imageAlt: "Lumpia",
    category: "Snacks",
    description: "Crispy Filipino spring rolls filled with vegetables and meat.",
    benefits: "Contains vegetables for fiber and vitamins, protein from meat, and provides quick energy."
  },
  {
    name: "Siopao",
    price: 30,
    imageSrc: "./images/Siopao.jpg",
    imageAlt: "Siopao",
    category: "Snacks",
    description: "Steamed buns filled with savory meat filling.",
    benefits: "Good source of carbohydrates and protein, portable snack option."
  },
  {
    name: "Ube Ice Cream",
    price: 30,
    imageSrc: "./images/UbeIceCream.jpg",
    imageAlt: "Ube Ice Cream",
    category: "Desserts",
    description: "Creamy purple yam flavored ice cream.",
    benefits: "Contains antioxidants from ube and provides calcium from dairy."
  },
  {
    name: "Halo-Halo",
    price: 40,
    imageSrc: "./images/Halo-Halo.jpg",
    imageAlt: "Halo-Halo",
    category: "Desserts",
    description: "Colorful Filipino dessert with mixed fruits, sweet beans, jellies, and shaved ice.",
    benefits: "Contains various fruits for vitamins, provides hydration, and offers quick energy from sugars."
  },
  {
    name: "C2 Apple Green Tea",
    price: 20,
    imageSrc: "./images/C2.png",
    imageAlt: "C2 Apple Green Tea",
    category: "Drinks",
    description: "Refreshing apple-flavored green tea drink.",
    benefits: "Contains antioxidants from green tea and helps with hydration."
  },
  {
    name: "Red Horse Beer",
    price: 80,
    imageSrc: "./images/RedHorseBeer.png",
    imageAlt: "Red Horse Beer",
    category: "Drinks",
    description: "Strong Filipino lager beer with high alcohol content.",
    benefits: "For adult consumption only. Enjoy responsibly in moderation."
  },
];

// Create menu item elements with descriptions and benefits
function createMenuItem(item) {
  const li = document.createElement("li");
  li.className = "food-menu-item";
  li.setAttribute("data-category", item.category);
  
  li.innerHTML = `
    <div class="food-menu-card">
      <div class="card-banner">
        <img src="${item.imageSrc}" width="300" height="300" loading="lazy" alt="${item.imageAlt}" class="w-100">
      </div>
      <div class="card-content">
        <h3 class="h3 card-title">${item.name}</h3>
        <div class="price-wrapper">
          <p class="price-text">Price:</p>
          <data class="price">${item.price} pesos</data>
        </div>
        <div class="food-description">
          <p>${item.description}</p>
          <p class="benefits">Benefits: ${item.benefits}</p>
        </div>
      </div>
    </div>`;
  
  return li;
}

// Update the menu display based on the filter
function updateMenuDisplay(filter) {
  const foodMenuList = document.querySelector(".food-menu-list");
  foodMenuList.innerHTML = ""; // Clear the current list

  // Append items that match the filter or all items if filter is 'All'
  menuItems.forEach((item) => {
    if (filter === "All" || item.category === filter) {
      foodMenuList.appendChild(createMenuItem(item));
    }
  });
}

