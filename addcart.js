document.addEventListener("DOMContentLoaded", function () {
    const cartContainer = document.querySelector(".cart-container");
    const cartMessage = document.querySelector(".cart-message");
    const savedList = document.querySelector(".saved-list");
    const removeButtons = document.querySelectorAll(".remove-btn");
    const addItemButton = document.createElement("button");
    const cartList = document.createElement("ul");
    cartList.classList.add("cart-list");
    cartContainer.appendChild(cartList);

    addItemButton.textContent = "Add Item";
    addItemButton.style.marginTop = "10px";
    addItemButton.style.padding = "8px 12px";
    addItemButton.style.backgroundColor = "#4caf50";
    addItemButton.style.color = "white";
    addItemButton.style.border = "none";
    addItemButton.style.borderRadius = "5px";
    addItemButton.style.cursor = "pointer";
    cartContainer.appendChild(addItemButton);

    addItemButton.addEventListener("click", function () {
        const newItem = prompt("Enter item name:");
        if (newItem) {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<span>🛍️ ${newItem}</span> <button class='remove-btn'>Remove</button>`;
            
            if (cartList.children.length === 0 || cartMessage.textContent.includes("No product added till now")) {
                cartMessage.style.display = "none";
            }
            
            cartList.appendChild(listItem);
            attachRemoveEvent(listItem.querySelector(".remove-btn"));
        }
    });

    removeButtons.forEach(button => {
        attachRemoveEvent(button);
    });

    function attachRemoveEvent(button) {
        button.addEventListener("click", function () {
            const listItem = this.parentElement;
            listItem.remove();
            
            if (cartList.children.length === 0) {
                cartMessage.style.display = "block";
                cartMessage.textContent = "No product added till now";
            }
        });
    }
});
