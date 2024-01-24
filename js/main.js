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
      name: "Mirisan Ravindran",
      job: "Senior Programming Lead - RMUL | Student at Ontario tech",
      image: "https://static-exp1.licdn.com/sc/h/244xhbkr7g40x6bsu4gi6q4ry",
      testimonial:
        "As a student leading the Programming and Computer Vision Teams at RoboMaster, my focus is on making robots smart and efficient. In the Programming Team, we dive into embedded coding, especially in areas like movement and turret control using C. Simultaneously, as the Computer Vision Team Lead, I work on teaching robots to see and understand their surroundings through object recognition and tracking. Currently, we're gearing up for the RoboMaster University Series (RMUL) competition, pushing ourselves to create intelligent robots. It's a hands-on journey of refining code, improving vision solutions, and creating user-friendly interfaces. This experience is not just about technology; it's about learning, leading, and fueling my passion for robotics as a student innovator."
    },
    {
      name: "Matthew Lee",
      job: "Senior Programming Lead - RMUL | Student at Ontario tech",
      image: "https://static-exp1.licdn.com/sc/h/244xhbkr7g40x6bsu4gi6q4ry",
      testimonial:
        "In my second year at Ontario Tech Robotics, I've undergone a transformative journey, acquiring skills from rapid robot programming with WPILIB to tackling embedded systems in projects like RoboMaster. The program has not only enhanced my technical abilities but also improved my communication skills, allowing me to articulate complex concepts effectively. A highlight of my growth has been mastering team coordination and leading collaborative GitHub projects. I've gained a comprehensive understanding of software development practices, emphasizing version control, coding standards, and clear documentation. This experience has instilled in me a commitment to professional excellence in software engineering, providing a solid foundation for my future endeavors in the dynamic field of robotics and beyond."
    },
    {
      name: "Natan Setrakian",
      job: "Mechanical Subteam Member | Student at Ontario tech",
      image: "https://static-exp1.licdn.com/sc/h/244xhbkr7g40x6bsu4gi6q4ry",
      testimonial:
        "Before joining Robomaster, I had little to no experience in engineering design, using CAD software and collaborating with other engineering students. Over three months, I have been exposed to these different aspects of the design process and was able to contribute despite my inexperience. These experiences have given me knowledge I am already putting to use in the winter semester and have allowed me to get ahead of my peers. The team leads are super friendly and will do their best to answer any questions you may have—big thanks to Mike & Kenneth for being especially helpful and looking out for me. "
    },
    {
      name: "Kyle Siwazalian",
      job: "First Year Student at Ontario Tech",
      image: "https://static-exp1.licdn.com/sc/h/244xhbkr7g40x6bsu4gi6q4ry",
      testimonial:
        "I have been a part of Ontario tech robotics since September 2023, and my experience has been amazing. Being fresh out of high school right after the end of the pandemic I had 0 skills in regards to anything robotics related, but I was still welcomed in and taught all I needed to know. The leads were sure to take it slow and carefully show me the basics to Solidworks and various other skills on the Mechanical team, creating an encouraging environment for everyone regardless of skill level."
    },
    {
      name: "Jordan Mihalache",
      job: "Mechacatronics Engineer Student at Ontario Tech",
      image: "https://static-exp1.licdn.com/sc/h/244xhbkr7g40x6bsu4gi6q4ry",
      testimonial:
        "For my first year involved in the Ontario Tech RoboMaster Robotics Team, I had a great learning experience on the mechanical subdivision. Here I worked with energetic and hard-working fellow engineering students to iteratively design, develop, and construct a battle-ready RoboMaster robot! I applied the engineering knowledge I gained from my university courses and helped design the chassis and passive omni-wheel suspension to ensure the bot had reliable and adept movement. With the use of CAD software, stress analysis, and concurrent engineering design through our team's weekly sessions, I believe that this has absolutely enriched my experience at Ontario Tech University and sharpened my design skills which'll allow me to excel in my engineering career! Jordan Mihalache"
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
