// LISTE DES JOUEURS - RASSEMBLEMENT JUIN
const gardiens = [
    { nom: "LUCA ZIDANE", club: "Grenade FC", photo: "photos/zidane.png", logo: "logos/grenade.png" },
    { nom: "MELVIN MASTIL", club: "FC Stade Nyonnais", photo: "photos/mastil.png", logo: "logos/nyon.png" },
    { nom: "ANTHONY MANDREA", club: "SM Caen", photo: "photos/mandrea.png", logo: "logos/caen.png" },
{ nom: "ALEXIS GUENDOUZ", club: "MC Alger", photo: "photos/guendouz.png", logo: "logos/mca.png" },
{ nom: "FARID CHAAL", club: "CR Belouizdad", photo: "photos/chaal.png", logo: "logos/crb.png" },
{ nom: "GAYA MERBAH", club: "JS Kabylie", photo: "photos/merbah.png", logo: "logos/jsk.png" },
{ nom: "RAYANE YESLI", club: "Olympique Akbou", photo: "photos/yesli.png", logo: "logos/olympique_akbou.png" },
{ nom: "KILLIAN BELAZZOUG", club: "Stade Rennais", photo: "photos/belazzoug.png", logo: "logos/stade_rennais.png" }
];

const defenseurs = [
   { nom: "RAMY BENSEBAINI", club: "Borussia Dortmund", photo: "photos/bensebaini.png", logo: "logos/bvb.png" },
{ nom: "SAMIR CHERGUI", club: "Paris FC", photo: "photos/chergui.png", logo: "logos/paris_fc.png" },
{ nom: "AHMED TOUBA", club: "Panathinaikos", photo: "photos/touba.png", logo: "logos/panathinaikos.png" },
{ nom: "SOHAB NAIR", club: "EA Guingamp", photo: "photos/nair.png", logo: "logos/guingamp.png" },
{ nom: "ZINEDDINE BELAID", club: "JS Kabylie", photo: "photos/belaid.png", logo: "logos/jsk.png" },
{ nom: "MOHAMED TOUGAI", club: "ES Tunis", photo: "photos/tougai.png", logo: "logos/est.png" },
{ nom: "AISSA MANDI", club: "Lille OSC", photo: "photos/mandi.png", logo: "logos/losc.png" },
{ nom: "ACHREF ABADA", club: "USM Alger", photo: "photos/abada.png", logo: "logos/usma.png" },
{ nom: "ELIAS BENKARA", club: "Borussia Dortmund", photo: "photos/benkara.png", logo: "logos/bvb.png" },
{ nom: "RAYAN AIT NOURI", club: "Manchester City", photo: "photos/ait_nouri.png", logo: "logos/mancity.png" },
{ nom: "JAOUEN HADJAM", club: "Young Boys", photo: "photos/hadjam.png", logo: "logos/yb.png" },
{ nom: "MEHDI DORVAL", club: "Bari", photo: "photos/dorval.png", logo: "logos/bari.png" },
{ nom: "NAOUFEL KHACEF", club: "CR Belouizdad", photo: "photos/khacef.png", logo: "logos/crb.png" },
{ nom: "RAFIK BELGHALI", club: "Hellas Verone", photo: "photos/belghali.png", logo: "logos/verone.png" },
{ nom: "KEVIN GUITOUN", club: "Charleroi", photo: "photos/guitoun.png", logo: "logos/charleroi.png" }
];

