document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".account-section");

    sections.forEach(section => {
        section.addEventListener("click", function () {
            const sectionId = this.id;
            handleSectionClick(sectionId);
        });
    });

    function handleSectionClick(sectionId) {
        switch (sectionId) {
            case "orders":
                alert("Redirecting to Orders page...");
                // window.location.href = "/orders"; // Uncomment and modify URL if needed
                break;
            case "wishlist":
                alert("Redirecting to Wishlist...");
                // window.location.href = "/wishlist";
                break;
            case "coupons":
                alert("Checking available coupons...");
                // window.location.href = "/coupons";
                break;
            case "help":
                alert("Opening Help section...");
                // window.location.href = "/help";
                break;
            default:
                console.log("Unknown section clicked");
        }
    }
});
