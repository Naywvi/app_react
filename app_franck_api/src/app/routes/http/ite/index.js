var calcule = require('../../../functions/calcul_face');
const pdf = require('../../../functions/create_pdf');
module.exports = {
  name: "/ite",
  description: "Ite information of the audit",
  method: "POST",
  run: async (req, res) => {
    try {
      const user = req.cookies['auth']
      const path_ite = req.cookies['SESSION_TOKEN']
      const requestData = req.body;
      let organizedData = {};

      requestData.Panel_facade.forEach((face, index) => {
        // Initialisez total_mcaree_ouvrant à 0 pour chaque face
        let total_mcaree_ouvrant = 0;

        // Vérifiez si la face a des ouvrants
        if (face["Formulaire ouvrant :"]) {
          total_mcaree_ouvrant = face["Formulaire ouvrant :"].reduce((acc, ouvrant) => {
            return acc + calcule.air(ouvrant.hauteur_ouvrant, ouvrant.largeur_ouvrant);
          }, 0);
        }
        
         // Calculez l'espace brut de la façade
        let mcaree_face_brut = face.type_de_face.includes("avec") ? 
        calcule.espace_total(face.largeur_face, face.hauteur_face, face.hauteur_facade_toiture) : 
        calcule.air(face.hauteur_face, face.largeur_face);

        // Calculez les espaces pour vide sanitaire et cache moinneau si présents
        let mcaree_vide_sanitaire = face.vide_sanitaire ? calcule.air(face.vide_sanitaire_hauteur, face.vide_sanitaire_largeur) : 0;
        let mcaree_cache_moinneau = face.cache_moinneau ? calcule.air(face.cache_moinneau_largeur, face.hauteur_face) : 0; // Assurez-vous d'avoir la bonne formule ici

        total_mcaree_ouvrant += mcaree_vide_sanitaire + mcaree_cache_moinneau;

        let faceKey = `Face_${index + 1}`;
        organizedData[faceKey] = {
          ...face,
          Ouvrants: face["Formulaire ouvrant :"] ? face["Formulaire ouvrant :"].map(ouvrant => ({
            ...ouvrant,
            mcaree_ouvrant: calcule.air(ouvrant.hauteur_ouvrant, ouvrant.largeur_ouvrant),
            deport_pour_volets: ouvrant.gond_ouvrant ? (ouvrant.gond_ouvrant != undefined) : null,
            cornière_dangle: ouvrant.hauteur_ouvrant * 2 + ouvrant.largeur_ouvrant,
            arrets_marseillais: ouvrant.type_volet_ouvrant === "fr" ? 2 : null,
            butees_arret: ["fr", "persiennes"].includes(ouvrant.type_volet_ouvrant) ? 2 : null,
            appuie_fenetre: ouvrant.appuie_fenetre_ouvrant ? ouvrant.largeur_ouvrant * 1.05 : null
          })) : [],
          mcaree_face_brut: mcaree_face_brut,
          mcaree_face_net: mcaree_face_brut - total_mcaree_ouvrant,
          mcaree_ouvrant_net: total_mcaree_ouvrant,
          mcaree_vide_sanitaire: mcaree_vide_sanitaire,
          longueur_rail_couronnement: face.cache_moinneau ? face.largeur_face : null,
        };
        
        // Supprimer 'Formulaire ouvrant :' de l'objet original si nécessaire
        if (organizedData[faceKey].Ouvrants.length === 0) {
          delete organizedData[faceKey]["Ouvrants"];
        }
      });

      pdf.ite(organizedData,user,path_ite);
      res.status(200).send("Received ite_face data and processed");
    } catch (error) {
      console.log(error);
      res.status(400).send(error.toString());
    }
  },
};
