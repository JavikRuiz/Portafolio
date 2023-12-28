# Portafolio

## Dependencias
```bash
npm i express cors dotenv ejs
```
- **express:**
    - Descripción:
                    Express es un marco web para Node.js que simplifica el desarrollo de aplicaciones web y API. Facilita la creación de rutas, manejo de solicitudes y respuestas, middleware, y otras tareas comunes en el desarrollo web.
    - Uso común:
                    Crear servidores web y construir API RESTful en Node.js.
- **Cors:**
    - Descripción:
                    CORS (Cross-Origin Resource Sharing) es un middleware que permite o restringe el acceso a recursos en una página web desde otro dominio distinto al dominio que sirve la propia página.
    - Uso común:
                    En aplicaciones web, permite o restringe las solicitudes HTTP desde orígenes externos. Es crucial cuando tu frontend y backend están alojados en dominios diferentes.
- **Dotenv:**
    - Descripción:
                    Dotenv es una biblioteca que carga variables de entorno desde un archivo llamado .env en el entorno de desarrollo. Las variables de entorno pueden incluir información sensible como claves de API, configuraciones de bases de datos, etc.
    - Uso común:
                    Cargar configuraciones y secretos sensibles en las aplicaciones sin exponerlos directamente en el código fuente.
- **EJS:**
    - Descripción:
                    Se refiere a "Embedded JavaScript", que es un motor de plantillas (template engine)
    - Uso común:
                    permite la inserción de código JavaScript directamente en documentos HTML este motor de plantillas facilita la generación dinámica de contenido HTML en el servidor.

## Dependencias de desarrollo
- Son paquetes o módulos necesarios durante el proceso de desarrollo y construcción del proyecto, pero no son esenciales para la ejecución del software en un entorno de producción. Estas dependencias se incluyen típicamente en el archivo package.json bajo la propiedad devDependencies.

```bash
npm i nodemon  -D
```
- **Nodemon:**
    - Descripción:
                    Herramienta que ayuda en el desarrollo de aplicaciones Node.js. Es un "monitor de nodos" (Node Monitor) y su nombre es una combinación de las palabras "node" y "daemon" (demonio).
    - Uso común:
                    Reinicia automáticamente la aplicación cuando detecta cambios en los archivos.