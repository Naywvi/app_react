var calcule = require('../../../functions/calcul_face');
let ite_face = {}
let photo_ite_face = {}

module.exports = {
  name: "/ite",
  description: "Ite information of the audit",
  method: "POST",
  run: async (req, res) => {
    try {

      // photo_ite_face["photo_face"] = req.body['photo_face']
      // photo_ite_face["photo_gouttieres"] = req.body['photo_gouttieres']
      // photo_ite_face["photo_pluvial"] = req.body['photo_pluvial']
      // photo_ite_face["photo_fissure"] = req.body['photo_fissure']

      // ite_face['photos'] = photo_ite_face
      // ite_face['numero_face'] = req.body['numero_face']
      // ite_face['nombre_ouvrant'] = req.body['nombre_ouvrant']
      // ite_face['type_de_face'] = req.body['type_de_face']
      // ite_face['orientation_face'] = req.body['orientation_face']
      // ite_face['hauteur_face'] = req.body['hauteur_face']
      // ite_face['largeur_face'] = req.body['largeur_face']
      // ite_face['vide_sanitaire'] = req.body['vide_sanitaire']
      // ite_face['vide_sanitaire_hauteur'] = req.body['vide_sanitaire_hauteur']
      // ite_face['vide_sanitaire_largeur'] = req.body['vide_sanitaire_largeur']
      // ite_face['cache_moinneau'] = req.body['cache_moinneau']
      // ite_face['cache_moinneau_hauteur'] = req.body['cache_moinneau_hauteur']
      // ite_face['cache_moinneau_largeur'] = req.body['cache_moinneau_largeur']
      // ite_face['gouttieres_remplacement'] = req.body['gouttieres_remplacement']
      // ite_face['gouttieres_forme'] = req.body['gouttieres_forme']
      // ite_face['gouttieres_matiere'] = req.body['gouttieres_matiere']
      // ite_face['gouttieres_longueur'] = req.body['gouttieres_longueur']
      // ite_face['pluvial_devoyer'] = req.body['pluvial_devoyer']
      // ite_face['pluvial_matiere'] = req.body['pluvial_matiere']
      // ite_face['pluvial_forme'] = req.body['pluvial_forme']
      // ite_face['pluvial_section'] = req.body['pluvial_section']
      // ite_face['pluvial_longueur'] = req.body['pluvial_longueur']
      // ite_face['commentaire'] = req.body['commentaire']

      // console.log(ite_face);  

      console.log(req.body);
      res.status(200).send("received ite_face data");

    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
};
