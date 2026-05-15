// LISTE DES 54 JOUEURS SÉLECTIONNÉS (Base: El Hayat TV + Mercato MAJ)
const gardiens = [
    { nom: "LUCA ZIDANE", club: "Grenade FC", photo: "photos/zidane.png", logo: "logos/grenade.png" },
    { nom: "GAYA MERBAH", club: "JS Kabylie", photo: "photos/merbah.png", logo: "logos/jsk.png" },
    { nom: "OUSSAMA BENBOT", club: "USM Alger", photo: "photos/benbot.png", logo: "logos/usma.png" },
    { nom: "FARID CHAAL", club: "CR Belouizdad", photo: "photos/chaal.png", logo: "logos/crb.png" },
    { nom: "ZAKARIA BOUHALFAYA", club: "CS Constantine", photo: "photos/bouhalfaya.png", logo: "logos/csc.png" }, // Logo manquant à rajouter
    { nom: "MELVIN MASTIL", club: "FC Stade Nyonnais", photo: "photos/mastil.png", logo: "logos/nyon.png" },
    { nom: "RAYANE YESLI", club: "Olympique Akbou", photo: "photos/yesli.png", logo: "logos/olympique_akbou.png" },
    { nom: "KILLIAN BELAZZOUG", club: "Stade Rennais", photo: "photos/belazzoug.png", logo: "logos/stade_rennais.png" }
];

const defenseurs = [
    { nom: "AHMED TOUBA", club: "Panathinaïkos", photo: "photos/touba.png", logo: "logos/panathinaikos.png" },
    { nom: "SOHAIB NAIR", club: "EA Guingamp", photo: "photos/nair.png", logo: "logos/guingamp.png" },
    { nom: "SAMIR CHERGUI", club: "Paris FC", photo: "photos/chergui.png", logo: "logos/paris_fc.png" },
    { nom: "RAMY BENSEBAINI", club: "Borussia Dortmund", photo: "photos/bensebaini.png", logo: "logos/bvb.png" },
    { nom: "ELIAS BENKARA", club: "Borussia Dortmund", photo: "photos/benkara.png", logo: "logos/bvb.png" },
    { nom: "MOHAMED TOUGAI", club: "ES Tunis", photo: "photos/tougai.png", logo: "logos/est.png" },
    { nom: "MEHDI DORVAL", club: "Bari", photo: "photos/dorval.png", logo: "logos/bari.png" },
    { nom: "REDA HALAIMIA", club: "MC Alger", photo: "photos/halaimia.png", logo: "logos/mca.png" },
    { nom: "SAADI RADOUANI", club: "USM Alger", photo: "photos/radouani.png", logo: "logos/usma.png" },
    { nom: "AISSA MANDI", club: "Lille OSC", photo: "photos/mandi.png", logo: "logos/losc.png" },
    { nom: "RAYAN AIT NOURI", club: "Manchester City", photo: "photos/ait_nouri.png", logo: "logos/mancity.png" },
    { nom: "KÉVIN VAN DEN KERKHOF", club: "Charleroi", photo: "photos/guitoun.png", logo: "logos/charleroi.png" },
    { nom: "ACHREF ABADA", club: "USM Alger", photo: "photos/abada.png", logo: "logos/usma.png" },
    { nom: "RAFIK BELGHALI", club: "Hellas Verone", photo: "photos/belghali.png", logo: "logos/verone.png" },
    { nom: "NAOUFEL KHACEF", club: "CR Belouizdad", photo: "photos/khacef.png", logo: "logos/crb.png" },
    { nom: "ZINEDDINE BELAID", club: "JS Kabylie", photo: "photos/belaid.png", logo: "logos/jsk.png" },
    { nom: "JAOUEN HADJAM", club: "Young Boys", photo: "photos/hadjam.png", logo: "logos/yb.png" }
];

