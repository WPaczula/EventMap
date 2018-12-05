const withTemplate = (html, styles, state, isProd) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <base href="/">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="theme-color" content="#7200ca">
    <link rel="manifest" href="/manifest.json">
    <link href="https://fonts.googleapis.com/css?family=M+PLUS+1p" rel="stylesheet">
    <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.3.4/dist/leaflet.css"
        integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA=="
        crossOrigin=""
    />
    ${styles}
</head>

<body>
    <div id="root">${html}
        <noscript>
            <h1>It looks like you don’t have javascript enabled.</h1>
            <p>Please enable it to get the full experience.</p>
        </noscript>
    </div>
    <div id="modal-root"></div>
    <div id="message-root"></div>
    <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(state).replace(/</g, '\\u003c')}
        window.__PROD__ = ${isProd}
    </script>
    <script src="./main/bundle.js"></script>
</body>
</html>
`

export default withTemplate
