# wjs-sections
> Generador de secciones con entradas por etiquetas [Demostración](https://demo.zkreations.com/2018/02/wjs-sections.html)

[![license][license-img]][license-url]
[![changelog][changelog-img]][changelog-url]

## Instalación

Aloja el archivo `wjs-sections.min.css` e incluir arriba de `</head>`.

```html
<link rel="stylesheet" href="dist/wjs-sections.min.css"/>
```

Si no puedes alojar, prueba cargando los estilos desde una cdn proporcionada por rawgit:

```html
<link rel="stylesheet" href="https://cdn.rawgit.com/zkreations/wjs-sections/master/dist/wjs-sections.min.css"/>
```

## Crear widget

Incluye el contenido de widget.xml dentro de alguna etiqueta `<b:section>`. La seccion escogida debe pertenecer al Blog o estar relacionada a las entradas del blog, de lo contrario, el widget presentará fallas gráficas.

## Modo de uso

Desde Diseño, edita el widget Whale Sections y agrega elementos a la lista, el primer campo corresponde al **nombre de la seccion**, el segundo campo debe contener el **nombre de la etiqueta**.

## Licencia

**wjs-sections** is licensed under the MIT License.

[changelog-img]: https://img.shields.io/badge/changelog-md-blue.svg?style=flat-square
[changelog-url]: changelog.md
[license-img]: https://img.shields.io/npm/l/normalize.css.svg?style=flat-square
[license-url]: LICENSE
