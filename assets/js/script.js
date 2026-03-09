/**
 * Professional Web Project - Main Script File
 * Handles UI interactions and basic e-commerce functionality.
 */

// Sayfa içeriği tamamen yüklendiğinde çalışacak ana fonksiyon
document.addEventListener("DOMContentLoaded", () => {
    console.log("Website successfully loaded and initialized!");
    
    // Sepet butonuna tıklama olayı
    const cartBtn = document.getElementById("cartBtn");
    if (cartBtn) {
        cartBtn.addEventListener("click", () => {
            alert("Redirecting to shopping cart...");
        });
    }
});

// Global sepet değişkeni
let cartItemCount = 0;

/**
 * Adds a product to the cart and updates the UI.
 * This function is triggered by the "Add to Cart" buttons.
 */
function addToCart() {
    cartItemCount++;
    
    // UI'daki sepet sayısını güncelle
    const cartCountElement = document.getElementById("cartCount");
    if (cartCountElement) {
        cartCountElement.textContent = cartItemCount;
    }

    // Kullanıcıya küçük bir bildirim ver
    console.log(`Item added! Total items in cart: ${cartItemCount}`);
}