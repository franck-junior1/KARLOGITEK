import { useState, useEffect, useRef, useCallback } from "react";
import logo from "./assets/logo23.png";
const WA_NUMBER = "237679680586";
const WA_BASE = `https://wa.me/${WA_NUMBER}`;
const waLink = (msg) => `${WA_BASE}?text=${encodeURIComponent(msg)}`;

const PHONES = [
  { id:1, brand:"Apple", model:"iPhone 15 Pro Max", price:"Sur devis", badge:"Nouveau", badgeColor:"#1a1a1a", img:"https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80", cat:"premium", rating:5, reviews:128, specs:["Puce A17 Pro — Titane","Caméra 48 MP ProRAW 5×","Dynamic Island • USB-C","iOS 17 natif"], desc:"Le summum de la technologie Apple. Design titane ultra-résistant, performances de pro et caméra révolutionnaire ProRAW." },
  { id:2, brand:"Samsung", model:"Galaxy S24 Ultra", price:"Sur devis", badge:"Best-seller", badgeColor:"#c9aa71", img:"https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&q=80", cat:"premium", rating:5, reviews:214, specs:["Snapdragon 8 Gen 3","S Pen intégré + IA","Caméra 200 MP zoom 100×","Écran 6.8″ LTPO AMOLED"], desc:"La puissance Android sans compromis. S Pen, IA Galaxy avancée et zoom télescopique 100×." },
  { id:3, brand:"Apple", model:"iPhone 14", price:"Sur devis", badge:null, badgeColor:null, img:"https://images.unsplash.com/photo-1603921326210-6edd2d60ca68?w=600&q=80", cat:"premium", rating:4, reviews:97, specs:["Puce A15 Bionic","Double caméra 12 MP","Mode Action vidéo","Crash Detection"], desc:"La fiabilité Apple à un prix plus accessible. Performances exceptionnelles et qualité photo remarquable." },
  { id:4, brand:"Xiaomi", model:"Redmi Note 13 Pro+", price:"Sur devis", badge:"Promo", badgeColor:"#c9aa71", img:"https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=600&q=80", cat:"milieu", rating:4, reviews:76, specs:["Dimensity 7200 Ultra","Caméra 200 MP OIS","Charge 120 W","Écran AMOLED 120 Hz"], desc:"La référence milieu de gamme. Charge ultra-rapide 120W et caméra de flagship à prix accessible." },
  { id:5, brand:"Tecno", model:"Camon 30 Pro 5G", price:"Sur devis", badge:"5G", badgeColor:"#6366f1", img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80", cat:"milieu", rating:4, reviews:52, specs:["Dimensity 7020 5G","Triple caméra 50 MP","Batterie 5000 mAh","Charge 45 W"], desc:"Connectivité 5G et triple caméra polyvalente pour capturer chaque moment avec précision." },
  { id:6, brand:"Samsung", model:"Galaxy A55", price:"Sur devis", badge:null, badgeColor:null, img:"https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=600&q=80", cat:"milieu", rating:4, reviews:89, specs:["Exynos 1480 — 8 Go","AMOLED 120 Hz 6.6″","Batterie 5000 mAh","Quad caméra 50 MP"], desc:"L'élégance Samsung à portée de main. Écran AMOLED vibrant et autonomie remarquable." },
  { id:7, brand:"Infinix", model:"Hot 40 Pro", price:"Sur devis", badge:"Populaire", badgeColor:"#e11d48", img:"https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&q=80", cat:"entree", rating:4, reviews:43, specs:["Helio G99 — 8 Go RAM","Écran 6.78″ 120 Hz","Batterie 5000 mAh","Triple caméra 108 MP"], desc:"Performances solides et grand écran immersif. Le choix malin pour démarrer avec style." },
  { id:8, brand:"Sur commande", model:"Recherche personnalisée", price:"Sur mesure", badge:"Sur mesure", badgeColor:"#1a1a1a", img:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80", cat:"custom", rating:5, reviews:61, specs:["Toute marque disponible","Adapté à votre budget","Documents inclus","Livraison 48–72h"], desc:"Vous avez un modèle précis en tête ? On le trouve au meilleur prix, livré sous 72h." },
];

const SERVICES = [
  { icon:"🛠️", title:"Assistance Technique", subtitle:"7j/7 • 8h–22h", accent:"#c9aa71", desc:"Un expert disponible à distance pour tout problème technique. WhatsApp, appel, on est toujours là.", features:["Disponible 7j/7","8h à 22h","Résolution sous 2h","Suivi personnalisé"] },
  { icon:"💻", title:"Maintenance Logicielle", subtitle:"Mensuelle & préventive", accent:"#6366f1", desc:"Vérification mensuelle, optimisation du système, mises à jour de sécurité et nettoyage complet.", features:["Check mensuel inclus","Optimisation complète","Mises à jour","Sécurité & antivirus"] },
  { icon:"🔩", title:"Dépannage Matériel", subtitle:"Écran, batterie, charge…", accent:"#e11d48", desc:"Techniciens qualifiés pour réparer écran cassé, batterie, connecteur de charge, caméra.", features:["Diagnostic gratuit","Pièces certifiées","Techniciens qualifiés","Garantie réparation"] },
  { icon:"🔍", title:"Recherche Smartphone", subtitle:"48–72h livraison", accent:"#0ea5e9", desc:"Vous avez un modèle exact en tête ? On le trouve au meilleur prix du marché, documents inclus.", features:["Toutes marques","Prix négocié","Documents inclus","Livraison 48–72h"] },
  { icon:"🛒", title:"Vente Smartphones", subtitle:"Neufs & reconditionnés", accent:"#10b981", desc:"Large sélection : iPhone, Samsung, Xiaomi, Tecno, Infinix. Tous 100% authentiques avec facture.", features:["Neufs & reconditionnés","100% authentiques","Prix transparents","Facture fournie"] },
  { icon:"📋", title:"Conseil & Accompagnement", subtitle:"Gratuit & personnalisé", accent:"#f59e0b", desc:"Conseil personnalisé selon votre usage et budget. Configuration initiale et prise en main incluses.", features:["Conseil offert","Configuration incluse","Prise en main","Suivi post-achat"] },
];

const TESTIMONIALS = [
  { name:"Alvine M.", city:"Douala", text:"J'ai commandé un iPhone 15 Pro Max via WhatsApp. Livré en 3 jours avec tous les documents. Service absolument impeccable !", stars:5, tag:"Achat smartphone" },
  { name:"Patrick N.", city:"Yaoundé", text:"Le Pack Accessibilité vaut vraiment son prix. Mon technicien m'aide à chaque problème. 2500 FCFA c'est rien !", stars:5, tag:"Pack Accessibilité" },
  { name:"Sandrine K.", city:"Bafoussam", text:"Dépannage de mon écran Samsung en 24h. Pièces de qualité, prix honnête. Je recommande à tous mes proches !", stars:5, tag:"Réparation" },
  { name:"Emmanuel T.", city:"Kribi", text:"Recherche personnalisée d'un Redmi Note 13 Pro+. Trouvé sous 48h au prix que je voulais. Service parfait !", stars:5, tag:"Sur commande" },
  { name:"Fatima D.", city:"Douala", text:"Assistance technique disponible même le dimanche soir. Problème résolu en moins d'une heure. Incroyable réactivité !", stars:5, tag:"Assistance" },
  { name:"Jean-Claude B.", city:"Ngaoundéré", text:"Configuration de mon Samsung Galaxy neuf, prise en main complète. Je suis ravi du service personnalisé !", stars:5, tag:"Conseil" },
];

const STATS = [
  { val:"500+", label:"Clients satisfaits", icon:"👥" },
  { val:"7j/7", label:"Disponibilité", icon:"⏰" },
  { val:"100%", label:"Authentiques", icon:"✅" },
  { val:"48h", label:"Livraison max", icon:"🚀" },
];

const PACK_FEATURES = [
  { icon:"📞", text:"Assistance technique à distance 7j/7" },
  { icon:"🔍", text:"Software checking mensuel inclus" },
  { icon:"🔧", text:"Dépannage matériel & logiciel" },
  { icon:"⚡", text:"Réponse prioritaire sous 2h" },
  { icon:"📱", text:"Conseil & configuration illimités" },
  { icon:"🛡️", text:"Suivi personnalisé toute l'année" },
];

// ── STAR COMPONENT ─────────────────────────────────────────────────────────
function Stars({ rating, size = 14 }) {
  return (
    <div style={{ display:"flex", gap:2 }}>
      {[1,2,3,4,5].map(i => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill={i <= rating ? "#c9aa71" : "#e5e7eb"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

// ── MODAL ─────────────────────────────────────────────────────────────────
function Modal({ phone, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const h = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", h);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", h); };
  }, [onClose]);

  return (
    <div onClick={e => e.target === e.currentTarget && onClose()} style={{
      position:"fixed", inset:0, zIndex:1000,
      background:"rgba(0,0,0,0.45)", backdropFilter:"blur(12px)",
      display:"flex", alignItems:"center", justifyContent:"center",
      padding:"20px", animation:"fadeIn .25s ease"
    }}>
      <div style={{
        background:"#fff", borderRadius:28, maxWidth:620, width:"100%",
        maxHeight:"90vh", overflowY:"auto", animation:"slideUp .3s cubic-bezier(.4,0,.2,1)",
        boxShadow:"0 40px 100px rgba(0,0,0,0.2)"
      }}>
        {/* Image */}
        <div style={{ position:"relative", height:280, overflow:"hidden", borderRadius:"28px 28px 0 0" }}>
          <img src={phone.img} alt={phone.model} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
          <div style={{
            position:"absolute", inset:0,
            background:"linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)"
          }}/>
          {/* Close */}
          <button onClick={onClose} style={{
            position:"absolute", top:16, right:16, width:36, height:36,
            background:"rgba(255,255,255,0.9)", border:"none", borderRadius:"50%",
            cursor:"pointer", fontSize:16, display:"flex", alignItems:"center",
            justifyContent:"center", fontWeight:700, color:"#1a1a1a",
            backdropFilter:"blur(8px)"
          }}>✕</button>
          {/* Rating overlay */}
          <div style={{
            position:"absolute", bottom:16, left:20, display:"flex", alignItems:"center", gap:8
          }}>
            <Stars rating={phone.rating} size={16} />
            <span style={{ color:"#fff", fontSize:13, fontWeight:600 }}>{phone.reviews} avis</span>
          </div>
        </div>

        <div style={{ padding:"28px 32px 32px" }}>
          {/* Brand + badge */}
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:8 }}>
            <span style={{
              fontSize:11, fontWeight:800, letterSpacing:2, textTransform:"uppercase",
              color:"#c9aa71", fontFamily:"'Cormorant Garamond', serif"
            }}>{phone.brand}</span>
            {phone.badge && (
              <span style={{
                background: phone.badgeColor === "#c9aa71" ? "linear-gradient(135deg,#c9aa71,#e8c97a)" : phone.badgeColor,
                color:"#fff", padding:"4px 12px", borderRadius:50, fontSize:11, fontWeight:700
              }}>{phone.badge}</span>
            )}
          </div>

          <h2 style={{
            fontFamily:"'Cormorant Garamond', serif", fontSize:28, fontWeight:700,
            color:"#0f0f0f", lineHeight:1.15, marginBottom:12
          }}>{phone.model}</h2>

          <p style={{ fontSize:14.5, color:"#6b7280", lineHeight:1.8, marginBottom:22 }}>{phone.desc}</p>

          {/* Specs grid */}
          <div style={{
            background:"#f9f7f4", borderRadius:16, padding:20, marginBottom:24
          }}>
            <div style={{ fontSize:11, fontWeight:800, letterSpacing:2, textTransform:"uppercase", color:"#c9aa71", marginBottom:14, fontFamily:"'Cormorant Garamond', serif" }}>
              Caractéristiques
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
              {phone.specs.map((s, i) => (
                <div key={i} style={{
                  display:"flex", alignItems:"center", gap:10,
                  background:"#fff", borderRadius:10, padding:"10px 13px",
                  border:"1px solid #f0ece4"
                }}>
                  <div style={{
                    width:6, height:6, background:"#c9aa71",
                    borderRadius:"50%", flexShrink:0
                  }}/>
                  <span style={{ fontSize:12.5, color:"#374151", fontWeight:500 }}>{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stars full display */}
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:24, padding:"14px 16px", background:"#fefce8", borderRadius:12, border:"1px solid #fef08a" }}>
            <Stars rating={phone.rating} size={18} />
            <span style={{ fontSize:14, fontWeight:700, color:"#1a1a1a" }}>{phone.rating}.0</span>
            <span style={{ fontSize:13, color:"#6b7280" }}>— {phone.reviews} clients satisfaits</span>
          </div>

          {/* Actions */}
          <div style={{ display:"flex", gap:10 }}>
            <a href={waLink(`Bonjour KARLOGITEK 👋, je souhaite commander le ${phone.brand} ${phone.model}. Quelles sont les disponibilités et le prix ?`)}
              target="_blank" rel="noopener noreferrer"
              style={{
                flex:1, display:"flex", alignItems:"center", justifyContent:"center", gap:8,
                background:"#0f0f0f", color:"#fff", padding:"14px", borderRadius:14,
                fontSize:14.5, fontWeight:700, textDecoration:"none", transition:"all .2s",
                fontFamily:"'Plus Jakarta Sans', sans-serif"
              }}>
              📲 Commander via WhatsApp
            </a>
            <button onClick={onClose} style={{
              padding:"14px 20px", borderRadius:14, border:"1.5px solid #e5e7eb",
              background:"transparent", color:"#6b7280", fontWeight:600, cursor:"pointer",
              fontSize:14, fontFamily:"'Plus Jakarta Sans', sans-serif"
            }}>Fermer</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── CAROUSEL ──────────────────────────────────────────────────────────────
function Carousel({ items, renderItem, itemWidth = 300, gap = 20 }) {
  const [pos, setPos] = useState(0);
  const maxPos = Math.max(0, items.length - Math.floor((typeof window !== "undefined" ? window.innerWidth * 0.85 : 900) / (itemWidth + gap)));
  const prev = () => setPos(p => Math.max(0, p - 1));
  const next = () => setPos(p => Math.min(maxPos, p + 1));

  return (
    <div style={{ position:"relative" }}>
      <div style={{ overflow:"hidden" }}>
        <div style={{
          display:"flex", gap:gap,
          transform:`translateX(calc(-${pos * (itemWidth + gap)}px))`,
          transition:"transform .45s cubic-bezier(.4,0,.2,1)"
        }}>
          {items.map((item, i) => (
            <div key={i} style={{ flexShrink:0, width:itemWidth }}>
              {renderItem(item, i)}
            </div>
          ))}
        </div>
      </div>
      {/* Nav dots + arrows */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:12, marginTop:28 }}>
        <button onClick={prev} disabled={pos === 0} style={{
          width:40, height:40, borderRadius:"50%", border:"1.5px solid #e5e7eb",
          background:"#fff", cursor:"pointer", fontSize:16, display:"flex",
          alignItems:"center", justifyContent:"center", color: pos===0 ? "#d1d5db" : "#0f0f0f",
          transition:"all .2s", boxShadow: pos===0 ? "none" : "0 2px 8px rgba(0,0,0,0.1)"
        }}>←</button>
        {items.map((_, i) => (
          <button key={i} onClick={() => setPos(Math.min(i, maxPos))} style={{
            width: i === pos ? 24 : 8, height:8, borderRadius:50,
            background: i === pos ? "#c9aa71" : "#e5e7eb",
            border:"none", cursor:"pointer", transition:"all .3s", padding:0
          }}/>
        ))}
        <button onClick={next} disabled={pos >= maxPos} style={{
          width:40, height:40, borderRadius:"50%", border:"1.5px solid #e5e7eb",
          background:"#fff", cursor:"pointer", fontSize:16, display:"flex",
          alignItems:"center", justifyContent:"center", color: pos>=maxPos ? "#d1d5db" : "#0f0f0f",
          transition:"all .2s", boxShadow: pos>=maxPos ? "none" : "0 2px 8px rgba(0,0,0,0.1)"
        }}>→</button>
      </div>
    </div>
  );
}

// ── APP ────────────────────────────────────────────────────────────────────
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [filter, setFilter] = useState("all");
  const [modal, setModal] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior:"smooth" });
    setDrawer(false);
  };

  const phones = filter === "all" ? PHONES : PHONES.filter(p => p.cat === filter);
  const NAV = [["accueil","Accueil"],["smartphones","Smartphones"],["services","Services"],["pack","Pack"],["contact","Contact"]];
  const QR = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&color=0f0f0f&bgcolor=FFFFFF&data=${encodeURIComponent(WA_BASE)}`;

  const CSS = `
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
    * { box-sizing:border-box; margin:0; padding:0; }
    html { scroll-behavior:smooth; }
    body { font-family:'Plus Jakarta Sans',sans-serif; background:#faf9f7; color:#1a1a1a; -webkit-font-smoothing:antialiased; overflow-x:hidden; }
    ::selection { background:#c9aa71; color:#fff; }
    ::-webkit-scrollbar { width:4px; }
    ::-webkit-scrollbar-track { background:#faf9f7; }
    ::-webkit-scrollbar-thumb { background:linear-gradient(#c9aa71,#0f0f0f); border-radius:4px; }
    @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
    @keyframes slideUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
    @keyframes blink { 0%,100% { opacity:1; } 50% { opacity:.3; } }
    @keyframes floatBob { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-8px); } }
    @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
    .btn-wa-main {
      display:inline-flex; align-items:center; gap:8px;
      background:#0f0f0f; color:#fff; padding:14px 28px; border-radius:50px;
      font-size:14.5px; font-weight:700; text-decoration:none;
      transition:all .25s; box-shadow:0 4px 20px rgba(0,0,0,0.15);
      font-family:'Plus Jakarta Sans',sans-serif;
    }
    .btn-wa-main:hover { background:#c9aa71; transform:translateY(-2px); box-shadow:0 8px 28px rgba(201,170,113,0.4); }
    .btn-outline { 
      display:inline-flex; align-items:center; gap:8px; background:transparent;
      color:#1a1a1a; padding:14px 28px; border-radius:50px; font-size:14.5px;
      font-weight:700; border:2px solid #1a1a1a; cursor:pointer; transition:all .25s;
      font-family:'Plus Jakarta Sans',sans-serif;
    }
    .btn-outline:hover { background:#1a1a1a; color:#fff; transform:translateY(-2px); }
    .pcard-hover { transform:translateY(-8px) !important; box-shadow:0 32px 64px rgba(0,0,0,0.12) !important; }
    .scard-hover { transform:translateY(-4px) !important; box-shadow:0 20px 48px rgba(0,0,0,0.08) !important; }
    .tcard-hover { transform:translateY(-3px) !important; }
    @media(max-width:768px) {
      .hero-grid { grid-template-columns:1fr !important; }
      .stats-grid { grid-template-columns:repeat(2,1fr) !important; }
      .footer-grid { grid-template-columns:1fr 1fr !important; }
      .pack-feats { grid-template-columns:1fr !important; }
      .qr-grid { grid-template-columns:1fr !important; }
      .nav-links-desktop { display:none !important; }
      .nav-cta-desktop { display:none !important; }
      .burger-btn { display:flex !important; }
    }
  `;

  return (
    <>
      <style>{CSS}</style>

      {/* ── FLOAT WA ── */}
      <a href={waLink("Bonjour KARLOGITEK 👋")} target="_blank" rel="noopener noreferrer"
        style={{
          position:"fixed", bottom:24, right:24, zIndex:700,
          width:54, height:54, background:"#25d366", borderRadius:"50%",
          display:"flex", alignItems:"center", justifyContent:"center",
          fontSize:22, boxShadow:"0 4px 20px rgba(37,211,102,0.5)",
          textDecoration:"none", animation:"floatBob 3s 1s ease-in-out infinite"
        }}>💬</a>

      {/* ── DRAWER ── */}
      {drawer && (
        <div style={{
          position:"fixed", inset:0, zIndex:950, animation:"fadeIn .2s ease"
        }}>
          <div onClick={() => setDrawer(false)} style={{
            position:"absolute", inset:0, background:"rgba(0,0,0,0.4)", backdropFilter:"blur(6px)"
          }}/>
          <div style={{
            position:"absolute", top:0, right:0, bottom:0, width:280,
            background:"#fff", padding:"24px 20px", display:"flex",
            flexDirection:"column", gap:4, boxShadow:"-20px 0 60px rgba(0,0,0,0.1)",
            animation:"slideUp .3s ease"
          }}>
            <button onClick={() => setDrawer(false)} style={{
              alignSelf:"flex-end", background:"none", border:"none",
              fontSize:20, cursor:"pointer", color:"#6b7280", marginBottom:12
            }}>✕</button>
            {NAV.map(([id,l]) => (
              <a key={id} onClick={() => go(id)} style={{
                padding:"13px 16px", borderRadius:12, fontSize:15, fontWeight:600,
                color:"#374151", cursor:"pointer", transition:"all .2s",
                textDecoration:"none", display:"block"
              }}>{l}</a>
            ))}
            <a href={waLink("Bonjour KARLOGITEK 👋")} target="_blank" rel="noopener noreferrer"
              style={{
                marginTop:16, display:"flex", alignItems:"center", justifyContent:"center",
                gap:8, background:"#0f0f0f", color:"#fff", padding:14, borderRadius:50,
                fontSize:14, fontWeight:700, textDecoration:"none"
              }}>💬 WhatsApp</a>
          </div>
        </div>
      )}

      {/* ── NAV ── */}
      <nav style={{
        position:"fixed", top:0, left:0, right:0, zIndex:900, height:70,
        display:"flex", alignItems:"center", justifyContent:"space-between",
        padding:"0 5%", transition:"all .3s",
        background: scrolled ? "rgba(250,249,247,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.07)" : "none"
      }}>
        {/* Logo */}
        {/* <div onClick={() => go("accueil")} style={{ display:"flex", alignItems:"center", gap:11, cursor:"pointer" }}>
          <div style={{
            width:38, height:38, borderRadius:10,
            background:"linear-gradient(135deg,#0f0f0f,#333)",
            display:"flex", alignItems:"center", justifyContent:"center",
            fontFamily:"'Cormorant Garamond',serif", fontWeight:700, fontSize:18, color:"#c9aa71"
          }}>K</div>
          <span style={{
            fontFamily:"'Cormorant Garamond',serif", fontSize:20, fontWeight:700, color:"#0f0f0f", letterSpacing:.5
          }}>KARLO<em style={{ fontStyle:"normal", color:"#c9aa71" }}>GITEK</em></span>
        </div> */}


        <div onClick={() => go("accueil")} style={{ cursor:"pointer" }}>
  <img
    src={logo}
    alt="KARLOGITEK"
    style={{
      height: 120,
      width: "auto",
      objectFit: "contain",
      display: "block",
    }}
  />
</div>

        {/* Links desktop */}
        <ul className="nav-links-desktop" style={{ display:"flex", gap:4, listStyle:"none" }}>
          {NAV.map(([id,l]) => (
            <li key={id}>
              <a onClick={() => go(id)} style={{
                padding:"7px 14px", borderRadius:8, fontSize:14, fontWeight:600,
                color:"#374151", cursor:"pointer", textDecoration:"none",
                transition:"all .2s", display:"block"
              }}>{l}</a>
            </li>
          ))}
        </ul>

        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <a href={waLink("Bonjour KARLOGITEK 👋")} target="_blank" rel="noopener noreferrer"
            className="nav-cta-desktop btn-wa-main" style={{ padding:"9px 20px", fontSize:13.5 }}>
            💬 WhatsApp
          </a>
          <button className="burger-btn" onClick={() => setDrawer(true)} style={{
            display:"none", background:"none", border:"none", fontSize:22, cursor:"pointer", padding:8
          }}>☰</button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="accueil" style={{
        minHeight:"100vh", display:"flex", alignItems:"center", paddingTop:70,
        position:"relative", overflow:"hidden",
        background:"linear-gradient(160deg, #faf9f7 0%, #f5f0e8 60%, #faf9f7 100%)"
      }}>
        {/* Decorative bg */}
        <div style={{
          position:"absolute", top:-100, right:-100, width:600, height:600,
          background:"radial-gradient(circle, rgba(201,170,113,0.12) 0%, transparent 70%)",
          borderRadius:"50%", pointerEvents:"none"
        }}/>
        <div style={{
          position:"absolute", bottom:-80, left:-60, width:400, height:400,
          background:"radial-gradient(circle, rgba(15,15,15,0.04) 0%, transparent 70%)",
          borderRadius:"50%", pointerEvents:"none"
        }}/>
        {/* Subtle grid */}
        <div style={{
          position:"absolute", inset:0, pointerEvents:"none",
          backgroundImage:"linear-gradient(rgba(201,170,113,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(201,170,113,0.06) 1px,transparent 1px)",
          backgroundSize:"64px 64px"
        }}/>

        <div className="hero-grid" style={{
          maxWidth:1200, margin:"0 auto", padding:"80px 5%",
          display:"grid", gridTemplateColumns:"1fr 1fr", gap:80,
          alignItems:"center", position:"relative", zIndex:1, width:"100%"
        }}>
          <div style={{ animation:"slideUp .6s ease" }}>
            {/* Pill badge */}
            <div style={{
              display:"inline-flex", alignItems:"center", gap:8, marginBottom:24,
              background:"rgba(201,170,113,0.1)", border:"1px solid rgba(201,170,113,0.3)",
              borderRadius:50, padding:"7px 16px"
            }}>
              <span style={{ width:7, height:7, background:"#10b981", borderRadius:"50%", animation:"blink 2s infinite", flexShrink:0 }}/>
              <span style={{ fontSize:12, fontWeight:700, letterSpacing:1.5, textTransform:"uppercase", color:"#c9aa71", fontFamily:"'Cormorant Garamond',serif" }}>
                Concierge Digital — Douala
              </span>
            </div>

            <h1 style={{
              fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(40px,5.5vw,72px)",
              fontWeight:700, lineHeight:1.05, letterSpacing:-1, color:"#0f0f0f", marginBottom:20
            }}>
              Votre expert<br/>
              <em style={{ fontStyle:"italic", color:"#c9aa71" }}>smartphones</em><br/>
              de confiance
            </h1>

            <p style={{ fontSize:16, color:"#6b7280", lineHeight:1.85, marginBottom:36, maxWidth:440, fontWeight:400 }}>
              Vente, dépannage, assistance technique et recherche personnalisée. Des appareils <strong style={{ color:"#1a1a1a", fontWeight:700 }}>100% authentiques</strong>, livrés sous 48h à Douala.
            </p>

            <div style={{ display:"flex", gap:12, flexWrap:"wrap", marginBottom:48 }}>
              <a href={waLink("Bonjour KARLOGITEK 👋, je souhaite commander un smartphone.")} target="_blank" rel="noopener noreferrer" className="btn-wa-main">
                📲 Commander maintenant
              </a>
              <button className="btn-outline" onClick={() => go("smartphones")}>
                Voir les smartphones →
              </button>
            </div>

            {/* Stats */}
            <div className="stats-grid" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:12 }}>
              {STATS.map(s => (
                <div key={s.label} style={{
                  background:"#fff", border:"1px solid #f0ece4", borderRadius:16,
                  padding:"16px 12px", textAlign:"center",
                  boxShadow:"0 2px 12px rgba(0,0,0,0.04)"
                }}>
                  <div style={{ fontSize:20, marginBottom:6 }}>{s.icon}</div>
                  <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:22, fontWeight:700, color:"#0f0f0f" }}>{s.val}</div>
                  <div style={{ fontSize:11, color:"#9ca3af", marginTop:2, fontWeight:500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual */}
          <div style={{ display:"flex", justifyContent:"center", animation:"slideUp .8s ease" }}>
            <div style={{
              background:"#fff", borderRadius:28, padding:"28px 24px",
              maxWidth:340, width:"100%", position:"relative",
              boxShadow:"0 40px 100px rgba(0,0,0,0.12), 0 0 0 1px rgba(201,170,113,0.15)",
            }}>
              {/* Gold line top */}
              <div style={{
                position:"absolute", top:0, left:"50%", transform:"translateX(-50%)",
                width:60, height:3, background:"linear-gradient(90deg,#c9aa71,#e8c97a)",
                borderRadius:"0 0 3px 3px"
              }}/>
              <div style={{
                display:"inline-flex", alignItems:"center", gap:6, marginBottom:16,
                background:"rgba(201,170,113,0.1)", border:"1px solid rgba(201,170,113,0.25)",
                borderRadius:50, padding:"5px 12px"
              }}>
                <Stars rating={5} size={12}/>
                <span style={{ fontSize:11, fontWeight:700, color:"#c9aa71", fontFamily:"'Cormorant Garamond',serif", letterSpacing:1 }}>TOP VENTE</span>
              </div>
              <img src={PHONES[0].img} alt={PHONES[0].model} style={{
                width:"100%", height:200, objectFit:"cover", borderRadius:16, marginBottom:16,
                background:"#f9f7f4"
              }}/>
              <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:18, fontWeight:700, color:"#0f0f0f", marginBottom:4 }}>{PHONES[0].model}</div>
              <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:16 }}>
                <Stars rating={5} size={13}/>
                <span style={{ fontSize:12, color:"#9ca3af" }}>128 avis</span>
              </div>
              <a href={waLink(`Bonjour KARLOGITEK 👋, je souhaite commander le ${PHONES[0].brand} ${PHONES[0].model}.`)}
                target="_blank" rel="noopener noreferrer"
                style={{
                  display:"flex", alignItems:"center", justifyContent:"center", gap:7,
                  background:"#0f0f0f", color:"#fff", padding:12, borderRadius:12,
                  fontSize:13.5, fontWeight:700, textDecoration:"none", transition:"all .2s", width:"100%"
                }}>📲 Commander</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SMARTPHONES ── */}
      <section id="smartphones" style={{ padding:"96px 5%", background:"#faf9f7" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:40, flexWrap:"wrap", gap:20 }}>
            <div>
              <div style={{
                display:"inline-flex", alignItems:"center", gap:8, marginBottom:14,
                background:"rgba(201,170,113,0.1)", border:"1px solid rgba(201,170,113,0.2)",
                borderRadius:50, padding:"5px 14px", fontSize:11, fontWeight:800,
                letterSpacing:2, textTransform:"uppercase", color:"#c9aa71",
                fontFamily:"'Cormorant Garamond',serif"
              }}>📱 Catalogue</div>
              <h2 style={{
                fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(32px,4vw,52px)",
                fontWeight:700, color:"#0f0f0f", letterSpacing:-1, lineHeight:1.1
              }}>Nos <em style={{ fontStyle:"italic", color:"#c9aa71" }}>smartphones</em></h2>
            </div>
            <p style={{ fontSize:14.5, color:"#9ca3af", maxWidth:340, lineHeight:1.7, fontWeight:400 }}>
              Sélection rigoureuse, 100% authentiques avec documents et garantie.
            </p>
          </div>

          {/* Filters */}
          <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:40 }}>
            {[["all","Tous"],["premium","Premium"],["milieu","Milieu de gamme"],["entree","Entrée de gamme"],["custom","Sur commande"]].map(([v,l]) => (
              <button key={v} onClick={() => setFilter(v)} style={{
                padding:"8px 20px", borderRadius:50, fontSize:13, fontWeight:600, cursor:"pointer",
                border: filter===v ? "none" : "1.5px solid #e5e7eb",
                background: filter===v ? "#0f0f0f" : "#fff",
                color: filter===v ? "#fff" : "#6b7280",
                transition:"all .22s", fontFamily:"'Plus Jakarta Sans',sans-serif",
                boxShadow: filter===v ? "0 2px 12px rgba(0,0,0,0.2)" : "none"
              }}>{l}</button>
            ))}
          </div>

          {/* Cards grid */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(268px,1fr))", gap:20 }}>
            {phones.map(p => (
              <div key={p.id}
                onMouseEnter={() => setHoveredCard(`p${p.id}`)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background:"#fff", borderRadius:22, overflow:"hidden",
                  border:"1px solid #f0ece4", cursor:"pointer",
                  transition:"all .3s cubic-bezier(.4,0,.2,1)",
                  transform: hoveredCard===`p${p.id}` ? "translateY(-8px)" : "none",
                  boxShadow: hoveredCard===`p${p.id}` ? "0 32px 64px rgba(0,0,0,0.1)" : "0 2px 16px rgba(0,0,0,0.05)",
                  display:"flex", flexDirection:"column"
                }}>
                {/* Image */}
                <div style={{ position:"relative", height:210, overflow:"hidden", background:"#f9f7f4" }}>
                  <img src={p.img} alt={p.model} style={{
                    width:"100%", height:"100%", objectFit:"cover",
                    transition:"transform .5s ease",
                    transform: hoveredCard===`p${p.id}` ? "scale(1.06)" : "scale(1)"
                  }}/>
                  {p.badge && (
                    <span style={{
                      position:"absolute", top:12, left:12,
                      background: p.badgeColor === "#c9aa71" ? "linear-gradient(135deg,#c9aa71,#e8c97a)" : p.badgeColor,
                      color:"#fff", padding:"5px 12px", borderRadius:50, fontSize:11, fontWeight:700,
                      letterSpacing:.5, boxShadow:"0 2px 8px rgba(0,0,0,0.2)"
                    }}>{p.badge}</span>
                  )}
                  {/* Rating overlay */}
                  <div style={{
                    position:"absolute", bottom:10, right:12,
                    background:"rgba(255,255,255,0.92)", backdropFilter:"blur(8px)",
                    borderRadius:50, padding:"4px 10px", display:"flex", alignItems:"center", gap:5
                  }}>
                    <Stars rating={p.rating} size={11}/>
                    <span style={{ fontSize:11, fontWeight:600, color:"#374151" }}>{p.reviews}</span>
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding:"18px 18px 16px", flex:1, display:"flex", flexDirection:"column" }}>
                  <div style={{ fontSize:10.5, fontWeight:800, letterSpacing:2, textTransform:"uppercase", color:"#c9aa71", fontFamily:"'Cormorant Garamond',serif", marginBottom:4 }}>{p.brand}</div>
                  <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:19, fontWeight:700, color:"#0f0f0f", lineHeight:1.2, marginBottom:12 }}>{p.model}</div>
                  <ul style={{ listStyle:"none", marginBottom:16, flex:1 }}>
                    {p.specs.map((s,i) => (
                      <li key={i} style={{
                        fontSize:12, color:"#6b7280", padding:"4px 0",
                        borderBottom:"1px solid #f9f7f4", display:"flex", alignItems:"center", gap:8
                      }}>
                        <span style={{ width:4, height:4, background:"#c9aa71", borderRadius:"50%", flexShrink:0 }}/>
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
                    <button onClick={() => setModal(p)} style={{
                      background:"#f9f7f4", color:"#374151", padding:"10px",
                      borderRadius:10, fontSize:13, fontWeight:600, border:"1px solid #f0ece4",
                      cursor:"pointer", transition:"all .2s", fontFamily:"'Plus Jakarta Sans',sans-serif"
                    }}>Détails</button>
                    <a href={waLink(`Bonjour KARLOGITEK 👋, je souhaite commander le ${p.brand} ${p.model}. Quelles sont les disponibilités ?`)}
                      target="_blank" rel="noopener noreferrer"
                      style={{
                        background:"#0f0f0f", color:"#fff", padding:"10px",
                        borderRadius:10, fontSize:13, fontWeight:600, textDecoration:"none",
                        display:"flex", alignItems:"center", justifyContent:"center", gap:4,
                        transition:"all .2s"
                      }}>📲 Commander</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding:"96px 5%", background:"#f5f0e8" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:56 }}>
            <div style={{
              display:"inline-flex", alignItems:"center", gap:8, marginBottom:14,
              background:"rgba(201,170,113,0.12)", border:"1px solid rgba(201,170,113,0.25)",
              borderRadius:50, padding:"5px 14px", fontSize:11, fontWeight:800,
              letterSpacing:2, textTransform:"uppercase", color:"#c9aa71", fontFamily:"'Cormorant Garamond',serif"
            }}>🛠️ Services</div>
            <h2 style={{
              fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(32px,4vw,52px)",
              fontWeight:700, color:"#0f0f0f", letterSpacing:-1, lineHeight:1.1, marginBottom:12
            }}>Ce que nous <em style={{ fontStyle:"italic", color:"#c9aa71" }}>proposons</em></h2>
            <p style={{ fontSize:15, color:"#6b7280", lineHeight:1.7, maxWidth:460, margin:"0 auto" }}>
              Des services complets pour votre tranquillité numérique, disponibles 7j/7.
            </p>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))", gap:18 }}>
            {SERVICES.map((s,i) => (
              <div key={i}
                onMouseEnter={() => setHoveredCard(`s${i}`)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background:"#fff", borderRadius:22, padding:28,
                  border:"1px solid rgba(201,170,113,0.15)",
                  transition:"all .3s", cursor:"default",
                  transform: hoveredCard===`s${i}` ? "translateY(-4px)" : "none",
                  boxShadow: hoveredCard===`s${i}` ? "0 20px 48px rgba(0,0,0,0.08)" : "0 2px 12px rgba(0,0,0,0.04)"
                }}>
                <div style={{
                  width:52, height:52, borderRadius:14, background:`${s.accent}14`,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  fontSize:24, marginBottom:16, border:`1px solid ${s.accent}22`
                }}>{s.icon}</div>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:20, fontWeight:700, color:"#0f0f0f", marginBottom:4 }}>{s.title}</div>
                <div style={{ fontSize:11, fontWeight:800, letterSpacing:1.5, textTransform:"uppercase", color:s.accent, marginBottom:12 }}>{s.subtitle}</div>
                <p style={{ fontSize:13.5, color:"#6b7280", lineHeight:1.75, marginBottom:16 }}>{s.desc}</p>
                <div style={{ display:"flex", flexWrap:"wrap", gap:7 }}>
                  {s.features.map((f,j) => (
                    <span key={j} style={{
                      display:"inline-flex", alignItems:"center", gap:5,
                      background:"#f9f7f4", border:"1px solid #f0ece4",
                      padding:"4px 11px", borderRadius:50, fontSize:11.5, color:"#6b7280", fontWeight:500
                    }}>
                      <span style={{ color:"#10b981", fontSize:9 }}>✓</span> {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PACK ── */}
      <section id="pack" style={{ padding:"96px 5%", background:"#0f0f0f", position:"relative", overflow:"hidden" }}>
        {/* Decorative */}
        <div style={{
          position:"absolute", top:-80, right:-80, width:500, height:500,
          background:"radial-gradient(circle,rgba(201,170,113,0.12),transparent 70%)",
          borderRadius:"50%", pointerEvents:"none"
        }}/>
        <div style={{
          position:"absolute", bottom:-60, left:-60, width:350, height:350,
          background:"radial-gradient(circle,rgba(201,170,113,0.08),transparent 70%)",
          borderRadius:"50%", pointerEvents:"none"
        }}/>

        <div style={{ maxWidth:700, margin:"0 auto", textAlign:"center", position:"relative", zIndex:1 }}>
          <div style={{
            display:"inline-flex", alignItems:"center", gap:8, marginBottom:14,
            background:"rgba(201,170,113,0.12)", border:"1px solid rgba(201,170,113,0.25)",
            borderRadius:50, padding:"5px 14px", fontSize:11, fontWeight:800,
            letterSpacing:2, textTransform:"uppercase", color:"#c9aa71", fontFamily:"'Cormorant Garamond',serif"
          }}>⭐ Abonnement</div>
          <h2 style={{
            fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(32px,4vw,52px)",
            fontWeight:700, color:"#fff", letterSpacing:-1, lineHeight:1.1, marginBottom:12
          }}>Pack <em style={{ fontStyle:"italic", color:"#c9aa71" }}>Accessibilité</em></h2>
          <p style={{ fontSize:15, color:"#9ca3af", lineHeight:1.7, marginBottom:44, maxWidth:420, margin:"0 auto 44px" }}>
            Un an d'accompagnement et d'assistance technique pour votre sérénité numérique.
          </p>

          <div style={{
            background:"rgba(255,255,255,0.04)", border:"1px solid rgba(201,170,113,0.25)",
            borderRadius:28, padding:"44px", backdropFilter:"blur(10px)"
          }}>
            {/* Best offer badge */}
            <div style={{
              display:"inline-flex", alignItems:"center", gap:8, marginBottom:20,
              background:"linear-gradient(135deg,rgba(201,170,113,0.2),rgba(232,201,122,0.15))",
              border:"1px solid rgba(201,170,113,0.3)", borderRadius:50, padding:"7px 18px"
            }}>
              <span>🏆</span>
              <span style={{ fontSize:12, fontWeight:700, color:"#c9aa71", letterSpacing:1, fontFamily:"'Cormorant Garamond',serif" }}>MEILLEURE OFFRE ANNUELLE</span>
            </div>

            {/* Price */}
            <div style={{ marginBottom:8 }}>
              <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:72, fontWeight:700, color:"#fff", lineHeight:1 }}>2 500</span>
              <span style={{ fontSize:22, color:"#c9aa71", fontWeight:600, marginLeft:8 }}>FCFA</span>
            </div>
            <div style={{ fontSize:14, color:"#6b7280", marginBottom:36 }}>par an — soit moins de 210 FCFA/mois</div>

            {/* Features */}
            <div className="pack-feats" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, textAlign:"left", marginBottom:36 }}>
              {PACK_FEATURES.map((f,i) => (
                <div key={i} style={{ display:"flex", alignItems:"center", gap:12 }}>
                  <div style={{
                    width:32, height:32, background:"rgba(201,170,113,0.12)",
                    borderRadius:9, display:"flex", alignItems:"center", justifyContent:"center",
                    fontSize:15, flexShrink:0, border:"1px solid rgba(201,170,113,0.2)"
                  }}>{f.icon}</div>
                  <span style={{ fontSize:13.5, color:"#d1d5db", lineHeight:1.5 }}>{f.text}</span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div style={{ height:1, background:"rgba(201,170,113,0.15)", marginBottom:32 }}/>

            <a href={waLink("Bonjour KARLOGITEK 👋, je souhaite souscrire au Pack Accessibilité à 2500 FCFA/an. Comment procéder ?")}
              target="_blank" rel="noopener noreferrer"
              style={{
                display:"inline-flex", alignItems:"center", gap:9,
                background:"linear-gradient(135deg,#c9aa71,#e8c97a)",
                color:"#0f0f0f", padding:"16px 40px", borderRadius:50,
                fontSize:15.5, fontWeight:800, textDecoration:"none",
                boxShadow:"0 8px 32px rgba(201,170,113,0.4)",
                fontFamily:"'Plus Jakarta Sans',sans-serif", letterSpacing:.3
              }}>📲 S'abonner maintenant</a>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS CAROUSEL ── */}
      <section style={{ padding:"96px 5%", background:"#faf9f7", overflow:"hidden" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:48 }}>
            <div style={{
              display:"inline-flex", alignItems:"center", gap:8, marginBottom:14,
              background:"rgba(201,170,113,0.1)", border:"1px solid rgba(201,170,113,0.2)",
              borderRadius:50, padding:"5px 14px", fontSize:11, fontWeight:800,
              letterSpacing:2, textTransform:"uppercase", color:"#c9aa71", fontFamily:"'Cormorant Garamond',serif"
            }}>💬 Avis clients</div>
            <h2 style={{
              fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(32px,4vw,52px)",
              fontWeight:700, color:"#0f0f0f", letterSpacing:-1, lineHeight:1.1, marginBottom:10
            }}>Ils nous font <em style={{ fontStyle:"italic", color:"#c9aa71" }}>confiance</em></h2>
            <p style={{ fontSize:15, color:"#9ca3af" }}>Des centaines de clients satisfaits à travers tout le Cameroun.</p>
          </div>

          <Carousel items={TESTIMONIALS} itemWidth={320} gap={20} renderItem={(t,i) => (
            <div
              onMouseEnter={() => setHoveredCard(`t${i}`)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background:"#fff", borderRadius:22, padding:28, height:"100%",
                border:`1px solid ${hoveredCard===`t${i}` ? "rgba(201,170,113,0.4)" : "#f0ece4"}`,
                transition:"all .3s",
                transform: hoveredCard===`t${i}` ? "translateY(-3px)" : "none",
                boxShadow: hoveredCard===`t${i}` ? "0 16px 40px rgba(201,170,113,0.12)" : "0 2px 12px rgba(0,0,0,0.04)"
              }}>
              {/* Stars */}
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:14 }}>
                <Stars rating={t.stars} size={16}/>
                <span style={{
                  background:"rgba(201,170,113,0.1)", border:"1px solid rgba(201,170,113,0.2)",
                  color:"#c9aa71", padding:"3px 10px", borderRadius:50, fontSize:10.5, fontWeight:700,
                  fontFamily:"'Cormorant Garamond',serif", letterSpacing:.5
                }}>{t.tag}</span>
              </div>
              <p style={{
                fontFamily:"'Cormorant Garamond',serif", fontSize:16.5, lineHeight:1.75,
                color:"#374151", marginBottom:20, fontStyle:"italic"
              }}>"{t.text}"</p>
              <div style={{ display:"flex", alignItems:"center", gap:11 }}>
                <div style={{
                  width:38, height:38, borderRadius:"50%",
                  background:"linear-gradient(135deg,#0f0f0f,#333)",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  fontFamily:"'Cormorant Garamond',serif", fontWeight:700, fontSize:15, color:"#c9aa71"
                }}>{t.name[0]}</div>
                <div>
                  <div style={{ fontWeight:700, fontSize:14, color:"#0f0f0f" }}>{t.name}</div>
                  <div style={{ fontSize:11.5, color:"#9ca3af" }}>📍 {t.city}</div>
                </div>
              </div>
            </div>
          )}/>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding:"96px 5%", background:"#f5f0e8" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div className="qr-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:72, alignItems:"center" }}>
            <div>
              <div style={{
                display:"inline-flex", alignItems:"center", gap:8, marginBottom:14,
                background:"rgba(201,170,113,0.12)", border:"1px solid rgba(201,170,113,0.25)",
                borderRadius:50, padding:"5px 14px", fontSize:11, fontWeight:800,
                letterSpacing:2, textTransform:"uppercase", color:"#c9aa71", fontFamily:"'Cormorant Garamond',serif"
              }}>📞 Contact</div>
              <h2 style={{
                fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(32px,4vw,52px)",
                fontWeight:700, color:"#0f0f0f", letterSpacing:-1, lineHeight:1.1, marginBottom:12
              }}>Parlons de votre <em style={{ fontStyle:"italic", color:"#c9aa71" }}>projet</em></h2>
              <p style={{ fontSize:15, color:"#6b7280", lineHeight:1.75, marginBottom:32, maxWidth:400 }}>
                Disponibles 7j/7 de 8h à 22h. Une question, une commande ou un dépannage — on répond vite.
              </p>
              <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                {[
                  { icon:"💬", label:"WhatsApp (principal)", val:"+237 679 680 586", bg:"rgba(16,185,129,0.08)" },
                  { icon:"📍", label:"Localisation", val:"Douala, Cameroun", bg:"rgba(99,102,241,0.08)" },
                  { icon:"🕐", label:"Disponibilité", val:"7j/7 • 8h00 – 22h00", bg:"rgba(201,170,113,0.08)" },
                ].map((c,i) => (
                  <div key={i} style={{
                    display:"flex", alignItems:"center", gap:14, background:"#fff",
                    border:"1px solid #f0ece4", borderRadius:14, padding:"16px 18px",
                    boxShadow:"0 2px 10px rgba(0,0,0,0.04)"
                  }}>
                    <div style={{
                      width:42, height:42, background:c.bg, borderRadius:11,
                      display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, flexShrink:0
                    }}>{c.icon}</div>
                    <div>
                      <div style={{ fontSize:11.5, color:"#9ca3af", marginBottom:3, fontWeight:500 }}>{c.label}</div>
                      <div style={{ fontSize:14.5, color:"#0f0f0f", fontWeight:700 }}>{c.val}</div>
                    </div>
                  </div>
                ))}
                <a href={waLink("Bonjour KARLOGITEK 👋, je souhaite vous contacter.")} target="_blank" rel="noopener noreferrer"
                  className="btn-wa-main" style={{ alignSelf:"flex-start", marginTop:6 }}>
                  📲 Nous écrire sur WhatsApp
                </a>
              </div>
            </div>

            {/* QR Box */}
            <div style={{ display:"flex", justifyContent:"center" }}>
              <div style={{
                background:"#fff", border:"1px solid rgba(201,170,113,0.2)", borderRadius:24,
                padding:36, display:"flex", flexDirection:"column", alignItems:"center", gap:16,
                textAlign:"center", boxShadow:"0 20px 60px rgba(0,0,0,0.08)", maxWidth:300, width:"100%"
              }}>
                {/* Gold top bar */}
                <div style={{ width:48, height:3, background:"linear-gradient(90deg,#c9aa71,#e8c97a)", borderRadius:2 }}/>
                <div style={{
                  background:"#f9f7f4", borderRadius:16, padding:16,
                  border:"1px solid rgba(201,170,113,0.15)"
                }}>
                  <img src={QR} alt="QR WhatsApp" style={{ width:160, height:160, borderRadius:8, display:"block" }}/>
                </div>
                <div>
                  <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:16, fontWeight:700, color:"#0f0f0f", marginBottom:6 }}>
                    Scannez pour nous contacter
                  </div>
                  <div style={{ fontSize:12.5, color:"#9ca3af", lineHeight:1.6 }}>Dirigé directement vers notre WhatsApp professionnel</div>
                </div>
                <a href={WA_BASE} target="_blank" rel="noopener noreferrer" className="btn-wa-main" style={{ fontSize:13.5, padding:"11px 24px", width:"100%", justifyContent:"center" }}>
                  Ouvrir WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background:"#0f0f0f", padding:"64px 5% 28px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div className="footer-grid" style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", gap:48, marginBottom:48 }}>
            <div>
              <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:22, fontWeight:700, color:"#fff", marginBottom:8 }}>
                KARLO<em style={{ fontStyle:"normal", color:"#c9aa71" }}>GITEK</em>
              </div>
              <p style={{ fontSize:13.5, color:"#6b7280", lineHeight:1.75, marginBottom:20, maxWidth:220 }}>
                Votre concierge digital de confiance à Douala. Smartphones authentiques, assistance 7j/7.
              </p>
              <a href={waLink("Bonjour KARLOGITEK 👋")} target="_blank" rel="noopener noreferrer"
                style={{
                  display:"inline-flex", alignItems:"center", gap:7,
                  background:"rgba(201,170,113,0.15)", border:"1px solid rgba(201,170,113,0.25)",
                  color:"#c9aa71", padding:"9px 18px", borderRadius:50, fontSize:13, fontWeight:600,
                  textDecoration:"none"
                }}>💬 +237 679 680 586</a>
            </div>
            {[
              ["Navigation", NAV.map(([id,l]) => [l, () => go(id)])],
              ["Services", SERVICES.map(s => [s.title, null])],
              ["Marques", [["Apple"],["Samsung"],["Xiaomi"],["Tecno"],["Infinix"],["Sur commande"]].map(([b]) => [b, null])],
            ].map(([title, links]) => (
              <div key={title}>
                <div style={{ fontSize:11, fontWeight:800, letterSpacing:2, textTransform:"uppercase", color:"#fff", marginBottom:18, fontFamily:"'Cormorant Garamond',serif" }}>{title}</div>
                <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:9 }}>
                  {links.map(([l, fn]) => (
                    <li key={l}>
                      <a onClick={fn || undefined} style={{
                        fontSize:13, color:"#6b7280", cursor:"pointer", textDecoration:"none", transition:"color .2s"
                      }}>{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ height:1, background:"rgba(255,255,255,0.07)", marginBottom:24 }}/>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:10 }}>
            <span style={{ fontSize:12.5, color:"#4b5563" }}>© {new Date().getFullYear()} KARLOGITEK. Tous droits réservés.</span>
            <span style={{ fontSize:12.5, color:"#4b5563" }}>Fait avec <span style={{ color:"#e11d48" }}>♥</span> à Douala, Cameroun</span>
          </div>
        </div>
      </footer>

      {modal && <Modal phone={modal} onClose={() => setModal(null)} />}
    </>
  );
}