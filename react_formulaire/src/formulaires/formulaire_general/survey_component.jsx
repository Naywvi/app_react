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
        fetch('http://localhost:6200/general', {
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
        setTimeout(() => {
            document.getElementById("general").hidden = true;
        }, 5000);
    });
    return (<Survey model={survey} />);
}

export default formulaire_general;