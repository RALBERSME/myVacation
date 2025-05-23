class MarqueeKit {
    constructor(selector, options = {}) {
      this.options = {
        images: [],
        speed: 150,
        height: 300,
        imageWidth: 250,
        gap: 20,
        pauseOnHover: false,
        reverse: false,
        imageScale: 1,
        borderRadius: 8,
        ...options,
      };
   
      this.container =
        typeof selector === "string"
          ? document.querySelector(selector)
          : selector;
      if (!this.container) {
        console.error("MarqueeKit: Container element not found");
        return;
      }
     
      this.isAnimating = false;
      this.lastTimestamp = null;
      this.currentTranslate = 0;
      this.contentWidth = 0;
      this.animationFrame = null;
      this.targetSpeed = this.options.speed;
      this.currentSpeed = this.options.speed;
   
      this.boundAnimate = this.animate.bind(this);
      this.visibilityChangeHandler = this.handleVisibilityChange.bind(this);
     
      this.init();
    }
 
    init() {
      this.setupContainer();
      this.createContent();
    }
  
    setupContainer() {
     
      this.container.classList.add("marquee-container");
      
      this.container.style.height = `${this.options.height}px`;
      
      this.container.style.overflow = "hidden";

      this.container.style.position = "relative";
   
      this.loadingOverlay = document.createElement("div");
      this.loadingOverlay.classList.add("marquee-loading");
      
      this.container.appendChild(this.loadingOverlay);
    }
 
    createContent() {
     
      this.track = document.createElement("div");
      this.track.classList.add("marquee-track");
      
      this.items = this.options.images.map((src) => {
        const item = document.createElement("div");
        item.classList.add("marquee-item");
        item.style.marginRight = `${this.options.gap}px`;
        const img = document.createElement("img");
        img.src = src;
        img.classList.add("marquee-image");
        img.loading = "lazy";
     
        img.style.width = `${this.options.imageWidth}px`;
        img.style.height = "100%";
        img.style.objectFit = "cover";
        img.style.display = "block";
        img.style.backfaceVisibility = "hidden";
        img.style.transform = "translateZ(0)";
        img.style.transition = "transform 0.3s ease";
        img.style.borderRadius = `${this.options.borderRadius}px`; 
        item.appendChild(img);
        return item;
      });
      
      this.container.addEventListener("mouseover", (event) => {
        if (event.target.classList.contains("marquee-image")) {
          event.target.style.transform = `scale(${this.options.imageScale})`;
        }
      });
      this.container.addEventListener("mouseout", (event) => {
        if (event.target.classList.contains("marquee-image")) {
          event.target.style.transform = "scale(2.5)";
        }
      });
    
      this.items.forEach((item) => this.track.appendChild(item));
      this.itemsClone = this.items.map((item) => item.cloneNode(true));
      this.itemsClone.forEach((item) => this.track.appendChild(item));
   
      this.container.appendChild(this.track);
      
      this.items.forEach((item) =>
        this.track.appendChild(item.cloneNode(true))
      );
      this.items.forEach((item) =>
        this.track.appendChild(item.cloneNode(true))
      );
      this.items.forEach((item) =>
        this.track.appendChild(item.cloneNode(true))
      );
      this.items.forEach((item) =>
        this.track.appendChild(item.cloneNode(true))
      );
     
      this.waitForImages().then(() => {
        if (this.loadingOverlay) {
          this.container.removeChild(this.loadingOverlay);
          this.loadingOverlay = null;
        }
        this.calculateDimensions();
        this.setupIntersectionObserver();
        this.setupEventListeners();
        this.startAnimation();
      });
    }
   
    setBorderRadius(radius) {
      this.options.borderRadius = radius;
      const images = this.container.querySelectorAll(".marquee-image");
      images.forEach((img) => {
        img.style.borderRadius = `${radius}px`;
      });
    }
  
    waitForImages() {
      const images = Array.from(
        this.container.querySelectorAll("img")
      ).slice(0, 7); // Select only the first 7 images
      const promises = images.map((img) => {
        return new Promise((resolve) => {
          if (img.complete) {
            resolve();
          } else {
            img.onload = img.onerror = resolve;
          }
        });
      });
      return Promise.all(promises); 
    }
   
    calculateDimensions() {
     
      this.contentWidth = this.items.reduce((total, item) => {
        const style = window.getComputedStyle(item);
        const marginRight = parseFloat(style.marginRight);
        return total + item.offsetWidth + marginRight;
      }, 0);
     
      this.track.style.width = `${this.contentWidth * 4}px`;
      
      if (this.options.reverse) {
        this.currentTranslate = -this.contentWidth;
      }
    }
   
    debounce(func, wait) {
      let timeout;
      return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
      };
    }
   
    animate(timestamp) {
      if (!this.isAnimating) return;
      if (!this.lastTimestamp) {
        this.lastTimestamp = timestamp;
      }
      const elapsed = timestamp - this.lastTimestamp;
      this.lastTimestamp = timestamp;
      
      const speedDiff = this.targetSpeed - this.currentSpeed;
      if (Math.abs(speedDiff) > 0.1) {
        this.currentSpeed += speedDiff * 0.03; 
      } else {
        this.currentSpeed = this.targetSpeed;
      }

      const distance = (this.currentSpeed * elapsed) / 1000;
      this.currentTranslate += this.options.reverse ? distance : -distance;
      
      const totalWidth = this.contentWidth;
      if (this.options.reverse) {
        this.currentTranslate =
          ((this.currentTranslate + totalWidth) % totalWidth) - totalWidth;
      } else {
        this.currentTranslate = this.currentTranslate % totalWidth;
      }
     
      this.track.style.transform = `translate3d(${this.currentTranslate}px, 0, 0)`;
      this.animationFrame = requestAnimationFrame(this.boundAnimate);
    }
   
    setupIntersectionObserver() {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.startAnimation();
            } else {
              this.stopAnimation();
            }
          });
        },
        {
          threshold: 0.1,
        }
      );
      this.observer.observe(this.container);
    }
    
    setupEventListeners() {
    
      if (this.options.pauseOnHover) {
        this.container.addEventListener("mouseenter", () =>
          this.slowDown()
        );
        this.container.addEventListener("mouseleave", () => {
          if (document.visibilityState === "visible") {
            this.speedUp();
          }
        });
      }
    
      document.addEventListener(
        "visibilitychange",
        this.visibilityChangeHandler
      );
    }
    
    handleVisibilityChange() {
      if (document.visibilityState === "visible") {
        this.startAnimation();
      } else {
        this.stopAnimation();
      }
    }
   
    startAnimation() {
      if (!this.isAnimating) {
        this.isAnimating = true;
        this.lastTimestamp = null;
        this.animationFrame = requestAnimationFrame(this.boundAnimate);
      }
    }
   
    stopAnimation() {
      this.isAnimating = false;
      if (this.animationFrame) {
        cancelAnimationFrame(this.animationFrame);
        this.animationFrame = null;
      }
    }
   
    slowDown() {
      this.targetSpeed = 0;
    }
    
    speedUp() {
      this.targetSpeed = this.options.speed;
      this.startAnimation();
    }
   
    pause() {
      this.slowDown();
    }
    
    play() {
      this.speedUp();
    }
   
    setSpeed(speed) {
      this.options.speed = speed;
      this.targetSpeed = speed;
      this.currentSpeed = speed;
    }
    
    destroy() {
      this.stopAnimation();
      this.container.innerHTML = "";
  
      if (this.observer) {
        this.observer.disconnect();
      }
      document.removeEventListener(
        "visibilitychange",
        this.visibilityChangeHandler
      );
      window.removeEventListener("resize", this.resetDimensions);
    }
  }
 
  if (typeof module !== "undefined" && module.exports) {
    module.exports = MarqueeKit;
  } else {
    window.MarqueeKit = MarqueeKit;
  }

  
  const images1 = [
    "Images/BuenosA/basilica-836229_640.jpg",
    "Images/BuenosA/buenos-aires-109926_640.jpg",
    "Images/BuenosA/buenos-aires-182221_640.jpg",
    "Images/BuenosA/buenos-aires-2437858_640.jpg",
    "Images/BuenosA/buenos-aires-245387_640.jpg",
    "Images/BuenosA/floralis-generica-6587189_640.jpg",
    "Images/BuenosA/buenos-aires-51497_640.jpg",
    "Images/BuenosA/little-path-351167_640.jpg",
    "Images/BuenosA/madero-port-588394_640.jpg",
    "Images/BuenosA/madero-port-588398_640.jpg",
  ];

  new MarqueeKit("#basic-marquee", {
    images: images1,
    height: 200,
    imageWidth: 150,
    speed: 20,
    gap: 20,
    reverse: false,
    imageScale: 0.98,
    pauseOnHover: false,
    borderRadius: 8,
  });

  function changePage() {
    window.location.href= 'tango.html'; 
  }