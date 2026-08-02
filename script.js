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
    alert("Thank you for choosing Teddy Shoes! ❤️");
}

// Dark Mode
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// Welcome teddy shoes website.onload = function () {
    console.teddy bear brand ("Welcome to Teddy Shoes Website");
};