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


const testimonials = [
    {
      name: "Mirisan Ravindran",
      job: "Computer Vision Team Lead | Student at Ontario tech",
      image: "https://static-exp1.licdn.com/sc/h/244xhbkr7g40x6bsu4gi6q4ry",
      testimonial:
        "someone write something here"
    },
    {
      name: "Kenneth idk his last name",
      job: "Camper | Durham College",
      image: "https://static-exp1.licdn.com/sc/h/244xhbkr7g40x6bsu4gi6q4ry",
      testimonial:
        "someone write something"
    },
    {
      name: "What's sup",
      job: "idk | homeless",
      image: "https://static-exp1.licdn.com/sc/h/244xhbkr7g40x6bsu4gi6q4ry",
      testimonial:
        "anyone wanna to do this"
    },
    {
      name: "Ronal",
      job: "where | when",
      image: "https://static-exp1.licdn.com/sc/h/244xhbkr7g40x6bsu4gi6q4ry",
      testimonial:
        "idk"
    }
  ];
  let f = 0;
  let j = testimonials.length;
  let testimonialContainer = document.getElementById("testimonial-container");
  function next() {
    f = (j + f + 1) % j;
    displayTestimonial();
  }
  
  function prev() {
    f = (j + f - 1) % j;
    displayTestimonial();
  }
  let displayTestimonial = () => {
    testimonialContainer.innerHTML = `
          <p>${testimonials[f].testimonial}</p>
           <img src=${testimonials[f].image}></img>
          <h3>${testimonials[f].name}</h3>
          <h6>${testimonials[f].job}</h6>
          `;
  };
  window.onload = displayTestimonial;
