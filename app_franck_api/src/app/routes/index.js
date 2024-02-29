const fs = require("fs");
const path = require("path");

module.exports = async (app) => {
  const loadRoutesRecursively = async (app, folderPath) => {
    fs.readdirSync(folderPath).forEach(async (file) => {
      const filePath = path.join(folderPath, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        // if is a directory
        loadRoutesRecursively(app, filePath);
      } else if (file.endsWith(".js")) {
        //if is a js file

        try {
          const route = require(filePath);
          app[route.method.toLowerCase()](route.name, route.run);

          if (!route) throw new Error("Error loading route");
          console.log(`   Loading route ${filePath}`);
        } catch (error) {
          throw error;
        }
      }
    });
  };
  await loadRoutesRecursively(app, path.join(__dirname, "http"));
  const err = require("./error/err.js");
  err(app);
};
