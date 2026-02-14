// ============================================
// Firebase Configuration
// ============================================
// IMPORTANT: Replace these placeholder values with your actual Firebase config.
// Go to Firebase Console > Project Settings > General > Your apps > Web app
// Copy the config object and paste the values below.

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Default card data — used to seed Firebase on first run
const DEFAULT_CARDS = {
    cardly: {
        title_en: "Cardly",
        title_tr: "Cardly",
        desc_en: "Build your ultimate bio link page. Customizable, fast, and free.",
        desc_tr: "En iyi bio link sayfanızı oluşturun. Özelleştirilebilir, hızlı ve ücretsiz.",
        btnText_en: "Open App",
        btnText_tr: "Uygulamayı Aç",
        url: "https://cardly.iloveteto.com",
        icon: "badge",
        iconColor: "purple",
        maintenance: false
    },
    games: {
        title_en: "Arcade",
        title_tr: "Atari",
        desc_en: "Play browser-based games instantly. No downloads required.",
        desc_tr: "Tarayıcı tabanlı oyunları anında oynayın. İndirme gerekmez.",
        btnText_en: "Play Now",
        btnText_tr: "Oyna",
        url: "https://games.iloveteto.com",
        icon: "sports_esports",
        iconColor: "pink",
        maintenance: false
    },
    media: {
        title_en: "Media Archive",
        title_tr: "Medya Arşivi",
        desc_en: "Access our curated collection of music, videos, and resources.",
        desc_tr: "Özenle seçilmiş müzik, video ve kaynak koleksiyonumuza erişin.",
        btnText_en: "Go to Archive",
        btnText_tr: "Arşive Git",
        url: "https://media.iloveteto.com",
        icon: "folder_open",
        iconColor: "cyan",
        maintenance: true
    },
    minecraft: {
        title_en: "Minecraft SMP",
        title_tr: "Minecraft Sunucusu",
        desc_en: "Join our community server (1.18.2+).",
        desc_tr: "Topluluk sunucumuza katılın (1.18.2+).",
        btnText_en: "Copy IP Address",
        btnText_tr: "IP Adresini Kopyala",
        url: "play.iloveteto.com",
        icon: "dns",
        iconColor: "green",
        maintenance: true
    }
};
