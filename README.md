# KARLOGITEK TELECOM — Site Web Officiel

Site web complet React + Tailwind CSS pour KARLOGITEK TELECOM, votre expert digital à Douala.

## 🚀 Installation & Lancement

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer en développement
npm run dev

# 3. Build production
npm run build

# 4. Prévisualiser le build
npm run preview
```

Ouvrir : **http://localhost:5173**

---

## 📁 Structure du projet

```
karlogitek/
├── src/
│   ├── components/
│   │   ├── Logo.jsx          # Logo SVG animé KARLOGITEK
│   │   ├── Navbar.jsx        # Navigation avec sous-menus
│   │   ├── Footer.jsx        # Pied de page complet
│   │   ├── ProductCard.jsx   # Carte produit avec modal
│   │   ├── SectionHeader.jsx # En-tête de section réutilisable
│   │   └── WaFab.jsx         # Bouton WhatsApp flottant
│   ├── pages/
│   │   ├── Home.jsx          # Page d'accueil
│   │   ├── Smartphones.jsx   # Vue d'ensemble smartphones
│   │   ├── SmartphoneCat.jsx # Par marque (iPhone/Samsung/Pixel/Tecno/Xiaomi/Motorola)
│   │   ├── AccessoriesCat.jsx# Accessoires (Bluetooth/Smartwatch/Chargeurs)
│   │   ├── Reparation.jsx    # Services de réparation (écran, micro, batterie...)
│   │   ├── Services.jsx      # Services (assistance, maintenance, conseil...)
│   │   ├── Packs.jsx         # Packs & abonnements
│   │   ├── Livraison.jsx     # Zones & conditions de livraison
│   │   └── Contact.jsx       # Formulaire + WhatsApp + QR Code
│   ├── data/
│   │   └── index.js          # Toutes les données (produits, services, packs...)
│   ├── App.jsx               # Router principal
│   ├── main.jsx              # Point d'entrée React
│   └── index.css             # Styles Tailwind + utilitaires custom
├── public/
│   └── favicon.svg
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🎨 Design

- **Mode clair/sombre** : toggle dans la navbar, mémorisation localStorage
- **Couleurs** : inspirées du logo (vert #22C55E, bleu #0EA5E9, orange #F97316, rouge #EF4444, or #EAB308)
- **Fonts** : Syne (titres), DM Sans (corps), Space Mono (labels/badges)
- **Animations** : fadeUp, shimmer, blink, float, circuit

---

## 📄 Pages

| Route | Page |
|-------|------|
| `/` | Accueil |
| `/smartphones` | Catalogue smartphones |
| `/smartphones/iphone` | iPhone |
| `/smartphones/samsung` | Samsung |
| `/smartphones/pixel` | Google Pixel |
| `/smartphones/tecno` | Tecno |
| `/smartphones/xiaomi` | Xiaomi |
| `/smartphones/motorola` | Motorola |
| `/accessoires/bluetooth` | Kit Bluetooth |
| `/accessoires/smartwatch` | Montres connectées |
| `/accessoires/chargeurs` | Chargeurs intelligents |
| `/reparation` | Centre de réparation |
| `/services` | Services tech |
| `/packs` | Packs & abonnements |
| `/livraison` | Livraison & zones |
| `/contact` | Contact & formulaire |

---

## ✏️ Personnalisation

### Modifier les données produits
Éditer `src/data/index.js` — ajouter/modifier les produits dans `PHONES`, `ACCESSORIES`, etc.

### Changer le numéro WhatsApp
Dans `src/data/index.js` :
```js
export const WA_NUMBER = "237679680586" // ← changer ici
```

### Ajouter un produit
```js
// Dans PHONES.iphone par exemple :
{ id:"i4", brand:"Apple", name:"iPhone 16", badge:"Nouveau", badgeColor:"blue",
  price:"Sur devis", img:"URL_IMAGE", desc:"Description...",
  specs:["Spec 1", "Spec 2"] }
```

---

## 📞 Contact KARLOGITEK
- WhatsApp : +237 679 680 586
- Localisation : Douala, Cameroun
- Disponibilité : 7j/7 • 8h – 22h
