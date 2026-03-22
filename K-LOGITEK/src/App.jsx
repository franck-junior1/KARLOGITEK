import { useState, useEffect, useCallback, useRef } from "react";
import karlogiLogo from "./assets/karlogilogo.png";

/* ─────────────────────────── FONTS & GLOBAL CSS ─────────────────────────── */
if (typeof document !== "undefined") {
  const l = document.createElement("link");
  l.rel = "stylesheet";
  l.href = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,600&family=JetBrains+Mono:wght@400;500;600&display=swap";
  document.head.appendChild(l);
}

/* ─────────────────────────── THEME ─────────────────────────── */
const T = {
  bg:      "#FFFFFF",
  bg2:     "#F0F8FF",
  bg3:     "#E1F0FF",
  surface: "#FFFFFF",
  border:  "#BFD9F2",
  border2: "#7FB5E8",
  text:    "#0A1628",
  textSub: "#1E3A5F",
  textMut: "#6B8BAE",
  sky:     "#0EA5E9",
  skyL:    "#38BDF8",
  skyXL:   "#7DD3FC",
  skyD:    "#0284C7",
  skyXD:   "#0369A1",
  skyPale: "#E0F2FE",
  accent:  "#0369A1",
  accentL: "#0EA5E9",
  gold:    "#0284C7",
  goldL:   "#38BDF8",
  navBg:   "rgba(255,255,255,0.96)",
  cardBg:  "#FFFFFF",
  inputBg: "#F0F8FF",
  heroGrad:"radial-gradient(ellipse at 30% 50%, #DBEAFE 0%, #FFFFFF 65%)",
  isDark:  false,
};

