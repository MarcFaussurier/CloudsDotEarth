import "./../scss/test.scss";
import $ from "jquery";
import { read } from "fs";

declare var window: any;

function addCssLink(url: string) {
    var cssId = window.btoa(url); 
    if (!document.getElementById(cssId))
    {
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.id   = cssId;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = url;
        link.media = 'all';
        head.appendChild(link);
    }
}

function onDeviceReady() {
    console.log("CORDOVA LOADED ... WAITING FOR JQUERY ... ");
    $( document ).ready(() => { 
        console.log("JQUERY OK ... ");
        addCssLink('http://127.0.0.1:5000/dist/main.css');

        $("jsl > div#app-container > div#content-container > div#omnibox-container").append("<div class=\"cde_loader\"></div>")
    });
}

document.addEventListener("deviceready", onDeviceReady, false);
window["$"] = $;
