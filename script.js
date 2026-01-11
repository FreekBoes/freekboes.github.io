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
  
    // --------- Project Modal System -----------
    const projectData = {
      beersebende: {
        title: 'De Beerse Bende',
        description: 'De Beerse Bende is a comprehensive web application developed for a local business client. The platform manages their business operations including inventory management, customer relations, and administrative tasks. Built with Laravel and Tailwind CSS, it features a modern, user-friendly interface with extensive CRUD operations.',
        clientNeeds: 'The client needed a custom web application to streamline their business operations. They required features for managing inventory, tracking customer orders, handling authentication and authorization for different user roles, and generating reports. The system needed to be intuitive and accessible for staff with varying levels of technical expertise.',
        learned: [
          'Advanced Laravel features including Eloquent relationships and query optimization',
          'Implementing role-based access control (RBAC) for different user types',
          'Working directly with a real client and gathering requirements',
          'Agile development methodology and sprint planning',
          'Database design for complex business logic'
        ],
        type: 'Group Project (Team of 6)',
        contribution: 'As a team member, I was responsible for developing the calendar system, helping with the database structure design, and contributing to the API development. Additionally, I performed extensive code reviews to ensure code quality and consistency across the project.',
        links: [
          { text: 'View Website', url: 'https://app.debeersebende.be/', icon: 'external' }
        ]
      },
      zentech: {
        title: 'ZenTech Webshop',
        description: 'ZenTech is a fully functional e-commerce platform built with Laravel and Tailwind CSS. The webshop features a complete shopping experience including product browsing, shopping cart functionality, secure checkout process, and order management. It was developed as part of the Web Development course at Thomas More.',
        clientNeeds: 'The project requirements were to create a complete online webshop that mimics real-world e-commerce functionality. The system needed to handle product catalogs, user authentication, shopping cart operations, order processing, and payment integration. Additionally, it required an admin panel for managing products, orders, and users.',
        learned: [
          'E-commerce architecture and shopping cart implementation',
          'Payment gateway integration and secure transaction handling',
          'Advanced Laravel features: middleware, service providers, and events',
          'Responsive design principles with Tailwind CSS',
          'SEO optimization for e-commerce platforms'
        ],
        type: 'Individual School Project',
        contribution: 'As the sole developer, I was responsible for all aspects of the project including planning, database design, backend development with Laravel, frontend implementation with Tailwind CSS, testing, and deployment.',
        links: []
      },
      handbal: {
        title: 'Handbal Overpelt',
        description: 'Handbal Overpelt is my first independent project outside of school. I developed a complete website for my local handball team to showcase their teams, schedule, news, and club information. The website is fully responsive and built with modern web technologies including Tailwind CSS for styling.',
        clientNeeds: 'The handball club needed a modern, professional website to improve their online presence. They required pages for different age groups and teams, a news section, contact information, photo galleries, and downloadable forms. The website needed to be easy to navigate and mobile-friendly as many users would access it from their phones.',
        learned: [
          'Working with a real-world client and managing expectations',
          'Responsive web design and mobile-first approach',
          'Image optimization for web performance',
          'Creating intuitive navigation structures',
          'Deploying and maintaining a live website'
        ],
        type: 'Individual Client Project',
        contribution: 'I handled the complete project lifecycle as the sole developer - from initial meetings with the club board, gathering requirements, designing the layout, development, testing, deployment, and ongoing maintenance.',
        links: [
          { text: 'View Website', url: 'src/HandbalOverpelt/index.html', icon: 'external' },
          { text: 'GitHub Repository', url: 'https://github.com/FreekBoes/HandbalOverpelt', icon: 'github' }
        ]
      },
      firstportfolio: {
        title: 'First Portfolio',
        description: 'This was my very first portfolio website, built during my free time to showcase my early skills and projects. Developed with Bootstrap, HTML, CSS, and JavaScript, it represents my initial journey into web development. The website follows W3C standards and demonstrates fundamental web development principles.',
        clientNeeds: 'The goal was to create a personal portfolio to present my skills, projects, and contact information in a professional manner. The website needed to be responsive, follow web standards, and showcase my abilities to potential collaborators or employers.',
        learned: [
          'Bootstrap framework fundamentals',
          'HTML5 semantic elements and best practices',
          'CSS styling and layout techniques',
          'JavaScript DOM manipulation and interactivity',
          'W3C validation and web standards compliance'
        ],
        type: 'Individual Personal Project',
        contribution: 'I independently developed this entire portfolio from scratch, including the design concept, layout implementation, content creation, and deployment. This project served as my introduction to full-stack web development.',
        links: [
          { text: 'View Portfolio', url: 'src/First_portfolio/index.html', icon: 'external' },
          { text: 'GitHub Repository', url: 'https://github.com/FreekBoes/freekboes.github.io', icon: 'github' }
        ]
      }
    };

    window.openProjectModal = function(projectId) {
      const modal = document.getElementById('project-modal');
      const project = projectData[projectId];

      if (!project || !modal) return;

      // Set content
      document.getElementById('modal-title').textContent = project.title;
      document.getElementById('modal-description').textContent = project.description;
      document.getElementById('modal-client-needs').textContent = project.clientNeeds;
      document.getElementById('modal-type').textContent = project.type;
      document.getElementById('modal-contribution').textContent = project.contribution;

      // Set learned items
      const learnedList = document.getElementById('modal-learned');
      learnedList.innerHTML = '';
      project.learned.forEach(item => {
        const li = document.createElement('div');
        li.className = 'flex items-start gap-3 text-gray-700';
        li.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#3c5d79] flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <span>${item}</span>
        `;
        learnedList.appendChild(li);
      });

      // Set links
      const linksContainer = document.getElementById('modal-links');
      linksContainer.innerHTML = '';
      if (project.links.length > 0) {
        project.links.forEach(link => {
          const a = document.createElement('a');
          a.href = link.url;
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
          a.className = 'inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#3c5d79] text-white hover:bg-[#2d4557] transition';

          if (link.icon === 'github') {
            a.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              ${link.text}
            `;
          } else {
            a.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              ${link.text}
            `;
          }
          linksContainer.appendChild(a);
        });
      } else {
        linksContainer.innerHTML = '<p class="text-gray-500 italic">No external links available for this project.</p>';
      }

      // Show modal
      modal.classList.remove('opacity-0', 'pointer-events-none');
      modal.classList.add('opacity-100');
      document.body.style.overflow = 'hidden';
    };

    window.closeProjectModal = function() {
      const modal = document.getElementById('project-modal');
      if (!modal) return;

      modal.classList.add('opacity-0');
      modal.classList.remove('opacity-100');
      document.body.style.overflow = '';
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

// --------- Hamburger Menu Toggle -----------
const navToggle  = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');

function setMenu(open) {
  if (!mobileMenu || !navToggle) return;
  mobileMenu.classList.toggle('hidden', !open);
  navToggle.setAttribute('aria-expanded', String(open));
}

if (navToggle && mobileMenu) {
  // Toggle
  navToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = !mobileMenu.classList.contains('hidden');
    setMenu(!isOpen);
  });

  // Sluiten bij klik op link
  document.querySelectorAll('#mobile-menu .mobile-link').forEach(a => {
    a.addEventListener('click', () => setMenu(false));
  });

  // Sluiten bij klik buiten
  document.addEventListener('click', (e) => {
    const inside = mobileMenu.contains(e.target) || navToggle.contains(e.target);
    const isOpen = !mobileMenu.classList.contains('hidden');
    if (isOpen && !inside) setMenu(false);
  });

  // Sluiten met Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setMenu(false);
  });

  // Zorg dat we starten als dicht menu
  setMenu(false);
}
