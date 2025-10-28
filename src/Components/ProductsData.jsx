// src/data/productsData.js

// Helper: dynamically import all images in a folder
const importAll = (r) => r.keys().map(r);

// Load all images per category
const images = {
  phones: importAll(require.context("../images/phones", false, /\.(png|jpe?g|svg)$/)),
  laptops: importAll(require.context("../images/laptops", false, /\.(png|jpe?g|svg)$/)),
  cameras: importAll(require.context("../images/cameras", false, /\.(png|jpe?g|svg)$/)),
  watches: importAll(require.context("../images/smartwatches", false, /\.(png|jpe?g|svg)$/)),
  headphones: importAll(require.context("../images/headphones", false, /\.(png|jpe?g|svg)$/)),
  gaming: importAll(require.context("../images/Gaming", false, /\.(png|jpe?g|svg)$/)),
  accessories: importAll(require.context("../images/accessories", false, /\.(png|jpe?g|svg)$/)),
  smartlife: importAll(require.context("../images/smartlife", false, /\.(png|jpe?g|svg)$/)),
};

// Complete product data with descriptions
export const productsData = {
  phones: [
    { id: "p1", title: "Nothing Phone 3", rating: 5, price: 299, desc: "Sleek and innovative smartphone with amazing features." },
    { id: "p2", title: "Google Pixel 9 Pro Golden Color", rating: 5, price: 1199, desc: "Capture stunning photos with this powerful device." },
    { id: "p3", title: "Google Pixel 10 Pro Black", rating: 4, price: 999, desc: "Fast performance and clean Android experience daily." },
    { id: "p4", title: "OnePlus 12R 5G", rating: 4, price: 449, desc: "High-speed 5G connectivity for seamless multitasking." },
    { id: "p5", title: "Google Pixel light purple 256 GB", rating: 5, price: 849, desc: "Beautiful color with large storage and great camera." },
    { id: "p6", title: "iPhone 16 Pro black 256 GB", rating: 5, price: 1399, desc: "Premium design with unmatched Apple ecosystem experience." },
    { id: "p7", title: "iPhone Air White 512 GB", rating: 4, price: 1449, desc: "Powerful and lightweight device for everyday productivity." },
    { id: "p8", title: "One Plus Black 4000mp battery", rating: 4, price: 399, desc: "Long-lasting battery ensures full day usage easily." },
  ],

  laptops: [
    { id: "l1", title: "MacBook Pro M3 Max", rating: 5, price: 2499, desc: "Professional laptop with blazing-fast M3 Max performance." },
    { id: "l2", title: "Dell XPS 15 OLED", rating: 5, price: 1899, desc: "Vibrant display with slim and stylish design." },
    { id: "l3", title: "HP Spectre x360 14", rating: 4, price: 1599, desc: "Convertible laptop with flexibility and performance together." },
    { id: "l4", title: "ASUS ZenBook 14 OLED", rating: 4, price: 1399, desc: "Compact and sleek laptop with vibrant OLED screen." },
    { id: "l5", title: "MSI Stealth 14 Studio", rating: 5, price: 2799, desc: "Gaming and professional laptop with high-end specs." },
    { id: "l6", title: "Lenovo Yoga 9i Gen 8", rating: 4, price: 1299, desc: "2-in-1 laptop with strong performance and pen support." },
    { id: "l7", title: "Acer Swift Go 14", rating: 3, price: 899, desc: "Lightweight laptop ideal for daily work and travel." },
    { id: "l8", title: "Razer Blade 16 Gaming Laptop", rating: 5, price: 1799, desc: "High-performance gaming laptop for enthusiasts and pros." },
  ],

  cameras: [
    { id: "c1", title: "Panasonic Lumix GH6", rating: 5, price: 1999, desc: "Professional mirrorless camera for stunning photography." },
    { id: "c2", title: "Sony EOS R6 Mark II", rating: 5, price: 2499, desc: "High-quality camera for both photography and video." },
    { id: "c3", title: "Sony Alpha ASIII", rating: 4, price: 2299, desc: "Excellent resolution and dynamic performance in photography." },
    { id: "c4", title: "Fujifilm X-T5", rating: 4, price: 1699, desc: "Compact camera with retro style and modern features." },
    { id: "c5", title: "Panasonic Nikon GH6", rating: 5, price: 1999, desc: "Perfect camera for video creators and filmmakers." },
    { id: "c6", title: "Sony Alpha A7II ", rating: 5, price: 799, desc: "Handheld camera for smooth cinematic video captures." },
    { id: "c7", title: "Nikon GH6 + Gamble", rating: 4, price: 4599, desc: "Durable action camera for adventures and sports." },
    { id: "c8", title: "FUJIFILM Advanture", rating: 4, price: 2649, desc: "Capture immersive 360-degree photos and videos easily." },
  ],

  watches: [
    { id: "w1", title: "Apple Watch Series 10", rating: 5, price: 549, desc: "Smartwatch with health tracking and sleek design." },
    { id: "w2", title: "Samsung Galaxy Watch 7", rating: 4, price: 449, desc: "Advanced features with fitness and notifications support." },
    { id: "w3", title: "Google Pixel Watch 2", rating: 4, price: 399, desc: "Stylish watch integrating Google ecosystem and apps." },
    { id: "w4", title: "Garmin Fenix 8 Pro", rating: 5, price: 799, desc: "Rugged smartwatch designed for outdoor and sports enthusiasts." },
    { id: "w5", title: "Fitbit Charge 7", rating: 3, price: 199, desc: "Affordable fitness tracker with essential health features." },
    { id: "w6", title: "Huawei Watch GT 5", rating: 4, price: 349, desc: "Good battery life with advanced health monitoring." },
    { id: "w7", title: "Amazfit T-Rex Ultra", rating: 4, price: 299, desc: "Durable and rugged smartwatch built for adventure." },
    { id: "w8", title: "Fossil Gen 7 Hybrid", rating: 3, price: 249, desc: "Hybrid smartwatch combining style and smart functionality." },
  ],

  headphones: [
    { id: "h1", title: "Sony WH-1000XM5", rating: 5, price: 399, desc: "Top noise-cancelling headphones with rich sound quality." },
    { id: "h2", title: "Apple AirPods Max", rating: 5, price: 549, desc: "Premium over-ear headphones with excellent spatial audio." },
    { id: "h3", title: "Bose QuietComfort Ultra", rating: 5, price: 499, desc: "Comfortable headphones with deep noise isolation." },
    { id: "h4", title: "Sennheiser Momentum 4 Wireless", rating: 4, price: 379, desc: "High-fidelity sound for music and calls." },
    { id: "h5", title: "Beats Studio Pro", rating: 4, price: 349, desc: "Stylish and energetic sound with solid bass." },
    { id: "h6", title: "Audio-Technica ATH-M50xBT2", rating: 4, price: 299, desc: "Professional studio headphones with wireless freedom." },
    { id: "h7", title: "JBL Tour One M2", rating: 4, price: 279, desc: "Good battery life with clear audio performance." },
    { id: "h8", title: "Marshall Major IV", rating: 3, price: 199, desc: "Compact retro headphones for casual listening." },
  ],

  gaming: [
    { id: "g1", title: "PlayStation 5 Slim", rating: 5, price: 499, desc: "Next-gen gaming console with immersive graphics." },
    { id: "g2", title: "Xbox Series X", rating: 5, price: 499, desc: "High-performance console with huge game library." },
    { id: "g3", title: "Nintendo Switch OLED", rating: 4, price: 349, desc: "Versatile handheld console for fun on-the-go." },
    { id: "g4", title: "Steam Deck OLED 1TB", rating: 5, price: 649, desc: "Portable gaming PC for desktop-quality gaming anywhere." },
    { id: "g5", title: "Razer Wolverine V2 Pro Controller", rating: 4, price: 249, desc: "Premium controller with responsive buttons and triggers." },
    { id: "g6", title: "Logitech G Pro X Superlight 2", rating: 4, price: 159, desc: "Lightweight gaming mouse for precision gameplay." },
    { id: "g7", title: "ASUS ROG Ally Z1 Extreme", rating: 5, price: 799, desc: "Powerful handheld PC for high-end gaming performance." },
    { id: "g8", title: "Meta Quest 3 VR Headset", rating: 5, price: 499, desc: "Immersive VR headset for gaming and experiences." },
  ],

  accessories: [
    { id: "a1", title: "Wix Handy Bag for accessories ", rating: 4, price: 49, desc: "convenient bag for carrying your accessories and devices." },
    { id: "a2", title: "Anker GaNPrime 65W Charger", rating: 5, price: 59, desc: "Compact charger with high-speed power delivery." },
    { id: "a3", title: "Logitech MX Master 4 Mouse", rating: 5, price: 129, desc: "Ergonomic mouse for productivity and comfort." },
    { id: "a4", title: "Keychron K8 Pro Mechanical Keyboard", rating: 4, price: 99, desc: "Tactile mechanical keyboard with customizable keys." },
    { id: "a5", title: "Belkin 3-in-1 MagSafe Charging Stand", rating: 5, price: 149, desc: "Charge multiple devices simultaneously with ease." },
    { id: "a6", title: "Samsung 2TB Portable SSD T9", rating: 5, price: 229, desc: "High-capacity portable storage for files on-the-go." },
    { id: "a7", title: "Elgato Stream Deck MK.2", rating: 5, price: 179, desc: "Perfect tool for streamers with customizable buttons." },
    { id: "a8", title: "SanDisk Ultra 1TB microSDXC", rating: 4, price: 119, desc: "Reliable storage solution for cameras and phones." },
  ],

  smartlife: [
    { id: "s1", title: "Amazon Echo Show 10", rating: 5, price: 249, desc: "Smart display with voice assistant and touchscreen." },
    { id: "s2", title: "Google Nest Hub Max", rating: 4, price: 229, desc: "Smart home hub with display and camera features." },
    { id: "s3", title: "Philips Hue Starter Kit", rating: 5, price: 179, desc: "Smart lighting kit for customizable home ambiance." },
    { id: "s4", title: "Ring Video Doorbell 4", rating: 4, price: 199, desc: "Security doorbell with HD video and alerts." },
    { id: "s5", title: "TP-Link Kasa Smart Plug 4-Pack", rating: 5, price: 69, desc: "Control your home devices remotely with ease." },
    { id: "s6", title: "iRobot Roomba j7+", rating: 5, price: 899, desc: "Smart vacuum that cleans efficiently without effort." },
    { id: "s7", title: "Dyson Purifier Cool AutoReact", rating: 4, price: 649, desc: "Air purifier with intelligent sensors and cooling." },
    { id: "s8", title: "Nanoleaf Shapes Light Panels Kit", rating: 5, price: 249, desc: "Decorative modular lights for creative wall designs." },
  ],
};

// 🔁 Attach images automatically
Object.keys(productsData).forEach((category) => {
  productsData[category] = productsData[category].map((product, i) => ({
    ...product,
    image: images[category]?.[i] || null,
  }));
});

export default productsData;
