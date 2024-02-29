const pdf = require('../../../functions/create_pdf');
var calcule = require('../../../functions/calcul_face')
let iti = {}
let photos_iti = {}

module.exports = {
    name: "/iti",
    description: "Iti information of the audit",
    method: "POST",
    run: async (req, res) => {
        try {
            photos_iti["photo_sous_rampant_verticaux"] = req.body['photo_sous_rampant_verticaux']
            photos_iti["photo_pinion_interieur"] = req.body['photo_pinion_interieur']
            photos_iti["photo_sous_rampant"] = req.body['photo_sous_rampant']
            photos_iti["photo_sol"] = req.body['photo_sol']

            iti['photos'] = photos_iti

            iti['sous_rampants_verticaux'] = {
                'hauteur': parseInt(req.body['hauteur_vertical_sous_rampants']),
                'largeur': parseInt(req.body['largeur_vertical_sous_rampants']),
                'air': calcule.air(req.body['hauteur_vertical_sous_rampants'], req.body['largeur_vertical_sous_rampants'])
            }

            iti['pinion_interieur_avant_triangle'] = {
                'hauteur': parseInt(req.body['hauteur_pinion_interieur_avant_triangle']),
                'largeur': parseInt(req.body['largeur_pinion_interieur_avant_triangle']),
                'air': calcule.air(req.body['hauteur_pinion_interieur_avant_triangle'], req.body['largeur_pinion_interieur_avant_triangle'])
            }
            iti['sous_rampants'] = {
                'hauteur': parseInt(req.body['hauteur_sous_rampants']),
                'largeur': parseInt(req.body['largeur_sous_rampants']),
                'air': calcule.air(req.body['hauteur_sous_rampants'], req.body['largeur_sous_rampants'])
            }

            iti['sol'] = {
                'hauteur': parseInt(req.body['hauteur_sol']),
                'largeur': parseInt(req.body['largeur_sol']),
                'air': calcule.air(req.body['hauteur_sol'], req.body['largeur_sol'])
            }
            iti['method'] = req.body['methode_existante']

            console.log(iti)
            res.status(200).send("received ite_face data");
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    },
};
