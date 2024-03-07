const UserModel = require("../../../../database/models/user");

module.exports = {
    name: "/verify",
    description: "Verify user session",
    method: "GET", // Modification pour utiliser GET car cette route ne modifie pas de données
    run: async (req, res) => {
        try {
            // Supposons que vous avez un middleware pour parser les cookies
            // et que le cookie contenant l'ID de session est nommé 'userSession'
            const userId = req.cookies['auth'];
            if (!userId) {
                return res.status(401).json({ message: "Aucun ID de session fourni" });
            }

            const user = await UserModel.findById(userId);

            if (user) {
                // L'utilisateur existe
                res.status(200).json({ valid: true });
            } else {
                // L'utilisateur n'existe pas
                res.status(404).json({ valid: false, message: "Session invalide ou utilisateur non trouvé" });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Erreur interne du serveur" });
        }
    },
};
