const express = require("express");
const app = express();

// Sert tous les fichiers du dossier
app.use(express.static("."));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on " + PORT);
});