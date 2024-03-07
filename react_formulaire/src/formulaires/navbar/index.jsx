import React, { useEffect, useState } from 'react';

function NavbarComponent() {
  // Ajout de l'état pour contrôler l'affichage en fonction du rôle d'administrateur
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const verifyAdmin = async () => {
      try {
        const response = await fetch('http://localhost:6200/verifyadmin', {
          method: 'GET',
          credentials: 'include', // Pour envoyer les cookies avec la requête
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (!response.ok) {
          throw new Error('La vérification du statut admin a échoué');
        }

        const data = await response.json();
        setIsAdmin(data.isAdmin);

      } catch (error) {
        console.error('Erreur lors de la vérification du statut admin:', error);
      }
    };

    verifyAdmin();
  }, []);

  return (
    <>
      <div className="demo-page-navigation">
        <nav>
          <li>
            <a href="/vt#intro"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M10 15h12v1H10zm-4-3h2v-2H6zm4-1h12v-1H10zm-4 6h2v-2H6zm4 4h12v-1H10zm-4 1h2v-2H6zM23 3v3a1.001 1.001 0 0 1-1 1H2a1.001 1.001 0 0 1-1-1V3a1.001 1.001 0 0 1 1-1h20a1.001 1.001 0 0 1 1 1zm-.999 3H22V3H2v3h20.001z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
                    Visite tech</a>
          </li>
          {isAdmin && (
            <li>
              <a href="/moderation"><svg fill="#000000" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M276.941 440.584v565.722c0 422.4 374.174 625.468 674.71 788.668l8.02 4.292 8.131-4.292c300.537-163.2 674.71-366.268 674.71-788.668V440.584l-682.84-321.657L276.94 440.584Zm682.73 1479.529c-9.262 0-18.523-2.372-26.993-6.89l-34.9-18.974C588.095 1726.08 164 1495.906 164 1006.306V404.78c0-21.91 12.65-41.788 32.414-51.162L935.727 5.42c15.134-7.228 32.866-7.228 48 0l739.313 348.2c19.765 9.374 32.414 29.252 32.414 51.162v601.525c0 489.6-424.207 719.774-733.779 887.943l-34.899 18.975c-8.47 4.517-17.731 6.889-27.105 6.889Zm467.158-547.652h-313.412l-91.595-91.482v-83.803H905.041v-116.78h-83.69l-58.503-58.504c-1.92.113-3.84.113-5.76.113-176.075 0-319.285-143.21-319.285-319.285 0-176.075 143.21-319.398 319.285-319.398 176.075 0 319.285 143.323 319.285 319.398 0 1.92 0 3.84-.113 5.647l350.57 350.682v313.412Zm-266.654-112.941h153.713v-153.713L958.462 750.155l3.953-37.27c1.017-123.897-91.595-216.621-205.327-216.621S550.744 588.988 550.744 702.72c0 113.845 92.612 206.344 206.344 206.344l47.21-5.309 63.811 63.7h149.873v116.78h116.781v149.986l25.412 25.299Zm-313.4-553.57c0 46.758-37.949 84.706-84.706 84.706-46.758 0-84.706-37.948-84.706-84.706s37.948-84.706 84.706-84.706c46.757 0 84.706 37.948 84.706 84.706" fill-rule="evenodd"></path> </g></svg>
                    Modération</a>
            </li>
          )}
          <li>
            <a href="/logout"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 12H20M20 12L17 9M20 12L17 15" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 12C4 7.58172 7.58172 4 12 4M12 20C9.47362 20 7.22075 18.8289 5.75463 17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                        Déconnexion</a>
          </li>
        </nav>
      </div>
    </>
  );
}

export default NavbarComponent;