/* ─────────────────────────── CONSTANTS ─────────────────────────── */
const WA = "237679680586";
const WA_BASE = `https://wa.me/${WA}`;
const waLink = (msg) => `${WA_BASE}?text=${encodeURIComponent(msg)}`;
const QR_URL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&color=0284c7&bgcolor=FFFFFF&data=${encodeURIComponent(WA_BASE)}`;

/* ─────────────────────────── DATA ─────────────────────────── */
const IMGS = {
  premium: [
    "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80",
    "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&q=80",
    "https://images.unsplash.com/photo-1603921326210-6edd2d60ca68?w=600&q=80",
  ],
  milieu: [
    "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=600&q=80",
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80",
    "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=600&q=80",
  ],
  entree: [
    "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&q=80",
  ],
  custom: [
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  ],
};

const PRODUCTS = {
  premium: [
    { id: "p1", brand: "Apple", name: "iPhone 15 Pro Max", price: "Sur devis", old: null, badge: "Nouveau", badgeColor: "#0284C7", desc: "Le summum de la technologie Apple. Design titane ultra-résistant, performances de pro et caméra révolutionnaire ProRAW.", details: ["Puce A17 Pro — Titane", "Caméra 48 MP ProRAW 5×", "Dynamic Island • USB-C", "iOS 17 natif", "Autonomie 29h", "IP68 waterproof"] },
    { id: "p2", brand: "Samsung", name: "Galaxy S24 Ultra", price: "Sur devis", old: null, badge: "Best-seller", badgeColor: "#7C3AED", desc: "La puissance Android sans compromis. S Pen, IA Galaxy avancée et zoom télescopique 100×.", details: ["Snapdragon 8 Gen 3", "S Pen intégré + IA", "Caméra 200 MP zoom 100×", "Écran 6.8″ LTPO AMOLED", "IA Galaxy avancée", "5000 mAh"] },
    { id: "p3", brand: "Apple", name: "iPhone 14", price: "Sur devis", old: null, badge: null, badgeColor: null, desc: "La fiabilité Apple à un prix plus accessible. Performances exceptionnelles et qualité photo remarquable.", details: ["Puce A15 Bionic", "Double caméra 12 MP", "Mode Action vidéo", "Crash Detection", "Emergency SOS satellite", "iOS 16+"] },
  ],
  milieu: [
    { id: "m1", brand: "Xiaomi", name: "Redmi Note 13 Pro+", price: "Sur devis", old: null, badge: "Promo", badgeColor: "#DC2626", desc: "La référence milieu de gamme. Charge ultra-rapide 120W et caméra de flagship à prix accessible.", details: ["Dimensity 7200 Ultra", "Caméra 200 MP OIS", "Charge 120 W", "Écran AMOLED 120 Hz", "Batterie 5000 mAh", "IP68"] },
    { id: "m2", brand: "Tecno", name: "Camon 30 Pro 5G", price: "Sur devis", old: null, badge: "5G", badgeColor: "#059669", desc: "Connectivité 5G et triple caméra polyvalente pour capturer chaque moment avec précision.", details: ["Dimensity 7020 5G", "Triple caméra 50 MP", "Batterie 5000 mAh", "Charge 45 W", "5G natif", "Écran AMOLED"] },
    { id: "m3", brand: "Samsung", name: "Galaxy A55", price: "Sur devis", old: null, badge: null, badgeColor: null, desc: "L'élégance Samsung à portée de main. Écran AMOLED vibrant et autonomie remarquable.", details: ["Exynos 1480 — 8 Go", "AMOLED 120 Hz 6.6″", "Batterie 5000 mAh", "Quad caméra 50 MP", "IP67", "8 Go RAM"] },
  ],
  entree: [
    { id: "e1", brand: "Infinix", name: "Hot 40 Pro", price: "Sur devis", old: null, badge: "Populaire", badgeColor: "#BE185D", desc: "Performances solides et grand écran immersif. Le choix malin pour démarrer avec style.", details: ["Helio G99 — 8 Go RAM", "Écran 6.78″ 120 Hz", "Batterie 5000 mAh", "Triple caméra 108 MP", "Grand écran immersif", "Autonomie longue durée"] },
  ],
  custom: [
    { id: "c1", brand: "Sur commande", name: "Recherche personnalisée", price: "Sur mesure", old: null, badge: "Sur mesure", badgeColor: "#0284C7", desc: "Vous avez un modèle précis en tête ? On le trouve au meilleur prix, livré sous 72h avec tous les documents.", details: ["Toute marque disponible", "Adapté à votre budget", "Documents inclus", "Livraison 48–72h", "Toutes marques", "Prix garanti"] },
  ],
};

const SERVICES = [
  { icon: "🛠️", title: "Assistance Technique", subtitle: "7j/7 • 8h–22h", color: "#0284C7", bg: "#E0F2FE", desc: "Un expert disponible à distance pour tout problème technique. WhatsApp, appel, on est toujours là.", features: ["Disponible 7j/7", "8h à 22h", "Résolution sous 2h", "Suivi personnalisé"] },
  { icon: "💻", title: "Maintenance Logicielle", subtitle: "Mensuelle & préventive", color: "#7C3AED", bg: "#EDE9FE", desc: "Vérification mensuelle, optimisation du système, mises à jour de sécurité et nettoyage complet.", features: ["Check mensuel inclus", "Optimisation complète", "Mises à jour", "Sécurité & antivirus"] },
  { icon: "🔩", title: "Dépannage Matériel", subtitle: "Écran, batterie, charge…", color: "#DC2626", bg: "#FEE2E2", desc: "Techniciens qualifiés pour réparer écran cassé, batterie, connecteur de charge, caméra.", features: ["Diagnostic gratuit", "Pièces certifiées", "Techniciens qualifiés", "Garantie réparation"] },
  { icon: "🔍", title: "Recherche Smartphone", subtitle: "48–72h livraison", color: "#0891B2", bg: "#CFFAFE", desc: "Vous avez un modèle exact en tête ? On le trouve au meilleur prix du marché, documents inclus.", features: ["Toutes marques", "Prix négocié", "Documents inclus", "Livraison 48–72h"] },
  { icon: "🛒", title: "Vente Smartphones", subtitle: "Neufs & reconditionnés", color: "#059669", bg: "#D1FAE5", desc: "Large sélection : iPhone, Samsung, Xiaomi, Tecno, Infinix. Tous 100% authentiques avec facture.", features: ["Neufs & reconditionnés", "100% authentiques", "Prix transparents", "Facture fournie"] },
  { icon: "📋", title: "Conseil & Accompagnement", subtitle: "Gratuit & personnalisé", color: "#B45309", bg: "#FEF3C7", desc: "Conseil personnalisé selon votre usage et budget. Configuration initiale et prise en main incluses.", features: ["Conseil offert", "Configuration incluse", "Prise en main", "Suivi post-achat"] },
];

const PACKS = [
  { id: "basic", icon: "⭐", title: "Pack Accessibilité", color: "#0284C7", colorLight: "#38BDF8", desc: "Un an d'accompagnement et d'assistance technique pour votre sérénité numérique totale.", items: ["Assistance 7j/7", "Check mensuel", "Dépannage illimité", "Suivi personnalisé"], price: "2 500 FCFA / an" },
  { id: "perso", icon: "🔍", title: "Pack Recherche", color: "#7C3AED", colorLight: "#A78BFA", desc: "On trouve pour vous n'importe quel modèle au meilleur prix en 48–72h, partout au Cameroun.", items: ["Toutes marques", "Prix négocié", "Documents inclus", "Livraison rapide"], price: "Sur devis" },
  { id: "repair", icon: "🔧", title: "Pack Réparation", color: "#DC2626", colorLight: "#F87171", desc: "Diagnostic gratuit + réparation complète par nos techniciens certifiés avec pièces garanties.", items: ["Diagnostic gratuit", "Pièces certifiées", "Techniciens qualifiés", "Garantie réparation"], price: "Sur devis" },
  { id: "pro", icon: "💼", title: "Pack Entreprise", color: "#059669", colorLight: "#34D399", desc: "Solutions digitales pour entreprises : équipement, maintenance et assistance dédiée.", items: ["Commande groupée", "Maintenance incluse", "Facture entreprise", "Support prioritaire"], price: "Sur devis" },
];

const TESTIMONIALS = [
  { name: "Alvine M.", city: "Douala", text: "J'ai commandé un iPhone 15 Pro Max via WhatsApp. Livré en 3 jours avec tous les documents. Service absolument impeccable !", stars: 5, tag: "Achat smartphone", avatar: "A", color: "#0284C7" },
  { name: "Patrick N.", city: "Yaoundé", text: "Le Pack Accessibilité vaut vraiment son prix. Mon technicien m'aide à chaque problème. 2500 FCFA c'est rien !", stars: 5, tag: "Pack Accessibilité", avatar: "P", color: "#7C3AED" },
  { name: "Sandrine K.", city: "Bafoussam", text: "Dépannage de mon écran Samsung en 24h. Pièces de qualité, prix honnête. Je recommande à tous mes proches !", stars: 5, tag: "Réparation", avatar: "S", color: "#DC2626" },
  { name: "Emmanuel T.", city: "Kribi", text: "Recherche personnalisée d'un Redmi Note 13 Pro+. Trouvé sous 48h au prix que je voulais. Service parfait !", stars: 5, tag: "Sur commande", avatar: "E", color: "#059669" },
  { name: "Fatima D.", city: "Douala", text: "Assistance technique disponible même le dimanche soir. Problème résolu en moins d'une heure. Incroyable réactivité !", stars: 5, tag: "Assistance", avatar: "F", color: "#0891B2" },
  { name: "Jean-Claude B.", city: "Ngaoundéré", text: "Configuration de mon Samsung Galaxy neuf, prise en main complète. Je suis ravi du service personnalisé !", stars: 5, tag: "Conseil", avatar: "J", color: "#B45309" },
];

const STATS = [
  { val: "500+", label: "Clients satisfaits", icon: "👥" },
  { val: "7j/7", label: "Disponibilité", icon: "⏰" },
  { val: "100%", label: "Authentiques", icon: "✅" },
  { val: "48h", label: "Livraison max", icon: "🚀" },
];

const HERO_CATS = [
  { id: "premium", label: "Smartphones Premium", emoji: "👑", desc: "iPhone, Samsung Ultra & flagships", img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&q=80" },
  { id: "milieu", label: "Milieu de Gamme", emoji: "⚡", desc: "Xiaomi, Tecno, Samsung A", img: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=800&q=80" },
  { id: "entree", label: "Entrée de Gamme", emoji: "💡", desc: "Infinix, Itel & accessibles", img: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&q=80" },
  { id: "custom", label: "Sur Commande", emoji: "🔍", desc: "N'importe quel modèle en 48h", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80" },
  { id: "services", label: "Services Tech", emoji: "🛠️", desc: "Réparation, maintenance & conseil", img: "https://images.unsplash.com/photo-1581092162384-8987c1d64926?w=800&q=80" },
  { id: "packs", label: "Nos offres", emoji: "🎁", desc: "Abonnements & offres groupées", img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=800&q=80" },
];

const PAGES = [
  { id: "accueil", label: "Accueil", emoji: "✦" },
  { id: "premium", label: "Premium", emoji: "👑" },
  { id: "milieu", label: "Milieu de gamme", emoji: "⚡" },
  { id: "entree", label: "Entrée de gamme", emoji: "💡" },
  { id: "custom", label: "Sur commande", emoji: "🔍" },
  { id: "services", label: "Services", emoji: "🛠️" },
  { id: "packs", label: "Packs", emoji: "⭐" },
  { id: "livraison", label: "Livraison", emoji: "🚚" },
  { id: "contact", label: "Contact", emoji: "✉️" },
];

/* ─────────────────────────── GLOBAL CSS ─────────────────────────── */
if (typeof document !== "undefined") {
  const s = document.createElement("style");
  s.textContent = `
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
    html{scroll-behavior:smooth;}
    body{font-family:'Plus Jakarta Sans',sans-serif;-webkit-font-smoothing:antialiased;background:#fff;color:#0A1628;}
    @keyframes fadeUp{from{opacity:0;transform:translateY(24px);}to{opacity:1;transform:translateY(0);}}
    @keyframes fadeIn{from{opacity:0;}to{opacity:1;}}
    @keyframes shimmer{0%{background-position:-300% center;}100%{background-position:300% center;}}
    @keyframes floatY{0%,100%{transform:translateY(0);}50%{transform:translateY(-12px);}}
    @keyframes blink{0%,100%{opacity:1;}50%{opacity:0.3;}}
    @keyframes waPulse{0%,100%{box-shadow:0 4px 24px rgba(37,211,102,0.5),0 0 0 0 rgba(37,211,102,0.4);}50%{box-shadow:0 4px 24px rgba(37,211,102,0.5),0 0 0 10px rgba(37,211,102,0);}}
    ::-webkit-scrollbar{width:4px;}
    ::-webkit-scrollbar-track{background:#F0F8FF;}
    ::-webkit-scrollbar-thumb{background:linear-gradient(#0EA5E9,#0284C7);border-radius:4px;}
    a{text-decoration:none;color:inherit;}
    button{cursor:pointer;font-family:inherit;}
    .nav-links{display:flex;gap:20px;align-items:center;}
    .hamburger{display:none !important;}
    @media(max-width:900px){.nav-links{display:none !important;}.hamburger{display:flex !important;}}
    .hero-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
    @media(max-width:900px){.hero-grid{grid-template-columns:repeat(2,1fr);}}
    @media(max-width:560px){.hero-grid{grid-template-columns:1fr;}}
    .product-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:22px;}
    @media(max-width:640px){.product-grid{grid-template-columns:1fr 1fr;gap:12px;}}
    @media(max-width:400px){.product-grid{grid-template-columns:1fr;}}
    .packs-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;}
    @media(max-width:700px){.packs-grid{grid-template-columns:1fr;}}
    .modal-inner{display:grid;grid-template-columns:1fr 1fr;max-width:780px;width:100%;}
    @media(max-width:640px){.modal-inner{grid-template-columns:1fr;max-height:90vh;overflow-y:auto;}.modal-img{height:240px !important;min-height:unset !important;}}
    .contact-grid{display:grid;grid-template-columns:1fr 1.5fr;gap:44px;align-items:start;}
    @media(max-width:760px){.contact-grid{grid-template-columns:1fr;}}
    .footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:36px;}
    @media(max-width:880px){.footer-grid{grid-template-columns:1fr 1fr;gap:28px;}}
    @media(max-width:500px){.footer-grid{grid-template-columns:1fr;gap:24px;}}
    .footer-bottom{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;}
    .stats-row{display:flex;justify-content:center;flex-wrap:wrap;}
    .stat-item{flex:1 1 130px;text-align:center;padding:20px 16px;border-right:1px solid #BFD9F2;}
    .stat-item:last-child{border-right:none;}
    @media(max-width:560px){.stat-item{flex:1 1 50%;border-right:1px solid #BFD9F2;border-bottom:1px solid #BFD9F2;}}
    .livraison-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
    @media(max-width:860px){.livraison-grid{grid-template-columns:1fr 1fr;}}
    @media(max-width:540px){.livraison-grid{grid-template-columns:1fr;}}
    .card-img{height:220px;}
    @media(max-width:640px){.card-img{height:180px;}}
    .hero-btns{display:flex;gap:14px;flex-wrap:wrap;justify-content:center;}
    @media(max-width:480px){.hero-btns{flex-direction:column;align-items:center;width:100%;}.hero-btns button,.hero-btns a{width:100%;max-width:300px;}}
    .section-pad{padding:80px 5%;}
    @media(max-width:640px){.section-pad{padding:52px 4%;}}
    .page-pad{padding:100px 5% 80px;}
    @media(max-width:640px){.page-pad{padding:90px 4% 60px;}}
    .form-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
    @media(max-width:500px){.form-row{grid-template-columns:1fr;}}
    .wa-fab{position:fixed;bottom:24px;right:20px;z-index:800;display:flex;align-items:center;gap:0;border-radius:50px;overflow:hidden;background:#25D366;box-shadow:0 4px 24px rgba(37,211,102,0.5);text-decoration:none;cursor:pointer;border:none;animation:waPulse 2.5s infinite;transition:all .25s ease;max-width:56px;}
    .wa-fab:hover{max-width:230px;animation:none;box-shadow:0 6px 28px rgba(37,211,102,0.6);}
    .wa-fab .wa-icon{width:56px;height:56px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
    .wa-fab .wa-label{font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:600;color:#fff;white-space:nowrap;padding-right:18px;overflow:hidden;opacity:0;transition:opacity .2s .05s;}
    .wa-fab:hover .wa-label{opacity:1;}
    .page-enter{animation:fadeIn .3s ease forwards;}
    .card-hover{transition:all .3s cubic-bezier(.4,0,.2,1);}
    .card-hover:hover{transform:translateY(-6px);}
  `;
  document.head.appendChild(s);
}

/* ─────────────────────────── LOGO SPAN ─────────────────────────── */
function LogoSpan({ fontSize = 24, style = {}, children }) {
  return (
    <span style={{
      fontFamily: "'Fraunces', serif",
      fontSize, fontWeight: 700, letterSpacing: 1,
      display: "inline-block",
      background: "linear-gradient(135deg, #0369A1 0%, #0EA5E9 50%, #38BDF8 100%)",
      backgroundSize: "300% auto",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
      color: "transparent",
      animation: "shimmer 5s linear infinite",
      ...style,
    }}>{children}</span>
  );
}

/* ─────────────────────────── WA FAB ─────────────────────────── */
const WA_D = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z";
function WaSvg({ size = 16 }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="#fff"><path d={WA_D} /></svg>; }
function WaFab() {
  return (
    <a href={waLink("Bonjour KARLOGITEK 👋")} target="_blank" rel="noreferrer" className="wa-fab">
      <div className="wa-icon"><svg viewBox="0 0 24 24" fill="#fff" width={26} height={26}><path d={WA_D} /></svg></div>
      <span className="wa-label">Commander</span>
    </a>
  );
}

/* ─────────────────────────── SHARED COMPONENTS ─────────────────────────── */
function Stars({ rating, size = 13, color = "#F59E0B" }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill={i <= rating ? color : "#CBD5E1"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function SectionHeader({ sub, title, t }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 50 }}>
      <div style={{ width: 44, height: 3, background: `linear-gradient(90deg, ${T.skyD}, ${T.sky})`, margin: "0 auto 14px", borderRadius: 2 }} />
      <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 10, letterSpacing: 5, textTransform: "uppercase", color: T.sky, marginBottom: 10, fontWeight: 700 }}>{sub}</p>
      <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(28px,5vw,46px)", fontWeight: 600, color: T.text }}>{title}</h2>
    </div>
  );
}

function Tag({ children, color = T.sky }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 5,
      background: `${color}14`, border: `1px solid ${color}30`,
      color, padding: "3px 10px", borderRadius: 50,
      fontSize: 10, fontWeight: 700, letterSpacing: "1.5px",
      textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace",
    }}>{children}</span>
  );
}

/* ─────────────────────────── PRODUCT MODAL ─────────────────────────── */
function ProductModal({ item, img, onClose }) {
  useEffect(() => {
    const esc = e => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", esc); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(10,22,40,0.7)", backdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 16, animation: "fadeIn .2s ease" }}>
      <div onClick={e => e.stopPropagation()} className="modal-inner" style={{ background: T.surface, border: `1.5px solid ${T.border}`, borderRadius: 22, overflow: "hidden", animation: "fadeUp .35s cubic-bezier(.16,1,.3,1) both", maxHeight: "92vh", boxShadow: "0 40px 80px rgba(2,132,199,0.15)" }}>
        <div className="modal-img" style={{ position: "relative", overflow: "hidden", minHeight: 300 }}>
          <img src={img} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,22,40,0.6) 0%, transparent 50%)" }} />
          {item.badge && (
            <div style={{ position: "absolute", top: 14, left: 14, background: `${item.badgeColor}22`, border: `1px solid ${item.badgeColor}55`, color: item.badgeColor, padding: "4px 12px", borderRadius: 20, fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>{item.badge}</div>
          )}
          <div style={{ position: "absolute", bottom: 14, left: 16 }}>
            <Stars rating={5} size={16} color="#FBBF24" />
          </div>
        </div>
        <div style={{ padding: "28px 24px 24px", overflowY: "auto", display: "flex", flexDirection: "column", gap: 14 }}>
          <button onClick={onClose} style={{ alignSelf: "flex-end", background: "transparent", border: "none", color: T.textMut, cursor: "pointer", fontSize: 20 }}>✕</button>
          <div>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: T.sky, marginBottom: 6, fontWeight: 700 }}>{item.brand}</p>
            <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: 24, fontWeight: 600, color: T.text, lineHeight: 1.2 }}>{item.name}</h2>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
            <span style={{ fontFamily: "'Fraunces',serif", fontSize: 22, fontWeight: 700, color: T.sky }}>{item.price}</span>
          </div>
          <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, color: T.textSub, lineHeight: 1.75 }}>{item.desc}</p>
          <div style={{ borderTop: `1px solid ${T.border}`, paddingTop: 14 }}>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: T.sky, marginBottom: 10, fontWeight: 700 }}>Caractéristiques</p>
            {item.details.map((d, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}>
                <span style={{ color: T.sky, fontSize: 12 }}>◆</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, color: T.textSub }}>{d}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: "auto", paddingTop: 6 }}>
            <a href={waLink(`Bonjour KARLOGITEK 👋, je souhaite commander le ${item.brand} ${item.name}. Quelles sont les disponibilités et le prix ?`)} target="_blank" rel="noreferrer" onClick={onClose}
              style={{ flex: 1, padding: "13px 0", borderRadius: 12, border: "none", cursor: "pointer", background: `linear-gradient(135deg, ${T.skyD}, ${T.sky})`, color: "#fff", fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: 1, textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, boxShadow: `0 4px 16px ${T.sky}30` }}>
              <WaSvg size={16} />Commander
            </a>
            <button onClick={onClose} style={{ padding: "12px 14px", borderRadius: 12, cursor: "pointer", background: "transparent", border: `1.5px solid ${T.border}`, color: T.textMut, fontSize: 14 }}>✕</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────── PRODUCT CARD ─────────────────────────── */
function ProductCard({ item, img, idx }) {
  const [modal, setModal] = useState(false);
  const [wish, setWish] = useState(false);
  const [hov, setHov] = useState(false);
  return (
    <>
      {modal && <ProductModal item={item} img={img} onClose={() => setModal(false)} />}
      <div
        onClick={() => setModal(true)}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          background: T.cardBg, border: `1.5px solid ${hov ? T.sky : T.border}`, borderRadius: 18, overflow: "hidden", cursor: "pointer",
          transition: "all .3s cubic-bezier(.4,0,.2,1)",
          animation: `fadeUp .6s ${idx * 0.06}s cubic-bezier(.16,1,.3,1) both`,
          display: "flex", flexDirection: "column",
          transform: hov ? "translateY(-7px)" : "translateY(0)",
          boxShadow: hov ? `0 20px 48px ${T.sky}18` : "0 2px 12px rgba(2,132,199,0.06)",
        }}
      >
        <div className="card-img" style={{ position: "relative", overflow: "hidden", background: T.bg2, flexShrink: 0 }}>
          <img src={img} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform .4s", transform: hov ? "scale(1.06)" : "scale(1)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,22,40,0.45) 0%, transparent 55%)" }} />
          {item.badge && (
            <div style={{ position: "absolute", top: 10, left: 10 }}>
              <span style={{ background: `${item.badgeColor}22`, border: `1px solid ${item.badgeColor}55`, color: item.badgeColor, padding: "3px 9px", borderRadius: 20, fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>{item.badge}</span>
            </div>
          )}
          <div onClick={e => { e.stopPropagation(); setWish(!wish); }} style={{ position: "absolute", top: 8, right: 10, fontSize: 17, cursor: "pointer", transition: "transform .2s", transform: wish ? "scale(1.2)" : "scale(1)" }}>{wish ? "❤️" : "🤍"}</div>
          <div style={{ position: "absolute", bottom: 10, right: 10, background: "rgba(255,255,255,0.9)", backdropFilter: "blur(8px)", borderRadius: 50, padding: "4px 10px", display: "flex", alignItems: "center", gap: 5, border: `1px solid ${T.border}` }}>
            <Stars rating={5} size={10} />
          </div>
        </div>
        <div style={{ padding: "14px 16px 18px", flex: 1, display: "flex", flexDirection: "column", gap: 7 }}>
          <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: T.sky }}>{item.brand}</p>
          <h3 style={{ fontFamily: "'Fraunces',serif", fontSize: 17, fontWeight: 600, color: T.text, lineHeight: 1.2 }}>{item.name}</h3>
          <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 11, color: T.textMut, lineHeight: 1.6, flex: 1 }}>{item.desc.substring(0, 72)}…</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 4 }}>
            <span style={{ fontFamily: "'Fraunces',serif", fontSize: 17, fontWeight: 700, color: T.sky }}>{item.price}</span>
            <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 10, color: T.sky, letterSpacing: 1, fontWeight: 600 }}>Voir →</span>
          </div>
        </div>
      </div>
    </>
  );
}

/* ─────────────────────────── CAROUSEL ─────────────────────────── */
function Carousel({ items, renderItem, itemWidth = 320, gap = 20 }) {
  const [pos, setPos] = useState(0);
  const [visibles, setVisibles] = useState(3);
  const containerRef = useRef(null);
  useEffect(() => {
    const update = () => { const w = containerRef.current?.offsetWidth || window.innerWidth; setVisibles(Math.max(1, Math.floor(w / (itemWidth + gap)))); };
    update(); window.addEventListener("resize", update); return () => window.removeEventListener("resize", update);
  }, [itemWidth, gap]);
  const maxPos = Math.max(0, items.length - visibles);
  useEffect(() => { const t = setInterval(() => setPos(p => p >= maxPos ? 0 : p + 1), 5000); return () => clearInterval(t); }, [maxPos]);
  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      <div style={{ overflow: "hidden" }}>
        <div style={{ display: "flex", gap, transform: `translateX(calc(-${pos * (itemWidth + gap)}px))`, transition: "transform 0.5s cubic-bezier(.4,0,.2,1)" }}>
          {items.map((item, i) => (
            <div key={i} style={{ flexShrink: 0, width: itemWidth }}>{renderItem(item, i)}</div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginTop: 28 }}>
        <button onClick={() => setPos(p => Math.max(0, p - 1))} disabled={pos === 0}
          style={{ width: 38, height: 38, borderRadius: "50%", border: `1.5px solid ${T.border}`, background: T.white, fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center", color: pos === 0 ? T.border : T.textSub, transition: "all .2s" }}>←</button>
        {items.map((_, i) => (
          <button key={i} onClick={() => setPos(Math.min(i, maxPos))}
            style={{ width: i === pos ? 24 : 8, height: 8, borderRadius: 50, background: i === pos ? T.sky : T.border, border: "none", transition: "all .3s", padding: 0 }} />
        ))}
        <button onClick={() => setPos(p => Math.min(maxPos, p + 1))} disabled={pos >= maxPos}
          style={{ width: 38, height: 38, borderRadius: "50%", border: `1.5px solid ${T.border}`, background: T.white, fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center", color: pos >= maxPos ? T.border : T.textSub, transition: "all .2s" }}>→</button>
      </div>
    </div>
  );
}

/* ─────────────────────────── NAVBAR ─────────────────────────── */
function Navbar({ current, setCurrent }) {
  const [scrolled, setScrolled] = useState(false);
  const [mob, setMob] = useState(false);
  useEffect(() => { const h = () => setScrolled(window.scrollY > 40); window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h); }, []);
  useEffect(() => { document.body.style.overflow = mob ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [mob]);
  const go = id => { setCurrent(id); setMob(false); };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? T.navBg : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? `1px solid ${T.border}` : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 24px rgba(2,132,199,0.08)" : "none",
        transition: "all .35s", padding: "0 5%",
        display: "flex", alignItems: "center", justifyContent: "space-between", height: 68,
      }}>
        {/* <div onClick={() => go("accueil")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: `linear-gradient(135deg, ${T.skyD}, ${T.sky})`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 4px 12px ${T.sky}40` }}>
            <span style={{ fontFamily: "'Fraunces',serif", fontWeight: 700, fontSize: 18, color: "#fff" }}>K</span>
          </div>
          
           <img
  src="./assets/karlogilogo.png"
  alt=""
  style={{ height: 300, width: "auto", objectFit: "contain" }}
/>
        </div> */}

        <div onClick={() => go("accueil")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
  <img
    src={karlogiLogo}
    alt="Karlogitek logo"
    style={{ height: 250, width: "auto", objectFit: "contain",marginTop: 24 }}
  />
</div>

        <div className="nav-links">
          {PAGES.filter(p => ["accueil", "premium", "milieu", "services", "packs", "contact"].includes(p.id)).map(p => (
            <span key={p.id} onClick={() => go(p.id)}
              style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12, letterSpacing: 0.5, fontWeight: current === p.id ? 700 : 500, cursor: "pointer", color: current === p.id ? T.sky : T.textMut, transition: "color .2s", borderBottom: current === p.id ? `2px solid ${T.sky}` : "2px solid transparent", paddingBottom: 2 }}
              onMouseEnter={e => e.target.style.color = T.sky}
              onMouseLeave={e => e.target.style.color = current === p.id ? T.sky : T.textMut}
            >{p.label}</span>
          ))}
          <a href={waLink("Bonjour KARLOGITEK 👋")} target="_blank" rel="noreferrer"
            style={{ display: "flex", alignItems: "center", gap: 7, padding: "9px 20px", borderRadius: 50, background: `linear-gradient(135deg, ${T.skyD}, ${T.sky})`, color: "#fff", fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 12, boxShadow: `0 4px 14px ${T.sky}35` }}>
            <WaSvg size={14} />WhatsApp
          </a>
        </div>

        <button className="hamburger" onClick={() => setMob(!mob)}
          style={{ background: "transparent", border: `1.5px solid ${T.border}`, cursor: "pointer", padding: "6px 10px", borderRadius: 8, color: T.text, fontSize: 20, lineHeight: 1 }}>{mob ? "✕" : "☰"}</button>
      </nav>

      {mob && (
        <div style={{ position: "fixed", inset: 0, zIndex: 999, background: "rgba(255,255,255,0.98)", backdropFilter: "blur(20px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", animation: "fadeIn .2s ease", paddingTop: 80, paddingBottom: 40 }}>
          {PAGES.map((p, i) => (
            <div key={p.id} onClick={() => go(p.id)} style={{ width: "100%", textAlign: "center", padding: "14px 0", borderBottom: `1px solid ${T.border}`, animation: `fadeUp .4s ${i * .04}s both` }}>
              <span style={{ fontFamily: "'Fraunces',serif", fontSize: 26, letterSpacing: 1, color: current === p.id ? T.sky : T.text, cursor: "pointer" }}>{p.emoji} {p.label}</span>
            </div>
          ))}
          <a href={waLink("Bonjour KARLOGITEK 👋")} target="_blank" rel="noreferrer"
            style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 10, padding: "14px 28px", borderRadius: 30, background: `linear-gradient(135deg, ${T.skyD}, ${T.sky})`, textDecoration: "none", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, fontWeight: 700, color: "#fff" }}>
            <WaSvg size={18} />WhatsApp — 679 680 586
          </a>
        </div>
      )}
    </>
  );
}