const milieux = [
    { nom: "ISMAEL BENNACER", club: "Dinamo Zagreb", photo: "photos/bennacer.png", logo: "logos/dinamo.png" }, // Corrigé
    { nom: "YASSINE TITRAOUI", club: "Charleroi", photo: "photos/titraoui.png", logo: "logos/charleroi.png" },
    { nom: "FARES CHAIBI", club: "Eintracht Frankfurt", photo: "photos/chaibi.png", logo: "logos/frankfurt.png" },
    { nom: "NABIL BENTALEB", club: "Lille OSC", photo: "photos/bentaleb.png", logo: "logos/losc.png" },
    { nom: "HIMAD ABDELLI", club: "Olympique de Marseille", photo: "photos/abdelli.png", logo: "logos/om.png" },
    { nom: "ADIL AOUCHICHE", club: "Schalke 04", photo: "photos/aouchiche.png", logo: "logos/schalke.png" },
    { nom: "VICTOR LEKHAL", club: "Al-Riyadh", photo: "photos/lekhal.png", logo: "logos/alriyadh.png" },
    { nom: "ADEM ZORGANE", club: "Charleroi", photo: "photos/zorgane.png", logo: "logos/charleroi.png" },
    { nom: "IBRAHIM MAZA", club: "Bayer Leverkusen", photo: "photos/maza.png", logo: "logos/leverkusen.png" },
    { nom: "HICHAM BOUDAOUI", club: "OGC Nice", photo: "photos/boudaoui.png", logo: "logos/nice.png" },
    { nom: "HOUSSEM AOUAR", club: "Al-Ittihad", photo: "photos/aouar.png", logo: "logos/al_ittihad.png" },
    { nom: "RAMIZ ZERROUKI", club: "Feyenoord", photo: "photos/zerrouki.png", logo: "logos/feyenoord.png" },
    { nom: "AHMED KENDOUCI", club: "FC Lugano", photo: "photos/kendouci.png", logo: "logos/lugano.png" }
];

const attaquants = [
    { nom: "BAGHDAD BOUNEDJAH", club: "Al-Shamal", photo: "photos/bounedjah.png", logo: "logos/al_shamal.png" },
    { nom: "REDOUANE BERKANE", club: "Al-Wakrah", photo: "photos/berkane.png", logo: "logos/al_wakrah.png" },
    { nom: "ANIS HADJ MOUSSA", club: "Feyenoord", photo: "photos/hadj_moussa.png", logo: "logos/feyenoord.png" },
    { nom: "ADIL BOULBINA", club: "Al-Duhail SC", photo: "photos/boulbina.png", logo: "logos/al_duhail.png" },
    { nom: "NADHIR BENBOUALI", club: "Győri ETO", photo: "photos/benbouali.png", logo: "logos/gyori.png" },
    { nom: "BACHIR BELLOUMI", club: "Hull City", photo: "photos/belloumi.png", logo: "logos/hullcity.png" }, // Logo manquant à rajouter
    { nom: "MOHAMMED AMOURA", club: "VfL Wolfsburg", photo: "photos/amoura.png", logo: "logos/wolfsburg.png" },
    { nom: "SAID BENRAHMA", club: "Neom SC", photo: "photos/benrahma.png", logo: "logos/neom.png" },
    { nom: "YACINE BRAHIMI", club: "Al-Gharafa", photo: "photos/brahimi.png", logo: "logos/algharafa.png" }, // Logo manquant à rajouter
    { nom: "BADREDINE BOUANANI", club: "VfB Stuttgart", photo: "photos/bouanani.png", logo: "logos/stuttgart.png" },
    { nom: "ILAN KEBBAL", club: "Paris FC", photo: "photos/kebbal.png", logo: "logos/paris_fc.png" },
    { nom: "FARES GHEDJEMIS", club: "Frosinone", photo: "photos/ghedjemis.png", logo: "logos/frosinone.png" },
    { nom: "AMIN CHIAKHA", club: "Rosenborg", photo: "photos/chiakha.png", logo: "logos/rosenborg.png" },
    { nom: "AMINE GOUIRI", club: "Olympique de Marseille", photo: "photos/gouiri.png", logo: "logos/om.png" },
    { nom: "MONSEF BAKRAR", club: "Dinamo Zagreb", photo: "photos/bakrar.png", logo: "logos/dinamo.png" }, // Corrigé
    { nom: "RIYAD MAHREZ", club: "Al-Ahli", photo: "photos/mahrez.png", logo: "logos/al_ahli.png" }
];
