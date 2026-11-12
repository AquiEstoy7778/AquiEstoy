/* ============================================================
   WORLD — Interacciones del sitio
   ------------------------------------------------------------
   ⚠️ ÚNICO DATO QUE DEBES CAMBIAR AQUÍ:
   Reemplaza el número de WhatsApp por el tuyo.
   Formato: código de país + número, SIN "+", SIN espacios
   ni guiones. Ejemplo Argentina: 5491123456789
   ============================================================ */

const WHATSAPP_NUMERO = "584124090996";

/* Mensaje que el cliente enviará ya escrito al abrir WhatsApp */
const WHATSAPP_MENSAJE =
    "Hola AquíEstoy, quiero mejorar el perfil de mi negocio en Google Maps. ¿Me cuentan cómo funciona?";

/* ------------------------------------------------------------
   1. Conectar todos los botones de WhatsApp
   ------------------------------------------------------------ */
(function conectarWhatsApp() {
    const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(WHATSAPP_MENSAJE)}`;
    document.querySelectorAll("[data-wa]").forEach(function (enlace) {
        enlace.href = url;
        enlace.target = "_blank";
        enlace.rel = "noopener noreferrer";
    });
})();

/* ------------------------------------------------------------
   2. Navegación: sombra al hacer scroll + menú móvil
   ------------------------------------------------------------ */
(function navegacion() {
    const nav = document.getElementById("nav");
    const toggle = document.getElementById("navToggle");
    const links = document.getElementById("navLinks");

    if (!nav || !toggle || !links) return;

    /* Sombra sutil cuando la página se desplaza */
    const actualizarNav = function () {
        nav.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    actualizarNav();
    window.addEventListener("scroll", actualizarNav, { passive: true });

    /* Abrir / cerrar menú móvil */
    const cerrarMenu = function () {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Abrir menú");
        document.body.classList.remove("menu-abierto");
    };

    toggle.addEventListener("click", function () {
        const abierto = links.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(abierto));
        toggle.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
        document.body.classList.toggle("menu-abierto", abierto);
    });

    /* Cerrar al pulsar un enlace, con Escape o al tocar fuera */
    links.querySelectorAll("a").forEach(function (enlace) {
        enlace.addEventListener("click", cerrarMenu);
    });

    document.addEventListener("keydown", function (evento) {
        if (evento.key === "Escape" && links.classList.contains("is-open")) {
            cerrarMenu();
            toggle.focus();
        }
    });

    document.addEventListener("click", function (evento) {
        if (!links.classList.contains("is-open")) return;
        if (!links.contains(evento.target) && !toggle.contains(evento.target)) {
            cerrarMenu();
        }
    });

    /* Si se agranda la ventana, restaurar el estado de escritorio */
    window.addEventListener("resize", function () {
        if (window.innerWidth > 860 && links.classList.contains("is-open")) {
            cerrarMenu();
        }
    });
})();

/* ------------------------------------------------------------
   3. Animaciones de aparición (IntersectionObserver)
   ------------------------------------------------------------ */
(function animacionesScroll() {
    const elementos = document.querySelectorAll(".reveal");
    if (!elementos.length) return;

    /* Si el navegador no soporta el observer o el usuario
       prefiere menos movimiento, mostramos todo directamente. */
    const prefiereMenosMovimiento = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!("IntersectionObserver" in window) || prefiereMenosMovimiento) {
        elementos.forEach(function (el) {
            el.classList.add("is-visible");
        });
        return;
    }

    const observador = new IntersectionObserver(
        function (entradas) {
            entradas.forEach(function (entrada) {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add("is-visible");
                    observador.unobserve(entrada.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elementos.forEach(function (el) {
        observador.observe(el);
    });
})();

/* ------------------------------------------------------------
   4. Botón flotante de WhatsApp
   ------------------------------------------------------------ */
(function botonFlotante() {
    const boton = document.querySelector(".wa-float");
    if (!boton) return;

    const actualizar = function () {
        boton.classList.toggle("is-visible", window.scrollY > 380);
    };

    actualizar();
    window.addEventListener("scroll", actualizar, { passive: true });
})();

/* ------------------------------------------------------------
   5. Año automático en el footer
   ------------------------------------------------------------ */
(function anioAutomatico() {
    const anio = document.getElementById("anio");
    if (anio) {
        anio.textContent = new Date().getFullYear();
    }
})();

/* ------------------------------------------------------------
   6. Enlace activo en la navegación según la sección visible
   ------------------------------------------------------------ */
(function seccionActiva() {
    const secciones = document.querySelectorAll("main section[id], footer[id]");
    const enlacesNav = document.querySelectorAll('.nav-links a[href^="#"]');
    if (!secciones.length || !enlacesNav.length || !("IntersectionObserver" in window)) return;

    const observador = new IntersectionObserver(
        function (entradas) {
            entradas.forEach(function (entrada) {
                if (!entrada.isIntersecting) return;
                const id = entrada.target.getAttribute("id");

                enlacesNav.forEach(function (enlace) {
                    const esActivo = enlace.getAttribute("href") === `#${id}`;
                    enlace.classList.toggle("activo", esActivo);
                    if (esActivo) {
                        enlace.setAttribute("aria-current", "true");
                    } else {
                        enlace.removeAttribute("aria-current");
                    }
                });
            });
        },
        { threshold: 0.4 }
    );

    secciones.forEach(function (seccion) {
        observador.observe(seccion);
    });
})();