/* ─────────────────────────── HOME PAGE ─────────────────────────── */
function HomePage({ setCurrent }) {
  return (
    <div>
      {/* HERO */}
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "120px 6% 80px", position: "relative", overflow: "hidden", background: T.heroGrad }}>
        {/* decorative orbs */}
        {[
          { s: 600, bg: "rgba(14,165,233,.12)", top: -180, right: -180, dur: "10s" },
          { s: 400, bg: "rgba(2,132,199,.09)", bottom: -80, left: -80, dur: "12s" },
          { s: 280, bg: "rgba(56,189,248,.07)", top: "38%", left: "8%", dur: "9s" },
        ].map((o, i) => (
          <div key={i} style={{ position: "absolute", width: o.s, height: o.s, borderRadius: "50%", background: `radial-gradient(circle, ${o.bg} 0%, transparent 65%)`, top: o.top, right: o.right, bottom: o.bottom, left: o.left, pointerEvents: "none", animation: `floatY ${o.dur} ${i}s ease-in-out infinite` }} />
        ))}
        {/* grid */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: `linear-gradient(${T.sky}06 1px, transparent 1px), linear-gradient(90deg, ${T.sky}06 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 680 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 22, background: `${T.sky}12`, border: `1px solid ${T.sky}30`, borderRadius: 50, padding: "7px 18px" }}>
            <span style={{ width: 7, height: 7, background: "#22C55E", borderRadius: "50%", animation: "blink 2s infinite", flexShrink: 0 }} />
            <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: T.sky }}>Concierge Digital — Douala</span>
          </div>

          <div style={{ marginBottom: 6, animation: "fadeUp .6s .1s both" }}>
            <LogoSpan fontSize="clamp(64px,14vw,130px)" style={{ letterSpacing: -2, lineHeight: .9 }}>KARLOGI</LogoSpan>
            <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "clamp(64px,14vw,130px)", fontWeight: 900, color: T.text, letterSpacing: -2, lineHeight: .9 }}>TEK</span>
          </div>

          <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: 5, textTransform: "uppercase", color: T.textMut, marginBottom: 8, animation: "fadeUp .6s .15s both" }}>VOTRE EXPERT DIGITAL</p>

          <p style={{ fontFamily: "'Fraunces',serif", fontStyle: "italic", fontSize: "clamp(18px,3vw,24px)", color: T.textSub, marginBottom: 48, animation: "fadeUp .6s .25s both" }}>
            Smartphones authentiques, livrés sous 48h à Douala
          </p>

          <div className="hero-btns" style={{ animation: "fadeUp .6s .35s both" }}>
            <a href={waLink("Bonjour KARLOGITEK 👋, je souhaite commander un smartphone.")} target="_blank" rel="noreferrer"
              style={{ padding: "14px 34px", borderRadius: 50, border: "none", cursor: "pointer", background: `linear-gradient(135deg, ${T.skyD}, ${T.sky})`, color: "#fff", fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: 0.5, boxShadow: `0 8px 32px ${T.sky}35`, display: "inline-flex", alignItems: "center", gap: 8 }}>
              <WaSvg size={16} />Commander maintenant
            </a>
            <button onClick={() => setCurrent("premium")}
              style={{ padding: "14px 34px", borderRadius: 50, cursor: "pointer", background: "transparent", border: `2px solid ${T.border}`, color: T.textSub, fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: 13, transition: "all .2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = T.sky; e.currentTarget.style.color = T.sky; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.color = T.textSub; }}>
              Voir le catalogue →
            </button>
            <button onClick={() => setCurrent("packs")}
              style={{ padding: "14px 34px", borderRadius: 50, cursor: "pointer", background: "transparent", border: `2px solid ${T.border}`, color: T.textMut, fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 500, fontSize: 13, transition: "all .2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = T.sky; e.currentTarget.style.color = T.sky; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.color = T.textMut; }}>
              📱 Nos offres
            </button>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: T.textMut }}>Parcourir</span>
          <div style={{ width: 1, height: 32, background: `linear-gradient(${T.sky}, transparent)` }} />
        </div>
      </div>

      {/* STATS */}
      <div style={{ background: T.bg2, borderTop: `1px solid ${T.border}`, borderBottom: `1px solid ${T.border}`, padding: "12px 5%" }}>
        <div className="stats-row" style={{ maxWidth: 900, margin: "0 auto" }}>
          {STATS.map(s => (
            <div className="stat-item" key={s.label}>
              <div style={{ fontSize: 22, marginBottom: 4 }}>{s.icon}</div>
              <div style={{ fontFamily: "'Fraunces',serif", fontSize: 30, fontWeight: 700, color: T.sky }}>{s.val}</div>
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: T.textMut, marginTop: 4, fontWeight: 600 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="section-pad" style={{ background: T.bg }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeader sub="NOS UNIVERS" title="Explorez nos catégories" />
          <div className="hero-grid">
            {HERO_CATS.map((cat, i) => (
              <div key={cat.id} onClick={() => setCurrent(cat.id)}
                style={{ borderRadius: 18, overflow: "hidden", position: "relative", height: 230, cursor: "pointer", border: `1.5px solid ${T.border}`, transition: "transform .3s, box-shadow .3s", animation: `fadeUp .6s ${i * .07}s cubic-bezier(.16,1,.3,1) both`, boxShadow: "0 2px 12px rgba(2,132,199,0.08)" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = `0 16px 48px ${T.sky}22`; e.currentTarget.querySelector("img").style.transform = "scale(1.07)"; e.currentTarget.style.borderColor = T.sky; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(2,132,199,0.08)"; e.currentTarget.querySelector("img").style.transform = "scale(1)"; e.currentTarget.style.borderColor = T.border; }}>
                <img src={cat.img} alt={cat.label} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform .5s" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,22,40,0.75) 0%, rgba(10,22,40,0.1) 60%)" }} />
                <div style={{ position: "absolute", bottom: 16, left: 16 }}>
                  <span style={{ fontSize: 22, display: "block", marginBottom: 4 }}>{cat.emoji}</span>
                  <h3 style={{ fontFamily: "'Fraunces',serif", fontSize: 19, fontWeight: 600, color: "#FFF", marginBottom: 2 }}>{cat.label}</h3>
                  <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.75)" }}>{cat.desc}</p>
                </div>
                <div style={{ position: "absolute", top: 12, right: 12, background: "rgba(255,255,255,0.15)", backdropFilter: "blur(4px)", borderRadius: 20, padding: "3px 10px", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 9, color: "#fff", letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 700 }}>Voir →</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PACKS */}
      <div className="section-pad" style={{ background: T.bg2, borderTop: `1px solid ${T.border}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeader sub="OFFRES SPÉCIALES" title="Nos offres & abonnements" />
          <div className="packs-grid">
            {PACKS.map((pk, i) => (
              <div key={pk.id} onClick={() => setCurrent("packs")}
                style={{ background: T.cardBg, border: `1.5px solid ${T.border}`, borderRadius: 18, padding: "24px 22px", cursor: "pointer", transition: "transform .3s, box-shadow .3s", animation: `fadeUp .6s ${i * .07}s both`, borderLeft: `4px solid ${pk.color}`, boxShadow: "0 2px 10px rgba(2,132,199,0.06)" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 16px 40px ${pk.color}22`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 10px rgba(2,132,199,0.06)"; }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <span style={{ fontSize: 32 }}>{pk.icon}</span>
                  <div>
                    <h3 style={{ fontFamily: "'Fraunces',serif", fontSize: 20, fontWeight: 600, color: T.text }}>{pk.title}</h3>
                    <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 11, color: pk.color, fontWeight: 700 }}>{pk.price}</p>
                  </div>
                </div>
                <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12, color: T.textSub, lineHeight: 1.75, marginBottom: 14 }}>{pk.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {pk.items.map(it => <span key={it} style={{ background: `${pk.color}10`, border: `1px solid ${pk.color}25`, color: pk.color, padding: "3px 10px", borderRadius: 20, fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 10, fontWeight: 600 }}>✓ {it}</span>)}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <button onClick={() => setCurrent("packs")}
              style={{ padding: "12px 32px", borderRadius: 50, border: `1.5px solid ${T.border2}`, background: "transparent", color: T.textSub, cursor: "pointer", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12, letterSpacing: 1, fontWeight: 600, transition: "all .2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = T.sky; e.currentTarget.style.color = T.sky; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = T.border2; e.currentTarget.style.color = T.textSub; }}>
              Voir tous nos offres →
            </button>
          </div>
        </div>
      </div>

      {/* FEATURED PRODUCTS */}
      <div className="section-pad" style={{ background: T.bg, borderTop: `1px solid ${T.border}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeader sub="SÉLECTION" title="Smartphones à la une" />
          <div className="product-grid">
            {[
              { item: PRODUCTS.premium[0], img: IMGS.premium[0] },
              { item: PRODUCTS.premium[1], img: IMGS.premium[1] },
              { item: PRODUCTS.milieu[0], img: IMGS.milieu[0] },
              { item: PRODUCTS.entree[0], img: IMGS.entree[0] },
            ].map(({ item, img }, i) => <ProductCard key={item.id} item={item} img={img} idx={i} />)}
          </div>
        </div>
      </div>

      {/* SERVICES PREVIEW */}
      <div className="section-pad" style={{ background: T.bg2, borderTop: `1px solid ${T.border}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionHeader sub="NOS SERVICES" title="Un accompagnement complet" />
          <div className="livraison-grid">
            {SERVICES.slice(0, 3).map((s, i) => (
              <div key={i}
                style={{ background: T.cardBg, border: `1.5px solid ${T.border}`, borderRadius: 16, padding: "24px 20px", transition: "transform .3s, box-shadow .3s", borderTop: `3px solid ${s.color}`, boxShadow: "0 2px 10px rgba(2,132,199,0.06)" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 14px 36px ${s.color}20`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 10px rgba(2,132,199,0.06)"; }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: s.bg, border: `1px solid ${s.color}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 14 }}>{s.icon}</div>
                <h3 style={{ fontFamily: "'Fraunces',serif", fontSize: 19, fontWeight: 600, color: T.text, marginBottom: 6 }}>{s.title}</h3>
                <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", color: s.color, marginBottom: 10, fontWeight: 700 }}>{s.subtitle}</p>
                <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12, color: T.textSub, lineHeight: 1.75 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <button onClick={() => setCurrent("services")}
              style={{ padding: "12px 30px", borderRadius: 50, border: `1.5px solid ${T.border2}`, background: "transparent", color: T.textSub, cursor: "pointer", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12, letterSpacing: 1, fontWeight: 600, transition: "all .2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = T.sky; e.currentTarget.style.color = T.sky; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = T.border2; e.currentTarget.style.color = T.textSub; }}>
              Voir tous nos services →
            </button>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="section-pad" style={{ background: T.bg, borderTop: `1px solid ${T.border}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeader sub="AVIS CLIENTS" title="Ils nous font confiance" />
          <div className="livraison-grid">
            {TESTIMONIALS.slice(0, 3).map((rv, i) => (
              <div key={i} style={{ background: T.cardBg, border: `1.5px solid ${T.border}`, borderRadius: 16, padding: "24px 22px", boxShadow: "0 2px 12px rgba(2,132,199,0.05)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                  <Stars rating={rv.stars} size={14} />
                  <Tag color={rv.color}>{rv.tag}</Tag>
                </div>
                <p style={{ fontFamily: "'Fraunces',serif", fontStyle: "italic", fontSize: 15, color: T.textSub, lineHeight: 1.75, marginBottom: 18 }}>«{rv.text}»</p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: `linear-gradient(135deg, ${T.skyD}, ${T.sky})`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Fraunces',serif", fontSize: 15, color: "#fff", fontWeight: 700 }}>{rv.avatar}</div>
                  <div>
                    <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, fontWeight: 700, color: T.text }}>{rv.name}</p>
                    <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 11, color: T.textMut }}>📍 {rv.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────── CATALOGUE PAGE ─────────────────────────── */
function CataloguePage({ catId, setCurrent }) {
  const allItems = [];
  const allImgs = [];
  const catMap = { premium: PRODUCTS.premium, milieu: PRODUCTS.milieu, entree: PRODUCTS.entree, custom: PRODUCTS.custom };
  const imgMap = { premium: IMGS.premium, milieu: IMGS.milieu, entree: IMGS.entree, custom: IMGS.custom };

  if (catId === "all") {
    Object.keys(catMap).forEach(k => { catMap[k].forEach((it, i) => { allItems.push(it); allImgs.push((imgMap[k][i] || imgMap[k][0])); }); });
  } else {
    (catMap[catId] || []).forEach((it, i) => { allItems.push(it); allImgs.push((imgMap[catId][i] || imgMap[catId][0])); });
  }

  const page = PAGES.find(p => p.id === catId) || { label: "Catalogue", emoji: "📱" };
  return (
    <div className="page-pad" style={{ background: T.bg, minHeight: "100vh" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <div style={{ width: 44, height: 3, background: `linear-gradient(90deg, ${T.skyD}, ${T.sky})`, margin: "0 auto 16px", borderRadius: 2 }} />
          <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 10, letterSpacing: 5, textTransform: "uppercase", color: T.sky, marginBottom: 10, fontWeight: 700 }}>KARLOGITEK</p>
          <h1 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(36px,7vw,64px)", fontWeight: 600, lineHeight: .95, background: `linear-gradient(135deg, ${T.skyD}, ${T.sky})`, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent", display: "block", marginBottom: 12 }}>{page.emoji} {page.label}</h1>
          <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, color: T.textSub, maxWidth: 460, margin: "0 auto", lineHeight: 1.75 }}>Smartphones 100% authentiques avec documents et garantie constructeur.</p>
        </div>
        {allItems.length > 0 ? (
          <div className="product-grid">{allItems.map((it, i) => <ProductCard key={it.id} item={it} img={allImgs[i]} idx={i} />)}</div>
        ) : (
          <div style={{ textAlign: "center", padding: "80px 20px" }}>
            <p style={{ fontFamily: "'Fraunces',serif", fontSize: 22, color: T.textMut }}>Aucun article disponible.</p>
          </div>
        )}
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <button onClick={() => setCurrent("accueil")}
            style={{ padding: "12px 30px", borderRadius: 50, background: "transparent", border: `1.5px solid ${T.border2}`, color: T.textSub, cursor: "pointer", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12, letterSpacing: 1, fontWeight: 600, transition: "all .2s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = T.sky; e.currentTarget.style.color = T.sky; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = T.border2; e.currentTarget.style.color = T.textSub; }}>
            ← Retour à l'accueil
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────── SERVICES PAGE ─────────────────────────── */
function ServicesPage({ setCurrent }) {
  return (
    <div className="page-pad" style={{ background: T.bg, minHeight: "100vh" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 54 }}>
          <div style={{ width: 44, height: 3, background: `linear-gradient(90deg, ${T.skyD}, ${T.sky})`, margin: "0 auto 16px", borderRadius: 2 }} />
          <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 10, letterSpacing: 5, textTransform: "uppercase", color: T.sky, marginBottom: 10, fontWeight: 700 }}>KARLOGITEK</p>
          <h1 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(34px,7vw,64px)", fontWeight: 600, background: `linear-gradient(135deg, ${T.skyD}, ${T.sky})`, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent", display: "block" }}>🛠️ Services</h1>
          <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, color: T.textSub, maxWidth: 500, margin: "14px auto 0", lineHeight: 1.75 }}>Des services complets pour votre tranquillité numérique, disponibles 7 jours sur 7.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
          {SERVICES.map((s, i) => {
            const [hov, setHov] = useState(false);
            return (
              <div key={i} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
                style={{ background: T.cardBg, borderRadius: 20, padding: 28, border: `1.5px solid ${hov ? s.color + "50" : T.border}`, transition: "all .3s", transform: hov ? "translateY(-5px)" : "none", boxShadow: hov ? `0 20px 48px ${s.color}14` : "0 2px 12px rgba(2,132,199,0.05)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${s.color}, ${s.color}60)`, opacity: hov ? 1 : 0, transition: "opacity .3s" }} />
                <div style={{ width: 50, height: 50, borderRadius: 14, background: s.bg, border: `1px solid ${s.color}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 16 }}>{s.icon}</div>
                <div style={{ fontFamily: "'Fraunces',serif", fontSize: 18, fontWeight: 600, color: T.text, marginBottom: 4 }}>{s.title}</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: s.color, marginBottom: 12 }}>{s.subtitle}</div>
                <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, color: T.textSub, lineHeight: 1.75, marginBottom: 16 }}>{s.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {s.features.map((f, j) => (
                    <span key={j} style={{ background: s.bg, border: `1px solid ${s.color}20`, padding: "4px 11px", borderRadius: 50, fontSize: 11, color: s.color, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 4 }}><span style={{ fontSize: 9 }}>✓</span>{f}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ marginTop: 48, padding: "36px 40px", background: `linear-gradient(135deg, ${T.skyD}, ${T.sky})`, borderRadius: 22, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20, boxShadow: `0 12px 40px ${T.sky}28` }}>
          <div>
            <h3 style={{ fontFamily: "'Fraunces',serif", fontSize: 22, fontWeight: 600, color: "#fff", marginBottom: 6 }}>Besoin d'un service spécifique ?</h3>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>Notre équipe est disponible 7j/7 de 8h à 22h pour vous accompagner.</p>
          </div>
          <a href={waLink("Bonjour KARLOGITEK 👋, je souhaite en savoir plus sur vos services.")} target="_blank" rel="noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: T.skyD, padding: "13px 28px", borderRadius: 50, fontSize: 13, fontWeight: 700, boxShadow: "0 4px 16px rgba(0,0,0,0.1)", flexShrink: 0, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
            <WaSvg size={16} /><span style={{ color: T.skyD }}>Nous contacter</span>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────── PACKS PAGE ─────────────────────────── */
function PacksPage({ setCurrent }) {
  const PACK_FEATURES = [
    { icon: "📞", text: "Assistance technique à distance 7j/7" },
    { icon: "🔍", text: "Software checking mensuel inclus" },
    { icon: "🔧", text: "Dépannage matériel & logiciel" },
    { icon: "⚡", text: "Réponse prioritaire sous 2h" },
    { icon: "📱", text: "Conseil & configuration illimités" },
    { icon: "🛡️", text: "Suivi personnalisé toute l'année" },
  ];
  return (
    <div className="page-pad" style={{ background: T.bg, minHeight: "100vh" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 54 }}>
          <div style={{ width: 44, height: 3, background: `linear-gradient(90deg, ${T.skyD}, ${T.sky})`, margin: "0 auto 16px", borderRadius: 2 }} />
          <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 10, letterSpacing: 5, textTransform: "uppercase", color: T.sky, marginBottom: 10, fontWeight: 700 }}>ABONNEMENTS & OFFRES</p>
<h1 style={{
  fontFamily: "'Fraunces',serif",
  fontSize: "clamp(34px,7vw,64px)",
  fontWeight: 600,
  background: `linear-gradient(135deg, ${T.skyD}, ${T.sky})`,
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
  display: "block",
  lineHeight: 1.2,
  paddingBottom: "0.1em",
}}>
 Packs & Services
</h1>          <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, color: T.textSub, maxWidth: 500, margin: "14px auto 0", lineHeight: 1.75 }}>Des formules adaptées à chaque besoin, pour particuliers et entreprises.</p>
        </div>

        {/* Featured Pack */}
        <div style={{ background: T.cardBg, borderRadius: 26, overflow: "hidden", border: `1.5px solid ${T.border}`, boxShadow: "0 40px 80px rgba(2,132,199,0.08)", marginBottom: 40 }}>
          <div style={{ background: `linear-gradient(135deg, ${T.skyD}, ${T.sky})`, padding: "24px 36px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 4 }}>Notre offre vedette</p>
              <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: 22, fontWeight: 700, color: "#fff" }}>Pack Accessibilité</h2>
            </div>
            <span style={{ fontSize: 40 }}>🏆</span>
          </div>
          <div style={{ padding: "36px 36px 40px" }}>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 6, marginBottom: 6 }}>
              <span style={{ fontFamily: "'Fraunces',serif", fontSize: 72, fontWeight: 900, color: T.text, lineHeight: 1 }}>2 500</span>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 22, fontWeight: 700, color: T.sky, marginBottom: 10 }}>FCFA</span>
            </div>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 14, color: T.textMut, marginBottom: 36 }}>par an — soit moins de <strong style={{ color: T.sky }}>210 FCFA/mois</strong></p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 36 }}>
              {PACK_FEATURES.map((f, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 36, height: 36, background: T.skyPale, border: `1px solid ${T.skyXL}`, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>{f.icon}</div>
                  <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, color: T.textSub, lineHeight: 1.5 }}>{f.text}</span>
                </div>
              ))}
            </div>
            <div style={{ height: 1, background: T.border, marginBottom: 32 }} />
            <a href={waLink("Bonjour KARLOGITEK 👋, je souhaite souscrire au Pack Accessibilité à 2500 FCFA/an. Comment procéder ?")} target="_blank" rel="noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 9, background: `linear-gradient(135deg, ${T.skyD}, ${T.sky})`, color: "#fff", padding: "16px 44px", borderRadius: 50, fontSize: 15, fontWeight: 700, boxShadow: `0 8px 32px ${T.sky}35`, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
              <WaSvg size={18} />S'abonner maintenant
            </a>
          </div>
        </div>

        {/* Other packs */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {PACKS.slice(1).map((pk, i) => (
            <div key={pk.id} style={{ background: T.cardBg, border: `1.5px solid ${T.border}`, borderRadius: 18, overflow: "hidden", display: "grid", gridTemplateColumns: "auto 1fr", animation: `fadeUp .6s ${i * .08}s both`, boxShadow: "0 2px 14px rgba(2,132,199,0.05)" }}>
              <div style={{ width: 6, background: `linear-gradient(to bottom, ${pk.color}, ${pk.colorLight})` }} />
              <div style={{ padding: "28px 28px 28px 24px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 18, flexWrap: "wrap", marginBottom: 16 }}>
                  <span style={{ fontSize: 44, lineHeight: 1 }}>{pk.icon}</span>
                  <div style={{ flex: 1 }}>
                    <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: 26, fontWeight: 600, color: T.text, marginBottom: 4 }}>{pk.title}</h2>
                    <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 15, fontWeight: 700, color: pk.color }}>{pk.price}</p>
                  </div>
                </div>
                <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, color: T.textSub, lineHeight: 1.8, marginBottom: 18 }}>{pk.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 22 }}>
                  {pk.items.map(it => <span key={it} style={{ background: `${pk.color}10`, border: `1px solid ${pk.color}25`, color: pk.color, padding: "5px 14px", borderRadius: 30, fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 11, fontWeight: 600 }}>✦ {it}</span>)}
                </div>
                <a href={waLink(`Bonjour KARLOGITEK 👋, je souhaite en savoir plus sur le ${pk.title}.`)} target="_blank" rel="noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", borderRadius: 30, background: "#25D366", color: "#fff", fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: 1, textDecoration: "none" }}>
                  <WaSvg size={16} />Demander ce pack
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div style={{ marginTop: 72 }}>
          <SectionHeader sub="AVIS CLIENTS" title="Ils nous font confiance" />
          <Carousel items={TESTIMONIALS} itemWidth={320} gap={20} renderItem={(t, i) => {
            const [hov, setHov] = useState(false);
            return (
              <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
                style={{ background: T.cardBg, borderRadius: 20, padding: 24, border: `1.5px solid ${hov ? T.skyXL : T.border}`, transition: "all .3s", transform: hov ? "translateY(-4px)" : "none", boxShadow: hov ? `0 16px 40px ${T.sky}14` : "0 2px 12px rgba(2,132,199,0.05)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                  <Stars rating={t.stars} size={15} />
                  <Tag color={t.color}>{t.tag}</Tag>
                </div>
                <p style={{ fontFamily: "'Fraunces',serif", fontSize: 14, fontStyle: "italic", lineHeight: 1.75, color: T.textSub, marginBottom: 18 }}>"{t.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: `linear-gradient(135deg, ${T.skyD}, ${T.sky})`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Fraunces',serif", fontWeight: 700, fontSize: 15, color: "#fff" }}>{t.avatar}</div>
                  <div>
                    <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 13, color: T.text }}>{t.name}</p>
                    <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 11, color: T.textMut }}>📍 {t.city}</p>
                  </div>
                </div>
              </div>
            );
          }} />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────── LIVRAISON PAGE ─────────────────────────── */
function LivraisonPage({ setCurrent }) {
  const zones = [
    { icon: "🏠", title: "Douala — Express", delay: "Sous 24h", price: "2 000 – 5 000 XAF", color: "#059669", desc: "Livraison à domicile dans tout Douala. Zone couverte : Akwa, Bonanjo, Deido, Bali, Makepe, Logpom, PK, Bonamoussadi, etc." },
    { icon: "🚗", title: "Yaoundé & Villes Principales", delay: "48 – 72h", price: "8 000 – 15 000 XAF", color: T.skyD, desc: "Couverture nationale via transporteurs partenaires fiables. Livraison à domicile ou en point relais." },
    { icon: "✈️", title: "International", delay: "5 – 10 jours ouvrables", price: "Sur devis", color: "#7C3AED", desc: "Expédition mondiale disponible. Emballage sécurisé renforcé pour vos appareils." },
  ];
  const garanties = [
    { icon: "📦", title: "Emballage sécurisé", desc: "Chaque appareil est emballé avec soin dans une boîte de transport sécurisée." },
    { icon: "🔒", title: "Paiement sécurisé", desc: "Paiement à la livraison disponible à Douala. Mobile Money & virement acceptés." },
    { icon: "📍", title: "Suivi en temps réel", desc: "Numéro de suivi fourni pour chaque commande. Mises à jour WhatsApp." },
    { icon: "↩️", title: "Retour & Échange", desc: "7 jours pour retourner un article non conforme. Échange ou remboursement garanti." },
  ];
  return (
    <div className="page-pad" style={{ background: T.bg, minHeight: "100vh" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 54 }}>
          <div style={{ width: 44, height: 3, background: `linear-gradient(90deg, ${T.skyD}, ${T.sky})`, margin: "0 auto 16px", borderRadius: 2 }} />
          <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 10, letterSpacing: 5, textTransform: "uppercase", color: T.sky, marginBottom: 10, fontWeight: 700 }}>LIVRAISON PREMIUM</p>
          <h1 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(34px,7vw,64px)", fontWeight: 600, background: `linear-gradient(135deg, ${T.skyD}, ${T.sky})`, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent", display: "block" }}>🚚 Livraison</h1>
          <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, color: T.textSub, maxWidth: 500, margin: "14px auto 0", lineHeight: 1.75 }}>Nous livrons vos smartphones avec soin partout au Cameroun et à l'international.</p>
        </div>
        <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: 28, fontWeight: 400, color: T.text, marginBottom: 24, textAlign: "center" }}>Zones de livraison</h2>
        <div className="livraison-grid" style={{ marginBottom: 48 }}>
          {zones.map((z, i) => (
            <div key={i} style={{ background: T.cardBg, border: `1.5px solid ${T.border}`, borderRadius: 16, padding: "26px 22px", borderTop: `3px solid ${z.color}`, boxShadow: "0 2px 12px rgba(2,132,199,0.06)", animation: `fadeUp .6s ${i * .08}s both` }}>
              <span style={{ fontSize: 38, display: "block", marginBottom: 14 }}>{z.icon}</span>
              <h3 style={{ fontFamily: "'Fraunces',serif", fontSize: 20, fontWeight: 600, color: T.text, marginBottom: 8 }}>{z.title}</h3>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
                <span style={{ background: `${z.color}12`, border: `1px solid ${z.color}30`, color: z.color, padding: "3px 12px", borderRadius: 20, fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 10, fontWeight: 600 }}>⏱ {z.delay}</span>
                <span style={{ background: `${T.sky}12`, border: `1px solid ${T.sky}30`, color: T.sky, padding: "3px 12px", borderRadius: 20, fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 10, fontWeight: 600 }}>💰 {z.price}</span>
              </div>
              <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12, color: T.textSub, lineHeight: 1.75 }}>{z.desc}</p>
            </div>
          ))}
        </div>
        <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: 28, fontWeight: 400, color: T.text, marginBottom: 24, textAlign: "center" }}>Nos garanties</h2>
        <div className="packs-grid" style={{ marginBottom: 48 }}>
          {garanties.map((g, i) => (
            <div key={i} style={{ background: T.cardBg, border: `1.5px solid ${T.border}`, borderRadius: 14, padding: "22px 20px", display: "flex", gap: 14, boxShadow: "0 2px 10px rgba(2,132,199,0.05)" }}>
              <span style={{ fontSize: 30, flexShrink: 0 }}>{g.icon}</span>
              <div>
                <h3 style={{ fontFamily: "'Fraunces',serif", fontSize: 18, fontWeight: 600, color: T.text, marginBottom: 6 }}>{g.title}</h3>
                <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12, color: T.textSub, lineHeight: 1.75 }}>{g.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ background: `linear-gradient(135deg, ${T.bg2}, ${T.skyPale})`, border: `1.5px solid ${T.border}`, borderRadius: 18, padding: "34px 28px", textAlign: "center" }}>
          <p style={{ fontFamily: "'Fraunces',serif", fontSize: 26, fontWeight: 400, color: T.text, marginBottom: 10 }}>Prêt à commander ?</p>
          <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, color: T.textSub, marginBottom: 24, lineHeight: 1.75 }}>Contactez-nous via WhatsApp pour passer votre commande.</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={waLink("Bonjour KARLOGITEK 👋, je souhaite commander un smartphone.")} target="_blank" rel="noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 30px", borderRadius: 50, background: "#25D366", color: "#fff", fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 12, textDecoration: "none" }}>
              <WaSvg size={16} />WhatsApp — 679 680 586
            </a>
            <button onClick={() => setCurrent("contact")}
              style={{ padding: "13px 30px", borderRadius: 50, background: "transparent", border: `1.5px solid ${T.border2}`, color: T.textSub, cursor: "pointer", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12, letterSpacing: 1, fontWeight: 600, transition: "all .2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = T.sky; e.currentTarget.style.color = T.sky; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = T.border2; e.currentTarget.style.color = T.textSub; }}>
              Formulaire de contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────── CONTACT PAGE ─────────────────────────── */
function ContactPage() {
  const [form, setForm] = useState({ nom: "", email: "", sujet: "", msg: "" });
  const [sent, setSent] = useState(false);
  const ok = form.nom && form.email && form.msg;
  return (
    <div className="page-pad" style={{ background: T.bg, minHeight: "100vh" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ width: 44, height: 3, background: `linear-gradient(90deg, ${T.skyD}, ${T.sky})`, margin: "0 auto 16px", borderRadius: 2 }} />
          <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 10, letterSpacing: 5, textTransform: "uppercase", color: T.sky, marginBottom: 10, fontWeight: 700 }}>KARLOGITEK</p>
          <h1 style={{ fontFamily: "'Fraunces',serif", fontSize: "clamp(34px,6vw,56px)", fontWeight: 600, background: `linear-gradient(135deg, ${T.skyD}, ${T.sky})`, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent", display: "block" }}>Contactez-nous</h1>
        </div>
        <div className="contact-grid">
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { icon: "💬", label: "WhatsApp (principal)", val: "+237 679 680 586", bg: "#D1FAE5", color: "#059669" },
              { icon: "📍", label: "Localisation", val: "Douala, Cameroun", bg: T.skyPale, color: T.sky },
              { icon: "🕐", label: "Disponibilité", val: "7j/7 • 8h00 – 22h00", bg: "#FEF3C7", color: "#B45309" },
            ].map((c, i) => (
              <div key={i}
                style={{ display: "flex", alignItems: "center", gap: 14, background: T.cardBg, border: `1.5px solid ${T.border}`, borderRadius: 14, padding: "16px 18px", boxShadow: "0 2px 10px rgba(2,132,199,0.05)", transition: "border-color .2s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = T.sky}
                onMouseLeave={e => e.currentTarget.style.borderColor = T.border}>
                <div style={{ width: 44, height: 44, background: c.bg, borderRadius: 11, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{c.icon}</div>
                <div>
                  <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 10, color: T.textMut, marginBottom: 3, fontWeight: 600 }}>{c.label}</p>
                  <p style={{ fontFamily: "'Fraunces',serif", fontSize: 16, color: T.text, fontWeight: 600 }}>{c.val}</p>
                </div>
              </div>
            ))}
            <a href={waLink("Bonjour KARLOGITEK 👋, je souhaite vous contacter.")} target="_blank" rel="noreferrer"
              style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 20px", borderRadius: 12, background: `linear-gradient(135deg, ${T.skyD}, ${T.sky})`, textDecoration: "none", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, fontWeight: 700, color: "#fff", boxShadow: `0 4px 16px ${T.sky}30` }}>
              <WaSvg size={18} />Écrire sur WhatsApp maintenant
            </a>
            {/* Quick links */}
            <div>
              <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: T.textMut, marginBottom: 12, fontWeight: 700 }}>Accès rapide</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["Commander un smartphone", "Demander une réparation", "Pack Accessibilité", "Conseil personnalisé"].map(item => (
                  <a key={item} href={waLink(`Bonjour KARLOGITEK 👋, je souhaite : ${item}`)} target="_blank" rel="noreferrer"
                    style={{ padding: "7px 14px", borderRadius: 50, background: T.skyPale, border: `1px solid ${T.skyXL}`, color: T.skyD, fontSize: 12, fontWeight: 600, transition: "all .2s" }}
                    onMouseEnter={e => { e.currentTarget.style.background = T.sky; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = T.skyPale; e.currentTarget.style.color = T.skyD; }}>
                    {item} →
                  </a>
                ))}
              </div>
            </div>
          </div>

          {sent ? (
            <div style={{ background: T.cardBg, border: `1.5px solid ${T.border}`, borderRadius: 20, padding: "56px 36px", textAlign: "center", boxShadow: "0 4px 24px rgba(2,132,199,0.07)" }}>
              <div style={{ fontSize: 52, marginBottom: 14 }}>💌</div>
              <h3 style={{ fontFamily: "'Fraunces',serif", fontSize: 26, fontWeight: 600, color: T.sky, marginBottom: 8 }}>Message envoyé !</h3>
              <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, color: T.textMut, marginBottom: 24 }}>Nous vous répondrons dans les 24 heures.</p>
              <button onClick={() => { setSent(false); setForm({ nom: "", email: "", sujet: "", msg: "" }); }}
                style={{ padding: "12px 28px", borderRadius: 50, border: "none", cursor: "pointer", background: `linear-gradient(135deg, ${T.skyD}, ${T.sky})`, color: "#fff", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12, fontWeight: 700 }}>
                Nouveau message
              </button>
            </div>
          ) : (
            <div style={{ background: T.cardBg, border: `1.5px solid ${T.border}`, borderRadius: 20, padding: "32px 28px", display: "flex", flexDirection: "column", gap: 16, boxShadow: "0 4px 24px rgba(2,132,199,0.07)" }}>
              <div className="form-row">
                {[{ key: "nom", label: "Nom", ph: "Votre nom", type: "text" }, { key: "email", label: "Email", ph: "votre@email.com", type: "email" }].map(f => (
                  <div key={f.key}>
                    <label style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: T.sky, display: "block", marginBottom: 7, fontWeight: 700 }}>{f.label}</label>
                    <input type={f.type} value={form[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })} placeholder={f.ph}
                      style={{ background: T.inputBg, border: `1.5px solid ${T.border}`, color: T.text, fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, padding: "11px 13px", borderRadius: 10, outline: "none", width: "100%", transition: "border-color .2s" }}
                      onFocus={e => e.target.style.borderColor = T.sky}
                      onBlur={e => e.target.style.borderColor = T.border} />
                  </div>
                ))}
              </div>
              <div>
                <label style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: T.sky, display: "block", marginBottom: 7, fontWeight: 700 }}>Sujet</label>
                <select value={form.sujet} onChange={e => setForm({ ...form, sujet: e.target.value })}
                  style={{ width: "100%", background: T.inputBg, border: `1.5px solid ${T.border}`, color: form.sujet ? T.text : T.textMut, fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, padding: "11px 13px", borderRadius: 10, outline: "none" }}>
                  <option value="" disabled>Choisir un sujet...</option>
                  <option>Commander un smartphone</option>
                  <option>Demander une réparation</option>
                  <option>Pack Accessibilité</option>
                  <option>Assistance technique</option>
                  <option>Recherche personnalisée</option>
                  <option>Autre demande</option>
                </select>
              </div>
              <div>
                <label style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: T.sky, display: "block", marginBottom: 7, fontWeight: 700 }}>Message</label>
                <textarea value={form.msg} rows={5} onChange={e => setForm({ ...form, msg: e.target.value })} placeholder="Décrivez votre demande..."
                  style={{ background: T.inputBg, border: `1.5px solid ${T.border}`, color: T.text, fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, padding: "11px 13px", borderRadius: 10, outline: "none", width: "100%", resize: "vertical", transition: "border-color .2s" }}
                  onFocus={e => e.target.style.borderColor = T.sky}
                  onBlur={e => e.target.style.borderColor = T.border} />
              </div>
              {/* QR */}
              <div style={{ background: T.bg2, borderRadius: 14, padding: "20px", display: "flex", alignItems: "center", gap: 16, border: `1px solid ${T.border}` }}>
                <img src={QR_URL} alt="QR WhatsApp" style={{ width: 72, height: 72, borderRadius: 8 }} />
                <div>
                  <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12, fontWeight: 700, color: T.text, marginBottom: 4 }}>Scanner pour WhatsApp</p>
                  <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 11, color: T.textMut }}>Redirige directement vers notre chat professionnel</p>
                </div>
              </div>
              <button onClick={() => ok && setSent(true)}
                style={{ padding: 14, borderRadius: 12, border: "none", cursor: ok ? "pointer" : "not-allowed", background: ok ? `linear-gradient(135deg, ${T.skyD}, ${T.sky})` : T.border, color: ok ? "#fff" : T.textMut, fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: 0.5, transition: "opacity .2s", boxShadow: ok ? `0 4px 16px ${T.sky}30` : "none" }}>
                Envoyer le message ◆
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────── FOOTER ─────────────────────────── */
function Footer({ setCurrent }) {
  return (
    <footer style={{ background: "#0A1628", borderTop: `1px solid rgba(14,165,233,0.15)`, padding: "56px 5% 28px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="footer-grid" style={{ marginBottom: 44 }}>
          <div>
            <div style={{ marginBottom: 14, display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: 9, background: `linear-gradient(135deg, ${T.skyD}, ${T.sky})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "'Fraunces',serif", fontWeight: 700, fontSize: 16, color: "#fff" }}>K</span>
              </div>
              <div>
                <LogoSpan fontSize={20}>KARLOGI</LogoSpan>
                <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 20, fontWeight: 800, color: "#fff", letterSpacing: -0.5 }}>TEK</span>
              </div>
            </div>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.8, maxWidth: 220, marginBottom: 20 }}>Votre concierge digital de confiance à Douala. Smartphones authentiques, assistance 7j/7.</p>
            <a href={waLink("Bonjour KARLOGITEK 👋")} target="_blank" rel="noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 7, background: `${T.sky}18`, border: `1px solid ${T.sky}30`, color: T.skyL, padding: "9px 18px", borderRadius: 50, fontSize: 13, fontWeight: 600 }}>
              <WaSvg size={14} />+237 679 680 586
            </a>
          </div>

          {[
            { title: "Catalogue", links: [{ label: "Smartphones Premium", id: "premium" }, { label: "Milieu de gamme", id: "milieu" }, { label: "Entrée de gamme", id: "entree" }, { label: "Sur commande", id: "custom" }] },
            { title: "Services", links: [{ label: "Assistance Technique", id: "services" }, { label: "Maintenance", id: "services" }, { label: "Dépannage", id: "services" }, { label: "Conseil", id: "services" }] },
            { title: "Informations", links: [{ label: "Packs & Abonnements", id: "packs" }, { label: "Livraison", id: "livraison" }, { label: "Contact", id: "contact" }, { label: "Accueil", id: "accueil" }] },
          ].map(col => (
            <div key={col.title}>
              <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: T.sky, marginBottom: 18, fontWeight: 700 }}>{col.title}</p>
              {col.links.map(lnk => (
                <p key={lnk.label} onClick={() => setCurrent(lnk.id)}
                  style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 10, cursor: "pointer", transition: "color .2s" }}
                  onMouseEnter={e => e.target.style.color = T.sky}
                  onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.4)"}>{lnk.label}</p>
              ))}
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid rgba(14,165,233,0.12)", paddingTop: 22 }}>
          <div className="footer-bottom">
            <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.3)" }}>© {new Date().getFullYear()} KARLOGITEK. Tous droits réservés.</span>
            <span style={{ fontFamily: "'Fraunces',serif", fontSize: 13, fontStyle: "italic", color: "rgba(255,255,255,0.3)" }}>L'excellence au bout des doigts</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────── ROOT APP ─────────────────────────── */
export default function App() {
  const [current, setCurrent] = useState("accueil");
  const navigate = useCallback(id => { setCurrent(id); window.scrollTo({ top: 0, behavior: "smooth" }); }, []);

  const renderPage = () => {
    if (current === "accueil") return <HomePage setCurrent={navigate} />;
    if (current === "services") return <ServicesPage setCurrent={navigate} />;
    if (current === "packs") return <PacksPage setCurrent={navigate} />;
    if (current === "livraison") return <LivraisonPage setCurrent={navigate} />;
    if (current === "contact") return <ContactPage />;
    if (["premium", "milieu", "entree", "custom"].includes(current)) return <CataloguePage catId={current} setCurrent={navigate} />;
    return <HomePage setCurrent={navigate} />;
  };

  return (
    <div style={{ minHeight: "100vh", background: T.bg, color: T.text }}>
      <Navbar current={current} setCurrent={navigate} />
      <main className="page-enter">{renderPage()}</main>
      <Footer setCurrent={navigate} />
      <WaFab />
    </div>
  );
}