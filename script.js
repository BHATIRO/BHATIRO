// =============================
// Smooth Scroll Menu
// =============================
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// =============================
// Sticky Header Shadow
// =============================
window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

});

// =============================
// Booking Form → WhatsApp
// =============================

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

bookingForm.addEventListener("submit", function(e){

e.preventDefault();

let name=document.getElementById("name").value;
let mobile=document.getElementById("mobile").value;
let address=document.getElementById("address").value;
let quantity=document.getElementById("jarQuantity").value;
let date=document.getElementById("deliveryDate").value;
let time=document.getElementById("deliveryTime").value;
let message=document.getElementById("message").value;

let whatsappMessage=
`🛒 *New Water Booking*

👤 Customer Name : ${name}

📞 Mobile Number : ${mobile}

🏠 Address : ${address}

💧 Water Jar : ${quantity}

📅 Delivery Date : ${date}

⏰ Delivery Time : ${time}

📝 Message : ${message}`;

let url="https://wa.me/919929962397?text="+encodeURIComponent(whatsappMessage);

window.open(url,"_blank");

bookingForm.reset();

});

}

// =============================
// Gallery Image Click Zoom
// =============================

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("click",function(){

window.open(this.src,"_blank");

});

});

// =============================
// Fade Animation
// =============================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.style.opacity="0";
sec.style.transform="translateY(40px)";
sec.style.transition="0.8s";

observer.observe(sec);

});
