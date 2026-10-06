# Laboratorio de SIG y Percepción Remota — CICY

Versión estática del sitio académico, creada a partir de https://labsigpr.wordpress.com/ el 6 de octubre de 2026.

## Entrega

`dist/` contiene la web lista para alojamiento estático: siete páginas HTML, estilos, JavaScript y 36 imágenes copiadas del sitio original y el logo proporcionado por la usuaria. No necesita npm, base de datos ni un servidor de aplicaciones. Todos los enlaces internos son relativos, por lo que funciona también en un subdirectorio de GitHub Pages.

Se conservaron los textos disponibles en el sitio original, sus enlaces científicos, las fotografías y los 25 enlaces a PDF de tesis. Los PDF siguen alojados en WordPress; conservar ese sitio y sus archivos evita interrumpir las descargas. Los libros siguen enlazados a ResearchGate, como en el original.

## Editar

Para cambios sencillos, editar directamente los HTML de `dist/`, `dist/theme.css` y `dist/site.js`. Si se usa el generador, modificar `content/`, `theme.css` y `site.js`, y ejecutar:

```sh
python build_site.py
```

El generador requiere Python y lxml y sobrescribe los HTML y estilos generados. `content/assets.json` relaciona las imágenes originales con sus copias locales.

Las categorías y fechas reproducen la información publicada en WordPress; no se deducen actualizaciones de proyectos ni de integrantes.

## Usar en GitHub Pages

La carpeta `dist/` se puede copiar a la raíz de un repositorio para publicar desde la rama seleccionada, o a `docs/` si Pages está configurado para publicar desde esa carpeta. Abrir `index.html` en un navegador también permite una revisión local.

## Usar en WordPress

Estos archivos son una web HTML independiente, no un tema instalable de WordPress. Para conservar la edición administrativa de WordPress es necesario convertir la presentación en un tema compatible e instalarlo con el acceso correspondiente. La disponibilidad de temas personalizados depende del plan de WordPress.com. Esta entrega no cambia el sitio original.

## Verificación

Se comprobaron los textos de las seis páginas interiores, los enlaces originales, las rutas y los recursos locales, y la sintaxis JavaScript. No se realizó una comprobación visual en navegador en este entorno.
