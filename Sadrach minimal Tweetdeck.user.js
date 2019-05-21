// ==UserScript==
// @name         Sadrach minimal Tweetdeck
// @namespace    https://github.com/sadrachone/Tweetdeck_Sadrach_Style
// @version      0.1
// @description  versión más clara y simple de tweetdeck a mi pinta
// @author       @Sadrach
// @match        https://tweetdeck.twitter.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Codigo para llamadas css...
function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
// Barra de desplazamiento oculta (visible solo al deslizar)
    addGlobalStyle('.column-drag-handle { visibility: hidden !important; }');
// Eliminar Numero de Columna
    addGlobalStyle('.column-number { visibility: hidden; !important; }');
// Tamaño fuente de titulo en columnas (default es 20px)
    addGlobalStyle('.column-title { font-size: 16px; !important; }');
//Color Titulo Columnas
    addGlobalStyle('.column-header { background-color: #fff; border-bottom: hidden; !important; }');
//Iconos Laterales
    addGlobalStyle('.icon { font-size: 14px; !important; }');
//Ocultar logo inferior barra lateral
    addGlobalStyle('.tweetdeck-logo { display: inline-block; opacity: 0; !important; }');
//No recuerdo que xuxa
    addGlobalStyle('.app-columns { padding-bottom: 1px; padding: 1px 0px 1px 1px; !important; }');
    addGlobalStyle('.column { padding: 0px 1px 0px 0px; margin-right: 3px; !important; }');
    addGlobalStyle('.is-narrow-columns { margin-right: 3px; padding: 1px 0px 1px 1px; !important; }');
//Caja de respuestas
    addGlobalStyle('.inline-reply { background-color: #fff; !important; }');
    addGlobalStyle('.icon-popout:before { color: #000; !important; }');
    addGlobalStyle('.icon-close:before { color: #000; !important; }');
    addGlobalStyle('.icon--close:before { color: #000; !important; }');
    addGlobalStyle('.compose-account { visibility: hidden !important; !important; }');
    addGlobalStyle('.character-count-compose:disabled { width: 60px; color: #000; text-align: right; font-size: 16px; !important; }');
    addGlobalStyle('.reply-triangle { border-color: transparent transparent transparent transparent; !important; }');
//Ocultar Badge lateral nuevos tuits (punto azul)
    addGlobalStyle('.column-nav-updates{ visibility:hidden; position:absolute; top:3px; right:6px; color:#1f1f1f; opacity:0; transition:opacity 100ms linear !important; }');
    addGlobalStyle('.heartsprite { width: 80px; height: 80px; !important; }');
})();
