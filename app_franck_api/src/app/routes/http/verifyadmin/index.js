const adminJson = require("../../../utils/admin.json");
module.exports = {
    name: "/verifyadmin",
    description: "Verify user admin status",
    method: "GET",
    run: async (req, res) => {
        try {

            if (!req.cookies['auth']) return res.status(401).json({ message: "Non autorisé" });

            // Vérifiez si l'utilisateur est un administrateur dans ke json
            if (adminJson.user.includes(req.cookies['auth'])) res.status(200).json({ isAdmin: true });
            else res.status(403).json({ isAdmin: false, message: "Accès refusé" });

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Erreur interne du serveur" });
        }
    },
};
