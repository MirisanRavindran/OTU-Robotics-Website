// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
    const progressBar = event.target.querySelector('.progress-bar');
    const updatingBar = event.target.querySelector('.update-bar');
    updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
    if (event.detail.totalProgress === 1) {
      progressBar.classList.add('hide');
      event.target.removeEventListener('progress', onProgress);
    } else {
      progressBar.classList.remove('hide');
    }
  };
  document.querySelector('model-viewer').addEventListener('progress', onProgress);


  
document.addEventListener("DOMContentLoaded", function(event) {

    // THIS FUNCTION GETS CALLED WHENEVER A SPAN18 ELEMENT (OR ELEMENTS) COME INTO OR GO OUT OF VIEW
          function callback (observations, observer) {
            observations.forEach(observation => {
              if (observation.isIntersecting) { //IF IT'S IN VIEW
                observation.target.classList.add('animated');
              }
              else {
                observation.target.classList.remove('animated');
              }      
           });
         }
          
          // CREATE AN INTERSECTION OBSERVER
          let options = {
             root: null, //null means it will observe on the viewport
             rootMargin: '0px',
             threshold: 1.0 //1 means the whole element needs to be viewable before we animate it
          }
    
          let observer = new IntersectionObserver(callback, options);
          
          // NOW PUT THE OBSERVER ON EACH OF THE ELEMENTS WE WANT TO ANIMATE WHEN IT'S IN VIEW
          let spans = document.querySelectorAll('span18');
          for (let i=0; i< spans.length; i++) {
            observer.observe(spans[i]); 
          }
    });