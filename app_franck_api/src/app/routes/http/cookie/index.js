const UserModel = require("../../../../database/models/user");
const bcrypt = require('bcrypt');

module.exports = {
    name: "/login",
    description: "Login user",
    method: "POST",
    run: async (req, res) => {
        try {

            const user = await UserModel.findOne({ user_identifiant: req.body['email'] });

            // Si aucun utilisateur n'est trouvé
            if (!user) {
                return res.status(404).json({ message: "Utilisateur non trouvé" });
            }

            // Comparaison du mot de passe fourni avec le mot de passe haché stocké
            const match = await bcrypt.compare(req.body['password'], user.user_password);

            if (match) {
                // Le mot de passe correspond, connexion réussie

                // Création d'un cookie pour la gestion de session
                // Vous devrez personnaliser la valeur et les options du cookie selon vos besoins
                res.cookie('auth', user.id.toString(), {
                    httpOnly: true,
                    maxAge: 24 * 60 * 60 * 1000, // 24 heures
                    sameSite: 'None', // Important pour les cookies en cross-site
                    secure: true // Requis si sameSite=None
                });

                res.status(200).json({ cookie: user._id.toString() });
            } else {
                // Le mot de passe ne correspond pas
                res.status(401).json({ message: "Mot de passe incorrect" });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Erreur interne du serveur" });
        }
    },
};
