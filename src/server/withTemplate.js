const withTemplate = html => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
</head>

<body>
    <div id="root">${html}</div>
    <script src="./bundle.js"></script>
</body>
</html>
`

export default withTemplate
