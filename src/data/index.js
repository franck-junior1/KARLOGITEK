// ─── PHONES ───────────────────────────────────────────────────────────────────
export const PHONES = {
  iphone: [
    { id:"i1", brand:"Apple", name:"iPhone 15 Pro Max", badge:"Nouveau", badgeColor:"blue", price:"Sur devis", img:"https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80", desc:"Design titane, puce A17 Pro, caméra 48 MP ProRAW 5×, Dynamic Island, USB-C.", specs:["Puce A17 Pro — Titane","Caméra 48 MP ProRAW 5×","Dynamic Island • USB-C","Autonomie 29h","IP68 waterproof","iOS 17 natif"] },
    { id:"i2", brand:"Apple", name:"iPhone 15", badge:null, badgeColor:null, price:"Sur devis", img:"https://images.unsplash.com/photo-1603921326210-6edd2d60ca68?w=600&q=80", desc:"Puce A16 Bionic, Dynamic Island, USB-C et caméra 48 MP.", specs:["Puce A16 Bionic","Caméra 48 MP","Dynamic Island","USB-C","iOS 17 natif","IP68"] },
    { id:"i3", brand:"Apple", name:"iPhone 14", badge:null, badgeColor:null, price:"Sur devis", img:"https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&q=80", desc:"La fiabilité Apple à prix accessible, puce A15 Bionic, double caméra 12 MP.", specs:["Puce A15 Bionic","Double caméra 12 MP","Mode Action vidéo","Crash Detection","Emergency SOS","iOS 16+"] },
  ],
  samsung: [
    { id:"s1", brand:"Samsung", name:"Galaxy S24 Ultra", badge:"Best-seller", badgeColor:"orange", price:"Sur devis", img:"https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=600&q=80", desc:"S Pen intégré, IA Galaxy avancée, zoom télescopique 100×, Snapdragon 8 Gen 3.", specs:["Snapdragon 8 Gen 3","S Pen intégré + IA","Caméra 200 MP zoom 100×","Écran 6.8″ LTPO AMOLED","IA Galaxy avancée","5000 mAh"] },
    { id:"s2", brand:"Samsung", name:"Galaxy A55", badge:null, badgeColor:null, price:"Sur devis", img:"https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=600&q=80", desc:"Écran AMOLED vibrant 120 Hz, IP67, Quad caméra 50 MP, 8 Go RAM.", specs:["Exynos 1480 — 8 Go","AMOLED 120 Hz 6.6″","Batterie 5000 mAh","Quad caméra 50 MP","IP67","8 Go RAM"] },
    { id:"s3", brand:"Samsung", name:"Galaxy A35", badge:"Promo", badgeColor:"red", price:"Sur devis", img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80", desc:"Design premium, écran AMOLED, triple caméra 50 MP et grande autonomie.", specs:["Exynos 1380","Écran AMOLED 6.6″","Triple caméra 50 MP","5000 mAh","IP67","6/8 Go RAM"] },
  ],
  pixel: [
    { id:"px1", brand:"Google", name:"Pixel 8 Pro", badge:"IA", badgeColor:"blue", price:"Sur devis", img:"https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&q=80", desc:"L'IA de Google au service de la photo. Magic Eraser, Best Take, appels vérifiés.", specs:["Google Tensor G3","Caméra 50 MP + téléobjectif 5×","Écran LTPO OLED 120 Hz","Batterie 5050 mAh","7 ans de mises à jour","Android 14"] },
    { id:"px2", brand:"Google", name:"Pixel 8", badge:null, badgeColor:null, price:"Sur devis", img:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80", desc:"Photo IA haut de gamme dans un format compact, 7 ans de mises à jour garantis.", specs:["Google Tensor G3","Caméra 50 MP","Écran OLED 6.2″ 120 Hz","4575 mAh","7 ans updates","Android 14"] },
  ],
  tecno: [
    { id:"t1", brand:"Tecno", name:"Camon 30 Pro 5G", badge:"5G", badgeColor:"green", price:"Sur devis", img:"https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=600&q=80", desc:"5G natif, triple caméra 50 MP, AMOLED 120 Hz, charge 45 W.", specs:["Dimensity 7020 5G","Triple caméra 50 MP","5000 mAh • 45W","Écran AMOLED","5G natif","8/256 Go"] },
    { id:"t2", brand:"Tecno", name:"Spark 20 Pro+", badge:"Populaire", badgeColor:"gold", price:"Sur devis", img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80", desc:"Grand écran 6.78″, caméra 108 MP, batterie 5000 mAh, 8 Go RAM.", specs:["Helio G99","Caméra 108 MP","5000 mAh","Écran 6.78″ 120 Hz","8/256 Go","Charge 18W"] },
  ],
  xiaomi: [
    { id:"x1", brand:"Xiaomi", name:"Redmi Note 13 Pro+", badge:"Promo", badgeColor:"red", price:"Sur devis", img:"https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&q=80", desc:"Charge ultra-rapide 120W, caméra 200 MP OIS, IP68, AMOLED 120 Hz.", specs:["Dimensity 7200 Ultra","Caméra 200 MP OIS","Charge 120 W","Écran AMOLED 120 Hz","Batterie 5000 mAh","IP68"] },
    { id:"x2", brand:"Xiaomi", name:"14 Ultra", badge:"Flagship", badgeColor:"blue", price:"Sur devis", img:"https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80", desc:"Co-développé avec Leica, Snapdragon 8 Gen 3, charge 90W sans fil 80W.", specs:["Snapdragon 8 Gen 3","Leica caméra 50 MP","Charge 90W + sans fil 80W","AMOLED 6.73″ 120 Hz","5000 mAh","Titane"] },
  ],
  motorola: [
    { id:"mo1", brand:"Motorola", name:"Edge 50 Pro", badge:null, badgeColor:null, price:"Sur devis", img:"https://images.unsplash.com/photo-1603921326210-6edd2d60ca68?w=600&q=80", desc:"OLED 144 Hz, charge 125W, caméra 50 MP Pantone, Snapdragon 7 Gen 3.", specs:["Snapdragon 7 Gen 3","50 MP Pantone","OLED 144 Hz","Charge 125W","IP68","4500 mAh"] },
    { id:"mo2", brand:"Motorola", name:"Moto G84", badge:"Rapport/Prix", badgeColor:"green", price:"Sur devis", img:"https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&q=80", desc:"Design Vegan Leather, OLED 120 Hz, 50 MP, 5000 mAh, bon rapport qualité/prix.", specs:["Snapdragon 695","50 MP OIS","OLED 120 Hz 6.5″","5000 mAh","IP54","12/256 Go"] },
  ],
};

// ─── ACCESSORIES ──────────────────────────────────────────────────────────────
export const ACCESSORIES = {
  bluetooth: [
    { id:"bt1", name:"Écouteurs TWS Pro", brand:"Generic", badge:"Bestseller", badgeColor:"blue", price:"Sur devis", img:"https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80", desc:"Réduction de bruit active, 30h d'autonomie, Bluetooth 5.3, étanche IPX5.", specs:["ANC actif","30h autonomie","Bluetooth 5.3","IPX5","Charge rapide 15 min","Multi-point"] },
    { id:"bt2", name:"Casque Gaming BT", brand:"Generic", badge:null, badgeColor:null, price:"Sur devis", img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80", desc:"Son surround 7.1 virtuel, micro détachable, autonomie 40h, pliable.", specs:["Son 7.1 virtuel","40h autonomie","Micro détachable","Bluetooth 5.0","Pliable","Compatible PC/PS/Xbox"] },
    { id:"bt3", name:"Enceinte Bluetooth", brand:"Generic", badge:null, badgeColor:null, price:"Sur devis", img:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80", desc:"360° waterproof IPX7, basses profondes, 24h d'autonomie, lumière LED.", specs:["IPX7 waterproof","24h autonomie","360° son","LED ambiance","Charge USB-C","Appels mains-libres"] },
  ],
  smartwatch: [
    { id:"sw1", name:"Montre Connectée Pro", brand:"Smart", badge:"NFC", badgeColor:"blue", price:"Sur devis", img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80", desc:"AMOLED 1.43″, paiement NFC, GPS intégré, 150+ modes sport, SpO2.", specs:["AMOLED 1.43″","NFC paiement","GPS intégré","150+ modes sport","SpO2 & ECG","7 jours autonomie"] },
    { id:"sw2", name:"Montre Santé+", brand:"Smart", badge:null, badgeColor:null, price:"Sur devis", img:"https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80", desc:"Suivi santé 24/7, analyse sommeil, compatible iOS & Android, IP68.", specs:["Suivi santé 24/7","Analyse sommeil","IP68","Compatible iOS & Android","14 jours autonomie","Notifications"] },
    { id:"sw3", name:"Bracelet Fitness", brand:"Smart", badge:"Promo", badgeColor:"green", price:"Sur devis", img:"https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&q=80", desc:"Léger et discret, 21 jours autonomie, suivi activité, cardio continu.", specs:["21 jours autonomie","Cardio continu","Suivi sommeil","IP68","1.47″ AMOLED","Notifications"] },
  ],
  chargers: [
    { id:"ch1", name:"Chargeur GaN 65W", brand:"Smart", badge:"GaN", badgeColor:"orange", price:"Sur devis", img:"https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=80", desc:"Triple port (2× USB-C + USB-A), GaN nouvelle génération, charge ultra-rapide.", specs:["65W total","2× USB-C + 1× USB-A","GaN technologie","Compact voyage","Protection intelligente","Compatible tous appareils"] },
    { id:"ch2", name:"Chargeur Sans Fil 15W", brand:"Smart", badge:null, badgeColor:null, price:"Sur devis", img:"https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?w=600&q=80", desc:"Qi 15W, compatible MagSafe, chargement multiple, LED indicateur.", specs:["15W Qi","Compatible MagSafe","LED indicateur","Protection surchauffe","Câble inclus","Multi-appareils"] },
    { id:"ch3", name:"Power Bank 20000mAh", brand:"Smart", badge:"Populaire", badgeColor:"green", price:"Sur devis", img:"https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=80", desc:"20000mAh, charge rapide 22.5W, écran LCD, 3 sorties, charge solaire.", specs:["20000 mAh","22.5W charge rapide","LCD capacité","3 sorties","Charge solaire","Poids léger"] },
  ],
};

// ─── SERVICES ─────────────────────────────────────────────────────────────────
export const SERVICES = [
  { id:"s1", icon:"🛠️", title:"Assistance Technique", subtitle:"7j/7 • 8h–22h", color:"blue", desc:"Expert disponible à distance pour tout problème technique. WhatsApp, appel, toujours disponible.", features:["Disponible 7j/7","8h à 22h","Résolution sous 2h","Suivi personnalisé"] },
  { id:"s2", icon:"💻", title:"Maintenance Logicielle", subtitle:"Mensuelle & préventive", color:"green", desc:"Vérification mensuelle, optimisation du système, mises à jour de sécurité et nettoyage complet.", features:["Check mensuel inclus","Optimisation complète","Mises à jour","Sécurité & antivirus"] },
  { id:"s3", icon:"🔧", title:"Dépannage Matériel", subtitle:"Diagnostic gratuit", color:"red", desc:"Techniciens qualifiés pour réparer écran cassé, batterie, connecteur de charge, caméra.", features:["Diagnostic gratuit","Pièces certifiées","Techniciens qualifiés","Garantie réparation"] },
  { id:"s4", icon:"🔍", title:"Recherche Smartphone", subtitle:"48–72h livraison", color:"orange", desc:"Modèle exact en tête ? On le trouve au meilleur prix, documents inclus.", features:["Toutes marques","Prix négocié","Documents inclus","Livraison 48–72h"] },
  { id:"s5", icon:"🛒", title:"Vente Smartphones", subtitle:"Neufs & reconditionnés", color:"green", desc:"Large sélection : iPhone, Samsung, Xiaomi, Tecno, Infinix. Tous 100% authentiques avec facture.", features:["Neufs & reconditionnés","100% authentiques","Prix transparents","Facture fournie"] },
  { id:"s6", icon:"📋", title:"Conseil & Accompagnement", subtitle:"Gratuit & personnalisé", color:"gold", desc:"Conseil selon votre usage et budget. Configuration initiale et prise en main incluses.", features:["Conseil offert","Configuration incluse","Prise en main","Suivi post-achat"] },
];

// ─── REPAIRS ──────────────────────────────────────────────────────────────────
export const REPAIRS = [
  { id:"r1", icon:"📱", title:"Remplacement Afficheur", duration:"2–4h", badge:"Express", color:"blue", desc:"Remplacement de dalle OLED/LCD, vitre tactile brisée ou écran noir. Toutes marques.", includes:["Diagnostic offert","Dalle certifiée","Calibration couleurs","Garantie 3 mois","Test complet","Nettoyage inclus"] },
  { id:"r2", icon:"🎙️", title:"Réparation Micro", duration:"1–2h", badge:"Rapide", color:"green", desc:"Micro qui ne fonctionne plus, voix inaudible en appel, micro Bluetooth défaillant.", includes:["Test audio avant/après","Remplacement micro","Nettoyage contacts","Garantie 3 mois","Test appel","Diagnostic gratuit"] },
  { id:"r3", icon:"🔋", title:"Remplacement Batterie", duration:"1h", badge:"Express", color:"orange", desc:"Batterie qui ne tient plus, gonflement, extinction soudaine. Cellules d'origine ou certifiées.", includes:["Cellule certifiée","Calibration batterie","Test de charge","Garantie 6 mois","Rapport santé","Conseils usage"] },
  { id:"r4", icon:"📸", title:"Réparation Caméra", duration:"2–3h", badge:null, color:"red", desc:"Caméra floue, objectif fissuré, flash HS, caméra frontale défaillante.", includes:["Diagnostic optique","Module certifié","Test photo/vidéo","Garantie 3 mois","Nettoyage capteur","Alignement optique"] },
  { id:"r5", icon:"⚡", title:"Connecteur de Charge", duration:"1–2h", badge:"Fréquent", color:"gold", desc:"Prise USB-C/Lightning endommagée, charge lente, charge intermittente.", includes:["Nettoyage port","Remplacement module","Test charge rapide","Garantie 3 mois","Diagnostic circuit","Waterproofing"] },
  { id:"r6", icon:"📶", title:"Réseau & Antenne", duration:"2–4h", badge:null, color:"blue", desc:"Perte signal 4G/5G, Wi-Fi défaillant, Bluetooth inaccessible, GPS imprécis.", includes:["Test réseau complet","Remplacement antenne","Calibration signal","Garantie 3 mois","Test multiband","Diagnostic RF"] },
  { id:"r7", icon:"💧", title:"Dégât des Eaux", duration:"2–6h", badge:"Urgent", color:"red", desc:"Smartphone tombé dans l'eau, exposé à l'humidité, oxydation des composants.", includes:["Nettoyage ultrason","Traitement anti-corrosion","Séchage technique","Test complet","Rapport dégâts","Devis offert"] },
  { id:"r8", icon:"🖥️", title:"Maintenance Complète", duration:"3–5h", badge:"Complet", color:"green", desc:"Révision complète : nettoyage, optimisation software, vérification hardware.", includes:["Démontage complet","Nettoyage thermique","Reinstall OS","Test tous modules","Rapport état","Garantie 1 mois"] },
];

// ─── PACKS ────────────────────────────────────────────────────────────────────
export const PACKS = [
  { id:"pk1", icon:"⭐", title:"Pack Accessibilité", color:"green", price:"2 500 FCFA / an", priceNote:"≈ 210 FCFA/mois", desc:"Un an d'accompagnement total. Le meilleur rapport qualité-prix.", items:["Assistance 7j/7","Check mensuel","Dépannage illimité","Suivi personnalisé","Réponse sous 2h","Config gratuite"] },
  { id:"pk2", icon:"🔍", title:"Pack Recherche", color:"blue", price:"Sur devis", priceNote:"Selon le modèle", desc:"On trouve pour vous n'importe quel modèle au meilleur prix en 48–72h.", items:["Toutes marques","Prix négocié","Documents inclus","Livraison rapide","Garantie authenticité","Suivi commande"] },
  { id:"pk3", icon:"🔧", title:"Pack Réparation", color:"red", price:"Sur devis", priceNote:"Diagnostic gratuit", desc:"Diagnostic gratuit + réparation complète avec pièces garanties.", items:["Diagnostic gratuit","Pièces certifiées","Techniciens qualifiés","Garantie réparation","Suivi réparation","Test final"] },
  { id:"pk4", icon:"💼", title:"Pack Entreprise", color:"orange", price:"Sur devis", priceNote:"Volume & maintenance", desc:"Solutions complètes pour entreprises : équipement, maintenance, assistance.", items:["Commande groupée","Maintenance incluse","Facture entreprise","Support prioritaire","Formation équipe","SLA garanti"] },
];

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  { name:"Alvine M.", city:"Douala", text:"J'ai commandé un iPhone 15 Pro Max via WhatsApp. Livré en 3 jours avec tous les documents. Service absolument impeccable !", stars:5, tag:"Achat smartphone", avatar:"A", color:"blue" },
  { name:"Patrick N.", city:"Yaoundé", text:"Le Pack Accessibilité vaut vraiment son prix. Mon technicien m'aide à chaque problème. 2500 FCFA c'est rien !", stars:5, tag:"Pack Accessibilité", avatar:"P", color:"green" },
  { name:"Sandrine K.", city:"Bafoussam", text:"Dépannage de mon écran Samsung en 24h. Pièces de qualité, prix honnête. Je recommande à tous mes proches !", stars:5, tag:"Réparation écran", avatar:"S", color:"red" },
  { name:"Emmanuel T.", city:"Kribi", text:"Recherche personnalisée d'un Redmi Note 13 Pro+. Trouvé sous 48h au prix que je voulais. Service parfait !", stars:5, tag:"Sur commande", avatar:"E", color:"orange" },
  { name:"Fatima D.", city:"Douala", text:"Assistance technique disponible même le dimanche soir. Problème résolu en moins d'une heure. Incroyable réactivité !", stars:5, tag:"Assistance", avatar:"F", color:"blue" },
  { name:"Jean-Claude B.", city:"Ngaoundéré", text:"Configuration de mon Samsung Galaxy neuf, prise en main complète. Je suis ravi du service personnalisé !", stars:5, tag:"Conseil", avatar:"J", color:"gold" },
];

export const STATS = [
  { val:"500+", label:"Clients satisfaits", icon:"👥", color:"green" },
  { val:"7j/7", label:"Disponibilité", icon:"⏰", color:"blue" },
  { val:"100%", label:"Authentiques", icon:"✅", color:"orange" },
  { val:"48h", label:"Livraison max", icon:"🚀", color:"red" },
];

export const WA_NUMBER = "237679680586";
export const waLink = (msg) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

export const COLOR_MAP = {
  green: { text:"text-brand-green", bg:"bg-brand-green", border:"border-brand-green", light:"bg-green-950", hex:"#22C55E" },
  blue:  { text:"text-brand-blue",  bg:"bg-brand-blue",  border:"border-brand-blue",  light:"bg-sky-950",   hex:"#0EA5E9" },
  red:   { text:"text-brand-red",   bg:"bg-brand-red",   border:"border-brand-red",   light:"bg-red-950",   hex:"#EF4444" },
  orange:{ text:"text-brand-orange",bg:"bg-brand-orange",border:"border-brand-orange",light:"bg-orange-950",hex:"#F97316" },
  gold:  { text:"text-brand-gold",  bg:"bg-brand-gold",  border:"border-brand-gold",  light:"bg-yellow-950",hex:"#EAB308" },
};
