const shoeDatabase = [
    // NIKE PERFORMANCE
    { id: 1, brand: "NIKE", line: "LEBRON", name: "LeBron 21 'Vertex'", price: 200, hype: 5, tech: "Double-Stacked Air Zoom + Cushlon 2.0", date: "2026-05-08", img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/0329433d-c019-4822-8b4e-28268c15985b/lebron-xxi-basketball-shoes-SPh6ms.png" },
    { id: 2, brand: "NIKE", line: "KD", name: "KD 17 'Suns'", price: 150, hype: 4, tech: "Forefoot Air Zoom + Air Strobel", date: "2026-05-28", img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/60451a94-486a-495c-9c98-17a7e3d23f39/kd17-basketball-shoes-0pB6Dq.png" },
    { id: 3, brand: "NIKE", line: "GT SERIES", name: "G.T. Cut 3 'Electric'", price: 190, hype: 5, tech: "Full-Length ZoomX Foam Core", date: "2026-05-02", img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/86016664-d698-4cf5-9989-13008082695c/gt-cut-3-basketball-shoes-SPh6ms.png" },
    { id: 4, brand: "NIKE", line: "BOOKER", name: "Book 1 'Mirage'", price: 140, hype: 4, tech: "Cushlon Midsole + Heavy Heel Zoom Air", date: "2026-05-18", img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/005e83ec-4074-4b55-8025-a681283ef995/book-1-mirage-v2-basketball-shoes-SPh6ms.png" },

    // JORDAN BRAND
    { id: 5, brand: "JORDAN", line: "LUKA", name: "Luka 3 'Midnight'", price: 130, hype: 4, tech: "Cushlon 3.0 Matrix + IsoPlate Support", date: "2026-05-10", img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/609426f3-8f0c-4e5a-8b38-d7a8d9a4242d/luka-2-basketball-shoes-v4V9L6.png" },
    { id: 6, brand: "JORDAN", line: "TATUM", name: "Tatum 3 'Green Glow'", price: 125, hype: 4, tech: "Uncaged Zoom Air Units", date: "2026-05-12", img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/3757e841-f09b-4682-9f37-6f81e64c3c35/tatum-2-basketball-shoes-v4V9L6.png" },
    { id: 7, brand: "JORDAN", line: "ZION", name: "Zion 3 'Muddy'", price: 140, hype: 3, tech: "Formula 23 Drop-In + Zoom Air Cushion", date: "2026-05-01", img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/61e89f81-9988-4665-9831-7e8c37c2d7f8/zion-3-basketball-shoes-SPh6ms.png" },

    // ADIDAS PERFORMANCE
    { id: 8, brand: "ADIDAS", line: "AE1", name: "AE1 'Ascent'", price: 120, hype: 5, tech: "Jet Boost Foam + Generative TPU Cage", date: "2026-05-15", img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7f6517a618e04099a43e49e061c27df6_9366/AE_1_Velocity_Blue_Shoes_Blue_IF1864_01_standard.jpg" },
    { id: 9, brand: "ADIDAS", line: "HARDEN", name: "Harden Vol. 8 'Luxury'", price: 160, hype: 4, tech: "Full-Length Jet Boost Integration", date: "2026-05-20", img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/738df5f661cc4612807e376840049283_9366/Harden_Volume_8_Shoes_Orange_ID4574_01_standard.jpg" },
    { id: 10, brand: "ADIDAS", line: "DAME", name: "Dame 9 'Purple Reign'", price: 120, hype: 3, tech: "Dual-Density Lightstrike Pro Elite", date: "2026-05-29", img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4307a5f6e80b431790ae46430095a5f6_9366/Dame_8_EXTPLY_Shoes_Blue_ID5670_01_standard.jpg" },

    // GLOBAL PREMIUM LINES
    { id: 11, brand: "PUMA", line: "LAMELO", name: "MB.04 'Galaxy'", price: 130, hype: 5, tech: "Nitrogen-Infused High-Rebound Foam", date: "2026-05-22", img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:f3f3f3,w_600,h_600/global/309851/01/sv01/fnd/PNA/fmt/png/MB.03-Blue-Hive-Basketball-Shoes" },
    { id: 12, brand: "ANTA", line: "KYRIE", name: "Kai 1 'Speed'", price: 125, hype: 5, tech: "NitroEdge Energy Return Compound", date: "2026-05-04", img: "https://images.complex.com/complex/images/c_fill,f_auto,g_center,w_1200/fl_lossy,pg_1/v9qjvz6j8f5m7k4n5o9d/anta-kai-1-artist-on-court" },
    { id: 13, brand: "LI-NING", line: "WADE", name: "Way of Wade 11", price: 225, hype: 5, tech: "Full-Length Carbon Fiber Plate + BOOM", date: "2026-05-07", img: "https://www.wayofwade.com/cdn/shop/files/1_2989c79e-4e5d-4c81-998a-2c4033c5e8d5_800x.png" }
];

let locker = JSON.parse(localStorage.getItem('ghLocker')) || [];
let compareList = [];

// NAVIGATION SYSTEMS
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + pageId).classList.add('active');
    window.scrollTo(0,0);
    if(pageId === 'collection') renderArchive();
    if(pageId === 'calendar') renderCalendar();
    if(pageId === 'locker') renderLocker();
}

// SHARED INTERFACE CARD GENERATOR
function createCard(shoe) {
    const isFav = locker.includes(shoe.id);
    const isComp = compareList.includes(shoe.id);
    const today = new Date().toISOString().split('T')[0];
    const isUpcoming = shoe.date > today;

    const card = document.createElement('div');
    card.className = 'shoe-card';
    card.onclick = () => openModal(shoe);
    card.innerHTML = `
        <div class="image-container">
            <button class="fav-btn ${isFav?'active':''}" onclick="toggleLocker(${shoe.id},event)">${isFav?'♥':'♡'}</button>
            <button class="comp-btn ${isComp?'active':''}" onclick="toggleCompare(${shoe.id},event)">VS</button>
            <img src="${shoe.img}">
            ${isUpcoming ? `<div class="drop-tag">DROPS ${shoe.date}</div>` : ''}
        </div>
        <p style="color:var(--accent); font-weight:900; font-size:0.6rem; margin-top:12px; letter-spacing:1px;">${shoe.brand} // ${shoe.line}</p>
        <div class="shoe-name" style="font-weight:900;">${shoe.name}</div>
    `;
    return card;
}

// RENDERING PORTALS
function renderArchive() {
    const grid = document.getElementById('archive-grid');
    const query = document.getElementById('search-bar').value.toLowerCase();
    grid.innerHTML = '';
    shoeDatabase.filter(s => s.name.toLowerCase().includes(query) || s.brand.toLowerCase().includes(query) || s.tech.toLowerCase().includes(query))
                .forEach(s => grid.appendChild(createCard(s)));
}

function renderCalendar() {
    const list = document.getElementById('calendar-list');
    list.innerHTML = '';
    const sorted = [...shoeDatabase].sort((a,b) => new Date(a.date) - new Date(b.date));
    
    sorted.forEach(shoe => {
        const item = document.createElement('div');
        item.className = 'calendar-item';
        item.innerHTML = `
            <div class="calendar-date">${shoe.date.split('-')[2]}<br><span style="font-size:0.7rem; color:var(--black)">MAY</span></div>
            <img src="${shoe.img}" width="150">
            <div>
                <div style="font-weight:900; font-size:1.5rem;">${shoe.name}</div>
                <div style="color:var(--accent); font-weight:900;">${shoe.brand} // MSRP: $${shoe.price}</div>
            </div>
            <button class="explore-btn" style="border-color:var(--black); color:var(--black); margin-left:auto;" onclick="openModalById(${shoe.id})">TECH SPECS</button>
        `;
        list.appendChild(item);
    });
}

function renderLocker() {
    const grid = document.getElementById('locker-grid');
    grid.innerHTML = '';
    const saved = shoeDatabase.filter(s => locker.includes(s.id));
    saved.length ? saved.forEach(s => grid.appendChild(createCard(s))) : grid.innerHTML = '<div style="grid-column:1/-1; text-align:center; opacity:0.5; padding:100px 0; font-weight:900;">YOUR LOCKER IS CURRENTLY EMPTY.</div>';
}

// SPOTLIGHT MODULE: ALIGNED ROTATION (24 HR ENGINE)
function initHero() {
    const today = new Date().toDateString();
    const seed = today.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const shoe = shoeDatabase[seed % shoeDatabase.length];
    document.getElementById('featured-hero').innerHTML = `
        <div class="hero-content">
            <div class="hero-text"><h3>GLOBAL SPOTLIGHT</h3><h2>${shoe.name}</h2><button class="explore-btn" onclick="showPage('collection')">EXPLORE ARCHIVE</button></div>
            <div class="hero-img"><img src="${shoe.img}"></div>
        </div>
    `;
}

// SYSTEM INTERACTIONS & COMPARATORS
function toggleLocker(id, e) {
    e.stopPropagation();
    const idx = locker.indexOf(id);
    idx > -1 ? locker.splice(idx, 1) : locker.push(id);
    localStorage.setItem('ghLocker', JSON.stringify(locker));
    document.getElementById('locker-count').innerText = locker.length;
    renderArchive(); renderLocker();
}

function toggleCompare(id, e) {
    e.stopPropagation();
    const idx = compareList.indexOf(id);
    if (idx > -1) compareList.splice(idx, 1);
    else if (compareList.length < 2) compareList.push(id);
    updateCompareTray(); renderArchive();
}

function updateCompareTray() {
    const tray = document.getElementById('compare-tray');
    const slots = document.getElementById('compare-slots');
    tray.classList.toggle('active', compareList.length > 0);
    slots.innerHTML = compareList.map(id => {
        const s = shoeDatabase.find(x => x.id === id);
        return `<div class="slot-img"><img src="${s.img}"></div>`;
    }).join('');
}

function openCompareModal() {
    if(compareList.length < 2) return;
    const [s1, s2] = compareList.map(id => shoeDatabase.find(x => x.id === id));
    document.getElementById('compare-results').innerHTML = [s1, s2].map(s => `
        <div class="compare-col">
            <img src="${s.img}">
            <h2 style="font-size:2rem; font-weight:900; margin:20px 0 10px;">${s.name}</h2>
            <p style="border-top: 1px solid var(--border); padding-top:15px;"><strong>LINEAGE:</strong> ${s.brand} // ${s.line}</p>
            <p style="border-top: 1px solid var(--border); padding-top:15px;"><strong>FOAM CUSHIONING:</strong> ${s.tech}</p>
            <p style="border-top: 1px solid var(--border); padding-top:15px; font-size:1.3rem; font-weight:900; color:var(--accent);">MSRP: $${s.price}</p>
        </div>
    `).join('');
    document.getElementById('compare-modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function openModal(shoe) {
    document.getElementById('modal-body').innerHTML = `
        <div style="background:var(--grey-light); padding:20px; border-radius:4px; display:flex; align-items:center; justify-content:center;">
            <img src="${shoe.img}" style="width:100%; max-width:400px;">
        </div>
        <div>
            <p style="color:var(--accent); font-weight:900; letter-spacing:2px; margin:0;">${shoe.brand} // ${shoe.line}</p>
            <h2 style="font-size: clamp(2rem, 5vw, 3.5rem); margin:10px 0; letter-spacing:-2px; line-height:0.9; font-weight:900;">${shoe.name}</h2>
            
            <div style="margin:25px 0; padding:20px; border-left:4px solid var(--accent); background:var(--grey-light);">
                <h4 style="margin:0 0 10px 0; font-weight:900;">ENGINEERING SPECIFICATIONS</h4>
                <p style="text-transform:none; color:var(--black); opacity:0.8; line-height:1.6; margin:0;">
                    Constructed for competitive, high-impact athletic performance. Implements <strong>${shoe.tech}</strong> systems targeted for optimal responsiveness, energy deflection, and lockdown control.
                </p>
            </div>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:30px;">
                <div>
                    <small style="opacity:0.6; font-weight:900; font-size:0.7rem;">SCOUTING STATUS</small>
                    <div style="font-weight:900; font-size:1.2rem; margin-top:4px;">${shoe.date}</div>
                </div>
                <div>
                    <small style="opacity:0.6; font-weight:900; font-size:0.7rem;">BASE RETAIL VAL</small>
                    <div style="font-weight:900; font-size:1.2rem; margin-top:4px; color:var(--accent);">$${shoe.price}</div>
                </div>
            </div>

            <button class="explore-btn" style="background:var(--black); color:var(--white); width:100%; border:none; padding:18px;" onclick="closeModal()">RETURN TO PORTAL</button>
        </div>
    `;
    document.getElementById('modal').style.display = 'block';
    document.body.style.overflow = 'hidden'; 
}

function openModalById(id) { openModal(shoeDatabase.find(x => x.id === id)); }
function closeModal() { document.getElementById('modal').style.display = 'none'; document.body.style.overflow = 'auto'; }
function closeCompareModal() { document.getElementById('compare-modal').style.display = 'none'; document.body.style.overflow = 'auto'; }
function clearCompare() { compareList = []; updateCompareTray(); renderArchive(); }

document.getElementById('theme-toggle').onclick = () => {
    document.body.classList.toggle('dark-theme');
    document.getElementById('theme-toggle').innerText = document.body.classList.contains('dark-theme') ? 'LIGHT' : 'DARK';
};

// INITIALIZATION BOOTLOADER
initHero();
document.getElementById('locker-count').innerText = locker.length;
