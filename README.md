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

## Publicar en GitHub Pages

El repositorio Git ya está inicializado y con el primer commit hecho (rama `main`).
Incluye `.nojekyll` para que GitHub sirva `css/` y `js/` sin procesarlos. Solo falta
crear el repo remoto y hacer push:

**Opción A — con la web de GitHub (sin instalar nada):**
1. Entra a <https://github.com/new> y crea un repositorio (ej. `premios-piedra-alta`). No agregues README ni .gitignore.
2. En esta carpeta ejecuta (reemplaza `TU-USUARIO`):
   ```bash
   git remote add origin https://github.com/TU-USUARIO/premios-piedra-alta.git
   git push -u origin main
   ```
3. En el repo: **Settings → Pages → Build and deployment → Source: "Deploy from a branch"**, rama `main`, carpeta `/ (root)` → **Save**.
4. En ~1 min estará en `https://TU-USUARIO.github.io/premios-piedra-alta/`.

**Opción B — con GitHub CLI (`gh`):**
```bash
brew install gh        # si no lo tienes
gh auth login          # inicia sesión una vez
gh repo create premios-piedra-alta --public --source=. --remote=origin --push
gh api -X POST repos/:owner/premios-piedra-alta/pages -f source[branch]=main -f source[path]=/
```

> Las rutas del sitio son relativas, así que funciona igual en la raíz del dominio
> o en un subdirectorio (`usuario.github.io/repo/`).
