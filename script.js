// Quotas de joueurs
const maxGardiens = 3;
const maxDefenseurs = 9;
const maxMilieuxAttaquants = 14; 

// Initialisation au chargement de la page
window.onload = function() {
    // On génère les listes pour chaque catégorie
    afficherJoueurs(gardiens, 'liste-gardiens', 'cpt-gardien', maxGardiens, false);
    afficherJoueurs(defenseurs, 'liste-defenseurs', 'cpt-defenseur', maxDefenseurs, false);
    afficherJoueurs(milieux, 'liste-milieux', 'cpt-mixte', maxMilieuxAttaquants, true);
    afficherJoueurs(attaquants, 'liste-attaquants', 'cpt-mixte', maxMilieuxAttaquants, true);
};

// Fonction de navigation entre les "pages"
function showStep(stepNumber) {
    document.querySelectorAll('.step-container').forEach(step => {
        step.classList.remove('active');
    });

    const targetStep = document.getElementById('step-' + stepNumber);
    if (targetStep) {
        targetStep.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Fonction qui génère les fiches de joueurs cliquables
function afficherJoueurs(liste, conteneurId, cptId, max, estMixte) {
    const conteneur = document.getElementById(conteneurId);
    if (!conteneur) return;
    conteneur.innerHTML = '';
    
    liste.forEach(joueur => {
        const label = document.createElement('label');
        label.className = 'carte-choix';
        
        // Structure HTML : Checkbox | Photo | Infos (Nom/Club) | Logo
        label.innerHTML = `
            <input type="checkbox" 
                data-nom="${joueur.nom}" 
                data-club="${joueur.club}" 
                data-photo="${joueur.photo}" 
                data-logo="${joueur.logo}">
            <img src="${joueur.photo}" class="carte-photo" onerror="this.src='logos/placeholder.png'">
            <div class="carte-infos">
                <span class="carte-nom">${joueur.nom}</span>
                <span class="carte-club">${joueur.club}</span>
            </div>
            <img src="${joueur.logo}" class="carte-logo" onerror="this.style.opacity='0'">
        `;

        // Écouteur sur la checkbox pour gérer les limites
        const checkbox = label.querySelector('input');
        checkbox.addEventListener('change', function() {
            if (estMixte) {
                gererLimiteMixte(this);
            } else {
                gererLimiteNormale(this, conteneur, cptId, max);
            }
        });

        conteneur.appendChild(label);
    });
}

// --- LOGIQUE DES LIMITES ---

function gererLimiteNormale(checkboxClicked, conteneur, cptId, max) {
    let checkedCount = conteneur.querySelectorAll('input:checked').length;
    let toutesLesCartes = conteneur.querySelectorAll('.carte-choix');
    
    if (checkedCount > max) {
        checkboxClicked.checked = false; 
        checkedCount = max;
    } 
    
    const spanCpt = document.getElementById(cptId);
    if(spanCpt) spanCpt.innerText = `(${checkedCount}/${max})`;

    actualiserGrisage(toutesLesCartes, checkedCount >= max);
}

function gererLimiteMixte(checkboxClicked) {
    const conteneurMilieux = document.getElementById('liste-milieux');
    const conteneurAttaquants = document.getElementById('liste-attaquants');
    
    let checkedMilieux = conteneurMilieux.querySelectorAll('input:checked').length;
    let checkedAttaquants = conteneurAttaquants.querySelectorAll('input:checked').length;
    let totalMixte = checkedMilieux + checkedAttaquants;
    
    if (totalMixte > maxMilieuxAttaquants) {
        checkboxClicked.checked = false;
        totalMixte = maxMilieuxAttaquants;
    }
    
    const spanMixte = document.getElementById('cpt-mixte');
    if(spanMixte) spanMixte.innerText = `(${totalMixte}/${maxMilieuxAttaquants})`;

    let toutesLesCartesMixtes = [...conteneurMilieux.querySelectorAll('.carte-choix'), ...conteneurAttaquants.querySelectorAll('.carte-choix')];
    actualiserGrisage(toutesLesCartesMixtes, totalMixte >= maxMilieuxAttaquants);
}

function actualiserGrisage(cartes, estLimiteAtteinte) {
    cartes.forEach(carte => {
        let cb = carte.querySelector('input');
        if (estLimiteAtteinte && !cb.checked) {
            carte.classList.add('grise');
            cb.disabled = true;
        } else {
            carte.classList.remove('grise');
            cb.disabled = false;
        }
    });
}

// --- CAPTURE ET GÉNÉRATION IMAGE ---

function genererVisuel() {
    // 1. Remplissage des listes dans la zone de capture
    remplirVisuel('liste-gardiens', 'visuel-gardiens');
    remplirVisuel('liste-defenseurs', 'visuel-defenseurs');
    remplirVisuel('liste-milieux', 'visuel-milieux');
    remplirVisuel('liste-attaquants', 'visuel-attaquants');

    const zone = document.getElementById('zone-a-capturer');
    zone.style.display = 'block'; 

    html2canvas(zone, { 
        backgroundColor: '#1a1a1a', 
        scale: 3, 
        useCORS: true 
    }).then(canvas => {
        const imageFinaleConteneur = document.getElementById('image-finale');
        imageFinaleConteneur.innerHTML = '';
        imageFinaleConteneur.appendChild(canvas);
        
        zone.style.display = 'none'; 
        
        // Affichage du bloc résultat
        const blocResultat = document.getElementById('resultat');
        const btnTelecharger = document.getElementById('btn-telecharger');
        
        blocResultat.classList.add('resultat-visible'); 
        btnTelecharger.style.display = 'block'; 
        
        blocResultat.scrollIntoView({ behavior: 'smooth' });

        if (typeof window.envoyerStatsFirebase === "function") {
            window.envoyerStatsFirebase();
        }
    });
}

function remplirVisuel(sourceId, cibleId) {
    const cible = document.getElementById(cibleId);
    if(!cible) return;
    cible.innerHTML = '';
    
    const checkboxes = document.querySelectorAll(`#${sourceId} input:checked`);
    checkboxes.forEach(cb => {
        const li = document.createElement('li');
        li.className = 'joueur-carte';
        li.innerHTML = `
            <img src="${cb.dataset.photo}" class="joueur-photo">
            <div class="joueur-infos">
                <div class="joueur-nom">${cb.dataset.nom}</div>
                <div class="joueur-club">${cb.dataset.club}</div>
            </div>
            <img src="${cb.dataset.logo}" class="joueur-logo">
        `;
        cible.appendChild(li);
    });
}

function telechargerImage() {
    const canvas = document.querySelector('#image-finale canvas');
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'MaListeDZ_2026.png';
    link.href = canvas.toDataURL("image/png");
    link.click();
}
