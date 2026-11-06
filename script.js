/**
 * PORTFOLIO EXPRESS - ALLAN FLORES
 * Interactive JavaScript for smooth navigation, UI modals & form handling
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- Element Selectors ---
  const header = document.getElementById('mainHeader');
  const mobileToggleBtn = document.getElementById('mobileMenuToggle');
  const mobileNavMenu = document.getElementById('mobileNavMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const contactForm = document.getElementById('contactForm');
  const currentYearSpan = document.getElementById('currentYear');
  
  // Modal Elements
  const modalOverlay = document.getElementById('interactiveModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalPrimaryBtn = document.getElementById('modalPrimaryBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalIconBox = document.getElementById('modalIconBox');

  // --- Project Detailed Information Database ---
  const projectsData = {
    '1': {
      title: 'EduLearn AI – Tutor Inteligente',
      badge: 'Inteligencia Artificial',
      summary: 'Sistema educativo con soporte de IA generativa y grafos de conocimiento.',
      details: 'Este proyecto implementa una arquitectura RAG avanzada (Retrieval-Augmented Generation) para responder dudas de estudiantes en tiempo real sobre materias complejas. Incluye verificación de fuentes para prevenir alucinaciones, almacenamiento vectorial en Pinecone/Chroma y un backend ágil desarrollado en FastAPI y Python con soporte para streaming de respuestas.',
      tech: ['Python', 'FastAPI', 'OpenAI API', 'LangChain', 'Vector DB', 'Next.js UI']
    },
    '2': {
      title: 'FlowHub – Pipeline Empresarial',
      badge: 'Automatización & Cloud',
      summary: 'Orquestación y sincronización de datos de clientes y ventas multi-herramienta.',
      details: 'FlowHub conecta eventos en tiempo real disparados desde pasarelas de pago (Stripe) con flujos de trabajo en n8n y Make. Automatiza el alta de clientes en CRMs empresariales (Salesforce), notifica a los canales dedicados de Slack y envía secuencias personalizadas en Mailchimp con lógica de reintentos y alertas en caso de fallo.',
      tech: ['n8n', 'Node.js', 'Stripe Webhooks', 'Salesforce API', 'PostgreSQL', 'Docker']
    },
    '3': {
      title: 'SkillFlow – Academia Interactiva',
      badge: 'Creación de Apps',
      summary: 'Plataforma web de aprendizaje técnico con consola y editor de código en vivo.',
      details: 'Una aplicación web integral diseñada para la formación técnica en programación y ciencia de datos. Cuenta con lecciones en video enriquecidas, un editor de código embebido para resolver ejercicios en el navegador, guardado de estados en Supabase y métricas de progreso interactivo con analíticas detalladas para profesores y alumnos.',
      tech: ['JavaScript ES6+', 'React', 'Supabase', 'Monaco Editor', 'CSS Grid', 'Cloudflare']
    }
  };

  // --- 1. Set Dynamic Year in Footer ---
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // --- 2. Header Scroll Visual Feedback ---
  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --- 3. Mobile Navigation Menu Toggle ---
  if (mobileToggleBtn && mobileNavMenu) {
    const toggleMenu = (open) => {
      const isOpen = open !== undefined ? open : !mobileNavMenu.classList.contains('open');
      mobileNavMenu.classList.toggle('open', isOpen);
      mobileToggleBtn.setAttribute('aria-expanded', isOpen.toString());
      
      // Update hamburger icon to close (X)
      if (isOpen) {
        mobileToggleBtn.innerHTML = `
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        `;
      } else {
        mobileToggleBtn.innerHTML = `
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        `;
      }
    };

    mobileToggleBtn.addEventListener('click', () => toggleMenu());

    // Auto-close menu when clicking any mobile link
    const mobileLinks = mobileNavMenu.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });
  }

  // --- 4. Smooth Scrolling & Active Navigation Link Update ---
  const sections = document.querySelectorAll('section[id]');
  
  const updateActiveNavLink = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const matchingLink = document.querySelector(`.nav-links a[href*="${sectionId}"]`);

      if (matchingLink) {
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          matchingLink.classList.add('active');
        } else {
          matchingLink.classList.remove('active');
        }
      }
    });
  };

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  // --- 5. Interactive Modal Controls ---
  const openModal = (title, message, isSuccess = true) => {
    if (!modalOverlay) return;

    modalTitle.textContent = title;
    modalDescription.textContent = message;

    if (modalIconBox) {
      if (isSuccess) {
        modalIconBox.style.backgroundColor = '#dcfce7';
        modalIconBox.style.color = '#15803d';
        modalIconBox.innerHTML = `
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        `;
      } else {
        modalIconBox.style.backgroundColor = '#eff6ff';
        modalIconBox.style.color = '#2563eb';
        modalIconBox.innerHTML = `
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        `;
      }
    }

    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalPrimaryBtn) modalPrimaryBtn.addEventListener('click', closeModal);

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
      }
    });
  }

  // --- 6. Project "Detalles" & "Ver Demo" Handlers ---
  const detailsButtons = document.querySelectorAll('.details-trigger');
  detailsButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project-id');
      const project = projectsData[projectId];

      if (project) {
        const stackList = project.tech.join(' • ');
        const messageContent = `${project.details}\n\nStack Tecnológico:\n${stackList}`;
        openModal(project.title, messageContent, false);
      }
    });
  });

  const demoButtons = document.querySelectorAll('.demo-trigger');
  demoButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.getAttribute('data-title');
      openModal(
        `Demostración interactiva: ${title}`,
        `Esta es una demostración creada para Portfolio Express. El entorno simulado para ${title} está listo para ser explorado. ¿Deseas solicitar una prueba en vivo personalizada para tu equipo?`,
        false
      );
    });
  });

  // --- 7. Contact Form Submission Handling ---
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('userName');
      const emailInput = document.getElementById('userEmail');
      const subjectInput = document.getElementById('userSubject');
      const messageInput = document.getElementById('userMessage');
      const submitBtn = document.getElementById('btnContactar');

      // Simple validation
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();

      if (!name || !email || !message) {
        alert('Por favor, completa los campos requeridos (Nombre, Correo y Mensaje).');
        return;
      }

      // Email format check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Por favor, introduce una dirección de correo electrónico válida.');
        emailInput.focus();
        return;
      }

      // Simulate sending state
      const originalBtnHtml = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span>Enviando mensaje...</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="spin">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a10 10 0 0 1 10 10"></path>
        </svg>
      `;

      // Simulate server response delay
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;

        // Reset form
        contactForm.reset();

        // Show elegant success modal
        openModal(
          `¡Gracias por escribir, ${name}!`,
          `Tu mensaje ha sido enviado exitosamente. Allan Flores responderá a tu correo (${email}) a la mayor brevedad posible.`,
          true
        );
      }, 700);
    });
  }

});
