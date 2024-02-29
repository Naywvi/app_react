const UserModel = require("../../../../database/models/user");
const encrypt = require('bcrypt').hashSync;

module.exports = {
    name: "/modify",
    description: "Modify user",
    method: "PUT",
    run: async (req, res) => {
        try {
            // Vérification de l'existence de l'utilisateur
            const user = await UserModel.findOne({ user_identifiant: req.body['idmodify'] });
            if (!user) {
                return res.status(404).json("User not found");
            }

            // Préparation des données à mettre à jour
            const updateData = {};
            if (req.body['firstnamemodify']) updateData.user_first_name = req.body['firstnamemodify'];
            if (req.body['lastnamemodify']) updateData.user_last_name = req.body['lastnamemodify'];
            if (req.body['passwordmodify']) updateData.user_password = encrypt(req.body['passwordmodify'], 10);
            if (req.body['phonemodify']) updateData.user_password = req.body['phonemodify']

            // Mise à jour de l'utilisateur
            await UserModel.updateOne({ user_identifiant: req.body['idmodify'] }, { $set: updateData });

            res.status(200).json("User updated successfully");
        } catch (error) {
            console.log(error);
            res.status(400).json(error.message || "An error occurred while updating the user.");
        }
    },
};
