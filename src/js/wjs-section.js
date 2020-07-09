/*!
 * wjs-section v2.1.0
 * Copyright 2018 zkreations
 * Developed by José Gregorio (fb.com/JGMateran)
 * Licensed under MIT (github.com/zkreations/wjs-sections/blob/master/LICENSE)
 */
'use strict';
var callbacks = {},
    defaults = {
       homeUrl: window.location.protocol + '//' + window.location.hostname, // Url blog
       image: 'img/no-img-blogger.png', // Imagen por defecto
       className: '.wjs-section',
       localeDate: 'es-ES', //Idioma
       snippet: 60, // Cantidad texto para el resumen
       imgSize: 'w300-h240-c', // Cantidad texto para el resumen
};
//! Core (No modificar) {{
var section = {
    'expReg': /[swh]\d{2,4}(?:-[swh]\d{2,4})?(?:-c)?/,
    'category': null,
    'max-results': 6,
    template: {
        default: '<div class="stns-card">' +
               '<div class="stns-content">' +
                  '<div class="stns-header">' +
                     '<a class="stns-image" href="URL"><img src="IMG" /></a>' +
                  '</div>' +
                  '<div class="stns-meta">' +
                     '<a class="stns-title" href="URL">TITLE</a>' +
                     '<time class="stns-date">TIME</time>' +
                     '<p class="stns-snippet">SNIPPET</p>' +
                  '</div>' +
               '</div>' +
            '</div>',
        empty: '<p class="stns-alert">No se han encontrado entradas</p>'
    }
};

function forEach(items, callback) {
    var i, item;
    for (i = 0; item = items[i++];)
        if (false === callback.call(item, i, item)) break;
    return items
}

function getCurrentData(element) {
    var name, value;
    var obj = {};
    for (name in section) {
        value = element.getAttribute("data-" + name);
        if (value) obj[name] = value
    }
    return obj
}

function temp(content, data) {
    var name;
    for (name in data) content = content.replace(new RegExp(name, "g"), data[name]);
    return content
}

function getLabel(element, data) {
    var name;
    var category = data.category;
    var callfix = category.replace(/[^A-Z0-9]/ig, '');
    var script = document.createElement("script");
    var src = defaults.homeUrl + "/feeds/posts/default?alt=json-in-script&callback=callbacks." + callfix;
    callbacks[callfix] = function(json) {
        var i, post;
        var html = "";
        var entry = json.feed.entry;
        if (entry)
            for (i = 0; post = entry[i++];) {
                var content = post.content;
                var summary = post.summary;
                var body = content ? content.$t : summary.$t;
                var img = post.media$thumbnail;
                var tempHtml = document.createElement("div");
                tempHtml.innerHTML = body;
                var imgHtml = tempHtml.querySelector("img");
                html += temp(data.template, {
                    IMG: (img ? img.url : imgHtml ? imgHtml.src : defaults.image).replace(section.expReg, defaults.imgSize),
                    TITLE: post.title.$t,
                    TIME: (new Date(post.published.$t)).toLocaleDateString(defaults.localeDate, {
                        month: "long",
                        day: "2-digit"
                    }),
                    SNIPPET: body.replace(/<[^>]*>?/g, "").substring(0, defaults.snippet) + "...",
                    URL: function() {
                        var i, link;
                        for (i = 0; link = post.link[i++];)
                            if (link.rel === "alternate") return link.href
                    }
                })
            } else html += section.template.empty;
        element.innerHTML = html
    };
    for (name in data)
        if (name !== "template") src += "&" + name + "=" + data[name];
    script.src = src;
    document.body.appendChild(script)
}
forEach(document.querySelectorAll(defaults.className), function(index, element) {
    var currentData = getCurrentData(element);
    if (currentData.category) {
        if (!currentData["max-results"]) currentData["max-results"] = section["max-results"];
        currentData.template = section.template["default"];
        getLabel(element, currentData)
    }
});
//!}} Fin del core