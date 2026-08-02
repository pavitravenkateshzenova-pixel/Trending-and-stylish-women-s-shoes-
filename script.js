// Teddy Shoes Website JavaScript

let cartCount = 0;

// Add to Cart
function addToCart() {
    cartCount++;
    document.getElementById("cart-count").textContent = cartCount;

    alert("🧸 Teddy Shoes added to your cart!");
}

// Buy Now
function buyNow() {
    alert("Thank you for choosing Teddy Shoes! ❤️");const products = [
  {id: 1, name: "Pink Fancy Teddy Sneakers", price: 1499, oldPrice: 1999, img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500", desc: "Super soft pink sneakers with fur lining"},
  {id: 2, name: "Rose Gold Bear Slippers", price: 1199, oldPrice: 1599, img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500", desc: "Luxury indoor slippers with bear ears"},
  {id: 3, name: "Cream Teddy Boots", price: 1899, oldPrice: 2299, img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500", desc: "Winter boots with thick teddy lining"},
  {id: 4, name: "Peach Party Teddy Heels", price: 1699, oldPrice: 2099, img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500", desc: "Fancy heels for parties and weddings"},
  {id: 5, name: "Black Panda Shoes", price: 1399, oldPrice: 1799, img: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=500", desc: "Stylish black shoes with panda design"},
  {id: 6, name: "Rainbow Teddy Flats", price: 999, oldPrice: 1299, img: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500", desc: "Colorful flats for daily college wear"}
];

let cart = [];

function displayProducts(){
  const grid = document.getElementById('product-grid');
  products.forEach(p => {
    const card = document.createElement('div');
    card .....
}

// Dark Mode
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// Welcome teddy shoes website.onload = function () {
    console.teddy bear brand ("Welcome to Teddy Shoes Website");
};const products = [
  {id: 1, name: "Pink Fancy Teddy Sneakers", price: 1499, oldPrice: 1999, img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500", desc: "Super soft pink sneakers with fur lining"},
  {id: 2, name: "Rose Gold Bear Slippers", price: 1199, oldPrice: 1599, img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500", desc: "Luxury indoor slippers with bear ears"},
  {id: 3, name: "Cream Teddy Boots", price: 1899, oldPrice: 2299, img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500", desc: "Winter boots with thick teddy lining"},
  {id: 4, name: "Peach Party Teddy Heels", price: 1699, oldPrice: 2099, img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500", desc: "Fancy heels for parties and weddings"},
  {id: 5, name: "Black Panda Shoes", price: 1399, oldPrice: 1799, img: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=500", desc: "Stylish black shoes with panda design"},
  {id: 6, name: "Rainbow Teddy Flats", price: 999, oldPrice: 1299, img: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500", desc: "Colorful flats for daily college wear"}
];

let cart = [];

function displayProducts(){
  const grid = document.getElementById('product-grid');
  products.forEach(p => {
    const card = document.createElement('div');
    card