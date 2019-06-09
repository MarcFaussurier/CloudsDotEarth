// prefix for asset lookup
var remoteStaticServer = "http://127.0.0.1:3000";

window["__webpack_public_path__"] = remoteStaticServer + "/";

var targetElementID = "content-container";

// insert react root elemeent where needed
var el = document.getElementById(targetElementID);
var loaded = false;
var elDetector = setInterval(function() {
    if (el !== null && !loaded) {
        loaded = true;
        var root = document.createElement("div");
        root.setAttribute("id", "root");
        el.appendChild(root);
        
        // run all client assets
        files.forEach(element => {
            var dotted = element.split(".");
            var file;
        
            // create js html link if one
            if (dotted[dotted.length - 1] === "js") {
                var file = document.createElement('script');
                file.setAttribute("type","text/javascript");
                file.setAttribute("src", remoteStaticServer + element)
        
            } 
        
            // create css html link if one
            else if (dotted[dotted.length - 1] === "css") {
                var file = document.createElement("link");
                file.setAttribute("rel", "stylesheet");
                file.setAttribute("type", "text/css");
                file.setAttribute("href", remoteStaticServer + element);
            }
        
            // append element to the dom if one
            if (typeof file !== "undefined") {
                document.getElementsByTagName("head")[0].appendChild(file);
            }
        });

        console.log("load ends");
        clearInterval(elDetector);
    } else {
        console.log("still waiting for google loading");
    }
}, 250);