// Change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('.nav').classList.toggle
        ('window-scroll', window.scrollY > 80)
})


// Show/Hide faq answer
function toggleFAQ(faq) {
    faq.classList.toggle('open');

    // change icon
    const icon = faq.querySelector('.faq__icon i');
    if (icon.className === "uil uil-plus") {
        icon.className = "uil uil-minus"
    } else {
        icon.className = "uil uil-plus"
    }
}

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            toggleFAQ(faq);
        }
    })

    faq.addEventListener('click', function () {
        toggleFAQ(faq);
    })
})



// show/hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
    menu.style.display = "flex";
    menuBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
});

// close nav menu
closeBtn.addEventListener("click", () => {
    menu.style.display = "none";
    menuBtn.style.display = "inline-block";
    closeBtn.style.display = "none";
});