const UserModel = require("../../../../database/models/user");
encrypt = require('bcrypt').hashSync;
module.exports = {
    name: "/add",
    description: "Add user",
    method: "POST",
    run: async (req, res) => {
        try {
            const user_exist = UserModel.findOne({
                user_phone: req.body['phoneadd'],
              });

            if (user_exist.user_phone != undefined) throw "User already exist";
              
            let password = encrypt(req.body['passwordadd'], 10);

            const user = {
                user_inscription_date: Date.now(),
                user_first_name: req.body['firstnameadd'],
                user_last_name: req.body['lastnameadd'],
                user_phone: req.body['phoneadd'],
                user_identifiant: req.body['idadd'],
                user_password: password,
            };
            const new_user = new UserModel(user);
            
            new_user.save().catch((err) => {
            throw err;
            });

            res.status(200).json("received ite_face data");
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },
};
