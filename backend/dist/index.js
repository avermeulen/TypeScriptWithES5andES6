"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
let app = express();
app.use(express.static("./public"));
app.use(express.static("./frontend/dist"));
app.get("/", (req, res) => res.send("Yo!"));
app.listen(8001);
