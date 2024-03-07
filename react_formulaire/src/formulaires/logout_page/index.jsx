import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate au lieu de useHistory
import Cookies from 'js-cookie';

function Logout() {
  const navigate = useNavigate(); // Utiliser useNavigate pour obtenir la fonction de navigation

  useEffect(() => {
    // Liste tous les cookies et les supprime un par un
    const allCookies = Cookies.get();
    Object.keys(allCookies).forEach(cookie => Cookies.remove(cookie));

    // Redirige vers la page d'accueil après 5 secondes
    setTimeout(() => {
      navigate('/'); // Utiliser navigate('/') au lieu de history.push('/')
    }, 2);
  }, [navigate]); // Ajouter navigate aux dépendances du useEffect

  return (
    <div>
      <h1>Vous avez été déconnecté</h1>
    </div>
  );
}

export default Logout;
