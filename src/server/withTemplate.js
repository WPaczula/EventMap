const withTemplate = (html, styles) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="theme-color" content="#7200ca">
    <link rel="manifest" href="/manifest.json">
    ${styles}
</head>

<body>
    <div id="root">${html}</div>
    <div id="modal-root"></div>
    <div id="message-root"></div>
    <noscript>
        <h1>You don’t have javascript enabled.</h1>
        <p>Please enable it to get the full experience.</p>
    </noscript>
    <script src="./main/bundle.js"></script>
</body>
</html>
`

export default withTemplate
