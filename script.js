// ==========================
// BHATI R.O. WEBSITE
// ==========================

document.getElementById("bookingForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let address = document.getElementById("address").value;
    let product = document.getElementById("product").value;
    let qty = document.getElementById("qty").value;

    let message =
`📦 *New Water Booking*

👤 Name: ${name}

📞 Mobile: ${mobile}

📍 Address: ${address}

💧 Product: ${product}

🧴 Quantity: ${qty}

Website: bhatiro.in`;

    let url =
"https://wa.me/919929962397?text="
+ encodeURIComponent(message);

    window.open(url,"_blank");
});

// Smooth Scroll
document.querySelectorAll('nav a').forEach(link=>{
    link.addEventListener('click',function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
        .scrollIntoView({
            behavior:'smooth'
        });
    });
});

// Header Shadow
window.addEventListener("scroll",function(){
    let header=document.querySelector("header");

    if(window.scrollY>50){
        header.style.background="#005fa3";
    }else{
        header.style.background="#0077cc";
    }
});
