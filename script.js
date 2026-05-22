const shoeDatabase = [
    // NIKE
    { id: 1, brand: "NIKE", line: "LEBRON", name: "LeBron 21 'Vertex'", price: 200, hype: 5, tech: "Double-Stacked Air Zoom + Cushlon 2.0", date: "2026-05-08", img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/0329433d-c019-4822-8b4e-28268c15985b/lebron-xxi-basketball-shoes-SPh6ms.png" },
    { id: 2, brand: "NIKE", line: "KD", name: "KD 17 'Suns'", price: 150, hype: 4, tech: "Forefoot Air Zoom + Air Strobel", date: "2026-05-28", img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/60451a94-486a-495c-9c98-17a7e3d23f39/kd17-basketball-shoes-0pB6Dq.png" },
    { id: 3, brand: "NIKE", line: "GT SERIES", name: "G.T. Cut 3 'Electric'", price: 190, hype: 5, tech: "Full-Length ZoomX Foam", date: "2026-05-02", img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/86016664-d698-4cf5-9989-13008082695c/gt-cut-3-basketball-shoes-SPh6ms.png" },
    { id: 4, brand: "NIKE", line: "BOOKER", name: "Book 1 'Mirage'", price: 140, hype: 4, tech: "Cushlon + Heel Zoom Air", date: "2026-05-18", img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/005e83ec-4074-4b55-8025-a681283ef995/book-1-mirage-v2-basketball-shoes-SPh6ms.png" },

    // JORDAN
    { id: 5, brand: "JORDAN", line: "LUKA", name: "Luka 3 'Midnight'", price: 130, hype: 4, tech: "Cushlon 3.0 + IsoPlate", date: "2026-05-10", img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/609426f3-8f0c-4e5a-8b38-d7a8d9a4242d/luka-2-basketball-shoes-v4V9L6.png" },
    { id: 6, brand: "JORDAN", line: "TATUM", name: "Tatum 3 'Green Glow'", price: 125, hype: 4, tech: "Large-Scale Uncaged Zoom Air", date: "2026-05-12", img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/3757e841-f09b-4682-9f37-6f81e64c3c35/tatum-2-basketball-shoes-v4V9L6.png" },
    { id: 7, brand: "JORDAN", line: "ZION", name: "Zion 3 'Muddy'", price: 140, hype: 3, tech: "Formula 23 Drop-in + Heel Zoom", date: "2026-05-01", img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/61e89f81-9988-4665-9831-7e8c37c2d7f8/zion-3-basketball-shoes-SPh6ms.png" },

    // ADIDAS
    { id: 8, brand: "ADIDAS", line: "AE1", name: "AE1 'Ascent'", price: 120, hype: 5, tech: "Jet Boost + TPU Cage", date: "2026-05-15", img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7f6517a618e04099a43e49e061c27df6_9366/AE_1_Velocity_Blue_Shoes_Blue_IF1864_01_standard.jpg" },
    { id: 9, brand: "ADIDAS", line: "HARDEN", name: "Harden Vol. 8 'Luxury'", price: 160, hype: 4, tech: "Full-Length Jet Boost", date: "2026-05-20", img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/738df5f661cc4612807e376840049283_9366/Harden_Volume_8_Shoes_Orange_ID4574_01_standard.jpg" },
    { id: 10, brand: "ADIDAS", line: "DAME", name: "Dame 9 'Purple Reign'", price: 120, hype: 3, tech: "Lightstrike Pro", date: "2026-05-29", img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4307a5f6e80b431790ae46430095a5f6_9366/Dame_8_EXTPLY_Shoes_Blue_ID5670_01_standard.jpg" },

    // PUMA / ANTA / OTHERS
    { id: 11, brand: "PUMA", line: "LAMELO", name: "MB.04 'Galaxy'", price: 130, hype: 5, tech: "Nitro Infused Foam", date: "2026-05-22", img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:f3f3f3,w_600,h_600/global/309851/01/sv01/fnd/PNA/fmt/png/MB.03-Blue-Hive-Basketball-Shoes" },
    { id: 12, brand: "ANTA", line: "KYRIE", name: "Kai 1 'Speed'", price: 125, hype: 5, tech: "NitroEdge Midsole", date: "2026-05-04", img: "https://images.complex.com/complex/images/c_fill,f_auto,g_center,w_1200/fl_lossy,pg_1/v9qjvz6j8f5m7k4n5o9d/anta-kai-1-artist-on-court" },
    { id: 13, brand: "LI-NING", line: "WADE", name: "Way of Wade 11", price: 225, hype: 5, tech: "Full-Length BOOM Tech", date: "2026-05-07", img: "https://www.wayofwade.com/cdn/shop/files/1_2989c79e-4e5d-4c81-998a-2c4033c5e8d5_800x.png" }
];

/* ... [Keep all previous JS logic functions] ... */

function openModal(shoe) {
    document.getElementById('modal-body').innerHTML = `
        <div style="background:var(--grey-light); padding:20px; border-radius:8px;">
            <img src="${shoe.img}" width="100%">
        </div>
        <div class="modal-info">
            <p style="color:var(--accent); font-weight:900; letter-spacing:2px; margin:0;">${shoe.brand} // ${shoe.line}</p>
            <h2 style="font-size:3rem; margin:10px 0; letter-spacing:-2px; line-height:0.9;">${shoe.name}</h2>
            
            <div style="margin:30px 0; padding:20px; border-left:4px solid var(--accent); background:var(--grey-light);">
                <h4 style="margin:0 0 10px 0;">PERFORMANCE TECH SPECS</h4>
                <p style="text-transform:none; color:#444; line-height:1.6; margin:0;">
                    This silhouette is engineered for the 2026 pro-circuit. It features <strong>${shoe.tech}</strong> 
                    for maximum energy return and lateral containment during high-intensity play.
                </p>
            </div>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:30px;">
                <div>
                    <small style="opacity:0.6;">MSRP</small>
                    <div style="font-weight:900; font-size:1.5rem;">$${shoe.price}</div>
                </div>
                <div>
                    <small style="opacity:0.6;">RELEASE STATUS</small>
                    <div style="font-weight:900; font-size:1.5rem;">${shoe.date}</div>
                </div>
            </div>

            <button class="explore-btn" style="background:black; color:white; width:100%; border:none; padding:20px;" onclick="closeModal()">RETURN TO SCOUTING</button>
        </div>
    `;
    document.getElementById('modal').style.display = 'block';
    // Lock body scroll when modal is open
    document.body.style.overflow = 'hidden'; 
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}
