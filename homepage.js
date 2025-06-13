document.addEventListener("DOMContentLoaded", function () {
    // Navbar hover effect
    const navLinks = document.querySelectorAll(".headnav li a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "blue";
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "#333";
        });
    });

    // Smooth scrolling
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Book Now button animation
    const bookButtons = document.querySelectorAll(".professional button");
    bookButtons.forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.1)";
            button.style.transition = "0.3s";
        });
        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1)";
        });
    });

    // Confirm city selection
    document.querySelector(".delivery-section button").addEventListener("click", () => {
        const city = document.getElementById("city").value;
        alert("Service confirmed for " + city);
    });

    // Professional selection alert
    document.getElementById("professional-search").addEventListener("change", function () {
        if (this.value !== "Select a Professional") {
            alert("Searching for " + this.value + " services...");
        }
    });
});

function buyNow() {
   

    alert("Thank you for your interest! Please proceed to purchase.");}

    function scrollLeft() {
        let container = document.getElementById('repairScroll');
        let itemWidth = document.querySelector('.quick-repair').offsetWidth + 20; // Item width + gap
        let scrollAmount = itemWidth * 3; // Scroll by 3 items
        
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }

    function scrollRight() {
        let container = document.getElementById('repairScroll');
        let itemWidth = document.querySelector('.quick-repair').offsetWidth + 20; // Item width + gap
        let scrollAmount = itemWidth * 3; // Scroll by 3 items

        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
    function buynow() {
        alert("Thank you for your interest! Please proceed to purchase.");
    }
    // Get the container for the professionals list


 // Get the container for the professional list
const professionalList = document.querySelector('.professional-list');

// Get the left and right buttons for scrolling
const scrollLeftBtn = document.querySelector('.scroll-left');
const scrollRightBtn = document.querySelector('.scroll-right');

// Function to scroll the container to the left
function scrollLeft() {
    professionalList.scrollBy({
        left: -300, // Scroll left by 300px (adjust as needed)
        behavior: 'smooth' // Smooth scrolling
    });
}

// Function to scroll the container to the right
function scrollRight() {
    professionalList.scrollBy({
        left: 300, // Scroll right by 300px (adjust as needed)
        behavior: 'smooth' // Smooth scrolling
    });
}

// Attach event listeners to the buttons
scrollLeftBtn.addEventListener('click', scrollLeft);
scrollRightBtn.addEventListener('click', scrollRight);



// Toggle chatbot visibility
// Function to send the message
// Toggle chatbot visibility
const chatToggle = document.getElementById("chat-toggle");
const chatWindow = document.getElementById("chat-window");
const closeChat = document.getElementById("close-chat");
const sendMessage = document.getElementById("send-message");

chatToggle.addEventListener("click", () => {
    chatWindow.style.display = "block";
});

closeChat.addEventListener("click", () => {
    chatWindow.style.display = "none";
});

sendMessage.addEventListener("click", () => {
    const message = document.getElementById("chat-input").value;
    if (message.trim()) {
        const chatBody = document.querySelector(".chat-body");
        chatBody.innerHTML += `<p><b>You:</b> ${message}</p>`;
        document.getElementById("chat-input").value = ""; // Clear input
        chatBody.scrollTop = chatBody.scrollHeight; // Scroll to latest message
    }
});










const stars = document.querySelectorAll('.rating .star');
stars.forEach(star => {
    star.addEventListener('click', function() {
        const rating = this.getAttribute('data-rating');
        stars.forEach(star => {
            if (star.getAttribute('data-rating') <= rating) {
                star.textContent = '★';
            } else {
                star.textContent = '☆';
            }
        });
    });
});




const services = document.querySelectorAll('.service');

window.addEventListener('scroll', () => {
    services.forEach(service => {
        const rect = service.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            service.classList.add('visible');
        }
    });
});



const priceRange = document.getElementById('price-range');
const priceValue = document.getElementById('price-value');

priceRange.addEventListener('input', () => {
   priceValue.textContent = `$${priceRange.value}`;
});



// Select the button
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});




const togglBtn = document.getElementById('togglBtn');
        const sidebar = document.getElementById('sidebar');
        
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('expanded');
        });
        
        // Dropdown functionality
        const settingsBtn = document.getElementById('settingsBtn');
        const settingsMenu = document.getElementById('settingsMenu');
        
        settingsBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            
            if (settingsMenu.style.display === 'block') {
                settingsMenu.style.display = 'none';
            } else {
                settingsMenu.style.display = 'block';
            }
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.matches('.dropdown-btn') && !event.target.closest('.dropdown-btn')) {
                const dropdowns = document.querySelectorAll('.dropdown-container');
                const buttons = document.querySelectorAll('.dropdown-btn');
                
                dropdowns.forEach(dropdown => {
                    dropdown.style.display = 'none';
                });
                
                buttons.forEach(button => {
                    button.classList.remove('active');
                });
            }
        });
        
        // Auto-close dropdown when sidebar collapses
        sidebar.addEventListener('transitionend', function() {
            if (!sidebar.classList.contains('expanded')) {
                settingsMenu.style.display = 'none';
                settingsBtn.classList.remove('active');
            }
        });