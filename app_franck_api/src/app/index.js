const express = require("express");
const routes = require("./routes");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require('cors');
const bodyParser = require('body-parser');
const corsOptions = {
  origin: 'http://localhost:3000', // Remplacer par l'origine de votre frontend
  credentials: true, // Permettre les cookies cross-origin
  allowedHeaders: ['Content-Type', 'Authorization'], // Ajoutez d'autres en-têtes au besoin
  methods: ['GET', 'POST', 'PUT', 'DELETE'] // Méthodes autorisées
};


module.exports = {
  async run(PORT) {
    const app = express();

    // Utilisation des middlewares
    app.use(cors(corsOptions));
    app.use(cookieParser());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(bodyParser.json({limit: '35mb'}));

    app.use(
      bodyParser.urlencoded({
        extended: true,
        limit: '35mb',
        parameterLimit: 50000,
      }),
    );

    await routes(app).then(
      app.listen(PORT, () => {
        console.log(`\n=> [ Server is running on http://localhost:${PORT} ]\n`);
      })
    );
  },
};
