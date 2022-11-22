export default () => {
    return `<!doctype html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    </script>
    <title>GoblinShark</title>
    </head>
    <body>
    <div id="root"></div>
    <script type="text/javascript" src="/dist/bundle.js">
    </script>
    </body>
    </html>`
}

//    // <script type="text/javascript">
    //   (function(l) {
    //     if (l.search[1] === '/' ) {
    //       var decoded = l.search.slice(1).split('&').map(function(s) { 
    //         return s.replace(/~and~/g, '&')
    //       }).join('?');
    //       window.history.replaceState(null, null,
    //           l.pathname.slice(0, -1) + decoded + l.hash
    //       );
    //     }
    //   }(window.location))