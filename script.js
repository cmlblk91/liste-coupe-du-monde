// Quotas de joueurs
const maxGardiens = 3;
const maxDefenseurs = 9;
const maxMilieuxAttaquants = 14; // NOUVEAU: La limite globale pour ces deux postes

// Initialisation au chargement de la page
window.onload = function() {
    // Gardiens et Défenseurs gardent leur logique individuelle
    afficherJoueurs(gardiens, 'liste-gardiens', 'cpt-gardien', maxGardiens, false);
    afficherJoueurs(defenseurs, 'liste-defenseurs', 'cpt-defenseur', maxDefenseurs, false);
    
    // Milieux et Attaquants ont un paramètre spécial "estMixte" = true
    afficherJoueurs(milieux, 'liste-milieux', 'cpt-milieu', maxMilieuxAttaquants, true);
    afficherJoueurs(attaquants, 'liste-attaquants', 'cpt-attaquant', maxMilieuxAttaquants, true);
};

function passerEtape(prochaineEtapeId) {
    // 1. On cache toutes les étapes
    document.querySelectorAll('.colonne-choix').forEach(div => {
        div.style.display = 'none';
    });
    
    // 2. On affiche la prochaine
    const prochaine = document.getElementById(prochaineEtapeId);
    prochaine.style.display = 'block';
    
    // 3. Petit bonus : on remonte en haut de la page
    window.scrollTo(0, 0);
}

// Fonction qui génère les petites cartes cliquables
function afficherJoueurs(liste, conteneurId, cptId, max, estMixte) {
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
            if (estMixte) {
                gererLimiteMixte(this);
            } else {
                gererLimiteNormale(this, conteneur, cptId, max);
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

// Fonction classique pour les Gardiens et Défenseurs
function gererLimiteNormale(checkboxClicked, conteneur, cptId, max) {
    let checkedCount = conteneur.querySelectorAll('input:checked').length;
    let toutesLesCartes = conteneur.querySelectorAll('.carte-choix');
    
    // Si on essaie de dépasser le quota
    if (checkedCount > max) {
        checkboxClicked.checked = false; 
        checkedCount = max;
    } 
    
    document.getElementById(cptId).innerText = `(${checkedCount}/${max})`;

    // On vérifie si on a atteint le max pour griser les autres
    if (checkedCount >= max) {
        toutesLesCartes.forEach(carte => {
            let cb = carte.querySelector('input');
            if (!cb.checked) {
                carte.classList.add('grise'); 
                cb.disabled = true; 
            }
        });
    } else {
        // Si on décoche, on enlève l'effet grisé partout
        toutesLesCartes.forEach(carte => {
            carte.classList.remove('grise');
            carte.querySelector('input').disabled = false;
        });
    }
}

// NOUVELLE FONCTION: Gère la limite partagée entre Milieux et Attaquants
function gererLimiteMixte(checkboxClicked) {
    const conteneurMilieux = document.getElementById('liste-milieux');
    const conteneurAttaquants = document.getElementById('liste-attaquants');
    
    let checkedMilieux = conteneurMilieux.querySelectorAll('input:checked').length;
    let checkedAttaquants = conteneurAttaquants.querySelectorAll('input:checked').length;
    let totalMixte = checkedMilieux + checkedAttaquants;
    
    // Si on essaie de dépasser le quota global de 14
    if (totalMixte > maxMilieuxAttaquants) {
        checkboxClicked.checked = false;
        totalMixte = maxMilieuxAttaquants;
        // On recalcule séparément pour l'affichage des compteurs si annulation
        checkedMilieux = conteneurMilieux.querySelectorAll('input:checked').length;
        checkedAttaquants = conteneurAttaquants.querySelectorAll('input:checked').length;
    }
    
    // Mise à jour des compteurs individuels (optionnel, selon ce que tu as dans le HTML)
    // Mise à jour du compteur global Milieux/Attaquants
    const spanMixte = document.getElementById('cpt-mixte');
    if(spanMixte) spanMixte.innerText = `(${totalMixte}/14)`;

    // On sélectionne TOUTES les cartes (milieux + attaquants) pour les griser si limite atteinte
    let toutesLesCartesMixtes = [...conteneurMilieux.querySelectorAll('.carte-choix'), ...conteneurAttaquants.querySelectorAll('.carte-choix')];
    
    if (totalMixte >= maxMilieuxAttaquants) {
        toutesLesCartesMixtes.forEach(carte => {
            let cb = carte.querySelector('input');
            if (!cb.checked) {
                carte.classList.add('grise');
                cb.disabled = true;
            }
        });
    } else {
        // Si on a de la place, on débloque tout
        toutesLesCartesMixtes.forEach(carte => {
            carte.classList.remove('grise');
            carte.querySelector('input').disabled = false;
        });
    }
}

// Fonction pour capturer le visuel
// Fonction pour capturer le visuel (Version Corrigée)
// Fonction pour capturer le visuel
function genererVisuel() {
    // 1. On remplit le modèle HTML caché avec les joueurs sélectionnés
    remplirVisuel('liste-gardiens', 'visuel-gardiens');
    remplirVisuel('liste-defenseurs', 'visuel-defenseurs');
    remplirVisuel('liste-milieux', 'visuel-milieux');
    remplirVisuel('liste-attaquants', 'visuel-attaquants');

    const zone = document.getElementById('zone-a-capturer');
    
    // 2. On affiche la zone une fraction de seconde pour la capture
    zone.style.display = 'block'; 

    // 3. Transformation en image (avec les réglages HD et anti-blocage)
    html2canvas(zone, { 
        backgroundColor: '#1a1a1a', 
        scale: 3,         // Qualité maximale pour X/Twitter
        useCORS: true,    // Indispensable pour que le téléchargement fonctionne avec les logos
        allowTaint: true
    }).then(canvas => {
        // 4. On affiche l'image sur le site
        const imageFinaleConteneur = document.getElementById('image-finale');
        imageFinaleConteneur.innerHTML = '';
        imageFinaleConteneur.appendChild(canvas);
        
        // 5. On recache le modèle HTML
        zone.style.display = 'none'; 
        
        // 6. On fait apparaître le bouton télécharger et on scroll vers lui
        const blocResultat = document.getElementById('resultat');
        blocResultat.style.display = 'block';
        blocResultat.scrollIntoView({ behavior: 'smooth' });

        // 7. NOUVEAU : Envoi silencieux des données vers ta base Firebase
        if (typeof window.envoyerStatsFirebase === "function") {
            window.envoyerStatsFirebase();
        }
        
    }).catch(err => {
        console.error("Erreur capture : ", err);
        alert("Une erreur s'est produite lors de la création de l'image. Essaie de recharger la page.");
        zone.style.display = 'none';
    });
}

function telechargerImage() {
    const canvas = document.querySelector('#image-finale canvas');
    if (!canvas) {
        alert("Génère d'abord ta liste avant de la télécharger !");
        return;
    }
    
    try {
        const link = document.createElement('a');
        link.download = 'MaListeDZ_CoupeDuMonde.png';
        // On utilise image/png pour une qualité maximale
        link.href = canvas.toDataURL("image/png");
        link.click();
    } catch (e) {
        alert("Le navigateur bloque le téléchargement. Essaie de rester appuyé sur l'image pour l'enregistrer.");
        console.error(e);
    }
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

