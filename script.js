// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Header Shadow
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.style.boxShadow = window.scrollY > 50
        ? "0 4px 10px rgba(0,0,0,0.2)"
        : "none";
});

// Booking Form → WhatsApp
document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobile").value;
    const address = document.getElementById("address").value;
    const quantity = document.getElementById("jarQuantity").value;
    const date = document.getElementById("deliveryDate").value;
    const time = document.getElementById("deliveryTime").value;
    const message = document.getElementById("message").value;

    const text =
`🛒 *New Water Booking*

👤 Customer Name: ${name}
📞 Mobile: ${mobile}
🏠 Address: ${address}
💧 Jar Quantity: ${quantity}
📅 Delivery Date: ${date}
⏰ Delivery Time: ${time}
📝 Message: ${message}`;

    window.open(
        "https://wa.me/919929962397?text=" + encodeURIComponent(text),
        "_blank"
    );
});
