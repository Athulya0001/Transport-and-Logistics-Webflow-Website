document.addEventListener("cookieyes_banner_load", function (eventData) {
  const consent = eventData.detail;

  console.log("Banner loaded, consent details:", consent);

  if (consent.categories.analytics === true) {
    console.log("Analytics consent granted → loading GA");

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

  if (consent.categories.advertisement === true) {
    console.log("Ads allowed → load ad scripts here");
  }
});

document.addEventListener("cookieyes_consent_update", function(eventData) {
    const { accepted, rejected } = eventData.detail;
    console.log("User accepted:", accepted, " User rejected:", rejected);

    // Example: If analytics is accepted
    if(accepted.includes("analytics")) {
        console.log("Load analytics scripts");
    }

    // If ads allowed
    if(accepted.includes("advertisement")) {
        console.log("Load ads scripts");
    }
});
