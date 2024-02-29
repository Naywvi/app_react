const pdf = require('../../../functions/create_pdf');
var calcule = require('../../../functions/calcul_face');
var sous_face = {}
var sous_face_photo = {}

module.exports = {
    name: "/sous_face",
    description: "Sous face information of the audit",
    method: "POST",
    run: async (req, res) => {
        try {
            sous_face_photo["photo_vide_sanitaire"] = req.body['photo_vide_sanitaire']
            sous_face_photo["photo_sous_face"] = req.body['photo_sous_face']
            sous_face_photo["photo_cave"] = req.body['photo_cave']
            sous_face['photo'] = sous_face_photo

            sous_face['sous_face'] = {
                'hauteur': parseInt(req.body['hauteur_garage']),
                'largeur': parseInt(req.body['largeur_garage']),
                'air': calcule.air(req.body['hauteur_garage'], req.body['largeur_garage'])
            }

            if(req.body['vide_sanitaire']){
                sous_face['vide_sanitaire'] = {
                    'hauteur': parseInt(req.body['hauteur_vide_sanitaire']),
                    'largeur': parseInt(req.body['largeur_vide_sanitaire']),
                    'air': calcule.air(req.body['hauteur_vide_sanitaire'], req.body['largeur_vide_sanitaire'])
                }
            }else sous_face['vide_sanitaire'] = null
            
            if(req.body['cave']){
                sous_face['cave'] = {
                    'hauteur': parseInt(req.body['hauteur_cave']),
                    'largeur': parseInt(req.body['largeur_cave']),
                    'air': calcule.air(req.body['hauteur_cave'], req.body['largeur_cave'])
                }
            }else sous_face['cave'] = null
            

            //console.log(sous_face)
            res.status(200).send("received sf_face data");
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    },
};
