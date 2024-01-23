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
      name: "Kenneth Martinez",
      job: "Team Lead | Student at Ontario tech",
      image: "https://static-exp1.licdn.com/sc/h/244xhbkr7g40x6bsu4gi6q4ry",
      testimonial:
        "Embarking on my journey with Ontario Tech Robotics in the fall of 2022, I started as the Jr. Design Lead. This role expanded my mechanical design skills beyond classroom teachings, allowing me to apply them practically in creating prototypes for our robots. The experience was pivotal for my growth. In 2023, I was honored to step into the role of Robomaster Team Leader, marking a transformative chapter. Managing the team not only taught me effective leadership but also provided insights into collaborative goal-setting within the club. Recognizing that the group's success hinged on knowledge transfer, I dedicated myself to learning and sharing with my teammates. Leading by example, I worked hard and collaboratively with my peers every day. This journey has been a positive one, filled with growth and camaraderie. I'm proud to contribute to a team fostering not just robotics but also a culture of excellence. I am excited about the future of Ontario Tech Robotics, and I hope my experience inspires more students to join, offering a platform for both technical and leadership growth. If you share a passion for robotics and a desire to excel, this is the ideal community for you."
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
