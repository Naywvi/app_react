module.exports = {
    air: (a, b) => {
        return a * b;
    },
    air_pinion: (a, b) => {
        return Math.sqrt(Math.pow(a / 2, 2) + Math.pow(b, 2)) * 2;
    },
    volume(a, b, c) {
        return a * b * c;
    },
    espace_total: (L, h_gouttiere, h_faîtage) => {
        // Convertir en mètres
        L = L;
        h_gouttiere = h_gouttiere ;
        h_faîtage = h_faîtage ;
        
        // Calcul de l'aire de la partie rectangulaire
        const aire_rectangulaire = L * h_gouttiere;

        // Calcul de l'aire du pignon
        const hauteur_pignon = h_faîtage - h_gouttiere;
        const aire_pignon = (L * hauteur_pignon) / 2;

        // Calcul de l'espace total
        return aire_rectangulaire + aire_pignon;
    }
}