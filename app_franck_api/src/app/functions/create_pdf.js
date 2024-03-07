const PDFDocument = require('pdfkit');
const fs = require('fs');
const fetch = require('node-fetch');
const fileType = require('file-type');

// Fonction pour télécharger une image et retourner un buffer
async function downloadImage(url) {
    console.log(`Téléchargement de l'image depuis ${url}`);
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    return response.buffer();
}

function mmToMeters(value) {
    return value ? (value / 1000).toFixed(2) + ' m' : 'N/A'; // Convertit les mm en mètres avec deux décimales
}

async function addSectionTitle(doc, title) {
    doc.fontSize(14).text(title, { underline: true }).moveDown();
}

async function addImagesInSection(doc, photos, currentPositionY, spaceBetweenImages, imageWidth, imageHeight, marginRight, marginTop=100) {
    if (currentPositionY == 50)currentPositionY = 90
    let currentPositionX = marginRight; // Position X initiale pour les photos
    for (const photo of photos) {
        const buffer = await downloadImage(photo.content);
        // Vérifier si l'ajout de la photo dépasserait la largeur de la page
        if (currentPositionX + imageWidth > doc.page.width - marginRight) {
            currentPositionY += imageHeight + spaceBetweenImages; // Passer à la ligne suivante
            currentPositionX = marginRight; // Réinitialiser la position X pour la nouvelle ligne

            // Vérifier si l'ajout de la photo dépasserait la hauteur de la page
            if (currentPositionY + imageHeight > doc.page.height - marginTop) {
                doc.addPage(); // Ajouter une nouvelle page
                currentPositionY = marginTop; // Réinitialiser la position Y pour la nouvelle page
            }
        }
        doc.image(buffer, currentPositionX, currentPositionY, { width: imageWidth, height: imageHeight });
        currentPositionX += imageWidth + spaceBetweenImages; // Mettre à jour la position X pour la prochaine photo
    }
    return currentPositionY + imageHeight + spaceBetweenImages; // Retourner la dernière position Y utilisée pour potentiellement commencer une nouvelle section
}

