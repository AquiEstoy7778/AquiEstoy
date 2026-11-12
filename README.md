# AquíEstoy — Presencia en Google Maps

Sitio de una página + tarjeta de presentación para **AquíEstoy**,
agencia de presencia local en Google Maps.

HTML5 semántico + CSS3 puro + JavaScript sin dependencias.
Listo para GitHub Pages.

---

## 1. Archivos del proyecto

```
pagina web/
├── index.html                        Página del sitio
├── style.css                         Estilos (rojo #E12726 + gris #2F3437)
├── script.js                         WhatsApp, menú móvil y animaciones
├── robots.txt                        Instrucciones para buscadores
├── sitemap.xml                       Mapa del sitio para Google
├── assets/
│   ├── favicon.svg                   Ícono de la pestaña (pin rojo)
│   ├── og-image.png                  Vista previa al compartir el link (1200×630)
│   ├── hero-google-maps.svg          Imagen del hero (temporal)
│   └── filosofia-aquiestoy.svg       Imagen de "Nosotros" (temporal)
├── _tarjeta/
│   ├── AquiEstoy-Tarjetas-Carta.pdf  ✅ PDF listo para imprimir
│   ├── tarjeta-presentacion.html     Fuente editable de la tarjeta
│   ├── og-image.html                 Fuente de la imagen para redes
│   ├── qr-whatsapp.png               QR usado en la tarjeta
│   └── generar_qr.py                 Regenera el QR si cambia el número
├── _backup/                          Versión anterior (World)
└── README.md
```

> Las carpetas que empiezan con `_` (`_tarjeta`, `_backup`) **no se publican**
> en GitHub Pages, así que el PDF y los respaldos no quedan expuestos en el sitio.

---

## 2. Cómo subir los cambios a GitHub Pages

El repositorio ya está publicado en
**https://aquiestoy7778.github.io/World-Landing/**.
Solo hay que reemplazar los archivos.

### Opción A — Desde la web de GitHub (sin instalar nada)

1. Entra a `github.com` → tu repositorio (`World-Landing`).
2. Pulsa **Add file → Upload files**.
3. Arrastra estos archivos desde la carpeta del proyecto:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
   - `robots.txt`
   - `sitemap.xml`
   - la carpeta **`assets`** completa
4. Abajo escribe un mensaje, por ejemplo `Rebranding AquíEstoy`, y pulsa
   **Commit changes**.
5. Espera 1–2 minutos (Actions → Pages) y recarga el sitio con **Ctrl + F5**.

> Arrastrar un archivo con el mismo nombre **lo reemplaza**. No borres nada
> antes: GitHub guarda el historial y siempre puedes volver atrás.

### Opción B — Con Git desde la terminal

```bash
cd "C:\Users\agent\Downloads\pagina web"

# Solo la primera vez, si la carpeta no es un repo:
git init
git remote add origin https://github.com/TUUSUARIO/TUREPO.git
git branch -M main

# Cada vez que cambies algo:
git add index.html style.css script.js README.md assets
git commit -m "Rebranding AquíEstoy"
git push origin main
```

### Comprobar la publicación

- Repositorio → pestaña **Actions**: el workflow `pages build and deployment`
  debe quedar en verde.
- Si el navegador muestra la versión vieja, es caché: **Ctrl + F5** o ventana
  privada.

---

## 3. Tarjeta de presentación

Archivo: **`_tarjeta/AquiEstoy-Tarjetas-Carta.pdf`**

- Hoja **carta (8.5 × 11 in)**, 2 páginas.
- **Página 1: frente** · **Página 2: dorso** (10 tarjetas por hoja, 3.5 × 2 in).
- Incluye guías de corte muy tenues.

### Cómo imprimir

1. Abre el PDF con Adobe Acrobat / Chrome.
2. Tamaño de papel: **Carta**.
3. Escala: **100 % / Tamaño real** (¡no "Ajustar a la página"!).
4. Márgenes: **Ninguno**.
5. Activa **"Gráficos de fondo"** / "Imprimir colores de fondo".
6. Papel recomendado: opalina o cartulina de 250–300 g.
7. Corta por las guías (guillotina o regla y cúter).

Para imprimir el dorso por detrás, usa la opción **doble cara** con
"voltear por el borde largo". Haz primero una hoja de prueba en papel común
para verificar la alineación.

### Editar la tarjeta

Abre `_tarjeta/tarjeta-presentacion.html` en el navegador para verla y edítala
con VS Code. Los datos actuales:

- **WhatsApp:** +58 412-4090996
- **QR:** apunta a `https://wa.me/584124090996?text=Hola%20AquiEstoy`
- **Claim:** "Diagnóstico gratuito"
- **Servicios:** Perfil · Reseñas · Capacitación

Si cambia el número, actualiza `generar_qr.py` y ejecuta:

```bash
python _tarjeta/generar_qr.py
```

Luego vuelve a generar el PDF (Chrome → Imprimir → Guardar como PDF).

---

## 4. Datos del sitio

- **URL publicada:** https://aquiestoy7778.github.io/World-Landing/
- Número de WhatsApp: **+58 412-4090996** → `wa.me/584124090996`
  (configurado en `script.js` y en los `href` de `index.html`).
- Paleta: rojo `#E12726`, gris `#2F3437`, fondos suaves `#F6F7F8` / `#FEF2F2`.
- Tipografía: **Inter** (texto) y **Poppins** (logotipo).
- Breakpoints: 1079, 980, 860, 768, 640 y 480 px.

La URL ya está configurada en `canonical`, `og:url`, `og:image`, `robots.txt`,
`sitemap.xml` y en el JSON-LD. Si algún día cambia el nombre del repositorio o
se usa un dominio propio, hay que actualizarla en esos seis lugares.

---

## 5. Pendientes

- [ ] **Subir los archivos nuevos a GitHub** (ver sección 2).
- [ ] Fotos reales del negocio (reemplazar los `.svg` de `assets/`).
- [ ] Nombre y cargo de la persona en la tarjeta (opcional).
- [ ] Correo y redes sociales en el footer (opcional).
- [ ] Dominio propio (opcional).

---

## 6. Notas técnicas

- Las animaciones de aparición solo se activan si JavaScript carga; sin él,
  todo el contenido sigue visible.
- Respeta `prefers-reduced-motion`.
- Auditoría Lighthouse: 100/100 en Accesibilidad, Buenas Prácticas y SEO.
