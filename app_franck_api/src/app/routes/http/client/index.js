module.exports = {
    name: "/client",
    description: "Login user",
    method: "POST",
    run: async (req, res) => {
        try {
            console.log(req.body);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Erreur interne du serveur" });
        }
    },
};
