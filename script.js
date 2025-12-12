document.addEventListener("cookieyes_banner_load", function (eventData) {
  const consent = eventData.detail;

  console.log("Banner loaded, consent details:", consent);

  // Example: Run Google Analytics ONLY if analytics category is allowed
  if (consent.categories.analytics === true) {
    console.log("Analytics consent granted → loading GA");

    // Example: load GA4
    const gtagScript = document.createElement("script");
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX";
    document.head.appendChild(gtagScript);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-XXXXXXX");
  } else {
    console.log("Analytics consent NOT given → GA not loaded.");
  }

  // Example: ads category
  if (consent.categories.advertisement === true) {
    console.log("Ads allowed → load ad scripts here");
  }
});
