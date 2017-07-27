"use strict";

const express = require("express");
const app = express();
const PORT = 3008;

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

app.get('/', function (req, res) {
    res.sendFile(`${__dirname}/index.html`);
});

app.get('template', function (req, res) {
    res.sendFile(`${__dirname}/progress-bar-template.html`);
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});