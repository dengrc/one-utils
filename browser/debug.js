function checkGlobalVariable() {
    var iframe = document.createElement("iframe"),
        w = window,
        iframeWindow, dict = {};
    iframe.onload = function () {
        console.log('onload');
        iframeWindow = iframe.contentWindow;
        for (var k in w) {
            if (!(k in iframeWindow)) {
                dict[k] = w[k];
                console.log(k)
            }
        }
        console.log(dict)
    }
    iframe.src = "/blank.html";
    document.body.appendChild(iframe)
}