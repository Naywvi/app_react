import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "../../assets/css/index.css";
import { json } from "./json";

function formulaire_general() {
    const survey = new Model(json);
    survey.onComplete.add((sender, options) => {
        // Convertir les données du formulaire en JSON, y compris les références aux fichiers
        const data = sender.data;
    
        // Assurez-vous que votre backend est capable de traiter ce format JSON correctement,
        // spécialement la gestion des références aux fichiers au lieu des fichiers eux-mêmes.
        fetch('http://localhost:6200/client', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(result => {
      
            console.log('Success:', result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
        alert("Merci pour votre réponse ! Merci de ne pas quitter la page jusquèà la fin de la visite technique. ");
        document.getElementById("client").hidden = true;
        document.getElementById("general").hidden = false;
        document.getElementById("ite").hidden = false;
        document.getElementById("iti").hidden = false;
        document.getElementById("sf").hidden = false;
    });
    return (<Survey model={survey} />);
}

export default formulaire_general;