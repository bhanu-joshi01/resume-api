const express = require("express");
const logger = require("./middleware/logger");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(logger);

app.get("/", function (req, res) {
    res.json({ message: "Resume API is Running" });
});

app.use("/api", routes);

const PORT = 3000;

app.listen(PORT, function () {
    console.log("Server is running on port " + PORT);
});
