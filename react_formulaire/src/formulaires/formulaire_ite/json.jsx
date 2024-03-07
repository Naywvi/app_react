export const json = {
  "locale": "fr",
  "logoPosition": "right",
  "completedHtml": {
   "fr": "<h3>qsqd'avoir répondu au questionnaire !</h3>"
  },
  "pages": [
   {
    "name": "page1",
    "elements": [
     {
      "type": "paneldynamic",
      "name": "Panel_facade",
      "startWithNewLine": false,
      "isRequired": true,
      "requiredErrorText": {
       "fr": "Merci de remplir remplir le champ."
      },
      "templateElements": [
       {
        "type": "dropdown",
        "name": "orientation_face",
        "title": {
         "default": "Quel est l'orientation de la face\n",
         "fr": "Quelle est l'orientation géographique de la façade ?\n"
        },
        "isRequired": true,
        "choices": [
         {
          "value": "N",
          "text": "Nord"
         },
         {
          "value": "NE",
          "text": "Nord-Est"
         },
         {
          "value": "NO",
          "text": "Nord-Ouest"
         },
         {
          "value": "S",
          "text": "Sud"
         },
         {
          "value": "SE",
          "text": "Sud-Est"
         },
         {
          "value": "SO",
          "text": "Sud-Ouest"
         },
         {
          "value": "E",
          "text": "Est"
         },
         {
          "value": "O",
          "text": "Ouest"
         }
        ]
       },
       {
        "type": "image",
        "name": "img_1",
        "startWithNewLine": false,
        "imageLink": {
         "fr": "https://api.surveyjs.io/private/Surveys/files?name=1d5bf775-39f9-40be-bc69-c1929af66b02"
        },
        "imageFit": "cover",
        "imageHeight": "auto",
        "imageWidth": "100%"
       },
       {
        "type": "file",
        "name": "photo_face",
        "title": {
         "default": "Prendre une photo au plan large de la face",
         "fr": "Prendre une photo dégagée complète  de la façade."
        },
        "isRequired": true,
        "showCommentArea": true,
        "commentText": {
         "fr": "Commentaire"
        },
        "allowMultiple": true,
        "waitForUpload": true,
        "needConfirmRemoveFile": true,
        "storeDataAsText": false,
        "maxSize": 10485760,
        "sourceType": "camera",
        "filePlaceholder": "Merci de prendre des photos net et visible"
       },
       {
        "type": "image",
        "name": "Exemple de photo",
        "startWithNewLine": false,
        "imageLink": {
         "fr": "https://api.surveyjs.io/private/Surveys/files?name=dda17827-888a-4d26-8b48-c212b60bc64f"
        },
        "imageFit": "cover",
        "imageHeight": "auto",
        "imageWidth": "100%"
       },
       {
        "type": "dropdown",
        "name": "type_de_face",
        "title": {
         "default": "De quelle type de face s'agit-il ?",
         "fr": "De quel type est cette façade ?"
        },
        "description": {
         "fr": "Pignon = Sommet de la toiture sur la face"
        },
        "isRequired": true,
        "choices": [
         {
          "value": "avant_avec_pinion",
          "text": "Face avant contenant un pinion"
         },
         {
          "value": "avant_sans_pinion",
          "text": "Face avant ne contenant pas de pinion"
         },
         {
          "value": "arrirere_avec_pinion",
          "text": "Face arrière contenant un pinion"
         },
         {
          "value": "arrirere_sans_pinion",
          "text": "Face arrière ne contenant pas de pinion"
         },
         {
          "value": "droite_avec_pinion",
          "text": "Face droite contenant un pinion"
         },
         {
          "value": "droite_sans_pinion",
          "text": "Face droite ne contenant pas de pinion"
         },
         {
          "value": "gauche_avec_pinion",
          "text": "Face gauche contenant un pinion"
         },
         {
          "value": "gauche_sans_pinion",
          "text": "Face gauche ne contenant pas de pinion"
         }
        ]
       },
       {
        "type": "text",
        "name": "epaisseur_mur",
        "startWithNewLine": false,
        "title": {
         "fr": "Quelle est l'épaisseur du mur de cette façade hors isolation ?"
        },
        "description": {
         "fr": "📏 en millimetre"
        },
        "isRequired": true,
        "inputType": "number",
        "min": 0
       },
       {
        "type": "dropdown",
        "name": "nature_mur",
        "startWithNewLine": false,
        "title": {
         "fr": "Quelle est la nature de ce mur de façade ?"
        },
        "isRequired": true,
        "choices": [
         {
          "value": "briques",
          "text": {
           "fr": "Briques"
          }
         },
         {
          "value": "parpaing",
          "text": {
           "fr": "Parpaing"
          }
         },
         {
          "value": "pierre_naturelle",
          "text": {
           "fr": "Pierre naturelle"
          }
         },
         {
          "value": "bois",
          "text": {
           "fr": "Bois"
          }
         },
         {
          "value": "beton",
          "text": {
           "fr": "Béton"
          }
         },
         {
          "value": "autre",
          "text": {
           "fr": "Autre"
          }
         }
        ]
       },
       {
        "type": "text",
        "name": "hauteur_face",
        "title": {
         "default": "Hauteur de la face ",
         "fr": "Hauteur de la façade avant gouttière."
        },
        "description": {
         "default": "📏 en mètre linéaire",
         "fr": "📏 en millimetre"
        },
        "isRequired": true,
        "inputType": "number",
        "min": 0
       },
       {
        "type": "text",
        "name": "largeur_face",
        "startWithNewLine": false,
        "title": {
         "default": "Largeur de la face ",
         "fr": "Largeur de la façade."
        },
        "description": {
         "default": "📏 en mètre linéaire",
         "fr": "📏 en millimetre"
        },
        "isRequired": true,
        "inputType": "number",
        "min": 0
       },
       {
        "type": "text",
        "name": "hauteur_facade_toiture",
        "visibleIf": "{panel.type_de_face} anyof ['avant_avec_pinion', 'arrirere_avec_pinion', 'droite_avec_pinion', 'gauche_avec_pinion']",
        "title": {
         "default": "Largeur du cache cache moinneau ",
         "fr": "Hauteur de la façade avant toiture."
        },
        "description": {
         "default": "📏 en mètre linéaire",
         "fr": "Sur la photo à coté le 1 représente la hauteur de la façade avant toiture.\n📏 en millimètre"
        },
        "isRequired": true,
        "inputType": "number",
        "min": 0
       },
       {
        "type": "image",
        "name": "img_hauteur",
        "visibleIf": "{panel.type_de_face} anyof ['avant_pinion', 'arrirere_pinion', 'droite_pinion', 'gauche_pinion']",
        "startWithNewLine": false,
        "title": {
         "default": "Largeur du cache cache moinneau ",
         "fr": "Hauteur de la façade avant toiture."
        },
        "description": {
         "default": "📏 en mètre linéaire",
         "fr": "📏 en millimètre"
        },
        "imageLink": {
         "fr": "https://api.surveyjs.io/private/Surveys/files?name=577960a1-edbf-4e73-9c2e-4d53ece62289"
        },
        "imageFit": "cover",
        "imageHeight": "auto",
        "imageWidth": "100%"
       },
       {
        "type": "boolean",
        "name": "cache_moinneau",
        "title": {
         "default": "Y a t-il un cache moinneau sur cette face ?",
         "fr": "Y a t-il un cache moineau sur cette face ?"
        },
        "isRequired": true,
        "labelTrue": "Oui",
        "labelFalse": "Non"
       },
       {
        "type": "text",
        "name": "cache_moinneau_largeur",
        "visibleIf": "{panel.cache_moinneau} = true",
        "startWithNewLine": false,
        "title": {
         "default": "Largeur du cache cache moinneau ",
         "fr": "Longueur du cache moineau."
        },
        "description": {
         "default": "📏 en mètre linéaire",
         "fr": "📏 en millimètre"
        },
        "isRequired": true,
        "inputType": "number",
        "min": 0
       },
       {
        "type": "boolean",
        "name": "vide_sanitaire",
        "title": {
         "default": "Y a t-il un vide sanitaire sur cette face ?",
         "fr": "Y a t-il une zone non chauffée visible au dessus du sol sur cette façade ?"
        },
        "description": {
         "fr": "Vide sanitaire, cave etc..."
        },
        "isRequired": true,
        "labelTrue": "Oui",
        "labelFalse": "Non"
       },
       {
        "type": "text",
        "name": "vide_sanitaire_hauteur",
        "visibleIf": "{panel.vide_sanitaire} = true",
        "title": {
         "default": "Hauteur du vide sanitaire",
         "fr": "Hauteur de la  zone non chaufée extérieur sur la façade."
        },
        "description": {
         "default": "📏 en mètre linéaire",
         "fr": "📏 en millimetre"
        },
        "isRequired": true,
        "inputType": "number",
        "min": 0
       },
       {
        "type": "text",
        "name": "vide_sanitaire_largeur",
        "visibleIf": "{panel.vide_sanitaire} = true",
        "startWithNewLine": false,
        "title": {
         "default": "Largeur du vide sanitaire",
         "fr": "Longueur de la  zone non chaufée extérieur sur la façade."
        },
        "description": {
         "default": "📏 en mètre linéaire",
         "fr": "📏 en millimetre"
        },
        "isRequired": true,
        "inputType": "number",
        "min": 0
       },
       {
        "type": "boolean",
        "name": "gouttieres",
        "title": {
         "default": "Largeur du vide sanitaire",
         "fr": "La face contient des gouttières ?"
        },
        "description": {
         "default": "📏 en mètre linéaire",
         "fr": "\n"
        },
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "remplacer_gouttieres",
        "visibleIf": "{panel.gouttieres} = true",
        "title": {
         "default": "Largeur du vide sanitaire",
         "fr": "Les gouttieres sont-elles à remplacer ?"
        },
        "description": {
         "default": "📏 en mètre linéaire",
         "fr": "📏 en millimetre"
        },
        "isRequired": true
       },
       {
        "type": "text",
        "name": "gouttieres_longueur",
        "visibleIf": "{panel.remplacer_gouttieres} = true",
        "startWithNewLine": false,
        "title": "Quelle est la longueur des gouttières ? ",
        "description": {
         "default": "📏 en mètre linéaire",
         "fr": "📏 en millimetre"
        },
        "isRequired": true,
        "inputType": "number",
        "min": 0
       },
       {
        "type": "dropdown",
        "name": "gouttieres_matiere",
        "visibleIf": "{panel.remplacer_gouttieres} = true",
        "title": "Quelle est la matière des gouttières ?",
        "isRequired": true,
        "choices": [
         "Zinc",
         "PVC",
         "Cuivre",
         "Alluminium"
        ]
       },
       {
        "type": "dropdown",
        "name": "gouttieres_forme",
        "visibleIf": "{panel.remplacer_gouttieres} = true",
        "startWithNewLine": false,
        "title": "Quelle est la forme des gouttières ?",
        "isRequired": true,
        "choices": [
         {
          "value": "rectangulaire",
          "text": {
           "fr": "rectangulaire"
          }
         },
         {
          "value": "circulaire",
          "text": {
           "fr": "circulaire"
          }
         }
        ]
       },
       {
        "type": "file",
        "name": "photo_gouttieres",
        "visibleIf": "{panel.remplacer_gouttieres} = true",
        "title": {
         "fr": "Prendre une ou plusieurs photos des gouttieres de la face."
        },
        "isRequired": true,
        "showCommentArea": true,
        "commentText": {
         "fr": "Commentaire"
        },
        "allowMultiple": true,
        "waitForUpload": true,
        "needConfirmRemoveFile": true,
        "storeDataAsText": false,
        "maxSize": 10485760,
        "sourceType": "camera",
        "filePlaceholder": {
         "fr": "Merci de prendre des photos net et visible"
        }
       },
       {
        "type": "boolean",
        "name": "pluvial_devoyer",
        "visibleIf": "{panel.remplacer_gouttieres} = true",
        "title": {
         "fr": "Les descentes de pluviales sont-elles à devoyer ?"
        },
        "isRequired": true
       },
       {
        "type": "text",
        "name": "pluvial_section",
        "visibleIf": "{panel.pluvial_devoyer} = true",
        "title": {
         "fr": "Quelle est la section des descentes de pluvials à devoyer ? "
        },
        "description": {
         "fr": "📏 en millimètre\n(section = l'espace entre le mur et l'objet)"
        },
        "isRequired": true,
        "inputType": "number",
        "min": 0
       },
       {
        "type": "text",
        "name": "pluvial_longueur",
        "visibleIf": "{panel.pluvial_devoyer} = true",
        "startWithNewLine": false,
        "title": {
         "fr": "Quelle est la hauteur des descentes de pluvials à devoyer ? "
        },
        "description": {
         "fr": "📏 en millimètre"
        },
        "isRequired": true,
        "inputType": "number",
        "min": 0
       },
       {
        "type": "dropdown",
        "name": "pluvial_matiere",
        "visibleIf": "{panel.pluvial_devoyer} = true",
        "title": {
         "fr": "Quelle est la matière des descentes de pluviales à devoyer ? "
        },
        "isRequired": true,
        "choices": [
         {
          "value": "Zinc",
          "text": {
           "fr": "Zinc"
          }
         },
         {
          "value": "PVC",
          "text": {
           "fr": "PVC"
          }
         },
         {
          "value": "Cuivre",
          "text": {
           "fr": "Cuivre"
          }
         },
         {
          "value": "Alluminium",
          "text": {
           "fr": "Alluminium"
          }
         },
         {
          "value": "Fonte",
          "text": {
           "fr": "Fonte"
          }
         }
        ]
       },
       {
        "type": "dropdown",
        "name": "pluvial_forme",
        "visibleIf": "{panel.pluvial_devoyer} = true",
        "startWithNewLine": false,
        "title": {
         "fr": "Quelle est la forme des descentes de pluviales à devoyer ? "
        },
        "isRequired": true,
        "choices": [
         {
          "value": "rectangulaire",
          "text": {
           "fr": "Rectangulaire"
          }
         },
         {
          "value": "circulaire",
          "text": {
           "fr": "Circulaire"
          }
         }
        ]
       },
       {
        "type": "file",
        "name": "photo_pluvial",
        "visibleIf": "{panel.pluvial_devoyer} = true",
        "title": {
         "fr": "Prendre une ou plusieurs photos des descentes de pluvials de la face"
        },
        "isRequired": true,
        "showCommentArea": true,
        "commentText": {
         "fr": "Commentaire"
        },
        "allowMultiple": true,
        "waitForUpload": true,
        "needConfirmRemoveFile": true,
        "storeDataAsText": false,
        "maxSize": 10485760,
        "sourceType": "camera",
        "filePlaceholder": {
         "fr": "Merci de prendre des photos net et visible"
        }
       },
       {
        "type": "file",
        "name": "photo_fissure",
        "title": {
         "fr": "Prendre en photo les fissures de la façade."
        },
        "showCommentArea": true,
        "commentText": {
         "fr": "Commentaire"
        },
        "allowMultiple": true,
        "waitForUpload": true,
        "needConfirmRemoveFile": true,
        "sourceType": "camera",
        "filePlaceholder": {
         "fr": "Merci de prendre des photos net et visible"
        }
       },
       {
        "type": "file",
        "name": "singulier",
        "title": {
         "fr": "Points singulier de la façade :"
        },
        "description": {
         "fr": "Exemple : Bouche d'aération, racines d'arbre ect.."
        },
        "showCommentArea": true,
        "commentText": {
         "fr": "Commentaire"
        },
        "allowMultiple": true,
        "waitForUpload": true,
        "needConfirmRemoveFile": true,
        "storeDataAsText": false,
        "maxSize": 10485760,
        "sourceType": "camera",
        "filePlaceholder": {
         "fr": "Merci de prendre des photos net et visible"
        }
       },
       {
        "type": "comment",
        "name": "commentaire_facade",
        "title": {
         "fr": "Commentaire façade:"
        },
        "description": {
         "fr": "Si vous ne souhaitez pas laisser de commentaire laissez ce champ vide."
        }
       },
       {
        "type": "paneldynamic",
        "name": "Formulaire ouvrant :",
        "description": {
         "fr": "Laisser vide si la façade ne contient pas d'ouvrant"
        },
        "templateElements": [
         {
          "type": "dropdown",
          "name": "type_ouvrant",
          "title": {
           "fr": "Quel est le type d'ouvrant ?"
          },
          "isRequired": true,
          "choices": [
           {
            "value": "fenetre",
            "text": {
             "fr": "Fenetre"
            }
           },
           {
            "value": "fenetre_toit",
            "text": {
             "fr": "Fenetre de toit"
            }
           },
           {
            "value": "porte",
            "text": {
             "fr": "Porte"
            }
           },
           {
            "value": "porte_fenetre",
            "text": {
             "fr": "Porte fenetre"
            }
           },
           {
            "value": "porte_garage",
            "text": {
             "fr": "Porte de garage"
            }
           },
           {
            "value": "baie",
            "text": {
             "fr": "Baie"
            }
           },
           {
            "value": "coulissante",
            "text": {
             "fr": "Fenetre coulissante"
            }
           },
           {
            "value": "battant",
            "text": {
             "fr": "Fenetre a battant"
            }
           }
          ]
         },
         {
          "type": "text",
          "name": "hauteur_ouvrant",
          "title": {
           "fr": "Hauteur de l'ouvrant."
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
          "name": "largeur_ouvrant",
          "startWithNewLine": false,
          "title": {
           "fr": "Largeur de l'ouvrant."
          },
          "description": {
           "fr": "📏 en millimètre"
          },
          "isRequired": true,
          "inputType": "number",
          "min": 0
         },
         {
          "type": "dropdown",
          "name": "matiere_ouvrant",
          "title": {
           "fr": "De quelle matière est l'ouvrant ?"
          },
          "isRequired": true,
          "choices": [
           {
            "value": "bois",
            "text": {
             "fr": "Bois"
            }
           },
           {
            "value": "metal_bois",
            "text": {
             "fr": "Métal / Bois"
            }
           },
           {
            "value": "autres",
            "text": {
             "fr": "Autres"
            }
           },
           {
            "value": "pvc",
            "text": {
             "fr": "PVC"
            }
           },
           {
            "value": "aluminium",
            "text": {
             "fr": "Aluminium"
            }
           }
          ]
         },
         {
          "type": "dropdown",
          "name": "vitrage_ouvrant",
          "startWithNewLine": false,
          "title": {
           "fr": "Quel est le type de vitrage de l'ouvrant ?"
          },
          "isRequired": true,
          "choices": [
           {
            "value": "simple",
            "text": {
             "fr": "Vitrage simple"
            }
           },
           {
            "value": "double",
            "text": {
             "fr": "Vitrage double"
            }
           },
           {
            "value": "triple",
            "text": {
             "fr": "Vitrage triple"
            }
           },
           {
            "value": "aucun",
            "text": {
             "fr": "Aucun vitrage"
            }
           }
          ]
         },
         {
          "type": "boolean",
          "name": "volet_ouvrant",
          "title": {
           "fr": "Y a t-il des volets au niveau de l'ouvrant ? "
          },
          "isRequired": true
         },
         {
          "type": "dropdown",
          "name": "type_volet_ouvrant",
          "visibleIf": "{panel.volet_ouvrant} = true",
          "title": {
           "fr": "Type de volets au niveau de l'ouvrant ?"
          },
          "isRequired": true,
          "choices": [
           {
            "value": "fr",
            "text": {
             "fr": "Volets à la française"
            }
           },
           {
            "value": "persiennes",
            "text": {
             "fr": "Persiennes"
            }
           },
           {
            "value": "roulant_exterieur",
            "text": {
             "fr": "Volet roulant en applique extérieur"
            }
           },
           {
            "value": "roulant_interieur",
            "text": {
             "fr": "Volet roulant en applique intérieur"
            }
           },
           {
            "value": "roulant_mono",
            "text": {
             "fr": "Volet roulant mono bloc"
            }
           },
           {
            "value": "titan",
            "text": {
             "fr": "Volet coffre type TITAN"
            }
           }
          ]
         },
         {
          "type": "boolean",
          "name": "volet_unique_ouvrant",
          "visibleIf": "{panel.volet_ouvrant} = true",
          "title": {
           "fr": "Est-ce un volet unique ?\n"
          },
          "isRequired": true
         },
         {
          "type": "image",
          "name": "img_ouvrant_1",
          "visibleIf": "{panel.volet_ouvrant} = true",
          "startWithNewLine": false,
          "imageLink": {
           "fr": "https://api.surveyjs.io/private/Surveys/files?name=a69e398f-e196-4c5e-8cfb-b785645d3697"
          },
          "imageFit": "cover",
          "imageHeight": "auto",
          "imageWidth": "100%"
         },
         {
          "type": "text",
          "name": "gond_ouvrant",
          "visibleIf": "{panel.volet_ouvrant} = true and {panel.type_volet_ouvrant} anyof ['fr']",
          "title": {
           "fr": "Combien y a t-il de gond de volets ?"
          },
          "isRequired": true,
          "inputType": "number",
          "min": 0
         },
         {
          "type": "image",
          "name": "img_ouvrant_2",
          "visibleIf": "{panel.volet_ouvrant} = true and {panel.type_volet_ouvrant} anyof ['fr']",
          "startWithNewLine": false,
          "imageLink": {
           "fr": "https://api.surveyjs.io/private/Surveys/files?name=0bf80073-8e9e-4520-a6d6-8baf9523311b"
          },
          "imageFit": "cover",
          "imageHeight": "auto",
          "imageWidth": "100%"
         },
         {
          "type": "text",
          "name": "teton_ouvrant",
          "visibleIf": "{panel.volet_ouvrant} = true and {panel.type_volet_ouvrant} anyof ['fr']",
          "title": {
           "fr": "Quel est le diamètre du téton ?"
          },
          "description": {
           "fr": "📏 en millimètre"
          },
          "isRequired": true,
          "inputType": "number",
          "min": 0
         },
         {
          "type": "image",
          "name": "img_ouvrant_3",
          "visibleIf": "{panel.volet_ouvrant} = true and {panel.type_volet_ouvrant} anyof ['fr']",
          "startWithNewLine": false,
          "imageLink": {
           "fr": "https://api.surveyjs.io/private/Surveys/files?name=063ad067-c992-4ce0-88be-bc8454d30ca9"
          },
          "imageFit": "cover",
          "imageHeight": "auto",
          "imageWidth": "100%"
         },
         {
          "type": "boolean",
          "name": "appuie_fenetre_ouvrant",
          "visibleIf": "{panel.type_ouvrant} anyof ['fenetre', 'coulissante', 'battant']",
          "title": {
           "fr": "Y a t'il des appuies de fenetre sur l'ouvrant ?"
          },
          "isRequired": true
         },
         {
          "type": "image",
          "name": "img_ouvrant_4",
          "visibleIf": "{panel.type_ouvrant} anyof ['fenetre', 'coulissante', 'battant']",
          "startWithNewLine": false,
          "imageLink": {
           "fr": "https://api.surveyjs.io/private/Surveys/files?name=d71bc1bb-f25c-4a72-ac98-28411a6d5545"
          },
          "imageFit": "cover",
          "imageHeight": "auto",
          "imageWidth": "100%"
         },
         {
          "type": "boolean",
          "name": "grille_ouvrant",
          "title": {
           "fr": "Y a t'il des grilles de défense sur l'ouvrant ?"
          },
          "isRequired": true
         },
         {
          "type": "image",
          "name": "img_ouvrant_5",
          "startWithNewLine": false,
          "imageLink": {
           "fr": "https://api.surveyjs.io/private/Surveys/files?name=b66fde1e-7567-4da9-92f3-1d9757e9fea0"
          },
          "imageFit": "cover",
          "imageHeight": "auto",
          "imageWidth": "100%"
         },
         {
          "type": "boolean",
          "name": "garde_corps",
          "visibleIf": "{panel.type_ouvrant} anyof ['fenetre', 'coulissante', 'battant']",
          "title": {
           "fr": "Y a t'il un garde corps sur l'ouvrant ?\n"
          }
         },
         {
          "type": "file",
          "name": "photo_ouvrant",
          "title": {
           "fr": "Prendre une ou plusieurs photos de l'ouvrant."
          },
          "isRequired": true,
          "showCommentArea": true,
          "commentText": {
           "fr": "Commentaire"
          },
          "allowMultiple": true,
          "waitForUpload": true,
          "needConfirmRemoveFile": true,
          "storeDataAsText": false,
        "maxSize": 10485760,
          "sourceType": "file-camera"
         },
         {
          "type": "comment",
          "name": "commentaire_ouvrant",
          "title": {
           "fr": "Commentaire ouvrant :"
          },
          "description": {
           "fr": "Si vous ne souhaitez pas laisser de commentaire laissez ce champ vide."
          }
         }
        ],
        "templateTabTitle": {
         "fr": "Ouvrant numéro {panelIndex}"
        },
        "noEntriesText": {
         "fr": "Ajouter un nouvel ouvrant."
        },
        "confirmDelete": true,
        "panelAddText": {
         "fr": "✅ Ajouter un ouvrant"
        },
        "panelRemoveText": {
         "fr": "❌ Supprimer l'ouvrant"
        },
        "showQuestionNumbers": "onPanel",
        "renderMode": "tab"
       }
      ],
      "templateTabTitle": {
       "fr": "Façade {panelIndex}"
      },
      "noEntriesText": {
       "fr": "Commencer le formulaire concernant les façades de la maison."
      },
      "maxPanelCount": 25,
      "confirmDelete": true,
      "panelAddText": {
       "fr": "✅ Ajouter une façade"
      },
      "panelRemoveText": {
       "fr": "❌ Supprimer la façade"
      },
      "renderMode": "tab"
     }
    ]
   }
  ],
  "pagePrevText": {
   "fr": "Précédents"
  },
  "pageNextText": {
   "fr": "Suivants"
  },
  "completeText": {
   "fr": "Terminer"
  }
 }