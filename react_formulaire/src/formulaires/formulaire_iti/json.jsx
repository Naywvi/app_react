export const json = {
    "locale": "fr",
    "completedHtml": {
        "fr": "<h3>Questionnaire ITI Soumis 👍</h3>"
       },
    "focusFirstQuestionAutomatic": true,
    "pages": [
        {
         "name": "page1",
         "elements": [
          {
           "type": "panel",
           "name": "question1",
           "elements": [
            {
             "type": "image",
             "name": "img_1",
             "title": "Prendre une ou plusieurs photos au plan large des sous rampants verticaux.\n",
             "hideNumber": true,
             "imageLink": {
              "fr": "https://api.surveyjs.io/private/Surveys/files?name=5df790c1-17c9-45f3-9069-4eac0a78e2d4"
             },
             "imageFit": "cover",
             "imageHeight": "auto",
             "imageWidth": "100%"
            },
            {
             "type": "file",
             "name": "photo_sous_rampant_verticaux",
             "startWithNewLine": false,
             "title": "Prendre une ou plusieurs photos au plan large des sous rampants verticaux.\n",
             "hideNumber": true,
             "isRequired": true,
             "allowMultiple": true,
             "storeDataAsText": false,
             "waitForUpload": true,
             "maxSize": 10485760,
             "sourceType": "file-camera",
             "filePlaceholder": "Merci de prendre des photos net et visible"
            },
            {
             "type": "text",
             "name": "largeur_vertical_sous_rampants",
             "visibleIf": "{photo_sous_rampant_verticaux} notempty",
             "title": {
              "default": "Largeur en metre linéaire du sous rampant vertical.",
              "fr": "Largeur des sous rampants verticaux.  "
             },
             "description": {
              "fr": "📏 en millimètre"
             },
             "isRequired": true,
             "inputType": "number"
            },
            {
             "type": "text",
             "name": "hauteur_vertical_sous_rampants",
             "visibleIf": "{photo_sous_rampant_verticaux} notempty",
             "startWithNewLine": false,
             "title": {
              "default": "Hauteur en metre linéaire du sous rampant vertical.",
              "fr": "Hauteur des sous rampants verticaux.  "
             },
             "description": {
              "fr": "📏 en millimètre"
             },
             "isRequired": true,
             "inputType": "number"
            }
           ],
           "title": {
            "default": "Prendre une ou plusieurs photos au plan large des sous rampants verticaux.\n",
            "fr": "Verticale sous rampant, sous rampant & Pignon intérieur"
           },
           "isRequired": true
          }
         ]
        },
        {
         "name": "page2",
         "elements": [
          {
           "type": "panel",
           "name": "question3",
           "elements": [
            {
             "type": "image",
             "name": "img_2",
             "imageLink": {
              "fr": "https://api.surveyjs.io/private/Surveys/files?name=5f81ff8f-a76b-421e-bbe7-2a0e9aeb4491"
             },
             "imageFit": "cover",
             "imageHeight": "auto",
             "imageWidth": "100%"
            },
            {
             "type": "file",
             "name": "photo_pinion_interieur",
             "startWithNewLine": false,
             "title": {
              "default": "Prendre une ou plusieurs photos au plan large des pinions intérieurs avant triangle ",
              "fr": "Prendre une ou plusieurs photos au plan large des pinions intérieurs."
             },
             "hideNumber": true,
             "isRequired": true,
             "allowMultiple": true,
             "storeDataAsText": false,
             "waitForUpload": true,
             "maxSize": 10485760,
             "sourceType": "camera",
             "filePlaceholder": "Merci de prendre des photos net et visible"
            },
            {
             "type": "text",
             "name": "largeur_pinion_interieur_avant_triangle",
             "visibleIf": "{photo_pinion_interieur} notempty",
             "title": "Largeur en metre linéaire du pinion intérieur avant triangle.",
             "isRequired": true,
             "inputType": "number"
            },
            {
             "type": "text",
             "name": "hauteur_pinion_interieur_avant_triangle",
             "visibleIf": "{photo_pinion_interieur} notempty",
             "startWithNewLine": false,
             "title": "Hauteur en metre linéaire du pinion intérieur avant triangle.",
             "isRequired": true,
             "inputType": "number"
            }
           ],
           "title": {
            "default": "Prendre une ou plusieurs photos au plan large des pinions intérieurs avant triangle ",
            "fr": "Pignon intérieur"
           },
           "isRequired": true
          }
         ]
        },
        {
         "name": "page3",
         "elements": [
          {
           "type": "panel",
           "name": "question5",
           "elements": [
            {
             "type": "image",
             "name": "img_3",
             "imageLink": {
              "fr": "https://api.surveyjs.io/private/Surveys/files?name=7aae010d-728e-47cf-b92a-299119383009"
             },
             "imageFit": "cover",
             "imageHeight": "auto",
             "imageWidth": "100%"
            },
            {
             "type": "file",
             "name": "photo_sous_rampant",
             "startWithNewLine": false,
             "title": "Prendre une ou plusieurs photos au plan large des sous rampants .",
             "hideNumber": true,
             "isRequired": true,
             "allowMultiple": true,
             "storeDataAsText": false,
             "waitForUpload": true,
             "maxSize": 10485760,
             "sourceType": "file-camera",
             "filePlaceholder": "Merci de prendre des photos net et visible"
            },
            {
             "type": "text",
             "name": "largeur_sous_rampants",
             "visibleIf": "{photo_sous_rampant} notempty",
             "title": "Largeur en metre linéaire du sous rampant.",
             "isRequired": true,
             "inputType": "number"
            },
            {
             "type": "text",
             "name": "hauteur_sous_rampants",
             "visibleIf": "{photo_sous_rampant} notempty",
             "startWithNewLine": false,
             "title": "Hauteur en metre linéaire du sous rampant .",
             "isRequired": true,
             "inputType": "number"
            }
           ],
           "title": {
            "default": "Prendre une ou plusieurs photos au plan large des sous rampants .",
            "fr": "\n"
           }
          }
         ]
        },
        {
         "name": "page4",
         "elements": [
          {
           "type": "panel",
           "name": "question7",
           "elements": [
            {
             "type": "image",
             "name": "img_4",
             "imageLink": {
              "fr": "https://api.surveyjs.io/private/Surveys/files?name=48c192b8-1b1b-4ff0-ae4c-4d13aa24d67d"
             },
             "imageFit": "cover",
             "imageHeight": "auto",
             "imageWidth": "100%"
            },
            {
             "type": "file",
             "name": "photo_sol",
             "startWithNewLine": false,
             "title": {
              "default": "Prendre une ou plusieurs photos du sol .",
              "fr": "Prendre une ou plusieurs photos du plancher ."
             },
             "hideNumber": true,
             "isRequired": true,
             "allowMultiple": true,
             "storeDataAsText": false,
             "waitForUpload": true,
             "maxSize": 10485760,
             "sourceType": "file-camera",
             "filePlaceholder": "Merci de prendre des photos net et visible"
            },
            {
             "type": "text",
             "name": "hauteur_sol",
             "visibleIf": "{photo_sol} notempty",
             "title": "Hauteur en metre linéaire du sol .",
             "isRequired": true,
             "inputType": "number"
            },
            {
             "type": "text",
             "name": "largeur_sol",
             "visibleIf": "{photo_sol} notempty",
             "startWithNewLine": false,
             "title": "Largeur en metre linéaire du sol .",
             "isRequired": true,
             "inputType": "number"
            }
           ],
           "title": {
            "default": "Prendre une ou plusieurs photos du sol .",
            "fr": "Etat du plancher de comble à isoler"
           },
           "isRequired": true
          }
         ]
        },
        {
         "name": "page5",
         "elements": [
          {
           "type": "dropdown",
           "name": "methode_existante",
           "title": {
            "default": "Quelle est la méthode utilisé ?",
            "fr": "Quelle est la méthode de pose utilisée pour l'isolant existant"
           },
           "isRequired": true,
           "choices": [
            {
             "value": "idk",
             "text": "Je ne sais pas"
            },
            {
             "value": "soufle",
             "text": "Méthode soufflé"
            },
            {
             "value": "deroule",
             "text": "Méthode déroulé"
            }
           ]
          }
         ]
        }
       ],
       "showProgressBar": "auto",
    "showTitle": false,
    "pagePrevText": {
        "fr": "Précédent"
       },
       "pageNextText": {
        "fr": "Suivant"
       },
    "completeText": {
        "fr": "Soumettre le formulaire"
       },
    "questionsOnPageMode": "questionPerPage"
   }