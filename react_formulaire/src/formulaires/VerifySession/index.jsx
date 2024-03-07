import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const VerifySession = ({ children }) => {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(null); // null indique que la vérification n'a pas encore été faite

  useEffect(() => {
    const verifySession = async () => {
      try {
        const response = await fetch('http://localhost:6200/verify', {
          credentials: 'include', // Important pour inclure les cookies dans la requête
          method: 'GET', // Assurez-vous que votre endpoint supporte la méthode GET pour cette vérification
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (!response.ok) {
          throw new Error('La vérification de la session a échoué');
        }

        const data = await response.json();
        setIsValid(data.valid);

        if (!data.valid) {
          navigate('/');
        }
      } catch (error) {
        console.error('Erreur lors de la vérification de la session:', error);
        navigate('/');
      }
    };

    verifySession();
  }, [navigate]);

  // Si la vérification n'est pas encore terminée, vous pouvez choisir de rendre un spinner, un écran de chargement, ou rien.
  if (isValid === null) {
    return <div>Chargement...</div>; // Ou un composant de chargement
  }

  // Rendre les enfants seulement si la session est valide
  return isValid ? <>{children}</> : null;
};

export default VerifySession;
