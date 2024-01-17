document.addEventListener("DOMContentLoaded", function (event) {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // for text 
            if (entry.isIntersecting && (Array.from(document.querySelectorAll(".text")).includes(entry.target) || Array.from(document.querySelectorAll(".stats-col")).includes(entry.target))) {
                entry.target.classList.add('animate__fadeIn');
            }

            // for subteam cols
            if (entry.isIntersecting && Array.from(document.querySelectorAll(".course-col")).includes(entry.target)) {
                entry.target.classList.add('animate__fadeInDown');
            };

            // for learn more cols
            if (entry.isIntersecting && Array.from(document.querySelectorAll(".facility-col")).includes(entry.target)) {
                entry.target.classList.add('animate__bounceIn');
            };

            // counter anim for stats (WIP)
            // if (entry.isIntersecting && Array.from(document.querySelectorAll(".counter")).includes(entry.target)) {
            //     const counters = document.querySelectorAll(".counter");

            //     counters.forEach(counter => {
            //         counter.innerText = '0';

            //         const updateCounter = () => {
            //             const target = +counter.getAttribute('data-target');
            //             const current = +counter.innerText;

            //             const increment = target / 200;

            //             if (current < target) {
            //                 counter.innerText = `${Math.ceil(current + increment)}`;
            //                 setTimeout(updateCounter, 10);
            //             }
            //         }

            //         updateCounter();
            //     });
            // };
        });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
});


