# Linktree personal

Linktree personal desarrollado con **React, TypeScript y Tailwind CSS**, diseñado como una **landing editorial** y no como una simple lista de enlaces.

El proyecto prioriza **claridad visual, rendimiento y arquitectura limpia**, con un comportamiento adaptativo entre móvil y escritorio.

---

## 📌 Descripción

Este proyecto funciona como **carta de presentación técnica y personal**.

Sirve como punto central para enlazar perfiles profesionales (LinkedIn, GitHub, YouTube, ArtStation, etc.) y, al mismo tiempo, como proyecto visible en GitHub que demuestra criterio de diseño, toma de decisiones técnicas y cuidado por el detalle.

No es un linktree genérico: está planteado como una **landing minimalista**, con jerarquía clara entre imagen, identidad y acción.

---

## 🛠️ Tecnologías utilizadas

- **React**
- **TypeScript** (configuración estricta)
- **Vite**
- **Tailwind CSS v4**
- **GSAP** (animaciones sutiles, solo cuando el dispositivo lo permite)

---

## 🎨 Decisiones de diseño clave

- Enfoque **editorial / creativo**, no UI de app
- Hero con imagen personal (humanización frente a logo)
- Tipografía display solo para identidad, sistema para UI
- Layout sin scroll en móvil
- Comportamiento adaptativo:
  - **Móvil:** enlaces elásticos que se adaptan a la altura disponible
  - **Desktop:** animaciones y efectos solo cuando hay hover, pointer fino y no hay reduced motion
- Fondo limpio en móvil, fondo editorial sutil en escritorio

---

## 🎯 Qué demuestra este proyecto

- Uso de React con componentes pequeños y bien separados
- Tipado estricto y código mantenible
- Gestión consciente de layout con Flexbox y unidades modernas (`dvh`)
- Adaptación real a contexto (dispositivo, accesibilidad, rendimiento)
- Integración controlada de animaciones sin comprometer UX
- Atención al detalle visual sin sobreingeniería

---

## 📄 Licencia

Este proyecto se publica bajo la licencia **MIT**.
