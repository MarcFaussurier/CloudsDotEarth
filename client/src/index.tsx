import "./css/test.scss";
import 'semantic-ui-css/semantic.min.css'

import $ from "jquery";

import React from "react"
import { Button } from 'semantic-ui-react'


// React
import ReactDOM from "react-dom";
// JS
import App from "./js/App";
import * as serviceWorker from "./js/serviceWorker";
// Css
import "./css/index.css";
// webpack
const favicon = require("./images/favicon.ico");

require("./json/manifest.json");
/*
// Render
ReactDOM.render(<App />, document.getElementById("root"));*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

const ButtonExampleButton = () => <Button>Click Here</Button>

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
    console.log("CORDOVA LOADED... ");
    $("<style type='text/css'> body { display: block !important; } </style>").appendTo("head");
    setTimeout(() => {
        $("div.cde_loader").fadeOut(2750);
    }, 10000);
}

console.log("TATATAATOO");


window["CSS_FILES"].forEach( (e: string) => {
    addCssLink('http://127.0.0.1:5000' + e);    
});

console.log("TATATAAT");

console.log("button : ");
console.log(ButtonExampleButton);
$( document ).ready(() => { 
    console.log("JQUERY OK ... ");

    $("jsl > div#app-container > div#content-container > div#omnibox-container").append(`<div class="cde_loader"><div class="cm-cont">
    <div class="cl-cont-1">
        <img class="cm-cloud" id="c1" src="https://cdn.rawgit.com/oboeteru/a64e487305065148fa2e31b4dbd2b1fc/raw/820266317e4937102e9739c97494739613157a97/cloud1.svg">
        <img class="cm-cloud" id="c1n" src="https://cdn.rawgit.com/oboeteru/a64e487305065148fa2e31b4dbd2b1fc/raw/794afc7b53d7d8681b5b3a00308e6cb3a64da9a1/cloud8.svg">
        <img class="cm-cloud" id="c2" src="https://cdn.rawgit.com/oboeteru/a64e487305065148fa2e31b4dbd2b1fc/raw/794afc7b53d7d8681b5b3a00308e6cb3a64da9a1/cloud2.svg">
        <img class="cm-cloud" id="c3" src="https://cdn.rawgit.com/oboeteru/a64e487305065148fa2e31b4dbd2b1fc/raw/794afc7b53d7d8681b5b3a00308e6cb3a64da9a1/cloud3.svg">
        <img class="cm-cloud" id="c3n" src="https://cdn.rawgit.com/oboeteru/a64e487305065148fa2e31b4dbd2b1fc/raw/794afc7b53d7d8681b5b3a00308e6cb3a64da9a1/cloud8.svg">
        <img class="cm-cloud" id="c3n2" src="https://cdn.rawgit.com/oboeteru/a64e487305065148fa2e31b4dbd2b1fc/raw/794afc7b53d7d8681b5b3a00308e6cb3a64da9a1/cloud7.svg">
        <img class="cm-cloud" id="c4" src="https://cdn.rawgit.com/oboeteru/a64e487305065148fa2e31b4dbd2b1fc/raw/794afc7b53d7d8681b5b3a00308e6cb3a64da9a1/cloud4.svg">
    </div>
    <div class="cl-cont-2">
        <img class="cm-cloud" id="c5" src="https://cdn.rawgit.com/oboeteru/a64e487305065148fa2e31b4dbd2b1fc/raw/794afc7b53d7d8681b5b3a00308e6cb3a64da9a1/cloud5.svg">
        <img class="cm-cloud" id="c6" src="https://cdn.rawgit.com/oboeteru/a64e487305065148fa2e31b4dbd2b1fc/raw/794afc7b53d7d8681b5b3a00308e6cb3a64da9a1/cloud6.svg">
        <img class="cm-cloud" id="c7" src="https://cdn.rawgit.com/oboeteru/a64e487305065148fa2e31b4dbd2b1fc/raw/794afc7b53d7d8681b5b3a00308e6cb3a64da9a1/cloud7.svg">
        <img class="cm-cloud" id="c7n" src="https://cdn.rawgit.com/oboeteru/a64e487305065148fa2e31b4dbd2b1fc/raw/794afc7b53d7d8681b5b3a00308e6cb3a64da9a1/cloud2.svg">
        <img class="cm-cloud" id="c8" src="https://cdn.rawgit.com/oboeteru/a64e487305065148fa2e31b4dbd2b1fc/raw/794afc7b53d7d8681b5b3a00308e6cb3a64da9a1/cloud8.svg">
    </div>
    
    
    <div class="cm-balloon-cnt">
        <div class="cm-balloon-cnt1">
        <img class="cm-balloon" id="b1" src="https://cdn.rawgit.com/oboeteru/8cecbaf25284bb72789a25e01b104014/raw/0bf7e372d7f7256f7d4c2b6ba0bfad617007baa5/balloon1.svg">
        <img class="cm-balloon" id="b2" src="https://cdn.rawgit.com/oboeteru/8cecbaf25284bb72789a25e01b104014/raw/0bf7e372d7f7256f7d4c2b6ba0bfad617007baa5/balloon2.svg">
        <img class="cm-balloon" id="b3" src="https://cdn.rawgit.com/oboeteru/8cecbaf25284bb72789a25e01b104014/raw/0bf7e372d7f7256f7d4c2b6ba0bfad617007baa5/balloon3.svg">
        </div>
        <div class="cm-balloon-cnt2">
        <img class="cm-balloon" id="b4" src="https://cdn.rawgit.com/oboeteru/8cecbaf25284bb72789a25e01b104014/raw/0bf7e372d7f7256f7d4c2b6ba0bfad617007baa5/balloon4.svg">
        <img class="cm-balloon" id="b5" src="https://cdn.rawgit.com/oboeteru/8cecbaf25284bb72789a25e01b104014/raw/0bf7e372d7f7256f7d4c2b6ba0bfad617007baa5/balloon5.svg">
        </div>
    </div>
    </div></div>`);    
    document.addEventListener("deviceready", onDeviceReady, false);
});

window["$"] = $;


