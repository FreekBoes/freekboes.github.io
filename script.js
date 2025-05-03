// script.js

document.addEventListener('DOMContentLoaded', () => {
    // --------- Image Comparison Slider -----------
    const container  = document.getElementById('slider-container');
    const foreground = document.getElementById('slider-foreground');
    const handle     = document.getElementById('slider-handle');
  
    if (container && foreground && handle) {
      let isDragging = false;
      let containerRect;
  
      function setPosition(clientX) {
        let x = clientX - containerRect.left;
        x = Math.max(0, Math.min(containerRect.width, x));
        const pct = (x / containerRect.width) * 100;
        foreground.style.width = pct + '%';
        handle.style.left = pct + '%';
      }
  
      function startDrag(e) {
        isDragging = true;
        containerRect = container.getBoundingClientRect();
        setPosition(e.touches ? e.touches[0].clientX : e.clientX);
      }
  
      function onDrag(e) {
        if (!isDragging) return;
        setPosition(e.touches ? e.touches[0].clientX : e.clientX);
      }
  
      function endDrag() {
        isDragging = false;
      }
  
      handle.addEventListener('mousedown', startDrag);
      window.addEventListener('mousemove', onDrag);
      window.addEventListener('mouseup',   endDrag);
      handle.addEventListener('touchstart', startDrag);
      window.addEventListener('touchmove',  onDrag);
      window.addEventListener('touchend',   endDrag);
      container.addEventListener('click', e => {
        containerRect = container.getBoundingClientRect();
        setPosition(e.clientX);
      });
    }
  
    // --------- Faster Favicon Rotation -----------
    const link = document.getElementById('favicon');
    if (link) {
      const img = new Image();
      img.src = link.href;
      img.onload = () => {
        const size   = 32;
        const canvas = document.createElement('canvas');
        canvas.width  = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
  
        let angle = 0;
        let lastTime = performance.now();
  
        function rotateFavicon(now) {
          const delta = now - lastTime;
          lastTime = now;
          const speed = (120 * Math.PI / 180);
          angle += speed * (delta / 1000);
  
          ctx.clearRect(0, 0, size, size);
          ctx.save();
          ctx.translate(size/2, size/2);
          ctx.rotate(angle);
          ctx.drawImage(img, -size/2, -size/2, size, size);
          ctx.restore();
  
          link.href = canvas.toDataURL('image/png');
          requestAnimationFrame(rotateFavicon);
        }
  
        requestAnimationFrame(rotateFavicon);
      };
    }
  
    // --------- Masonry Lightbox for Projects -----------
    const projects = {
      1: {
        img: 'src/images/project1.png',
        title: 'Project One',
        desc: 'A web app built with React and Tailwind that lets users track tasks in real time.',
        link: '#'
      },
      2: {
        img: 'src/images/project2.png',
        title: 'Project Two',
        desc: 'A RESTful API built with Node.js and Express, featuring JWT authentication.',
        link: '#'
      },
      3: {
        img: 'src/images/project3.png',
        title: 'Project Three',
        desc: 'A mobile app prototype created in Figma and React Native to manage personal finance.',
        link: '#'
      }
      // Voeg hier extra projecten toe met opeenvolgende keys
    };
  
    const modal      = document.getElementById('modal');
    const modalImg   = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc  = document.getElementById('modal-desc');
    const modalLink  = document.getElementById('modal-link');
  
    window.openModal = function(id) {
      if (!projects[id]) return;
      const data = projects[id];
      modalImg.src           = data.img;
      modalTitle.textContent = data.title;
      modalDesc.textContent  = data.desc;
      modalLink.href         = data.link;
      modal.classList.remove('opacity-0','pointer-events-none');
      modal.classList.add('opacity-100');
    };
  
    window.closeModal = function() {
      modal.classList.add('opacity-0');
      modal.classList.remove('opacity-100');
      setTimeout(() => modal.classList.add('pointer-events-none'), 300);
    };
  
    // --------- Typing Animation for Intro -----------
    function typeText(el, speed = 100, callback) {
      const text = el.getAttribute('data-text');
      let i = 0;
      el.textContent = '';
      function step() {
        if (i < text.length) {
          el.textContent += text.charAt(i++);
          setTimeout(step, speed);
        } else if (callback) {
          callback();
        }
      }
      step();
    }
  
    const line1      = document.getElementById('typed-line1');
    const firstname  = document.getElementById('typed-firstname');
    const lastname   = document.getElementById('typed-lastname');
  
    if (line1 && firstname && lastname) {
      typeText(line1, 100, () => {
        setTimeout(() => {
          typeText(firstname, 120, () => {
            setTimeout(() => {
              firstname.textContent += ' ';
              typeText(lastname, 120);
            }, 200);
          });
        }, 300);
      });
    }
  });
  
  // --------- Section Slide‑in Animations -----------
const animatedSections = document.querySelectorAll('.js-animate');
const observerOptions = { threshold: 0.2 };

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const dir = entry.target.dataset.direction;
      const animClass = dir === 'left'
        ? 'animate-slide-in-left'
        : 'animate-slide-in-right';
      entry.target.classList.add(animClass);
      sectionObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

animatedSections.forEach(sec => {
  sectionObserver.observe(sec);
});