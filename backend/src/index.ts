import * as express from "express";

let app = express();

app.use(express.static("./public"));
app.use(express.static("./frontend/dist"));

app.get("/", (req, res) => res.send("Yo!"))

app.listen(8001);