module.exports={ 
    ite: async (data, username="undefined",path = "undefined") =>{
    count = 0;
    const doc = new PDFDocument();
    const outputPath = `./output/${path}/ite-${username}-${Date.now()}.pdf`;
    doc.pipe(fs.createWriteStream(outputPath));

    for (const faceKey in data) {
        let currentPositionY = 100;
        const imageWidth = 200;
        const imageHeight = 200;
        const marginRight = 50;
        const spaceBetweenImages = 20;
        count ++;

        const face = data[faceKey];
        doc.fontSize(16).text(`Audit ITE`, { align: 'center' });//ajouter user et date
        doc.fontSize(12).moveDown();
        doc.addPage();
        // Informations de base de la face
        doc.fontSize(16).text(`Façade ${count} ${face.orientation_face}: ${face.type_de_face}`, { align: 'center' });
        doc.fontSize(12).moveDown();
        doc.text(`Épaisseur du mur: ${mmToMeters(face.epaisseur_mur)}`);
        doc.text(`Nature du mur: ${face.nature_mur}`);
        doc.text(`Hauteur de la face: ${mmToMeters(face.hauteur_face)}`);
        doc.text(`Largeur de la face: ${mmToMeters(face.largeur_face)}`);
        doc.text(`m² brute de la façade: ${face.mcaree_face_brut + " mm"}`);
        doc.text(`m² net de la façade: ${face.mcaree_face_net + " mm"}`);
        doc.text(`m² net des ouvrants: ${face.mcaree_ouvrant_net + " mm"}`);
        doc.text(`Cache moineau: ${face.cache_moinneau ? 'Oui' : 'Non'}`);
        if(face.cache_moinneau){
            doc.text(`Longueur du cache moinneau : ${face.cache_moinneau_largeur} mm`);
            doc.text(`Longueur rail couronnement : ${mmToMeters(face.longueur_rail_couronnement)}`);
        }
        doc.text(`Vide sanitaire: ${face.vide_sanitaire ? 'Oui' : 'Non'}, Largeur: ${mmToMeters(face.vide_sanitaire_largeur)}`);
        if (face.vide_sanitaire) {
            doc.text(`Hauteur de la zone non chaufée extérieur sur la façade : ${mmToMeters(face.vide_sanitaire_hauteur)}`);
        }
        doc.text(`Gouttières: ${face.gouttieres ? 'Oui' : 'Non'}`);

        // Informations supplémentaires si les gouttières sont à remplacer
        if (face.gouttieres && face.replacer_gouttieres) {
            doc.text(`Remplacer gouttières: Oui`);
            doc.text(`Longueur: ${mmToMeters(face.gouttieres_longueur)}`);
            doc.text(`Matière: ${face.gouttieres_matiere}`);
            doc.text(`Forme: ${face.gouttieres_forme}`); 
        }

        // Informations sur les descentes pluviales si nécessaire
        if (face.pluvial_devoyer) {
            doc.text(`Descentes pluviales à remplacer: Oui`);
            doc.text(`Section: ${face.pluvial_section} mm`);
            doc.text(`Longueur: ${mmToMeters(face.pluvial_longueur)}`);
            doc.text(`Forme: ${face.pluvial_forme}`);
            doc.text(`Matière: ${face.pluvial_matiere}`);
        }

        //points singuliers
        if(face.singulier) doc.text(`Il y a des éléments singuliers sur cette façade. Vous les trouverez dans les pages annexes.`);
        else doc.text(`Il n'y a pas d'éléments singuliers sur cette façade`);

        //photo de la façade
        if (face.photo_face && face.photo_face.length > 0) {
            const buffer = await downloadImage(face.photo_face[0].content); 
            const xPosition = doc.page.width - imageWidth - marginRight;

            doc.image(buffer, xPosition, currentPositionY, { width: imageWidth, height: imageHeight });
            currentPositionY += imageHeight + spaceBetweenImages;
        }

        //photo gouttieres 
        if (face.gouttieres && face.photo_gouttieres && face.photo_gouttieres.length > 0) {
            const buffer = await downloadImage(face.photo_gouttieres[0].content);
            const xPosition = doc.page.width - imageWidth - marginRight;

            doc.image(buffer, xPosition, currentPositionY, { width: imageWidth, height: imageHeight });
            currentPositionY += imageHeight + spaceBetweenImages;
            
            // Informations supplémentaires sur les pluviaux
            if (face.pluvial_devoyer && face.photo_pluvial && face.photo_pluvial.length > 0) {
                const buffer = await downloadImage(face.photo_pluvial[0].content);
                const xPosition = doc.page.width - imageWidth - marginRight;
    
                doc.image(buffer, xPosition, currentPositionY, { width: imageWidth, height: imageHeight });
                currentPositionY += imageHeight + spaceBetweenImages;
            }
        }

        //photo fissures
        if (face.photo_fissures && face.photo_fissures.length > 0) {
            const buffer = await downloadImage(face.photo_fissures[0].content);
            const xPosition = doc.page.width - imageWidth - marginRight;

            doc.image(buffer, xPosition, currentPositionY, { width: imageWidth, height: imageHeight });
            currentPositionY += imageHeight + spaceBetweenImages;
        }
    
        
        // Informations détaillées sur les ouvrants
        if (face.Ouvrants && Array.isArray(face.Ouvrants)) {
            let countOuvrant = 0;
            for (const ouvrant of face.Ouvrants) {
                countOuvrant++;
                doc.addPage();
                doc.fontSize(16).text(`Ouvrant n° ${countOuvrant} de la façade ${count} ${face.orientation_face}: ${face.type_de_face}`, { align: 'center' });
                doc.moveDown().fontSize(14).text('Ouvrants:', { underline: true });
            
                doc.text(`  \n`);
                doc.text(`      - Type: ${ouvrant.type_ouvrant}`, { bold: true });
                doc.text(`      - Matière: ${ouvrant.matiere_ouvrant}`);
                doc.text(`      - Hauteur: ${mmToMeters(ouvrant.hauteur_ouvrant)}`);
                doc.text(`      - Largeur: ${mmToMeters(ouvrant.largeur_ouvrant)}`);
                doc.text(`      - m²: ${ouvrant.mcaree_ouvrant + " mm"}`);
                doc.text(`      - Vitrage: ${ouvrant.vitrage_ouvrant}`);
                doc.text(`      - Volet: ${ouvrant.volet_ouvrant ? 'Oui' : 'Non'}`);
                doc.text(`      - Volet unique ${ouvrant.volet_unique_ouvrant ? 'Oui' : 'Non'}`);
                doc.text(`      - Gond ouvrant ${ouvrant.gond_ouvrant ? ouvrant.gond_ouvrant : 'Aucun'}`);
                doc.text(`      - Teton ouvrant ${ouvrant.teton_ouvrant ? ouvrant.teton_ouvrant + "mm": 'Aucun'}`);
                doc.text(`      - Garde corps ${ouvrant.garde_corps ? 'Oui' : 'Non'}`);
                doc.text(`      - Deport pour volets ${ouvrant.deport_pour_volets ? 'Oui' : 'Non'}`);
                doc.text(`      - Cornières d'angle ${ouvrant.cornière_dangle ? mmToMeters(ouvrant.cornière_dangle) : "Aucune"}`);
                doc.text(`      - Arrets mareseillais ${ouvrant.arrets_marseillais ? ouvrant.arrets_marseillais : "Aucun"}`);
                doc.text(`      - Butées d'arret ${ouvrant.butees_arret ? ouvrant.butees_arret : 'Aucun'}`);
                doc.text(`      - Appuie fenetre ${ouvrant.appuie_fenetre ? mmToMeters(ouvrant.appuie_fenetre) : 'Aucun'}`);
                doc.text(`      - Grille: ${ouvrant.grille_ouvrant ? 'Oui' : 'Non'}`);
                doc.text(`  \n`);
                doc.text(`  \n`);

                if (ouvrant.photo_ouvrant && ouvrant.photo_ouvrant.length > 0) {
                    try {
                        const buffer = await downloadImage(ouvrant.photo_ouvrant[0].content);
                        const imageWidth = 200; // Ajustez selon vos besoins
                        const imageHeight = 200; // Ajustez selon vos besoins
                        // Ajustez la position x selon vos besoins, ici nous mettons l'image au centre
                        const xPosition = (doc.page.width -250 ) ;
                        doc.image(buffer, xPosition, 100, { width: imageWidth, height: imageHeight });
                    } catch (error) {
                        console.error(error);
                    }
                }
            };
        } else {
            doc.text(`  \n`);
            doc.fontSize(10).text("Aucun ouvrant spécifié pour cette face.");
        }
        //annexe page with all photos and titles
        currentPositionY = 50; 
        let countAnnexe = 1;
        
        if (face.photo_face && face.photo_face.length > 0) {
            doc.addPage();
            await addSectionTitle(doc, `.${countAnnexe++} Annexe photos de la façade n°${count} ${face.orientation_face}: ${face.type_de_face}`);
            currentPositionY = await addImagesInSection(doc, face.photo_face, currentPositionY, spaceBetweenImages, imageWidth, imageHeight, marginRight);
            countAnnexe++;
        }

        if (face.photo_gouttieres && face.photo_gouttieres.length > 0) {
            doc.addPage();
            await addSectionTitle(doc, `.${countAnnexe++} Annexe photos des gouttières de la façade n°${count} ${face.orientation_face}: ${face.type_de_face}`);
            currentPositionY = await addImagesInSection(doc, face.photo_gouttieres, currentPositionY, spaceBetweenImages, imageWidth, imageHeight, marginRight);
            countAnnexe++;
        }

        if (face.photo_pluvial && face.photo_pluvial.length > 0) {
            doc.addPage();
            await addSectionTitle(doc, `.${countAnnexe++} Annexe photos pluviaux de la façade n°${count} ${face.orientation_face}: ${face.type_de_face}`);
            currentPositionY = await addImagesInSection(doc, face.photo_pluvial, currentPositionY, spaceBetweenImages, imageWidth, imageHeight, marginRight);
            countAnnexe++;
        }

        if (face.photo_fissure && face.photo_fissure.length > 0) {
            doc.addPage();
            await addSectionTitle(doc, `.${countAnnexe++} Annexe photos des fissures de la façade n°${count} ${face.orientation_face}: ${face.type_de_face}`);
            currentPositionY = await addImagesInSection(doc, face.photo_fissure, currentPositionY, spaceBetweenImages, imageWidth, imageHeight, marginRight);
            countAnnexe++;
        }

        if (face.singulier && face.singulier.length > 0) {
            doc.addPage();
            await addSectionTitle(doc, `.${countAnnexe++} Annexe photos des points singuliers de la façade n°${count} ${face.orientation_face}: ${face.type_de_face}`);
            currentPositionY = await addImagesInSection(doc, face.singulier, currentPositionY, spaceBetweenImages, imageWidth, imageHeight, marginRight);
            countAnnexe++;
        }
        const titleHeight = 20; // Ajustez cette valeur selon la taille de votre titre
        const marginTop = 50
        if (face.Ouvrants && Array.isArray(face.Ouvrants)) {
            let countOuvrant = 0;
            for (const ouvrant of face.Ouvrants) {
                countOuvrant++;
                if (ouvrant.photo_ouvrant && ouvrant.photo_ouvrant.length > 0) {
                    let currentPositionY = marginTop; // Réinitialiser currentPositionY pour la nouvelle page
                    doc.addPage(); // Ajoute une nouvelle page pour chaque ouvrant
                    
                    await addSectionTitle(doc, `.${countAnnexe++} Annexe photos de l'ouvrant n°${countOuvrant} de la façade n°${count} ${face.orientation_face}: ${face.type_de_face}`, currentPositionY);
                    currentPositionY += titleHeight + 20; // Assurez-vous d'ajouter suffisamment d'espace pour le titre
                    if (currentPositionY == 50)currentPositionY = 90
                    
                    currentPositionY = await addImagesInSection(doc, ouvrant.photo_ouvrant, currentPositionY, spaceBetweenImages, imageWidth, imageHeight, marginRight);
                }
            }
        }
    };

     doc.end();
    console.log(`Le PDF a été généré avec succès : ${outputPath}`);
    }
}