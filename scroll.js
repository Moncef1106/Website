class ScrollFadeElements {
  constructor() {
    this.prevScrollPos = window.pageYOffset;
    this.elements = document.querySelectorAll('h1, h5, p:not(#phonetext):not(#emailtext):not(#csstext):not(#htmltext):not(#jstext)');

    // Attach the scroll event listener to the window
    window.addEventListener('scroll', this.handleScroll.bind(this));

    // Add a CSS transition property to the elements for a smooth fading effect
    this.elements.forEach(element => {
      element.style.transition = 'opacity 0.5s ease-in-out'; // Adjust the transition duration as needed
    });
  }

  handleScroll() {
    const currentScrollPos = window.pageYOffset;
    if (this.prevScrollPos > currentScrollPos) {
      // Scrolling up - fade in the elements
      this.fadeInElements();
    } else {
      // Scrolling down - fade out the elements
      this.fadeOutElements();
    }
    this.prevScrollPos = currentScrollPos;
  }

  fadeInElements() {
    this.elements.forEach(element => {
      if (element === document.querySelector('#infotext')) {
        element.classList.add('fade-in'); // Add the fade-in class to #infotext
      } else {
        element.style.opacity = 1;
      }
    });
  }
  
  fadeOutElements() {
    this.elements.forEach(element => {
      if (element === document.querySelector('#infotext')) {
        element.classList.remove('fade-in'); // Remove the fade-in class from #infotext
        element.classList.add('fade-out'); // Add the fade-out class to #infotext
      } else {
        element.style.opacity = 0;
      }
    });
  }
}  

// Create an instance of the ScrollFadeElements class
const scrollFade = new ScrollFadeElements();