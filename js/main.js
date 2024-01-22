document.addEventListener("DOMContentLoaded", function () {
    // Animation for the logo (show first)
    TweenMax.from(".logo", 1, {
        opacity: 0,
        x: -20,
        ease: Expo.easeInOut
    });

    // Animation for the navigation
    TweenMax.staggerFrom("nav ul li", 1, {
        opacity: 0,
        x: -20,
        ease: Power3.easeInOut
    }, 0.08);

    // Animation for the heading
    TweenMax.from(".heading", 1, {
        opacity: 0,
        y: -1000,
        delay: 0.5,
        ease: Power3.easeInOut
    });

    // Animation for the paragraph
    TweenMax.from(".paragraph", 1, {
        opacity: 0,
        y: -1000,
        delay: 1,
        ease: Power3.easeInOut
    });

    // Explicitly set initial opacity of the button to 0
    TweenMax.set(".button", { opacity: 0 });

    // Animation for the button
    TweenMax.to(".button", 1, {
        opacity: 1,
        y: 0,
        delay: 1.5,
        ease: Power3.easeInOut
    });
});

function showMenu() {
    document.getElementById('navLinks').style.right = '0';
}

function hideMenu() {
    // Add your code to hide the menu here
    document.getElementById('navLinks').style.right = '-250px';
}
