export const json = {
    "locale": "fr",
    "completedHtml": {
        "fr": "<h3>Questionnaire SF Soumis 👍</h3>"
       },
    "pages": [
        {
         "name": "page1",
         "elements": [
          {
           "type": "panel",
           "name": "question2",
           "elements": [
            {
             "type": "image",
             "name": "img_1",
             "title": {
              "default": "Prendre une ou plusieurs photos du garage",
              "fr": "Prendre une ou plusieurs photos des zones de sous face"
             },
             "imageLink": {
              "fr": "https://api.surveyjs.io/private/Surveys/files?name=3733b042-4dde-4f1c-891d-77307c8fcaae"
             },
             "imageFit": "cover",
             "imageHeight": "auto",
             "imageWidth": "100%"
            },
            {
             "type": "file",
             "name": "photo_sous_face",
             "startWithNewLine": false,
             "title": {
              "default": "Prendre une ou plusieurs photos du garage",
              "fr": "Prendre une ou plusieurs photos des zones de sous face"
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
             "name": "largeur_garage",
             "visibleIf": "{photo_sous_face} notempty",
             "title": {
              "fr": "Largeur du garage "
             },
             "description": {
              "fr": "📏 en millimètre"
             },
             "isRequired": true,
             "inputType": "number",
             "min": 0
            },
            {
             "type": "text",
             "name": "hauteur_garage",
             "visibleIf": "{photo_sous_face} notempty",
             "startWithNewLine": false,
             "title": {
              "fr": "longueur du garage "
             },
             "description": {
              "fr": "📏 en millimètre"
             },
             "isRequired": true,
             "inputType": "number",
             "min": 0
            },
            {
             "type": "text",
             "name": "longueur",
             "visibleIf": "{photo_sous_face} notempty",
             "startWithNewLine": false,
             "title": {
              "fr": "longueur du garage "
             },
             "description": {
              "fr": "📏 en millimètre"
             },
             "isRequired": true,
             "inputType": "number",
             "min": 0
            }
           ],
           "title": {
            "default": "Prendre une ou plusieurs photos du garage",
            "fr": "Prendre une ou plusieurs photos des zones de sous face"
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
           "name": "question4",
           "elements": [
            {
             "type": "boolean",
             "name": "vide_sanitaire",
             "title": {
              "fr": "Y a t'il un vide sanitaire ?\n"
             },
             "description": {
              "fr": "\n"
             },
             "isRequired": true
            },
            {
             "type": "file",
             "name": "photo_vide_sanitaire",
             "visibleIf": "{vide_sanitaire} = true",
             "startWithNewLine": false,
             "title": {
              "default": "Prendre une ou plusieurs photos du garage",
              "fr": "Prendre une ou plusieurs photos au plan large de du vide sanitaire accessible."
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
             "name": "hauteur_vide_sanitaire",
             "visibleIf": "{photo_vide_sanitaire} notempty and {vide_sanitaire} = true",
             "title": {
              "fr": "Hauteur du vide sanitaire accessible."
             },
             "description": {
              "fr": "📏 en millimètre / 90 mm MAX"
             },
             "isRequired": true,
             "inputType": "number",
             "min": 0,
             "max": 99
            },
            {
             "type": "text",
             "name": "largeur_vide_sanitaire",
             "visibleIf": "{photo_vide_sanitaire} notempty and {vide_sanitaire} = true",
             "startWithNewLine": false,
             "title": {
              "fr": "Largeur du vide sanitaire accessible."
             },
             "description": {
              "fr": "📏 en millimètre"
             },
             "isRequired": true,
             "inputType": "number"
            }
           ]
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
             "type": "boolean",
             "name": "cave",
             "title": {
              "fr": "Y a t'il  une cave ?\n"
             },
             "description": {
              "fr": "\n"
             },
             "isRequired": true
            },
            {
             "type": "file",
             "name": "photo_cave",
             "visibleIf": "{cave} = true",
             "startWithNewLine": false,
             "title": {
              "default": "Prendre une ou plusieurs photos du garage",
              "fr": "Prendre une ou plusieurs photos au plan large de la cave"
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
             "name": "hauteur_cave",
             "visibleIf": "{photo_cave} notempty and {cave} = true",
             "title": {
              "fr": "Hauteur de la cave."
             },
             "description": {
              "fr": "📏 en millimètre"
             },
             "isRequired": true,
             "inputType": "number",
             "min": 0
            },
            {
             "type": "text",
             "name": "largeur_cave",
             "visibleIf": "{photo_cave} notempty and {cave} = true",
             "startWithNewLine": false,
             "title": {
              "fr": "Largeur linéaire de la cave. "
             },
             "description": {
              "fr": "📏 en millimètre"
             },
             "isRequired": true,
             "inputType": "number",
             "min": 0
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