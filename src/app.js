/**
 * NebYotta Labs
 * Express Application
 */

const express = require("express");
const path = require("path");

const uploadRoutes = require("./routes/uploadRoutes");

const app = express();

app.use(express.json());

app.use(
    express.static(
        path.join(__dirname, "../assets/web")
    )
);

app.use(
    "/reference",
    express.static(
        path.join(__dirname, "../assets/reference")
    )
);

app.use(uploadRoutes);

app.get("/", (req, res) => {

    res.json({

        laboratory: "NebYotta Labs",

        project: "NBL-001",

        engine: "NebEngine",

        version: "1.0.0",

        author: "Camile & YottAI",

        status: "Running"

    });

});

module.exports = app;