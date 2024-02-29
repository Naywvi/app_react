const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');
const imageSize = require('image-size');
module.exports = {
    create_pdf_sous_face: (nomDossier, sous_face, user) => {
        const date = new Date();
        const date_format = date.getDate() + "_" + (date.getMonth() + 1) + "_" + date.getFullYear() + "_" + date.getHours() + "_" + date.getMinutes() + "_" + date.getSeconds();
        const generation_date_PDF = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " à " + date.getHours() + "h" + date.getMinutes() + "m" + date.getSeconds() + "s";
        const fichierPDF = `[SF]-${user}_${date_format}.pdf`;

        const doc = new PDFDocument();

        doc.pipe(fs.createWriteStream(fichierPDF));

        // Fonction pour vérifier si un fichier est une image
        function estImage(fichier) {
            const extension = path.extname(fichier).toLowerCase();
            return extension === '.png' || extension === '.jpg' || extension === '.jpeg' || extension === '.gif' || extension === '.bmp';
        }

        // Affichage des informations utilisateur dans le PDF
        doc.fontSize(12).text(`Informations a propos de la visite technique :`);
        doc.fontSize(10).text(`Type de visite technique : Sous-face`);
        doc.fontSize(10).text(`Date de generation du fichier : ${generation_date_PDF}`);
        doc.fontSize(10).text(`L'utilisateur ayant fait la visite technique est : ${user}`);
        doc.fontSize(15).text(`\n`);

        // Affichage des informations de chaque sous-face dans le PDF
        for (const nomSousFace in sous_face) {
            if (sous_face.hasOwnProperty(nomSousFace)) {
                const infosSousFace = sous_face[nomSousFace];
                doc.fontSize(15).text(`\n`);
                doc.fontSize(12).text(`Informations sur la sous-face ${nomSousFace}:`);
                doc.fontSize(10).text(`- Hauteur en mètre linéaire : ${infosSousFace.hauteur}`);
                doc.fontSize(10).text(`- Largeur en mètre linéaire: ${infosSousFace.largeur}`);
                doc.fontSize(10).text(`- Air en m² : ${infosSousFace.air}`);
            }
        }

        // Lister tous les fichiers dans le dossier
        fs.readdir(nomDossier, (err, fichiers) => {
            if (err) {
                console.error('Erreur lors de la lecture du dossier :', err);
                return;
            }

            // Filtrer les fichiers qui sont des images
            const images = fichiers.filter(estImage);

            // Ajouter chaque image au document PDF
            images.forEach(image => {
                const cheminImage = path.join(nomDossier, image);
                const largeurPage = doc.page.width;
                const hauteurPage = doc.page.height;

                // Obtenir les dimensions de l'image
                const dimensionsImage = imageSize(cheminImage);
                const largeurImage = dimensionsImage.width;
                const hauteurImage = dimensionsImage.height;

                // Calculer l'échelle pour que l'image rentre dans la page
                const echelle = Math.min(largeurPage / largeurImage, hauteurPage / hauteurImage);

                // Calculer les nouvelles dimensions de l'image pour l'échelle calculée
                const nouvelleLargeur = largeurImage * echelle;
                const nouvelleHauteur = hauteurImage * echelle;

                // Calculer les marges pour centrer l'image
                const margeGauche = (largeurPage - nouvelleLargeur) / 2;
                const margeHaut = (hauteurPage - nouvelleHauteur) / 2;

                // Ajouter la page et l'image
                doc.addPage().image(cheminImage, margeGauche, margeHaut, { width: nouvelleLargeur, height: nouvelleHauteur });
            });

            // Finaliser et fermer le document PDF
            doc.end();
            console.log('PDF créé avec succès !');

            // Supprimer le dossier une fois que le PDF est créé
            fs.rmdir(nomDossier, { recursive: true }, (err) => {
                if (err) {
                    console.error('Erreur lors de la suppression du dossier :', err);
                    return;
                }
                console.log('Dossier supprimé avec succès !');
            });
        });
    },
    create_pdf_iti: (nomDossier, iti, user) => {
        const date = new Date();
        const date_format = `${date.getDate()}_${date.getMonth() + 1}_${date.getFullYear()}_${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}`;
        const generation_date_PDF = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} à ${date.getHours()}h${date.getMinutes()}m${date.getSeconds()}s`;
        const fichierPDF = `[SF]-${user}_${date_format}.pdf`;
        const doc = new PDFDocument();

        doc.pipe(fs.createWriteStream(fichierPDF));

        // Fonction pour vérifier si un fichier est une image
        function estImage(fichier) {
            const extension = path.extname(fichier).toLowerCase();
            return extension === '.png' || extension === '.jpg' || extension === '.jpeg' || extension === '.gif' || extension === '.bmp';
        }

        // Affichage des informations utilisateur dans le PDF
        doc.fontSize(12).text(`Informations a propos de la visite technique :`);
        doc.fontSize(10).text(`Type de visite technique : ITI (Isolation Thermique par l'Intérieur)`);
        doc.fontSize(10).text(`Date de generation du fichier : ${generation_date_PDF}`);
        doc.fontSize(10).text(`L'utilisateur ayant fait la visite technique est : ${user}`);
        doc.fontSize(15).text(`\n`);

        // Affichage des informations de chaque sous-face dans le PDF
        for (const nomSousFace in iti) {
            if (iti.hasOwnProperty(nomSousFace) && nomSousFace !== 'method') {
                const infosSousFace = iti[nomSousFace];
                doc.fontSize(15).text(`\n`);

                let nom = '';
                if (nomSousFace === 'sous_rampants_verticaux') doc.fontSize(12).text(`Informations à propos des sous rampants verticaux :`);
                else if (nomSousFace === 'pinion_interieur_avant_triangle') doc.fontSize(12).text(`Informations à propos des pinions intérieurs avant triangle :`);
                else if (nomSousFace === 'sous_rampants') doc.fontSize(12).text(`Informations à propos des sous rampants :`);
                else if (nomSousFace === 'sol') doc.fontSize(12).text(`Informations à propos du sol :`);

                doc.fontSize(10).text(`- Hauteur en mètre linéaire : ${infosSousFace.hauteur}`);
                doc.fontSize(10).text(`- Largeur en mètre linéaire: ${infosSousFace.largeur}`);
                doc.fontSize(10).text(`- Air en m² : ${infosSousFace.air}`);
            }
        }

        // Affichage de la méthode de pose dans le PDF
        if (iti.method) {
            doc.fontSize(15).text(`\n`);
            doc.fontSize(12).text(`Méthode de pose :`);
            doc.fontSize(10).text(`- ${iti.method}`);
        }

        // Lister tous les fichiers dans le dossier
        fs.readdir(nomDossier, (err, fichiers) => {
            if (err) {
                console.error('Erreur lors de la lecture du dossier :', err);
                return;
            }

            // Filtrer les fichiers qui sont des images
            const images = fichiers.filter(estImage);

            // Ajouter chaque image au document PDF
            images.forEach(image => {
                doc.fontSize(12).text(`Nom de l'image : ${image}`);

                const cheminImage = path.join(nomDossier, image);
                const largeurPage = doc.page.width;
                const hauteurPage = doc.page.height;

                // Obtenir les dimensions de l'image
                const dimensionsImage = imageSize(cheminImage);
                const largeurImage = dimensionsImage.width;
                const hauteurImage = dimensionsImage.height;

                // Calculer l'échelle pour que l'image rentre dans la page
                const echelle = Math.min(largeurPage / largeurImage, hauteurPage / hauteurImage);

                // Calculer les nouvelles dimensions de l'image pour l'échelle calculée
                const nouvelleLargeur = largeurImage * echelle;
                const nouvelleHauteur = hauteurImage * echelle;

                // Calculer les marges pour centrer l'image
                const margeGauche = (largeurPage - nouvelleLargeur) / 2;
                const margeHaut = (hauteurPage - nouvelleHauteur) / 2;

                // Ajouter la page et l'image
                doc.addPage().image(cheminImage, margeGauche, margeHaut, { width: nouvelleLargeur, height: nouvelleHauteur });
            });

            // Finaliser et fermer le document PDF
            doc.end();
            console.log('PDF créé avec succès !');

            // Supprimer le dossier une fois que le PDF est créé
            fs.rmdir(nomDossier, { recursive: true }, (err) => {
                if (err) {
                    console.error('Erreur lors de la suppression du dossier :', err);
                    return;
                }
                console.log('Dossier supprimé avec succès !');
            });
        });
    }
}
