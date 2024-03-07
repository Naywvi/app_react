import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "../../assets/css/index.css";
import { json } from "./json";

function SurveyComponent() {
    const survey = new Model(json);
    survey.onComplete.add((sender, options) => {
        // Convertir les données du formulaire en JSON, y compris les références aux fichiers
        const data = sender.data;
    
        // Assurez-vous que votre backend est capable de traiter ce format JSON correctement,
        // spécialement la gestion des références aux fichiers au lieu des fichiers eux-mêmes.
        fetch('http://localhost:6200/sous_face', {
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
            document.getElementById("sf").hidden = true;
        }, 5000);
    });
    survey.onUploadFiles.add((_, options) => {
        const formData = new FormData();
        options.files.forEach((file) => {
            formData.append(file.name, file);
        });
    
        fetch("https://api.surveyjs.io/private/Surveys/uploadTempFiles", {
            method: "POST",
            body: formData
        })
            .then((response) => response.json())
            .then((data) => {
                options.callback(
                    options.files.map((file) => {
                        return {
                            file: file,
                            content: "https://api.surveyjs.io/private/Surveys/getTempFile?name=" + data[file.name]
                        };
                    })
                );
            })
            .catch((error) => {
                console.error("Error: ", error);
                options.callback([], [ 'An error occurred during file upload.' ]);
            });
    });
    
    async function deleteFile(fileURL, options) {
        try {
            const name = fileURL.split("=")[1];
            const apiUrl = `https://api.surveyjs.io/private/Surveys/deleteTempFile?name=${name}`;
            const response = await fetch(apiUrl, {
                method: "DELETE"
            });
    
            if (response.status === 200) {
                console.log(`File ${name} was deleted successfully`);
                options.callback("success");
            } else {
                console.error(`Failed to delete file: ${name}`);
                options.callback("error");
            }
        } catch (error) {
            console.error("Error while deleting file: ", error);
            options.callback("error");
        }
    }
    
    survey.onClearFiles.add(async (_, options) => {
        if (!options.value || options.value.length === 0)
            return options.callback("success");
        if (!options.fileName && !!options.value) {
            for (const item of options.value) {
                await deleteFile(item.content, options);
            }
        } else {
            const fileToRemove = options.value.find(
                (item) => item.name === options.fileName
            );
            if (fileToRemove) {
                await deleteFile(fileToRemove.content, options);
            } else {
                console.error(`File with name ${options.fileName} is not found`);
            }
        }
    });
    return (<Survey model={survey} />);
}

export default SurveyComponent;