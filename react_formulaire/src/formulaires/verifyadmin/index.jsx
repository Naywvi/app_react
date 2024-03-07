import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const VerifyAdmin = ({ children }) => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(null); // null indique que la vérification n'a pas encore été faite

  useEffect(() => {
    const verifyAdmin = async () => {
      try {
        const response = await fetch('http://localhost:6200/verifyadmin', {
          method: 'GET',
          credentials: 'include', // Assurez-vous d'envoyer les cookies avec la requête
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (!response.ok) {
          throw new Error('La vérification du statut admin a échoué');
        }

        const data = await response.json();
        setIsAdmin(data.isAdmin);

        if (!data.isAdmin) {
          navigate('/vt'); // Rediriger vers /vt si l'utilisateur n'est pas admin
        }
      } catch (error) {
        console.error('Erreur lors de la vérification du statut admin:', error);
        navigate('/vt'); // Optionnel : rediriger vers la page de connexion ou une autre page
      }
    };

    verifyAdmin();
  }, [navigate]);

  // Si la vérification n'est pas encore terminée, afficher un écran de chargement
  if (isAdmin === null) {
    return <div>Chargement...</div>; // Ou un composant de chargement personnalisé
  }

  // Rendre les enfants seulement si l'utilisateur est admin
  return isAdmin ? <>{children}</> : null;
};

export default VerifyAdmin;
