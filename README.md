# Premios al Deporte — Demo de presentación

Demo de sitio estático para el evento anual tipo **gala/premiación**. Pensada para mostrar
la propuesta a un cliente antes de desarrollar la versión final.

## Cómo verla

Es 100% estática. Opciones:

- **Abrir directo:** doble clic en `index.html`.
- **Con servidor local (recomendado, para que carguen mapa e imágenes):**
  ```bash
  cd DeporteWebApp
  python3 -m http.server 8080
  # abre http://localhost:8080
  ```

## Las 3 fases del evento

El botón **"Demo"** (abajo a la derecha) cambia el estado del sitio para presentar cada escenario:

| Fase | Qué muestra |
|------|-------------|
| **Previo** | Cuenta regresiva, fecha, formulario de **inscripción** de candidaturas. |
| **En curso** | Banner "En directo", **transmisión en vivo** y feed minuto a minuto. |
| **Posterior** | **Premiados**, galería del evento e invitación a la próxima edición. |

También puedes forzar la fase por URL para una presentación dirigida:
`index.html?fase=encurso` · `?fase=previo` · `?fase=posterior`

## Secciones incluidas

Hero · Sobre el evento · Agenda · Categorías · Conferencias · Autoridades ·
Inscripción · En vivo · Premiados · Galería (fotos y video) · Ubicación (mapa) ·
Próxima edición · Footer.

## Personalizar

- **Logo / marca:** reemplaza `logo.jpeg`.
- **Colores y tipografías:** variables CSS al inicio de `css/styles.css` (`:root`).
- **Fecha del evento / countdown:** constante `target` en `js/main.js`.
- **Textos e imágenes:** directamente en `index.html` (las fotos usan Unsplash como placeholder).

> Todos los contenidos (nombres, fotos, datos) son ilustrativos para la demo.
