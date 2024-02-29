const express = require("express");
const routes = require("./routes");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require('cors');

module.exports = {
  async run(PORT) {
    const app = express();

    // Configuration du moteur de vue HBS
    app.set('views', path.join(__dirname, '/views/'));

    // Utilisation des middlewares
    app.use(cors());
    app.use(cookieParser());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(express.static(path.join(__dirname, "public")));

    await routes(app).then(
      app.listen(PORT, () => {
        console.log(`\n=> [ Server is running on http://localhost:${PORT} ]\n`);
      })
    );
  },
};
