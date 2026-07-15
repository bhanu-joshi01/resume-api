const express = require("express");

const app = express();

app.use(express.json());

// Import Routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const documentRoutes = require("./routes/documents");
const templateRoutes = require("./routes/templates");
const aiRoutes = require("./routes/ai");
const applicationRoutes = require("./routes/applications");

// Home Route
app.get("/", function (req, res) {
    res.json({
        message: "Resume API is Running"
    });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/documents", documentRoutes);
app.use("/api/templates", templateRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/applications", applicationRoutes);

// Start Server
const PORT = 3000;

app.listen(PORT, function () {
    console.log("Server is running on port " + PORT);
});