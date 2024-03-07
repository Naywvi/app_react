export const json = {
    "locale": "fr",
    "logoPosition": "right",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "text",
        "name": "prenom",
        "title": "Quel est le prénom du client ?",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "nom",
        "title": "Quel est le nom du client ?",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "ville",
        "title": "Quelle est la ville du client ?",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "zip",
        "title": "Quelle est le code postal du client ?",
        "isRequired": true,
        "inputType": "number"
       },
       {
        "type": "text",
        "name": "numero",
        "title": "Quel est le numéro de téléphone du client ?",
        "isRequired": true,
        "inputType": "number"
       },
       {
        "type": "text",
        "name": "mail",
        "title": "Quel est le mail du client ?",
        "inputType": "email"
       },
       {
        "type": "signaturepad",
        "name": "signature_client",
        "title": {
         "fr": "Merci de faire signer le client."
        },
        "isRequired": true
       },
       {
        "type": "signaturepad",
        "name": "question1",
        "title": {
         "fr": "Merci de signer le formulaire.\n"
        },
        "isRequired": true
       }
      ]
     }
    ],
    "pagePrevText": {
        "fr": "Précédent"
       },
       "pageNextText": {
        "fr": "Suivant"
       },
    "questionsOnPageMode": "questionPerPage"
   }