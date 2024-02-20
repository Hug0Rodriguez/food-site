const icons = document.querySelectorAll(".section-1-icons i");

setInterval(() => {
    const currentIcon = document.querySelector(".section-1-icons .change");
    currentIcon.classList.remove("change");

    // Check if the current icon is the last one; if so, move to the first icon
    if (currentIcon.nextElementSibling) {
        currentIcon.nextElementSibling.classList.add("change");
    } else {
        // If the current icon is the last one, add 'change' to the first icon
        icons[0].classList.add("change");
    }
}, 4000);
