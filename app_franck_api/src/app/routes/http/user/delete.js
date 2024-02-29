const UserModel = require("../../../../database/models/user");

module.exports = {
    name: "/delete",
    description: "Delete user",
    method: "DELETE",
    run: async (req, res) => {
        try {
            // Vérification de l'existence de l'utilisateur
            const user_exist = await UserModel.findOne({ user_identifiant: req.body['iddelete'] });
            
            if (!user_exist) {
                return res.status(404).json("User not found");
            }

            // Suppression de l'utilisateur
            await UserModel.deleteOne({ user_identifiant: req.body['iddelete'] });

            res.status(200).json("User deleted successfully");
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },
};
