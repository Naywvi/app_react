module.exports = {
  name: "/general",
  description: "General information of the application",
  method: "POST",
  run: async (req, res) => {
    try {
        console.log(req.body)
        res.status(200).send("received ite_face data");

    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
};
