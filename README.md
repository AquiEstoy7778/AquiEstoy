# AquíEstoy — Presencia en Google Maps

Sitio de una página + tarjeta de presentación para **AquíEstoy**,
agencia de presencia local en Google Maps.

Servicios que muestra la página: optimización de Google Maps, ecosistema
físico-digital con QR, **creación de páginas web**, capacitación de personal y
acompañamiento constante. Cierra con una tarjeta de **diagnóstico gratuito**.

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
**https://aquiestoy7778.github.io/AquiEstoy/**.
Solo hay que reemplazar los archivos.

### Opción A — Desde la web de GitHub (sin instalar nada)

1. Entra a `github.com` → tu repositorio (`AquiEstoy`).
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
- **Servicios:** Perfil · Reseñas · Web · Capacitación

Si cambia el número, actualiza `generar_qr.py` y ejecuta:

```bash
python _tarjeta/generar_qr.py
```

Luego vuelve a generar el PDF (Chrome → Imprimir → Guardar como PDF).

---

## 4. Datos del sitio

- **URL publicada:** https://aquiestoy7778.github.io/AquiEstoy/
- Número de WhatsApp: **+58 412-4090996** → `wa.me/584124090996`
  (configurado en `script.js` y en los `href` de `index.html`).
- **Mensajes de WhatsApp:** todos los botones usan el mensaje general de
  `script.js`. Un botón puede llevar su propio texto agregando
  `data-wa-msg="..."` (así lo hace el botón *Pedir diagnóstico*).
- Paleta: rojo `#E12726`, gris `#2F3437`, fondos suaves `#F6F7F8` / `#FEF2F2`.
- Tipografía: **Inter** (texto) y **Poppins** (logotipo).
- Breakpoints: 1079, 980, 860, 768, 640 y 480 px.

La URL ya está configurada en `canonical`, `og:url`, `og:image`, `twitter:image`,
`robots.txt`, `sitemap.xml` y en el JSON-LD. Si algún día cambia el nombre del
repositorio o se usa un dominio propio, hay que actualizarla en esos lugares.

> **Historial de URL:** el repositorio se llamaba `World-Landing`. Al renombrarlo
> a `AquiEstoy` la dirección anterior (`.../World-Landing/`) deja de existir
> (devuelve 404), así que cualquier enlace viejo en redes sociales, firmas o
> publicaciones debe reemplazarse por la nueva.

---

## 5. Seguridad

Este sitio es **estático**: no tiene usuarios, contraseñas, base de datos, panel de
administración ni formularios. Por eso no puede sufrir las fallas típicas de las
webs con login (token manipulable, escalada de privilegios, inyección SQL).

Lo que sí se aplica y ya está configurado:

- **CSP estricta** (`Content-Security-Policy` en el `<head>`): la página solo
  carga recursos propios y las fuentes de Google. Cualquier script inyectado o
  de terceros se bloquea.
- **Script en línea autorizado por huella SHA-256**, no con `unsafe-inline`.
  Si alguien modifica ese script, el navegador lo rechaza.
- **`referrer` limitado** a `strict-origin-when-cross-origin`: al salir hacia
  WhatsApp no se filtra la ruta completa de origen.
- **HTTPS obligatorio** (GitHub Pages lo fuerza y envía HSTS).
- **Sin cookies, sin rastreo, sin datos personales** más allá del WhatsApp que
  el visitante decide pulsar.

> ⚠️ **Si editas el `<script>` en línea del `<head>`** (el que agrega la clase
> `js`), su huella cambia y el navegador lo bloqueará: las animaciones dejarán
> de activarse (el contenido sigue visible). Recalcula la huella y pégala en la
> CSP con:
>
> ```powershell
> $s = [regex]::Match((Get-Content index.html -Raw), '<script>(.*?)</script>').Groups[1].Value
> "sha256-" + [Convert]::ToBase64String([Security.Cryptography.SHA256]::Create().ComputeHash([Text.Encoding]::UTF8.GetBytes($s)))
> ```

### Lo que GitHub Pages no permite

No se pueden definir cabeceras HTTP propias, así que quedan fuera
`X-Frame-Options` (anti-clickjacking), `X-Content-Type-Options` y
`Permissions-Policy`. En este sitio el impacto es nulo: no hay acciones
sensibles que proteger. Si algún día se migra a un hosting propio (Netlify,
Vercel, Cloudflare Pages), conviene agregarlas.

### Reglas para las webs de tus clientes (cuando tengan login)

1. La sesión va en cookie `HttpOnly; Secure; SameSite=Lax`, **nunca en
   `localStorage`**: cualquier XSS podría leerla.
2. El servidor valida **firma y rol en cada petición**. El rol nunca se toma del
   navegador: si el cliente dice `admin`, se ignora hasta comprobarlo.
3. Ocultar el botón "Administración" no protege nada: la ruta también debe
   estar protegida en el servidor.
4. Contraseñas con `Argon2` o `bcrypt`; nunca en texto plano ni con MD5/SHA-1.
5. Límite de intentos en el login y tokens de acceso de vida corta.
6. HTTPS en todo el sitio, también en las APIs internas.

---

## 6. Pendientes

- [ ] **Subir los archivos nuevos a GitHub** (ver sección 2).
- [ ] Fotos reales del negocio (reemplazar los `.svg` de `assets/`).
- [ ] Nombre y cargo de la persona en la tarjeta (opcional).
- [ ] Correo y redes sociales en el footer (opcional).
- [ ] Dominio propio (opcional).

---

## 7. Notas técnicas

- Las animaciones de aparición solo se activan si JavaScript carga; sin él,
  todo el contenido sigue visible.
- Respeta `prefers-reduced-motion`.
- Auditoría Lighthouse: 100/100 en Accesibilidad, Buenas Prácticas y SEO.
