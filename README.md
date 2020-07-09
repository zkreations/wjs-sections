# wjs-sections
> Generador de secciones con entradas por etiquetas [Demostración](https://demo.zkreations.com/2018/02/wjs-sections.html)

[![license][license-img]][license-url]
[![changelog][changelog-img]][changelog-url]

## Instalación

Incluye el contenido de widget.xml arriba de `<b:widget id='Blog1'>`.

## Modo de uso

Desde Diseño, edita el widget Whale Sections y agrega elementos a la lista, el primer campo corresponde al **nombre de la seccion**, el segundo campo debe contener el **nombre de la etiqueta**.

## Opciones

| Propiedad    | Tipo |  Valor |
| ------------ | ---- | ------------------------------------------ |
| `homeUrl`   | string | Enlace de la página principal |
| `image`      | image | Url de la imagen por defecto. Se usa cuando no existen imágenes en el post |
| `localeDate`     | string | Idioma y localidad |
| `snippet`    | number | Cantidad de texto para el resumen |
| `imgSize`    | string | Parametros para cambiar el tamaño de las imágenes |
| `className`  | var | Clase del contenedor detonante |

## Licencia

**wjs-sections** is licensed under the MIT License.

[changelog-img]: https://img.shields.io/badge/changelog-md-blue.svg?style=flat-square
[changelog-url]: changelog.md
[license-img]: https://img.shields.io/npm/l/normalize.css.svg?style=flat-square
[license-url]: LICENSE
