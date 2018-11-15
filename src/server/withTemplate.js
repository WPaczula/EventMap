const withTemplate = (html, styles) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    ${styles}
</head>

<body>
    <div id="root">${html}</div>
    <div id="modal-root"></div>
    <div id="message-root"></div>
    <script src="./main/bundle.js"></script>
</body>
</html>
`

export default withTemplate
