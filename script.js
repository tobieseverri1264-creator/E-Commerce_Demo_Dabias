/* ===== PRODUCTS DATA ===== */
const products = [
  { id: 1, name: "Auriculares Bluetooth Pro", desc: "Cancelación de ruido y 30 hs de batería.", category: "electronica", price: 89999, originalPrice: 109999, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=max&w=600&q=70", badge: "Oferta", colors: ["#1d1d1f", "#e5e5ea", "#0071e3"], featured: true, stock: 12 },
  { id: 2, name: "Smartwatch Sport", desc: "GPS, ritmo cardíaco y resistencia al agua.", category: "electronica", price: 124999, originalPrice: null, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=max&w=600&q=70", badge: "Nuevo", colors: ["#1d1d1f", "#f5f5f7"], featured: true, stock: 8 },
  { id: 3, name: "Lámpara de pie minimal", desc: "Luz cálida regulable, ideal living.", category: "hogar", price: 67999, originalPrice: 79999, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=max&w=600&q=70", badge: "Oferta", colors: ["#f5f5f7", "#1d1d1f"], featured: true, stock: 5 },
  { id: 4, name: "Set de sábanas premium", desc: "Algodón 300 hilos, varios tamaños.", category: "hogar", price: 45999, originalPrice: null, image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=max&w=600&q=70", badge: null, colors: ["#f5f5f7", "#d4a574", "#8b7355"], featured: false, stock: 20 },
  { id: 5, name: "Zapatillas Urban Runner", desc: "Livianas, suela amortiguada.", category: "moda", price: 92999, originalPrice: 109999, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=max&w=600&q=70", badge: "Oferta", colors: ["#e11d48", "#1d1d1f", "#f5f5f7"], featured: true, stock: 15 },
  { id: 6, name: "Campera impermeable", desc: "Resistente al agua, unisex.", category: "moda", price: 118999, originalPrice: null, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=max&w=600&q=70", badge: "Nuevo", colors: ["#1d1d1f", "#334155", "#0ea5e9"], featured: true, stock: 7 },
  { id: 7, name: "Mancuernas 5 kg (par)", desc: "Agarre ergonómico, uso indoor.", category: "deportes", price: 34999, originalPrice: null, image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=max&w=600&q=70", badge: null, colors: ["#1d1d1f"], featured: false, stock: 25 },
  { id: 8, name: "Botella térmica 750 ml", desc: "Mantiene frío 24 hs / calor 12 hs.", category: "deportes", price: 18999, originalPrice: 22999, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=max&w=600&q=70", badge: "Oferta", colors: ["#0ea5e9", "#1d1d1f", "#f5f5f7"], featured: true, stock: 40 },
  { id: 9, name: "Kit skincare diario", desc: "Limpieza + hidratación + protector.", category: "belleza", price: 52999, originalPrice: null, image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=max&w=600&q=70", badge: "Nuevo", colors: ["#f5f5f7", "#fce7f3"], featured: true, stock: 18 },
  { id: 10, name: "Difusor de aromas", desc: "Ultrasónico, timer y LED suave.", category: "hogar", price: 27999, originalPrice: null, image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=max&w=600&q=70", badge: null, colors: ["#f5f5f7", "#1d1d1f"], featured: false, stock: 14 },
  { id: 11, name: "Parlante portátil IPX7", desc: "Sonido 360°, batería 16 hs.", category: "electronica", price: 75999, originalPrice: 89999, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=max&w=600&q=70", badge: "Oferta", colors: ["#1d1d1f", "#0071e3"], featured: false, stock: 9 },
  { id: 12, name: "Mochila urbana 20 L", desc: "Compartimento notebook y USB.", category: "moda", price: 41999, originalPrice: null, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=max&w=600&q=70", badge: null, colors: ["#1d1d1f", "#64748b"], featured: false, stock: 22 },
  { id: 13, name: "Cafetera espresso compacta", desc: "Espuma de leche y café en 1 minuto.", category: "hogar", price: 159999, originalPrice: 189999, image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=max&w=600&q=70", badge: "Oferta", colors: ["#1d1d1f", "#f5f5f7"], featured: true, stock: 6 },
  { id: 14, name: "Gorra classic snapback", desc: "Ajustable, bordado frontal.", category: "moda", price: 14999, originalPrice: null, image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=max&w=600&q=70", badge: null, colors: ["#1d1d1f", "#dc2626", "#2563eb"], featured: false, stock: 50 },
  { id: 15, name: "Colchoneta yoga antideslizante", desc: "6 mm, correa de transporte incluida.", category: "deportes", price: 24999, originalPrice: 29999, image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=max&w=600&q=70", badge: "Oferta", colors: ["#7c3aed", "#0f766e", "#1d1d1f"], featured: false, stock: 30 },
  { id: 16, name: "Serum vitamina C", desc: "Ilumina y unifica el tono de la piel.", category: "belleza", price: 31999, originalPrice: null, image: "https://images.unsplash.com/photo-1620916568394-0c0db1f8b0b5?auto=format&fit=max&w=600&q=70", badge: "Nuevo", colors: ["#fef3c7", "#f5f5f7"], featured: true, stock: 3 },
];

const FREE_SHIPPING_THRESHOLD = 150000;
const SHIPPING_COST = 8999;

function getCartSubtotal() {
  return cart.reduce((sum, i) => sum + i.price * i.qty, 0);
}
function getCouponDiscount(sub) {
  if (!appliedCoupon) return 0;
  if (appliedCoupon.type === "percent") return Math.round(sub * (appliedCoupon.value / 100));
  return 0;
}
function getShippingFee(sub) {
  if (appliedCoupon?.type === "shipping") return 0;
  if (sub >= FREE_SHIPPING_THRESHOLD) return 0;
  return SHIPPING_COST;
}

const CATEGORY_LABELS = {
  electronica: "Electrónica",
  hogar: "Hogar",
  moda: "Moda",
  deportes: "Deportes",
  belleza: "Belleza",
};


/* ===== REVIEWS + MODERACIÓN ===== */
const ADMIN_PIN = "vertice2026"; // cambiar en producción / backend real
const SEED_REVIEWS = {
  1: [
    { id: "r1", name: "María G.", rating: 5, title: "Excelente sonido", text: "Muy cómodos y la batería dura una banda. Llegaron rápido a SN.", date: "2026-08-12", status: "approved" },
    { id: "r2", name: "Lucas P.", rating: 4, title: "Buenos, un poco caros", text: "La cancelación de ruido es real. El estuche es un poco grande.", date: "2026-07-03", status: "approved" },
  ],
  2: [
    { id: "r3", name: "Ana R.", rating: 5, title: "Ideal para entrenar", text: "El GPS es preciso y la pantalla se lee al sol.", date: "2026-09-01", status: "approved" },
  ],
  5: [
    { id: "r4", name: "Diego M.", rating: 5, title: "Cómodas desde el día 1", text: "Las uso para correr en el parque. Muy livianas.", date: "2026-06-20", status: "approved" },
    { id: "r5", name: "Valentina S.", rating: 3, title: "Bien pero talle justo", text: "Buen producto, pedí medio número más.", date: "2026-05-11", status: "approved" },
  ],
  9: [
    { id: "r6", name: "Carolina T.", rating: 5, title: "Piel más uniforme", text: "Noté cambio en 2 semanas. Olor agradable.", date: "2026-08-28", status: "approved" },
  ],
  13: [
    { id: "r7", name: "Jorge A.", rating: 4, title: "Café de bar en casa", text: "Fácil de usar. Limpieza un poco engorrosa.", date: "2026-07-15", status: "approved" },
  ],
};

function normalizeReview(r) {
  return {
    id: r.id || "r-" + Math.random().toString(36).slice(2, 9),
    name: r.name || "Anónimo",
    rating: Math.min(5, Math.max(1, +r.rating || 5)),
    title: r.title || "",
    text: r.text || "",
    date: r.date || new Date().toISOString().slice(0, 10),
    status: ["approved", "pending", "rejected"].includes(r.status) ? r.status : "approved",
  };
}

function loadReviewsStore() {
  try {
    const raw = localStorage.getItem("vertice-reviews");
    if (raw) {
      const parsed = JSON.parse(raw);
      const out = {};
      Object.keys(parsed).forEach((pid) => {
        out[pid] = (parsed[pid] || []).map(normalizeReview);
      });
      return out;
    }
  } catch (_) {}
  const seed = JSON.parse(JSON.stringify(SEED_REVIEWS));
  Object.keys(seed).forEach((pid) => {
    seed[pid] = seed[pid].map(normalizeReview);
  });
  return seed;
}

let reviewsStore = loadReviewsStore();
let isReviewAdmin = false;
try {
  isReviewAdmin = sessionStorage.getItem("vertice-review-admin") === "1";
} catch (_) {}

function saveReviewsStore() {
  try {
    localStorage.setItem("vertice-reviews", JSON.stringify(reviewsStore));
  } catch (_) {}
  updateModBadge();
}

function getProductReviews(productId, { includePending = false } = {}) {
  const list = reviewsStore[productId] || [];
  return [...list]
    .filter((r) => r.status === "approved" || (includePending && isReviewAdmin))
    .sort((a, b) => (b.date || "").localeCompare(a.date || ""));
}

function getReviewStats(productId) {
  const list = (reviewsStore[productId] || []).filter((r) => r.status === "approved");
  if (!list.length) return { avg: 0, count: 0, breakdown: [0, 0, 0, 0, 0] };
  const breakdown = [0, 0, 0, 0, 0];
  let sum = 0;
  list.forEach((r) => {
    const n = Math.min(5, Math.max(1, +r.rating || 0));
    sum += n;
    breakdown[n - 1] += 1;
  });
  return { avg: sum / list.length, count: list.length, breakdown };
}

function starsHtmlForProduct(productId) {
  const st = getReviewStats(productId);
  if (!st.count) return `<span class="stars-meta muted">Sin reseñas</span>`;
  const full = Math.round(st.avg);
  let s = `<span class="stars" role="img" aria-label="${st.avg.toFixed(1)} de 5, ${st.count} reseñas">`;
  for (let i = 1; i <= 5; i++) s += `<span class="star ${i <= full ? "on" : ""}">★</span>`;
  s += `</span><span class="stars-meta">${st.avg.toFixed(1)} · ${st.count}</span>`;
  return s;
}

function addReview(productId, data) {
  const review = normalizeReview({
    id: "u-" + Date.now().toString(36),
    name: data.name.trim(),
    rating: +data.rating,
    title: (data.title || "").trim(),
    text: data.text.trim(),
    date: new Date().toISOString().slice(0, 10),
    status: "pending", // moderación: no se publica hasta aprobar
  });
  if (!reviewsStore[productId]) reviewsStore[productId] = [];
  reviewsStore[productId].unshift(review);
  saveReviewsStore();
  return review;
}

function setReviewStatus(productId, reviewId, status) {
  const list = reviewsStore[productId];
  if (!list) return false;
  const r = list.find((x) => x.id === reviewId);
  if (!r) return false;
  r.status = status;
  saveReviewsStore();
  return true;
}

function deleteReview(productId, reviewId) {
  const list = reviewsStore[productId];
  if (!list) return false;
  reviewsStore[productId] = list.filter((x) => x.id !== reviewId);
  saveReviewsStore();
  return true;
}

function getAllReviewsFlat() {
  const rows = [];
  Object.keys(reviewsStore).forEach((pid) => {
    const product = products.find((p) => String(p.id) === String(pid));
    (reviewsStore[pid] || []).forEach((r) => {
      rows.push({
        ...r,
        productId: +pid,
        productName: product?.name || `Producto #${pid}`,
      });
    });
  });
  const order = { pending: 0, approved: 1, rejected: 2 };
  return rows.sort((a, b) => (order[a.status] - order[b.status]) || (b.date || "").localeCompare(a.date || ""));
}

function countPendingReviews() {
  return getAllReviewsFlat().filter((r) => r.status === "pending").length;
}

function updateModBadge() {
  const badge = document.getElementById("modBadge");
  const n = countPendingReviews();
  if (!badge) return;
  badge.textContent = n > 0 ? String(n) : "";
  badge.hidden = n === 0;
  badge.classList.toggle("visible", n > 0);
}

function renderReviewsList(productId) {
  const list = getProductReviews(productId);
  const st = getReviewStats(productId);
  if (!list.length) {
    return `<div class="reviews-empty">Todavía no hay reseñas publicadas. ¡Sé el primero en opinar!</div>`;
  }
  const bars = [5, 4, 3, 2, 1]
    .map((n) => {
      const c = st.breakdown[n - 1];
      const pct = st.count ? Math.round((c / st.count) * 100) : 0;
      return `<div class="rating-bar"><span>${n}★</span><div class="bar"><i style="width:${pct}%"></i></div><span>${c}</span></div>`;
    })
    .join("");
  const items = list
    .map(
      (r) => `
    <article class="review-item">
      <div class="review-top">
        <span class="stars" aria-label="${r.rating} de 5">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</span>
        <time datetime="${r.date}">${r.date}</time>
      </div>
      ${r.title ? `<h5 class="review-title">${r.title}</h5>` : ""}
      <p class="review-text">${r.text}</p>
      <p class="review-author">${r.name}</p>
    </article>`
    )
    .join("");
  return `
    <div class="reviews-summary">
      <div class="reviews-avg">
        <strong>${st.avg.toFixed(1)}</strong>
        <div>${starsHtmlForProduct(productId).replace(/· \\d+/, "")}</div>
        <span>${st.count} reseña${st.count === 1 ? "" : "s"}</span>
      </div>
      <div class="reviews-bars">${bars}</div>
    </div>
    <div class="reviews-list">${items}</div>`;
}

function renderModerationPanel() {
  const listEl = document.getElementById("modList");
  const filter = document.getElementById("modFilter")?.value || "pending";
  if (!listEl) return;
  let rows = getAllReviewsFlat();
  if (filter !== "all") rows = rows.filter((r) => r.status === filter);
  if (!rows.length) {
    listEl.innerHTML = `<p class="mod-empty">No hay reseñas en este filtro.</p>`;
    return;
  }
  listEl.innerHTML = rows
    .map((r) => {
      const statusLabel = { pending: "Pendiente", approved: "Aprobada", rejected: "Rechazada" }[r.status] || r.status;
      return `
      <article class="mod-card status-${r.status}" data-pid="${r.productId}" data-rid="${r.id}">
        <div class="mod-card-top">
          <span class="mod-status">${statusLabel}</span>
          <time datetime="${r.date}">${r.date}</time>
        </div>
        <p class="mod-product">${r.productName}</p>
        <div class="mod-stars">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</div>
        ${r.title ? `<h5>${r.title}</h5>` : ""}
        <p class="mod-text">${r.text}</p>
        <p class="mod-author">— ${r.name}</p>
        <div class="mod-actions">
          ${r.status !== "approved" ? `<button type="button" class="btn btn-primary btn-small" data-mod="approve">Aprobar</button>` : ""}
          ${r.status !== "rejected" ? `<button type="button" class="btn btn-ghost btn-small" data-mod="reject">Rechazar</button>` : ""}
          <button type="button" class="btn btn-ghost btn-small mod-danger" data-mod="delete">Eliminar</button>
        </div>
      </article>`;
    })
    .join("");

  listEl.querySelectorAll(".mod-card").forEach((card) => {
    const pid = +card.dataset.pid;
    const rid = card.dataset.rid;
    card.querySelectorAll("[data-mod]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const action = btn.dataset.mod;
        if (action === "approve") {
          setReviewStatus(pid, rid, "approved");
          showToast("Reseña aprobada", "success");
        } else if (action === "reject") {
          setReviewStatus(pid, rid, "rejected");
          showToast("Reseña rechazada");
        } else if (action === "delete") {
          if (!confirm("¿Eliminar esta reseña de forma permanente?")) return;
          deleteReview(pid, rid);
          showToast("Reseña eliminada");
        }
        renderModerationPanel();
        renderProducts();
      });
    });
  });
}

function openModeration() {
  const modal = document.getElementById("modModal");
  if (!modal) return;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  overlay.classList.add("visible");
  overlay.hidden = false;
  lockBody(true);
  renderModerationPanel();
  openOverlayUI(modal, "#closeMod");
}

function closeModeration() {
  const modal = document.getElementById("modModal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  if (!cartDrawer.classList.contains("open") && !wishDrawer.classList.contains("open") && !searchModal.classList.contains("open") && !qvModal.classList.contains("open") && !checkoutModal.classList.contains("open")) {
    overlay.classList.remove("visible");
    overlay.hidden = true;
    lockBody(false);
  }
  closeOverlayUI(modal);
}

function tryAdminLogin(pin) {
  if (pin === ADMIN_PIN) {
    isReviewAdmin = true;
    try { sessionStorage.setItem("vertice-review-admin", "1"); } catch (_) {}
    document.getElementById("modLogin")?.setAttribute("hidden", "");
    document.getElementById("modPanel")?.removeAttribute("hidden");
    document.getElementById("modAdminBtn")?.removeAttribute("hidden");
    renderModerationPanel();
    updateModBadge();
    showToast("Modo moderación activo", "success");
    return true;
  }
  showToast("PIN incorrecto", "error");
  return false;
}

function logoutAdmin() {
  isReviewAdmin = false;
  try { sessionStorage.removeItem("vertice-review-admin"); } catch (_) {}
  document.getElementById("modLogin")?.removeAttribute("hidden");
  document.getElementById("modPanel")?.setAttribute("hidden", "");
  document.getElementById("modAdminBtn")?.setAttribute("hidden", "");
  closeModeration();
  showToast("Sesión de moderación cerrada");
}

/* ===== STATE ===== */
let cart = JSON.parse(localStorage.getItem("vertice-cart") || "[]");
let wishlist = JSON.parse(localStorage.getItem("vertice-wish") || "[]");
let currentFilter = "all";
let appliedCoupon = null; // { code, type, value }
const COUPONS = {
  VERTICE10: { type: "percent", value: 10, label: "10% OFF" },
  ENVIOGRATIS: { type: "shipping", value: 0, label: "Envío gratis" },
  SN15: { type: "percent", value: 15, label: "15% OFF San Nicolás" },
};
let currentSort = "featured";

/* ===== DOM ===== */
const productGrid = document.getElementById("productGrid");
const noResults = document.getElementById("noResults");
const cartBtn = document.getElementById("cartBtn");
const cartDrawer = document.getElementById("cartDrawer");
const closeCart = document.getElementById("closeCart");
const continueShopping = document.getElementById("continueShopping");
const overlay = document.getElementById("overlay");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const cartShipping = document.getElementById("cartShipping");
const checkoutBtn = document.getElementById("checkoutBtn");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const searchBtn = document.getElementById("searchBtn");
const searchModal = document.getElementById("searchModal");
const closeSearch = document.getElementById("closeSearch");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const newsletterForm = document.getElementById("newsletterForm");
const wishlistBtn = document.getElementById("wishlistBtn");
const wishDrawer = document.getElementById("wishDrawer");
const closeWish = document.getElementById("closeWish");
const wishItems = document.getElementById("wishItems");
const wishCount = document.getElementById("wishCount");
const sortSelect = document.getElementById("sortSelect");
const toastWrap = document.getElementById("toastWrap");
const qvModal = document.getElementById("qvModal");
const qvBody = document.getElementById("qvBody");
const qvClose = document.getElementById("qvClose");
const checkoutModal = document.getElementById("checkoutModal");
const closeCheckoutBtn = document.getElementById("closeCheckout");
const checkoutNext = document.getElementById("checkoutNext");
const checkoutBack = document.getElementById("checkoutBack");
const checkoutTotalEl = document.getElementById("checkoutTotal");
const checkoutForm = document.getElementById("checkoutForm");
const checkoutFooter = document.getElementById("checkoutFooter");
const checkoutSuccess = document.getElementById("checkoutSuccess");
const orderSummary = document.getElementById("orderSummary");
const cardFields = document.getElementById("cardFields");
const transferInfo = document.getElementById("transferInfo");
const successMsg = document.getElementById("successMsg");
const successOrder = document.getElementById("successOrder");
const successClose = document.getElementById("successClose");

let checkoutStep = 1;
let lastOrder = null;

/* ===== UTILS ===== */
function formatPrice(num) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0
  }).format(num);
}

function formatCuota(price) {
  return formatPrice(Math.round(price / 12));
}

function showToast(message, type = "") {
  const el = document.createElement("div");
  el.className = `toast ${type}`;
  el.textContent = message;
  toastWrap.appendChild(el);
  requestAnimationFrame(() => el.classList.add("show"));
  setTimeout(() => {
    el.classList.remove("show");
    setTimeout(() => el.remove(), 350);
  }, 2600);
}

function lockBody(lock) {
  document.body.style.overflow = lock ? "hidden" : "";
}

/* ===== A11Y: focus trap + inert ===== */
let lastFocusEl = null;
const FOCUSABLE = 'a[href], button:not([disabled]), textarea, input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

function getFocusable(container) {
  return [...container.querySelectorAll(FOCUSABLE)].filter(
    (el) => el.offsetParent !== null || el === document.activeElement
  );
}

function trapFocus(e, container) {
  if (e.key !== "Tab") return;
  const list = getFocusable(container);
  if (!list.length) return;
  const first = list[0];
  const last = list[list.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

function setBackgroundInert(active) {
  const overlay = document.getElementById("overlay");
  [...document.body.children].forEach((el) => {
    if (el === overlay) return;
    if (el.classList?.contains("cart-drawer")) return;
    if (el.classList?.contains("search-modal")) return;
    if (el.classList?.contains("qv-modal")) return;
    if (el.classList?.contains("checkout-modal")) return;
    if (el.classList?.contains("toast-wrap")) return;
    if (el.classList?.contains("wa-float")) return;
    if (active) el.setAttribute("inert", "");
    else el.removeAttribute("inert");
  });
}

function openOverlayUI(panel, focusSelector) {
  lastFocusEl = document.activeElement;
  setBackgroundInert(true);
  const focusEl = focusSelector ? panel.querySelector(focusSelector) : getFocusable(panel)[0];
  requestAnimationFrame(() => focusEl?.focus());
  panel._trapHandler = (e) => trapFocus(e, panel);
  document.addEventListener("keydown", panel._trapHandler);
}

function closeOverlayUI(panel) {
  if (panel?._trapHandler) {
    document.removeEventListener("keydown", panel._trapHandler);
    panel._trapHandler = null;
  }
  const anyOpen =
    cartDrawer.classList.contains("open") ||
    wishDrawer.classList.contains("open") ||
    searchModal.classList.contains("open") ||
    qvModal.classList.contains("open") ||
    checkoutModal.classList.contains("open");
  if (!anyOpen) {
    setBackgroundInert(false);
    lastFocusEl?.focus?.();
    lastFocusEl = null;
  }
}

function setFieldError(id, message) {
  const el = document.getElementById(id);
  if (!el) return false;
  el.classList.add("error");
  el.setAttribute("aria-invalid", "true");
  let err = document.getElementById(id + "-err");
  if (!err) {
    err = document.createElement("span");
    err.id = id + "-err";
    err.className = "field-error";
    err.setAttribute("role", "alert");
    el.insertAdjacentElement("afterend", err);
    el.setAttribute("aria-describedby", id + "-err");
  }
  err.textContent = message;
  return false;
}

function clearFieldError(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove("error");
  el.removeAttribute("aria-invalid");
  const err = document.getElementById(id + "-err");
  if (err) err.textContent = "";
}


/* ===== FILTER / SORT ===== */
function getFilteredProducts() {
  let list = [...products];
  if (currentFilter !== "all") {
    list = list.filter((p) => p.category === currentFilter);
  }
  switch (currentSort) {
    case "price-asc":
      list.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      list.sort((a, b) => b.price - a.price);
      break;
    case "name":
      list.sort((a, b) => a.name.localeCompare(b.name, "es"));
      break;
    case "rating":
      list.sort((a, b) => getReviewStats(b.id).avg - getReviewStats(a.id).avg || getReviewStats(b.id).count - getReviewStats(a.id).count);
      break;
    default:
      list.sort((a, b) => (b.featured === a.featured ? 0 : b.featured ? 1 : -1));
  }
  return list;
}

function setFilter(filter) {
  currentFilter = filter;
  document.querySelectorAll(".chip").forEach((c) => {
    const on = c.dataset.filter === filter;
    c.classList.toggle("active", on);
    c.setAttribute("aria-pressed", on ? "true" : "false");
  });
  renderProducts();
  const section = document.getElementById("productos");
  if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ===== RENDER PRODUCTS ===== */
function renderProducts() {
  const list = getFilteredProducts();
  noResults.hidden = list.length > 0;
  const rc = document.getElementById("resultsCount");
  if (rc) {
    const label = currentFilter === "all" ? "productos" : (CATEGORY_LABELS[currentFilter] || "").toLowerCase();
    rc.textContent = list.length ? `${list.length} ${label}` : "";
  }

  productGrid.innerHTML = list
    .map((p, index) => {
      const wished = wishlist.includes(p.id);
      return `
    <article class="product-card reveal reveal-delay-${Math.min(index + 1, 6)}" data-id="${p.id}">
      <div class="product-image">
        ${p.badge ? `<span class="product-badge ${p.badge.includes("OFF") || p.badge === "Oferta" ? "off" : ""}">${p.badge}</span>` : ""}
        <button type="button" class="wish-toggle ${wished ? "active" : ""}" aria-label="${wished ? "Quitar de favoritos" : "Agregar a favoritos"}" data-wish="${p.id}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${wished ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
        <img src="${p.image}" alt="${p.name}" loading="lazy" decoding="async" width="600" height="600">
      </div>
      <div class="product-info">
        <span class="product-cat">${CATEGORY_LABELS[p.category] || p.category}</span>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-rating">${starsHtmlForProduct(p.id)}</div>
        <p class="product-desc">${p.desc}</p>
        <div class="product-swatches">
          ${p.colors.map((c, i) => `<button type="button" class="swatch ${i === 0 ? "active" : ""}" style="background:${c}" aria-label="Color ${c}" aria-pressed="${i === 0 ? "true" : "false"}"></button>`).join("")}
        </div>
        <div class="product-price">
          <span class="price-current">${formatPrice(p.price)}</span>
          ${p.originalPrice ? `<span class="price-original">${formatPrice(p.originalPrice)}</span>` : ""}
        </div>
        <p class="${(p.stock ?? 10) <= 5 ? "stock-low" : "stock-ok"}">${(p.stock ?? 10) <= 5 ? `Quedan ${p.stock} u.` : "En stock"}</p>
        <p class="product-cuotas">12 cuotas de <strong>${formatCuota(p.price)}</strong> sin interés</p>
        <div class="product-actions">
          <button type="button" class="btn btn-primary" data-add="${p.id}">Agregar</button>
          <button type="button" class="btn btn-secondary" data-qv="${p.id}">Ver más</button>
        </div>
      </div>
    </article>`;
    })
    .join("");

  // Bind events
  productGrid.querySelectorAll("[data-add]").forEach((btn) => {
    btn.addEventListener("click", () => addToCart(+btn.dataset.add));
  });
  productGrid.querySelectorAll("[data-qv]").forEach((btn) => {
    btn.addEventListener("click", () => openQuickView(+btn.dataset.qv));
  });
  productGrid.querySelectorAll("[data-wish]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleWish(+btn.dataset.wish);
    });
  });
  productGrid.querySelectorAll(".swatch").forEach((swatch) => {
    swatch.addEventListener("click", function () {
      this.parentElement.querySelectorAll(".swatch").forEach((s) => {
        s.classList.remove("active");
        s.setAttribute("aria-pressed", "false");
      });
      this.classList.add("active");
      this.setAttribute("aria-pressed", "true");
    });
  });

  observeReveals();
}

/* ===== CART ===== */
function saveCart() {
  localStorage.setItem("vertice-cart", JSON.stringify(cart));
  updateCartUI();
}

function addToCart(id) {
  const product = products.find((p) => p.id === id);
  if (!product) return;
  const existing = cart.find((item) => item.id === id);
  if (existing) existing.qty += 1;
  else cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, qty: 1 });
  saveCart();
  showToast(`${product.name} agregado al carrito`, "success");
  openCart();
}

function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  saveCart();
  showToast("Producto eliminado");
}

function updateQty(id, delta) {
  const item = cart.find((i) => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else saveCart();
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
  cartCount.textContent = totalItems;
  cartCount.classList.toggle("visible", totalItems > 0);

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="cart-empty">Tu carrito está vacío</p>';
    cartTotal.textContent = formatPrice(0);
    cartShipping.textContent = "";
    cartShipping.classList.remove("free");
    checkoutBtn.disabled = true;
    return;
  }

  cartItems.innerHTML = cart
    .map(
      (item) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" width="72" height="72">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <div class="price">${formatPrice(item.price)}</div>
        <div class="cart-item-qty">
          <button type="button" aria-label="Menos" data-qty="${item.id}" data-delta="-1">−</button>
          <span>${item.qty}</span>
          <button type="button" aria-label="Más" data-qty="${item.id}" data-delta="1">+</button>
        </div>
        <button type="button" class="cart-item-remove" data-remove="${item.id}">Eliminar</button>
      </div>
    </div>`
    )
    .join("");

  cartItems.querySelectorAll("[data-qty]").forEach((btn) => {
    btn.addEventListener("click", () => updateQty(+btn.dataset.qty, +btn.dataset.delta));
  });
  cartItems.querySelectorAll("[data-remove]").forEach((btn) => {
    btn.addEventListener("click", () => removeFromCart(+btn.dataset.remove));
  });

  const sub = getCartSubtotal();
  const discount = getCouponDiscount(sub);
  const ship = getShippingFee(sub);
  const grand = Math.max(0, sub - discount); // envío se informa aparte; total muestra productos - cupón
  cartTotal.textContent = formatPrice(grand);
  checkoutBtn.disabled = false;

  const lines = [];
  if (discount > 0) lines.push(`Cupón −${formatPrice(discount)}`);
  if (ship === 0) {
    lines.push("✓ Envío gratis");
    cartShipping.classList.add("free");
  } else {
    lines.push(`Envío est. ${formatPrice(ship)} · Te faltan ${formatPrice(FREE_SHIPPING_THRESHOLD - sub)} para gratis`);
    cartShipping.classList.remove("free");
  }
  cartShipping.textContent = lines.join(" · ");
}

function openCart() {
  closeWishDrawer();
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
  overlay.classList.add("visible");
  overlay.hidden = false;
  lockBody(true);
  openOverlayUI(cartDrawer, "#closeCart");
}

function closeCartDrawer() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  if (!wishDrawer.classList.contains("open") && !searchModal.classList.contains("open") && !qvModal.classList.contains("open") && !checkoutModal.classList.contains("open")) {
    overlay.classList.remove("visible");
    overlay.hidden = true;
    lockBody(false);
  }
  closeOverlayUI(cartDrawer);
}

/* ===== WISHLIST ===== */
function saveWish() {
  localStorage.setItem("vertice-wish", JSON.stringify(wishlist));
  updateWishUI();
}

function toggleWish(id) {
  const idx = wishlist.indexOf(id);
  if (idx >= 0) {
    wishlist.splice(idx, 1);
    showToast("Eliminado de favoritos");
  } else {
    wishlist.push(id);
    showToast("Agregado a favoritos", "success");
  }
  saveWish();
  // Update heart buttons without full re-render if possible
  document.querySelectorAll(`[data-wish="${id}"]`).forEach((btn) => {
    const active = wishlist.includes(id);
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-label", active ? "Quitar de favoritos" : "Agregar a favoritos");
    const svg = btn.querySelector("svg");
    if (svg) svg.setAttribute("fill", active ? "currentColor" : "none");
  });
  renderWishItems();
}

function updateWishUI() {
  wishCount.textContent = wishlist.length;
  wishCount.classList.toggle("visible", wishlist.length > 0);
  renderWishItems();
}

function renderWishItems() {
  if (wishlist.length === 0) {
    wishItems.innerHTML = '<p class="cart-empty">Todavía no agregaste favoritos</p>';
    return;
  }
  wishItems.innerHTML = wishlist
    .map((id) => {
      const p = products.find((x) => x.id === id);
      if (!p) return "";
      return `
      <div class="cart-item">
        <img src="${p.image}" alt="${p.name}" width="72" height="72">
        <div class="cart-item-info">
          <h4>${p.name}</h4>
          <div class="price">${formatPrice(p.price)}</div>
          <div class="cart-item-qty" style="margin-top:10px;gap:8px">
            <button type="button" class="btn btn-primary btn-small" data-wish-add="${p.id}">Agregar</button>
            <button type="button" class="cart-item-remove" data-wish-remove="${p.id}">Quitar</button>
          </div>
        </div>
      </div>`;
    })
    .join("");

  wishItems.querySelectorAll("[data-wish-add]").forEach((btn) => {
    btn.addEventListener("click", () => addToCart(+btn.dataset.wishAdd));
  });
  wishItems.querySelectorAll("[data-wish-remove]").forEach((btn) => {
    btn.addEventListener("click", () => toggleWish(+btn.dataset.wishRemove));
  });
}

function openWish() {
  closeCartDrawer();
  wishDrawer.classList.add("open");
  wishDrawer.setAttribute("aria-hidden", "false");
  overlay.classList.add("visible");
  overlay.hidden = false;
  lockBody(true);
  openOverlayUI(wishDrawer, "#closeWish");
}

function closeWishDrawer() {
  wishDrawer.classList.remove("open");
  wishDrawer.setAttribute("aria-hidden", "true");
  if (!cartDrawer.classList.contains("open") && !searchModal.classList.contains("open") && !qvModal.classList.contains("open") && !checkoutModal.classList.contains("open")) {
    overlay.classList.remove("visible");
    overlay.hidden = true;
    lockBody(false);
  }
  closeOverlayUI(wishDrawer);
}

/* ===== QUICK VIEW ===== */
function openQuickView(id) {
  const p = products.find((x) => x.id === id);
  if (!p) return;
  trackView(id);
  const st = getReviewStats(p.id);
  qvBody.innerHTML = `
    <div class="qv-img"><img src="${p.image}" alt="${p.name}"></div>
    <div class="qv-info">
      <span class="product-cat">${CATEGORY_LABELS[p.category]}</span>
      <h3 id="qvTitle">${p.name}</h3>
      <div class="product-rating qv-rating">${starsHtmlForProduct(p.id)}</div>
      <p class="qv-desc">${p.desc}</p>
      <div class="product-swatches" style="margin-bottom:16px">
        ${p.colors.map((c, i) => `<button type="button" class="swatch ${i === 0 ? "active" : ""}" style="background:${c}" aria-label="Color ${c}"></button>`).join("")}
      </div>
      <div class="price-current">${formatPrice(p.price)}</div>
      ${p.originalPrice ? `<div class="price-original">${formatPrice(p.originalPrice)}</div>` : ""}
      <p class="product-cuotas" style="margin-top:8px">12 cuotas de <strong>${formatCuota(p.price)}</strong></p>
      <div class="qv-actions">
        <button type="button" class="btn btn-primary btn-full" id="qvAdd">Agregar al carrito</button>
        <button type="button" class="btn btn-ghost btn-full" id="qvWish">${wishlist.includes(p.id) ? "Quitar de favoritos" : "Agregar a favoritos"}</button>
      </div>
      <section class="reviews-panel" aria-label="Reseñas">
        <h4 class="reviews-heading">Opiniones de clientes</h4>
        <div id="qvReviews">${renderReviewsList(p.id)}</div>
        <form class="review-form" id="reviewForm" novalidate>
          <h5>Escribí tu reseña</h5>
          <div class="form-group">
            <label for="rvRating">Calificación</label>
            <div class="rating-input" role="radiogroup" aria-label="Calificación">
              ${[5,4,3,2,1].map((n) => `<label class="rate-opt"><input type="radio" name="rvRating" value="${n}" ${n===5?"checked":""}><span>${"★".repeat(n)}</span></label>`).join("")}
            </div>
          </div>
          <div class="form-group">
            <label for="rvName">Nombre</label>
            <input type="text" id="rvName" required maxlength="40" placeholder="Tu nombre" autocomplete="nickname">
          </div>
          <div class="form-group">
            <label for="rvTitle">Título (opcional)</label>
            <input type="text" id="rvTitle" maxlength="80" placeholder="Resumen">
          </div>
          <div class="form-group">
            <label for="rvText">Comentario</label>
            <textarea id="rvText" required rows="3" maxlength="500" placeholder="¿Qué te pareció el producto?"></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-full">Publicar reseña</button>
        </form>
      </section>
    </div>`;
  qvBody.querySelector("#qvAdd").addEventListener("click", () => {
    addToCart(p.id);
    closeQuickView();
  });
  qvBody.querySelector("#qvWish").addEventListener("click", () => {
    toggleWish(p.id);
    closeQuickView();
  });
  qvBody.querySelectorAll(".swatch").forEach((swatch) => {
    swatch.addEventListener("click", function () {
      this.parentElement.querySelectorAll(".swatch").forEach((s) => s.classList.remove("active"));
      this.classList.add("active");
    });
  });
  const form = qvBody.querySelector("#reviewForm");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = qvBody.querySelector("#rvName").value.trim();
    const text = qvBody.querySelector("#rvText").value.trim();
    const title = qvBody.querySelector("#rvTitle").value.trim();
    const rating = +qvBody.querySelector('input[name="rvRating"]:checked')?.value || 5;
    if (name.length < 2) { showToast("Ingresá tu nombre", "error"); return; }
    if (text.length < 10) { showToast("El comentario debe tener al menos 10 caracteres", "error"); return; }
    addReview(p.id, { name, text, title, rating });
    qvBody.querySelector("#qvReviews").innerHTML = renderReviewsList(p.id);
    form.reset();
    const five = form.querySelector('input[name="rvRating"][value="5"]');
    if (five) five.checked = true;
    showToast("Reseña enviada. Se publicará cuando la moderemos.", "success");
    renderProducts();
  });
  qvModal.classList.add("open");
  qvModal.setAttribute("aria-hidden", "false");
  overlay.classList.add("visible");
  overlay.hidden = false;
  lockBody(true);
  openOverlayUI(qvModal, "#qvClose");
}

function closeQuickView() {
  qvModal.classList.remove("open");
  qvModal.setAttribute("aria-hidden", "true");
  if (!cartDrawer.classList.contains("open") && !wishDrawer.classList.contains("open") && !searchModal.classList.contains("open") && !checkoutModal.classList.contains("open")) {
    overlay.classList.remove("visible");
    overlay.hidden = true;
    lockBody(false);
  }
  closeOverlayUI(qvModal);
}

/* ===== SEARCH ===== */
function openSearch() {
  searchModal.classList.add("open");
  searchModal.setAttribute("aria-hidden", "false");
  overlay.classList.add("visible");
  overlay.hidden = false;
  lockBody(true);
  openOverlayUI(searchModal, "#searchInput");
}

function closeSearchModal() {
  searchModal.classList.remove("open");
  searchModal.setAttribute("aria-hidden", "true");
  searchInput.value = "";
  searchResults.innerHTML = "";
  if (!cartDrawer.classList.contains("open") && !wishDrawer.classList.contains("open") && !qvModal.classList.contains("open") && !checkoutModal.classList.contains("open")) {
    overlay.classList.remove("visible");
    overlay.hidden = true;
    lockBody(false);
  }
  closeOverlayUI(searchModal);
}

function handleSearch(query) {
  if (!query.trim()) {
    searchResults.innerHTML = "";
    return;
  }
  const q = query.toLowerCase();
  const results = products.filter(
    (p) => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || (CATEGORY_LABELS[p.category] || "").toLowerCase().includes(q)
  );
  if (results.length === 0) {
    searchResults.innerHTML = '<p style="padding:20px;color:#86868B;text-align:center">No se encontraron productos</p>';
    return;
  }
  searchResults.innerHTML = results
    .map(
      (p) => `
    <div class="search-result-item" data-search-add="${p.id}" role="button" tabindex="0">
      <img src="${p.image}" alt="${p.name}" width="48" height="48">
      <div>
        <strong style="font-size:15px">${p.name}</strong>
        <div style="font-size:13px;color:#6E6E73">${formatPrice(p.price)}</div>
      </div>
    </div>`
    )
    .join("");
  searchResults.querySelectorAll("[data-search-add]").forEach((el) => {
    el.addEventListener("click", () => {
      addToCart(+el.dataset.searchAdd);
      closeSearchModal();
    });
  });
}

/* ===== MOBILE MENU ===== */
function toggleMenu() {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
  menuToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  menuToggle.setAttribute("aria-controls", "navLinks");
  if (open) navLinks.querySelector("a")?.focus();
}

/* ===== SCROLL REVEAL ===== */
const REVEAL_SELECTOR = ".reveal, .reveal-left, .reveal-right, .reveal-scale";

function observeReveals() {
  const reveals = document.querySelectorAll(`${REVEAL_SELECTOR}:not(.visible)`);
  if (!reveals.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => entry.target.classList.add("visible"));
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  reveals.forEach((el) => observer.observe(el));
}

/* ===== PARALLAX ===== */
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const navbar = document.getElementById("navbar");
const heroBg = document.querySelector(".hero-bg");
const heroContent = document.querySelector(".hero-content");
const heroImageWrapper = document.querySelector(".hero-image-wrapper");
const featureImages = () => document.querySelectorAll(".feature-image img");
let ticking = false;

function updateParallax() {
  const scrollY = window.scrollY;
  const heroHeight = document.getElementById("hero")?.offsetHeight || window.innerHeight;

  if (navbar) {
    navbar.style.background = scrollY > 50 ? "rgba(245, 245, 247, 0.92)" : "rgba(245, 245, 247, 0.72)";
  }

  if (prefersReducedMotion) {
    ticking = false;
    return;
  }

  if (scrollY < heroHeight) {
    const progress = scrollY / heroHeight;
    if (heroBg) heroBg.style.transform = `translate3d(0, ${scrollY * 0.35}px, 0)`;
    if (heroContent) {
      heroContent.style.transform = `translate3d(0, ${scrollY * 0.22}px, 0)`;
      heroContent.style.opacity = String(Math.max(0, 1 - progress * 1.15));
    }
    if (heroImageWrapper) heroImageWrapper.style.transform = `translate3d(0, ${scrollY * 0.12}px, 0)`;
  }

  featureImages().forEach((img) => {
    const rect = img.getBoundingClientRect();
    const viewH = window.innerHeight;
    if (rect.top < viewH && rect.bottom > 0) {
      const centerOffset = (rect.top + rect.height / 2 - viewH / 2) / viewH;
      img.style.transform = `translate3d(0, ${centerOffset * -28}px, 0) scale(1.04)`;
    }
  });

  ticking = false;
}

let scrollEndTimer;
function onScroll() {
  document.documentElement.classList.add("is-scrolling");
  clearTimeout(scrollEndTimer);
  scrollEndTimer = setTimeout(() => document.documentElement.classList.remove("is-scrolling"), 150);
  if (!ticking) {
    requestAnimationFrame(updateParallax);
    ticking = true;
  }
}

/* ===== EVENTS ===== */
cartBtn.addEventListener("click", openCart);
closeCart.addEventListener("click", closeCartDrawer);
continueShopping.addEventListener("click", closeCartDrawer);
wishlistBtn.addEventListener("click", openWish);
closeWish.addEventListener("click", closeWishDrawer);
qvClose.addEventListener("click", closeQuickView);

overlay.addEventListener("click", () => {
  closeCartDrawer();
  closeWishDrawer();
  closeSearchModal();
  closeQuickView();
  closeCheckout();
  closeModeration();
  navLinks.classList.remove("open");
});

searchBtn.addEventListener("click", openSearch);
closeSearch.addEventListener("click", closeSearchModal);
searchInput.addEventListener("input", (e) => handleSearch(e.target.value));

menuToggle.addEventListener("click", toggleMenu);

navLinks.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    if (a.dataset.filter) setFilter(a.dataset.filter);
  });
});

document.querySelectorAll("[data-filter]").forEach((el) => {
  if (el.classList.contains("chip") || el.closest(".category-overlay") || el.closest(".footer-col")) {
    el.addEventListener("click", (e) => {
      if (el.dataset.filter) {
        e.preventDefault();
        setFilter(el.dataset.filter);
      }
    });
  }
});

document.querySelectorAll(".chip").forEach((chip) => {
  chip.setAttribute("aria-pressed", chip.classList.contains("active") ? "true" : "false");
  chip.addEventListener("click", () => setFilter(chip.dataset.filter));
});

sortSelect.addEventListener("change", () => {
  currentSort = sortSelect.value;
  renderProducts();
});

checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) return;
  closeCartDrawer();
  openCheckout();
});

/* ===== CHECKOUT / PAYMENT GATEWAY ===== */
function cartSubtotal() {
  return cart.reduce((sum, i) => sum + i.price * i.qty, 0);
}

function getSelectedPayment() {
  return checkoutForm.querySelector('input[name="payment"]:checked')?.value || "mercadopago";
}

function getCheckoutTotal() {
  const sub = cartSubtotal();
  const afterCoupon = sub - getCouponDiscount(sub);
  if (getSelectedPayment() === "transfer") return Math.round(afterCoupon * 0.9);
  return afterCoupon;
}

function updateCheckoutTotalDisplay() {
  const sub = cartSubtotal();
  const afterCoupon = sub - getCouponDiscount(sub);
  const pay = getSelectedPayment();
  const total = pay === "transfer" ? Math.round(afterCoupon * 0.9) : afterCoupon;
  checkoutTotalEl.textContent = formatPrice(total);
  const hints = [];
  if (getCouponDiscount(sub) > 0) hints.push(`Cupón −${formatPrice(getCouponDiscount(sub))}`);
  if (pay === "transfer") hints.push("10% OFF transferencia");
  checkoutTotalEl.title = hints.join(" · ");
}

function setCheckoutStep(step) {
  checkoutStep = step;
  document.querySelectorAll(".checkout-step-panel").forEach((panel) => {
    panel.hidden = panel.dataset.panel !== String(step);
  });
  document.querySelectorAll("#checkoutSteps .step").forEach((el) => {
    const n = +el.dataset.step;
    el.classList.toggle("active", n === step);
    el.classList.toggle("done", n < step);
  });
  checkoutBack.hidden = step === 1;
  if (step === 3) {
    checkoutNext.textContent = "Pagar ahora";
    renderOrderSummary();
  } else if (step === 2) {
    checkoutNext.textContent = "Continuar";
    togglePaymentFields();
  } else {
    checkoutNext.textContent = "Continuar";
  }
  updateCheckoutTotalDisplay();
}

function togglePaymentFields() {
  const pay = getSelectedPayment();
  cardFields.hidden = pay !== "card";
  transferInfo.hidden = pay !== "transfer";
  updateCheckoutTotalDisplay();
}

function getDeliveryMode() {
  return checkoutForm.querySelector('input[name="delivery"]:checked')?.value || "pickup";
}

function validateStep1() {
  const delivery = getDeliveryMode();
  const base = ["ckName", "ckEmail", "ckPhone"];
  const ship = ["ckAddress", "ckCity", "ckCp"];
  const fields = delivery === "ship" ? base.concat(ship) : base;
  let ok = true;
  ship.forEach((id) => {
    if (delivery === "pickup") clearFieldError(id);
  });
  const messages = {
    ckName: "Ingresá tu nombre completo",
    ckEmail: "Ingresá un email válido",
    ckPhone: "Ingresá un teléfono válido",
    ckAddress: "Ingresá la dirección",
    ckCity: "Ingresá la ciudad",
    ckCp: "Ingresá el código postal",
  };
  fields.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const val = el.value.trim();
    let valid = val.length > 0;
    if (id === "ckEmail") valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    if (id === "ckPhone") valid = val.replace(/\D/g, "").length >= 8;
    if (!valid) {
      setFieldError(id, messages[id] || "Campo requerido");
      ok = false;
    } else clearFieldError(id);
  });
  if (!ok) {
    showToast("Completá los datos correctamente", "error");
    const firstErr = fields.map((id) => document.getElementById(id)).find((el) => el?.classList.contains("error"));
    firstErr?.focus();
  }
  return ok;
}

function validateStep2() {
  const pay = getSelectedPayment();
  if (pay !== "card") return true;
  const num = document.getElementById("ckCardNumber").value.replace(/\s/g, "");
  const exp = document.getElementById("ckCardExp").value.trim();
  const cvv = document.getElementById("ckCardCvv").value.trim();
  const name = document.getElementById("ckCardName").value.trim();
  let ok = true;
  if (!/^\d{13,19}$/.test(num)) {
    document.getElementById("ckCardNumber").classList.add("error");
    ok = false;
  } else document.getElementById("ckCardNumber").classList.remove("error");
  if (!/^\d{2}\/\d{2}$/.test(exp)) {
    document.getElementById("ckCardExp").classList.add("error");
    ok = false;
  } else document.getElementById("ckCardExp").classList.remove("error");
  if (!/^\d{3,4}$/.test(cvv)) {
    document.getElementById("ckCardCvv").classList.add("error");
    ok = false;
  } else document.getElementById("ckCardCvv").classList.remove("error");
  if (name.length < 3) {
    document.getElementById("ckCardName").classList.add("error");
    ok = false;
  } else document.getElementById("ckCardName").classList.remove("error");
  // Demo: reject cards that are all zeros
  if (ok && /^0+$/.test(num)) {
    showToast("Tarjeta rechazada (demo)", "error");
    return false;
  }
  if (!ok) showToast("Revisá los datos de la tarjeta", "error");
  return ok;
}

function renderOrderSummary() {
  const pay = getSelectedPayment();
  const sub = cartSubtotal();
  const discount = pay === "transfer" ? Math.round(sub * 0.1) : 0;
  const total = sub - discount;
  const payLabels = {
    mercadopago: "Mercado Pago",
    card: "Tarjeta de crédito/débito",
    transfer: "Transferencia bancaria"
  };
  const name = document.getElementById("ckName").value.trim();
  const email = document.getElementById("ckEmail").value.trim();
  const phone = document.getElementById("ckPhone").value.trim();
  const address = document.getElementById("ckAddress").value.trim();
  const city = document.getElementById("ckCity").value.trim();
  const cp = document.getElementById("ckCp").value.trim();
  const delivery = getDeliveryMode();

  const itemsHtml = cart
    .map(
      (i) =>
        `<div class="order-line"><span>${i.qty}× ${i.name}</span><span>${formatPrice(i.price * i.qty)}</span></div>`
    )
    .join("");

  orderSummary.innerHTML = `
    <h4>Productos</h4>
    ${itemsHtml}
    <div class="order-line"><span>Subtotal</span><span>${formatPrice(sub)}</span></div>
    ${discount ? `<div class="order-line"><span>Descuento transferencia (10%)</span><span class="discount">−${formatPrice(discount)}</span></div>` : ""}
    <div class="order-line"><span>Subtotal</span><span>${formatPrice(sub)}</span></div>
    ${getCouponDiscount(sub) ? `<div class="order-line"><span>Cupón ${appliedCoupon?.code || ""}</span><span>−${formatPrice(getCouponDiscount(sub))}</span></div>` : ""}
    <div class="order-line"><span>Envío</span><span>${getShippingFee(sub) === 0 ? "Gratis" : formatPrice(getShippingFee(sub))}</span></div>
    <div class="order-line total"><span>Total</span><span>${formatPrice(total)}</span></div>
    <h4>Envío</h4>
    <div class="order-meta">${name}<br>${delivery === "pickup" ? "Retiro en local — San Nicolás de los Arroyos" : `${address}, ${city} (${cp})`}<br>${email} · ${phone}</div>
    <h4>Pago</h4>
    <div class="order-meta">${payLabels[pay] || pay}</div>
  `;
}

function openCheckout() {
  checkoutSuccess.hidden = true;
  checkoutForm.hidden = false;
  checkoutFooter.hidden = false;
  document.getElementById("checkoutSteps").hidden = false;
  setCheckoutStep(1);
  updateCheckoutTotalDisplay();
  checkoutModal.classList.add("open");
  checkoutModal.setAttribute("aria-hidden", "false");
  overlay.classList.add("visible");
  overlay.hidden = false;
  lockBody(true);
  openOverlayUI(checkoutModal, "#ckName");
}

function closeCheckout() {
  checkoutModal.classList.remove("open");
  checkoutModal.setAttribute("aria-hidden", "true");
  checkoutNext.classList.remove("loading");
  checkoutNext.disabled = false;
  if (!cartDrawer.classList.contains("open") && !wishDrawer.classList.contains("open") && !searchModal.classList.contains("open") && !qvModal.classList.contains("open")) {
    overlay.classList.remove("visible");
    overlay.hidden = true;
    lockBody(false);
  }
  closeOverlayUI(checkoutModal);
}

/** Base URL del backend MP (mismo origen si servís con node server) */
const MP_API_BASE = window.ISTORE_API_BASE || "";

async function createMercadoPagoPreference() {
  const name = document.getElementById("ckName").value.trim();
  const email = document.getElementById("ckEmail").value.trim();
  const phone = document.getElementById("ckPhone").value.trim();
  const address = document.getElementById("ckAddress").value.trim();
  const city = document.getElementById("ckCity").value.trim();
  const cp = document.getElementById("ckCp").value.trim();
  const delivery = getDeliveryMode();

  const items = cart.map((item) => ({
    id: String(item.id),
    title: item.name,
    quantity: item.qty,
    unit_price: item.price,
    picture_url: item.image,
    category_id: "electronics",
  }));

  const nameParts = name.split(/\s+/);
  const payer = {
    name: nameParts[0] || name,
    surname: nameParts.slice(1).join(" ") || nameParts[0] || "",
    email,
    phone: { area_code: "336", number: phone.replace(/\D/g, "") },
    address: {
      zip_code: cp,
      street_name: address,
      street_number: "",
    },
  };

  const res = await fetch(`${MP_API_BASE}/api/create-preference`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items, payer }),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const msg =
      data.message ||
      (data.error === "missing_credentials"
        ? "Falta configurar MP_ACCESS_TOKEN en el servidor"
        : "No se pudo iniciar el pago con Mercado Pago");
    throw new Error(msg);
  }
  return data;
}

function showCheckoutResult(status, orderId, extraMsg) {
  checkoutForm.hidden = true;
  checkoutFooter.hidden = true;
  document.getElementById("checkoutSteps").hidden = true;
  checkoutSuccess.hidden = false;

  const icon = checkoutSuccess.querySelector(".success-icon");
  if (status === "success") {
    if (icon) icon.textContent = "✓";
    checkoutSuccess.querySelector("h3").textContent = "¡Pago aprobado!";
    successMsg.textContent = extraMsg || "Tu pago con Mercado Pago fue acreditado.";
    showToast("¡Pago aprobado!", "success");
  } else if (status === "pending") {
    if (icon) icon.textContent = "…";
    checkoutSuccess.querySelector("h3").textContent = "Pago pendiente";
    successMsg.textContent =
      extraMsg || "Tu pago está pendiente de acreditación. Te avisamos cuando se confirme.";
    showToast("Pago pendiente", "");
  } else {
    if (icon) icon.textContent = "!";
    checkoutSuccess.querySelector("h3").textContent = "Pago no completado";
    successMsg.textContent =
      extraMsg || "El pago fue cancelado o rechazado. Podés intentar de nuevo.";
    showToast("Pago no completado", "error");
  }
  successOrder.textContent = orderId ? `Nº de pedido: ${orderId}` : "";
}

function finishLocalOrder(pay, total) {
  const orderId = "VT-" + Date.now().toString(36).toUpperCase();
  lastOrder = {
    id: orderId,
    total,
    payment: pay,
    items: [...cart],
    customer: {
      name: document.getElementById("ckName").value.trim(),
      email: document.getElementById("ckEmail").value.trim(),
    },
  };
  try {
    localStorage.setItem("vertice-last-order", JSON.stringify(lastOrder));
  } catch (_) {}
  cart = [];
  saveCart();
  showCheckoutResult("success", orderId, {
    card: "Tu tarjeta fue debitada correctamente (demo local).",
    transfer: "Reserva generada. Realizá la transferencia en 48 hs.",
  }[pay]);
}

async function processPayment() {
  const pay = getSelectedPayment();
  const total = getCheckoutTotal();
  checkoutNext.classList.add("loading");
  checkoutNext.disabled = true;
  checkoutNext.textContent = "Procesando…";

  try {
    // ——— Mercado Pago real (Checkout Pro) ———
    if (pay === "mercadopago") {
      checkoutNext.textContent = "Redirigiendo a Mercado Pago…";
      const pref = await createMercadoPagoPreference();

      // Guardar carrito pendiente por si vuelve del checkout
      try {
        localStorage.setItem(
          "vertice-pending-order",
          JSON.stringify({
            external_reference: pref.external_reference,
            preference_id: pref.id,
            items: cart,
            total: cartSubtotal(),
            at: Date.now(),
          })
        );
      } catch (_) {}

      if (!pref.init_point) throw new Error("Mercado Pago no devolvió URL de pago");
      window.location.href = pref.init_point;
      return;
    }

    // ——— Tarjeta / transferencia: flujo demo local ———
    await new Promise((r) => setTimeout(r, 1200));

    if (pay === "card") {
      const num = document.getElementById("ckCardNumber").value.replace(/\s/g, "");
      if (num.endsWith("0000")) {
        showToast("Pago rechazado por el banco (demo)", "error");
        return;
      }
    }

    finishLocalOrder(pay, total);
  } catch (err) {
    console.error(err);
    showToast(err.message || "Error al procesar el pago", "error");
  } finally {
    checkoutNext.classList.remove("loading");
    checkoutNext.disabled = false;
    checkoutNext.textContent = "Pagar ahora";
  }
}

/** Manejo de retorno desde Mercado Pago (?status=success|pending|failure&order=…) */
function handleMercadoPagoReturn() {
  const params = new URLSearchParams(window.location.search);
  const status = params.get("status");
  const orderId = params.get("order");
  if (!status) return;

  // Limpiar query de la URL sin recargar
  const clean = window.location.pathname + window.location.hash;
  window.history.replaceState({}, "", clean);

  if (status === "success") {
    cart = [];
    saveCart();
    try {
      localStorage.removeItem("vertice-pending-order");
    } catch (_) {}
  }

  openCheckout();
  showCheckoutResult(status, orderId);
}

// Card input masks
document.getElementById("ckCardNumber")?.addEventListener("input", (e) => {
  let v = e.target.value.replace(/\D/g, "").slice(0, 16);
  e.target.value = v.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
});
document.getElementById("ckCardExp")?.addEventListener("input", (e) => {
  let v = e.target.value.replace(/\D/g, "").slice(0, 4);
  if (v.length >= 3) v = v.slice(0, 2) + "/" + v.slice(2);
  e.target.value = v;
});

checkoutForm?.querySelectorAll('input[name="payment"]').forEach((radio) => {
  radio.addEventListener("change", togglePaymentFields);
});

function syncShipFields() {
  const shipFields = document.getElementById("shipFields");
  if (!shipFields) return;
  const pickup = getDeliveryMode() === "pickup";
  shipFields.style.display = pickup ? "none" : "block";
  ["ckAddress", "ckCity", "ckCp"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.required = !pickup;
  });
}
checkoutForm?.querySelectorAll('input[name="delivery"]').forEach((radio) => {
  radio.addEventListener("change", syncShipFields);
});
syncShipFields();

checkoutNext?.addEventListener("click", async () => {
  if (checkoutStep === 1) {
    if (!validateStep1()) return;
    setCheckoutStep(2);
    return;
  }
  if (checkoutStep === 2) {
    if (!validateStep2()) return;
    setCheckoutStep(3);
    return;
  }
  if (checkoutStep === 3) {
    await processPayment();
  }
});

checkoutBack?.addEventListener("click", () => {
  if (checkoutStep > 1) setCheckoutStep(checkoutStep - 1);
});

closeCheckoutBtn?.addEventListener("click", closeCheckout);
successClose?.addEventListener("click", closeCheckout);

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target.querySelector("input").value.trim();
  if (!email || !email.includes("@")) {
    showToast("Ingresá un email válido", "error");
    return;
  }
  showToast("¡Suscripción exitosa!", "success");
  e.target.reset();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeCartDrawer();
    closeWishDrawer();
    closeSearchModal();
    closeQuickView();
    closeCheckout();
    navLinks.classList.remove("open");
  
    closeModeration();
  }
});

window.addEventListener("scroll", onScroll, { passive: true });

/* ===== INIT ===== */
renderProducts();
updateCartUI();
updateWishUI();

document.querySelectorAll(".category-card.reveal-scale").forEach((el, i) => {
  el.classList.add(`reveal-delay-${Math.min(i + 1, 6)}`);
});

observeReveals();
updateParallax();
handleMercadoPagoReturn();

window.addEventListener("load", () => {
  observeReveals();
});


/* Lazy-load Google Maps iframe */
(function lazyMap() {
  const iframe = document.querySelector(".store-map iframe[data-src]");
  if (!iframe) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        iframe.src = iframe.dataset.src;
        iframe.removeAttribute("data-src");
        io.disconnect();
      }
    });
  }, { rootMargin: "200px" });
  io.observe(iframe);
})();


/* ===== COUPON + PROMO BAR ===== */
document.getElementById("promoClose")?.addEventListener("click", () => {
  document.body.classList.add("promo-hidden");
  try { sessionStorage.setItem("vertice-promo-hidden", "1"); } catch (_) {}
});
try {
  if (sessionStorage.getItem("vertice-promo-hidden") === "1") {
    document.body.classList.add("promo-hidden");
  }
} catch (_) {}

document.getElementById("couponBtn")?.addEventListener("click", () => {
  const input = document.getElementById("couponInput");
  const msg = document.getElementById("couponMsg");
  const code = (input?.value || "").trim().toUpperCase();
  if (!code) {
    appliedCoupon = null;
    if (msg) { msg.hidden = false; msg.className = "coupon-msg err"; msg.textContent = "Ingresá un cupón"; }
    updateCartUI();
    return;
  }
  const c = COUPONS[code];
  if (!c) {
    appliedCoupon = null;
    if (msg) { msg.hidden = false; msg.className = "coupon-msg err"; msg.textContent = "Cupón inválido"; }
    showToast("Cupón inválido", "error");
    updateCartUI();
    return;
  }
  appliedCoupon = { code, ...c };
  if (msg) {
    msg.hidden = false;
    msg.className = "coupon-msg ok";
    msg.textContent = `Cupón ${code} aplicado: ${c.label}`;
  }
  showToast(`Cupón ${code} aplicado`, "success");
  updateCartUI();
});

/* recently viewed */
function trackView(id) {
  try {
    let v = JSON.parse(localStorage.getItem("vertice-recent") || "[]");
    v = [id, ...v.filter((x) => x !== id)].slice(0, 8);
    localStorage.setItem("vertice-recent", JSON.stringify(v));
  } catch (_) {}
}

/* ===== MODERATION UI BINDINGS ===== */
document.getElementById("modAdminBtn")?.addEventListener("click", openModeration);
document.getElementById("closeMod")?.addEventListener("click", closeModeration);
document.getElementById("modFilter")?.addEventListener("change", renderModerationPanel);
document.getElementById("modLoginForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const pin = document.getElementById("modPin")?.value || "";
  if (tryAdminLogin(pin)) {
    document.getElementById("modPin").value = "";
  }
});
document.getElementById("modLogout")?.addEventListener("click", logoutAdmin);

// Atajo: Ctrl+Shift+M abre moderación
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.shiftKey && (e.key === "M" || e.key === "m")) {
    e.preventDefault();
    openModeration();
    if (isReviewAdmin) {
      document.getElementById("modLogin")?.setAttribute("hidden", "");
      document.getElementById("modPanel")?.removeAttribute("hidden");
      renderModerationPanel();
    }
  }
});

if (isReviewAdmin) {
  document.getElementById("modAdminBtn")?.removeAttribute("hidden");
  document.getElementById("modLogin")?.setAttribute("hidden", "");
  document.getElementById("modPanel")?.removeAttribute("hidden");
}
updateModBadge();

