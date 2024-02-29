const { json } = require("body-parser");
const UserModel = require("../../../../database/models/user");

module.exports = {
    name: "/list",
    description: "List users",
    method: "POST", // Considérez d'utiliser GET si approprié
    run: async (req, res) => {
        try {
            const users = await UserModel.find({}); // Récupère tous les utilisateurs

            // Formate les données des utilisateurs si nécessaire, par exemple pour enlever les mots de passe avant l'envoi
            const formattedUsers = users.map(user => {
                return {
                    id: user._id.toString(),
                    firstName: user.user_first_name,
                    lastName: user.user_last_name,
                    phone: user.user_phone,
                    identifiant: user.user_identifiant,
                    // Ne pas renvoyer le mot de passe ou d'autres informations sensibles
                };
            });
            console.log(formattedUsers)
            // convert formattedUsers to json=
            res.status(200).json(formattedUsers);
        } catch (error) {
            console.log(error);
            res.status(400).json("An error occurred while listing the users.");
        }
    },
};
