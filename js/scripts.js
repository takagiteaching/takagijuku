function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}
/*
const translations = {
    ja: {
        title: "高木塾へようこそ",
        home: "ホーム",
        about: "講師紹介", // 修正
        services: "サービス",
        contact: "お問い合わせ",
        homeContent: "高木塾のホームページへようこそ。ここでは、私たちのサービスや理念について紹介します。",
        aboutContent: "高木塾の講師陣をご紹介します。経験豊富な教師が学生の学業をサポートします。", // 修正
        servicesContent: "私たちは、個別指導、グループレッスン、オンライン授業など、さまざまな教育サービスを提供しています。詳細はこちらをご覧ください。",
        contactContent: "ご質問やご相談がございましたら、お気軽にお問い合わせください。",
        homeHeading: "ホーム",
        aboutHeading: "講師紹介", // 修正
        servicesHeading: "サービス",
        contactHeading: "お問い合わせ"
    },
    en: {
        title: "Welcome to Wang Private Tutoring",
        home: "Home",
        about: "Our Tutors", // 修正
        services: "Services",
        contact: "Contact",
        homeContent: "Welcome to the homepage of Wang Private Tutoring. Here, we introduce our services and philosophy.",
        aboutContent: "Meet our tutors at Wang Private Tutoring. Our experienced educators are here to support students' academic success.", // 修正
        servicesContent: "We offer various educational services, including private tutoring, group lessons, and online classes. Learn more here.",
        contactContent: "If you have any questions or inquiries, please feel free to contact us.",
        homeHeading: "Home",
        aboutHeading: "Our Tutors", // 修正
        servicesHeading: "Services",
        contactHeading: "Contact"
    }
};


function switchLanguage(lang) {
    // タイトルの翻訳
    document.getElementById("title").textContent = translations[lang].title;

    // ナビゲーションリンクの翻訳
    document.querySelector("a[onclick=\"showSection('home')\"]").textContent = translations[lang].home;
    document.querySelector("a[onclick=\"showSection('about')\"]").textContent = translations[lang].about;
    document.querySelector("a[onclick=\"showSection('services')\"]").textContent = translations[lang].services;
    document.querySelector("a[onclick=\"showSection('contact')\"]").textContent = translations[lang].contact;

    // セクションの内容の翻訳
    document.querySelector("#home h2").textContent = translations[lang].homeHeading;
    document.querySelector("#home p").textContent = translations[lang].homeContent;

    document.querySelector("#about h2").textContent = translations[lang].aboutHeading;
    document.querySelector("#about p").textContent = translations[lang].aboutContent;

    document.querySelector("#services h2").textContent = translations[lang].servicesHeading;
    document.querySelector("#services p").textContent = translations[lang].servicesContent;

    document.querySelector("#contact h2").textContent = translations[lang].contactHeading;
    document.querySelector("#contact p").textContent = translations[lang].contactContent;

    // Twitter埋め込みリンクの切り替え
    const twitterEmbed = document.getElementById("twitter-embed");
    twitterEmbed.innerHTML = ''; // 既存の埋め込みをクリア

    const twitterLink = document.createElement("a");
    twitterLink.className = "twitter-timeline";

    if (lang === "ja") {
        twitterLink.href = "https://twitter.com/zairikaoxue?lang=ja";
        twitterLink.textContent = "Tweets by zairikaoxue (日本語)";
    } else if (lang === "en") {
        twitterLink.href = "https://twitter.com/zairikaoxue?lang=en";
        twitterLink.textContent = "Tweets by zairikaoxue (English)";
    }

    twitterEmbed.appendChild(twitterLink);

    if (window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load();
    }
}
*/

document.getElementById("language-button").addEventListener("click", function () {
    const languageOptions = document.getElementById("language-options");
    if (languageOptions.classList.contains("open")) {
        languageOptions.classList.remove("open"); // 閉じる
    } else {
        languageOptions.classList.add("open"); // 開く
    }
});