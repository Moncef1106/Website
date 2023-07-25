class ScrollFadeElements {
    constructor() {
      this.prevScrollPos = window.pageYOffset;
      this.elements = document.querySelectorAll('h1, h5, p, .katpng');

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
        element.style.opacity = 1;
      });
    }

    fadeOutElements() {
      this.elements.forEach(element => {
        element.style.opacity = 0;
      });
    }
  }

  // Create an instance of the ScrollFadeElements class
  const scrollFade = new ScrollFadeElements();