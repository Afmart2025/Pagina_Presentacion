# Portfolio Express — Allan Flores

Sitio web personal y portafolio profesional desarrollado con **HTML5 semántico, CSS3 moderno y JavaScript vanilla**. Diseñado para destacar el perfil de **Allan Flores** como profesor de Inteligencia Artificial y creador de proyectos digitales.

---

## 🌟 Características Principales

- **Hero Principal Impactante**: Presentación de Allan Flores, subtítulo profesional, botón de llamada a la acción principal *"Ver proyectos"* y retrato en alta calidad.
- **Sección "Sobre mí"**: Trayectoria, filosofía pedagógica orientada a resultados y tarjetas con métricas clave (+5,000 estudiantes formados, 50+ automatizaciones).
- **Sección "Habilidades"**: 4 tarjetas especializadas con efectos hover y etiquetas técnicas:
  - 🧠 **Inteligencia Artificial** (LLMs, RAG, Prompt Engineering, LangChain, Python).
  - ⚡ **Automatizaciones** (n8n, Make, Zapier, Webhooks, APIs REST).
  - 💻 **Creación de apps** (HTML5/CSS3, JavaScript, React, FastAPI, Node.js).
  - 🎓 **Formación online** (Diseño curricular, workshops interactivos, mentorías).
- **Sección "Proyectos"**: 3 tarjetas completas con capturas reales de demostración:
  - *EduLearn AI* – Tutor Inteligente basado en LLMs y grafos de conocimiento.
  - *FlowHub* – Pipeline Empresarial de automatización multicanal (Stripe, CRM, Slack).
  - *SkillFlow* – Plataforma de Micro-Cursos Interactivos con editor de código en vivo.
  - Modales interactivos para ver detalles técnicos de arquitectura y demos simuladas.
- **Sección de Contacto**: Formulario interactivo con botón *"Contactar"*, validación en tiempo real, spinner de carga y ventana modal de confirmación, además de canales directos de comunicación.
- **Diseño Visual**:
  - Tema claro (*light mode*), elegante y profesional.
  - Tarjetas con bordes redondeados (`border-radius: 16px - 22px`) y elevación mediante sombras sutiles.
  - Tipografías modernas (*Plus Jakarta Sans* y *Space Grotesk*).
  - 100% responsivo para teléfonos móviles, tablets y monitores de escritorio.

---

## 📁 Estructura del Proyecto

```text
Pagina_Presentacion/
│
├── index.html                  # Estructura semántica principal y metadatos SEO
├── styles.css                  # Sistema de diseño con variables CSS, responsive y animaciones
├── script.js                   # Interactividad (menú móvil, scroll activo, modales, formulario)
├── README.md                   # Documentación del proyecto
└── assets/
    └── images/
        ├── allan-flores.jpg                   # Fotografía de retrato profesional
        ├── proyecto-ai-tutor.jpg              # Mockup del proyecto EduLearn AI
        ├── proyecto-automatizaciones.jpg      # Mockup del orquestador FlowHub
        └── proyecto-plataforma-educativa.jpg  # Mockup de la plataforma SkillFlow
```

---

## 🚀 Cómo ejecutar o previsualizar

Dado que está construido con tecnologías web estándar (Vanilla HTML, CSS y JS), no requiere dependencias de instalación (`npm install`).

### Opción 1: Abrir directamente en el navegador
Simplemente abre el archivo `index.html` con cualquier navegador web moderno (Chrome, Edge, Firefox, Safari).

### Opción 2: Con un servidor estático local (Recomendado)
Puedes servirlo localmente mediante Python o Node:

```bash
# Con Python 3
python3 -m http.server 8080

# O con npx serve
npx serve .
```

Luego abre tu navegador en `http://localhost:8080`.

---

© 2026 Allan Flores. Portfolio Express.