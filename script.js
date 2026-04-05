// Quotas de joueurs
const maxGardiens = 3;
const maxDefenseurs = 9;
const maxMilieux = 7;
const maxAttaquants = 7;

// Initialisation au chargement de la page
window.onload = function() {
    afficherJoueurs(gardiens, 'liste-gardiens', 'cpt-gardien', maxGardiens);
    afficherJoueurs(defenseurs, 'liste-defenseurs', 'cpt-defenseur', maxDefenseurs);
    afficherJoueurs(milieux, 'liste-milieux', 'cpt-milieu', maxMilieux);
    afficherJoueurs(attaquants, 'liste-attaquants', 'cpt-attaquant', maxAttaquants);
};

// Fonction qui génère les petites cartes cliquables
function afficherJoueurs(liste, conteneurId, cptId, max) {
    const conteneur = document.getElementById(conteneurId);
    conteneur.innerHTML = '';
    
    liste.forEach(joueur => {
        const label = document.createElement('label');
        label.className = 'carte-choix';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = joueur.nom;
        
        // On stocke les infos pour l'image finale
        checkbox.dataset.nom = joueur.nom;
        checkbox.dataset.club = joueur.club;
        checkbox.dataset.photo = joueur.photo;
        checkbox.dataset.logo = joueur.logo;
        
        // Gestion des compteurs et des limites avec effet grisé
        checkbox.addEventListener('change', function() {
            let checkedCount = conteneur.querySelectorAll('input:checked').length;
            let toutesLesCartes = conteneur.querySelectorAll('.carte-choix');
            
            // Si on essaie de dépasser le quota
            if (checkedCount > max) {
                this.checked = false; 
                checkedCount = max;
            } 
            
            document.getElementById(cptId).innerText = `(${checkedCount}/${max})`;

            // On vérifie si on a atteint le max pour griser les autres
            if (checkedCount >= max) {
                toutesLesCartes.forEach(carte => {
                    let cb = carte.querySelector('input');
                    if (!cb.checked) {
                        carte.classList.add('grise'); // Ajoute l'effet grisé
                        cb.disabled = true; // Empêche de cliquer
                    }
                });
            } else {
                // Si on décoche, on enlève l'effet grisé partout
                toutesLesCartes.forEach(carte => {
                    carte.classList.remove('grise');
                    carte.querySelector('input').disabled = false;
                });
            }
        });

        // Structure HTML de la ligne
        const contenu = document.createElement('div');
        contenu.className = 'carte-contenu';
        contenu.innerHTML = `
            <img src="${joueur.photo}" class="carte-photo" onerror="this.style.opacity='0'">
            <div class="carte-infos">
                <span class="carte-nom">${joueur.nom}</span>
                <span class="carte-club">${joueur.club}</span>
            </div>
            <img src="${joueur.logo}" class="carte-logo" onerror="this.style.opacity='0'">
        `;

        label.appendChild(checkbox);
        label.appendChild(contenu);
        conteneur.appendChild(label);
    });
}

// Fonction pour capturer le visuel
// Fonction pour capturer le visuel
function genererVisuel() {
    remplirVisuel('liste-gardiens', 'visuel-gardiens');
    remplirVisuel('liste-defenseurs', 'visuel-defenseurs');
    remplirVisuel('liste-milieux', 'visuel-milieux');
    remplirVisuel('liste-attaquants', 'visuel-attaquants');

    const zone = document.getElementById('zone-a-capturer');
    zone.style.display = 'block'; // On l'affiche une seconde pour la photo

    html2canvas(zone, { backgroundColor: '#1a1a1a', scale: 2 }).then(canvas => {
        document.getElementById('image-finale').innerHTML = '';
        document.getElementById('image-finale').appendChild(canvas);
        zone.style.display = 'none'; // On la recache
        
        // NOUVEAU : On rend visible la zone de résultat avant de scroller !
        const blocResultat = document.getElementById('resultat');
        blocResultat.style.display = 'block';
        blocResultat.scrollIntoView({ behavior: 'smooth' });
    });
}

// Fonction qui remplit la grosse image finale avec les joueurs cochés
function remplirVisuel(sourceId, cibleId) {
    const cible = document.getElementById(cibleId);
    cible.innerHTML = '';
    
    const checkboxes = document.querySelectorAll(`#${sourceId} input:checked`);
    
    checkboxes.forEach(cb => {
        const li = document.createElement('li');
        li.className = 'joueur-carte';
        li.innerHTML = `
            <img src="${cb.dataset.photo}" class="joueur-photo" onerror="this.style.opacity='0'">
            <div class="joueur-infos">
                <div class="joueur-nom">${cb.dataset.nom}</div>
                <div class="joueur-club">${cb.dataset.club}</div>
            </div>
            <img src="${cb.dataset.logo}" class="joueur-logo" onerror="this.style.opacity='0'">
        `;
        cible.appendChild(li);
    });
}

// Fonction du bouton de téléchargement
function telechargerImage() {
    const canvas = document.querySelector('#image-finale canvas');
    if (canvas) {
        const link = document.createElement('a');
        link.download = 'MaListeDZ.png';
        link.href = canvas.toDataURL();
        link.click();
    }
}