const milieux = [
    { nom: "ISMAEL BENNACER", club: "Dinamo Zagreb", photo: "photos/bennacer.png", logo: "logos/dinamo.png" },
{ nom: "RAMIZ ZERROUKI", club: "FC Twente", photo: "photos/zerrouki.png", logo: "logos/twente.png" },
{ nom: "HARIS BELKEBLA", club: "Angers SCO", photo: "photos/belkebla.png", logo: "logos/angers.png" },
{ nom: "NABIL BENTALEB", club: "Lille OSC", photo: "photos/bentaleb.png", logo: "logos/losc.png" },
{ nom: "VICTOR LEKHAL", club: "Al-Riyadh FC", photo: "photos/lekhal.png", logo: "logos/alriyadh.png" },
{ nom: "HICHAM BOUDAOUI", club: "OGC Nice", photo: "photos/boudaoui.png", logo: "logos/nice.png" },
{ nom: "ADEM ZORGANE", club: "Union Saint-Gilloise", photo: "photos/zorgane.png", logo: "logos/usg.png" },
{ nom: "YASSINE TITRAOUI", club: "Charleroi", photo: "photos/titraoui.png", logo: "logos/charleroi.png" },
{ nom: "IBRAHIM MAZA", club: "Bayer Leverkusen", photo: "photos/maza.png", logo: "logos/leverkusen.png" },
{ nom: "FARES CHAIBI", club: "Eintracht Frankfurt", photo: "photos/chaibi.png", logo: "logos/frankfurt.png" },
{ nom: "HOUSSEM AOUAR", club: "Al-Ittihad", photo: "photos/aouar.png", logo: "logos/al_ittihad.png" },
{ nom: "HIMAD ABDELLI", club: "Olympique de Marseille", photo: "photos/abdelli.png", logo: "logos/om.png" },
{ nom: "ADIL AOUCHICHE", club: "Schalke 04", photo: "photos/aouchiche.png", logo: "logos/schalke.png" },	
{ nom: "AHMED KENDOUCI", club: "FC Lugano", photo: "photos/kendouci.png", logo: "logos/lugano.png" },
];

const attaquants = [
   { nom: "YASSINE BENZIA", club: "Al-Fayha FC", photo: "photos/benzia.png", logo: "logos/al_fayha.png" },
{ nom: "SAID BENRAHMA", club: "NEOM SC", photo: "photos/benrahma.png", logo: "logos/neom.png" },
{ nom: "ADIL BOULBINA", club: "Al-Duhail SC", photo: "photos/boulbina.png", logo: "logos/al_duhail.png" },
{ nom: "ANIS HADJ MOUSSA", club: "Feyenoord", photo: "photos/hadj_moussa.png", logo: "logos/feyenoord.png" },
{ nom: "BADREDINE BOUANANI", club: "VfB Stuttgart", photo: "photos/bouanani.png", logo: "logos/stuttgart.png" },
{ nom: "ILAN KEBBAL", club: "Paris FC", photo: "photos/kebbal.png", logo: "logos/paris_fc.png" },
{ nom: "RIYAD MAHREZ", club: "Al-Ahli", photo: "photos/mahrez.png", logo: "logos/al_ahli.png" },
{ nom: "FARES GHEDJEMIS", club: "Frosinone", photo: "photos/ghedjemis.png", logo: "logos/frosinone.png" },
{ nom: "RAFIK GUITANE", club: "GD Estoril Praia", photo: "photos/guitane.png", logo: "logos/estoril.png" },
{ nom: "AMINE GOUIRI", club: "Olympique de Marseille", photo: "photos/gouiri.png", logo: "logos/om.png" },
{ nom: "MOHAMMED AMOURA", club: "VfL Wolfsburg", photo: "photos/amoura.png", logo: "logos/wolfsburg.png" },
{ nom: "AMIN CHIAKHA", club: "Rosenborg BK", photo: "photos/chiakha.png", logo: "logos/rosenborg.png" },
{ nom: "BAGHDAD BOUNEDJAH", club: "Al-Shamal", photo: "photos/bounedjah.png", logo: "logos/al_shamal.png" },
{ nom: "REDOUANE BERKANE", club: "Al-Wakrah SC", photo: "photos/berkane.png", logo: "logos/al_wakrah.png" },
{ nom: "MONSEF BAKRAR", club: "Dinamo Zagreb", photo: "photos/bakrar.png", logo: "logos/dinamo.png" },
{ nom: "NADHIR BENBOUALI", club: "Győri ETO FC", photo: "photos/benbouali.png", logo: "logos/gyori.png" },
];
// Tu pourras ajouter les autres de la même manière !