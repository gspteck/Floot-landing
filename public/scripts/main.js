(() => {
  const STORAGE_KEY = "floot-lang";
  const CONTACT_EMAIL = "support@floot.app";

  const strings = {
    en: {
      "nav.product": "Product",
      "nav.how": "How it works",
      "nav.offer": "Pilot",
      "nav.contact": "Contact",
      "nav.cta": "Request a pilot",
      "hero.by": "by GSPTeck · floot.app",
      "hero.tagline": "Verified RL environments for Dart and Flutter.",
      "hero.lead":
        "Tasks plus verifiers that labs can trust — same score every time, hard to game, reproducible by a third party.",
      "hero.cta": "Request a pilot",
      "hero.secondary": "What we sell",
      "product.title": "What Floot sells",
      "product.lead":
        "Not phone compute. Not GPU hours. The scarce input for coding-agent RL is a trustworthy test suite.",
      "product.f1t": "Private verified task packs",
      "product.f1d":
        "Fixed-scope Dart (and later Flutter / mobile-agent) suites with hidden tests, references, mutants, and measured solve rates — delivered as a private verifiers package plus grader image.",
      "product.f2t": "Numbers anyone can re-run",
      "product.f2d":
        "Determinism (canonical digest agreement) and hack-resistance (mutant kill rate, hostile corpus). The public Hub environment is the sales asset; private packs are the product.",
      "product.f3t": "Bespoke authoring",
      "product.f3d":
        "At scoping, buyers can redirect task families. Pilots are pre-sold by LOI or deposit before tasks are written.",
      "how.title": "How a pilot works",
      "how.lead": "One clear path from conversation to accepted delivery.",
      "how.s1": "Discovery call — fit, format, price",
      "how.s2": "Pilot proposal + LOI or deposit",
      "how.s3": "Author tasks, mutants, hidden tests",
      "how.s4": "Deliver package + grader; you re-run the bench",
      "how.note":
        "Website first. Client apps ship as Android, Windows, and iOS installer downloads — not via app stores.",
      "offer.title": "Default pilot offer",
      "offer.lead":
        "The starting proposal. Discovery can replace it with bespoke authoring or a mobile pack.",
      "offer.eyebrow": "Floot Dart Pack v1",
      "offer.name": "40 private Dart tasks",
      "offer.priceNote": "fixed · ~$300 / task",
      "offer.b1": "Hidden tests, references, and deliberate mutants",
      "offer.b2": "Private verifiers package + grader image",
      "offer.b3": "Determinism and hack-resistance report",
      "offer.b4": "Acceptance: you re-run the published benchmark numbers",
      "offer.cta": "Talk about a pilot",
      "contact.title": "Contact",
      "contact.lead":
        "No self-serve checkout on this site. Tell us who you are and what you need graded — we reply with next steps.",
      "contact.emailLabel": "Email",
      "contact.studioLabel": "parent studio",
      "contact.hint":
        "Include company, use case (pack / bespoke / mobile), and preferred timeline.",
      "contact.cta": "Open email",
      "footer.copy": "© Floot by GSPTeck",
    },
    it: {
      "nav.product": "Prodotto",
      "nav.how": "Come funziona",
      "nav.offer": "Pilota",
      "nav.contact": "Contatti",
      "nav.cta": "Richiedi un pilota",
      "hero.by": "di GSPTeck · floot.app",
      "hero.tagline": "Ambienti RL verificati per Dart e Flutter.",
      "hero.lead":
        "Task e verifier di cui i laboratori possono fidarsi — stesso punteggio ogni volta, difficili da aggirare, riproducibili da terzi.",
      "hero.cta": "Richiedi un pilota",
      "hero.secondary": "Cosa vendiamo",
      "product.title": "Cosa vende Floot",
      "product.lead":
        "Non compute da telefono. Non ore di GPU. L’input scarso per l’RL degli coding agent è una suite di test affidabile.",
      "product.f1t": "Pack privati di task verificati",
      "product.f1d":
        "Suite Dart a ambito fisso (poi Flutter / agent mobili) con test nascosti, reference, mutant e solve rate misurati — consegnate come package verifiers privato più immagine grader.",
      "product.f2t": "Numeri che chiunque può rilanciare",
      "product.f2d":
        "Determinismo (accordo sul digest canonico) e resistenza agli hack (kill rate dei mutant, corpus ostile). L’ambiente Hub pubblico è l’asset di vendita; i pack privati sono il prodotto.",
      "product.f3t": "Authoring su misura",
      "product.f3d":
        "In fase di scoping il buyer può riorientare le famiglie di task. I piloti si pre-vendono con LOI o deposito prima di scrivere i task.",
      "how.title": "Come funziona un pilota",
      "how.lead": "Un percorso chiaro dalla conversazione alla consegna accettata.",
      "how.s1": "Call di discovery — fit, formato, prezzo",
      "how.s2": "Proposta pilota + LOI o deposito",
      "how.s3": "Authoring di task, mutant e test nascosti",
      "how.s4": "Consegna package + grader; rilanciate il bench",
      "how.note":
        "Prima il sito. Le app client si scaricano come installer Android, Windows e iOS — non dagli store.",
      "offer.title": "Offerta pilota predefinita",
      "offer.lead":
        "La proposta di partenza. La discovery può sostituirla con authoring su misura o un mobile pack.",
      "offer.eyebrow": "Floot Dart Pack v1",
      "offer.name": "40 task Dart privati",
      "offer.priceNote": "fisso · ~$300 / task",
      "offer.b1": "Test nascosti, reference e mutant deliberati",
      "offer.b2": "Package verifiers privato + immagine grader",
      "offer.b3": "Report di determinismo e resistenza agli hack",
      "offer.b4": "Accettazione: rilanciate i numeri del benchmark",
      "offer.cta": "Parliamone",
      "contact.title": "Contatti",
      "contact.lead":
        "Nessun checkout self-serve su questo sito. Scriveteci chi siete e cosa va gradato — rispondiamo con i prossimi passi.",
      "contact.emailLabel": "Email",
      "contact.studioLabel": "studio genitore",
      "contact.hint":
        "Indicate azienda, use case (pack / su misura / mobile) e tempistiche.",
      "contact.cta": "Apri email",
      "footer.copy": "© Floot di GSPTeck",
    },
  };

  function applyLang(lang) {
    const dict = strings[lang] || strings.en;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    const mail = document.getElementById("contact-email");
    const mailBtn = document.getElementById("contact-mail-btn");
    if (mail) {
      mail.href = `mailto:${CONTACT_EMAIL}`;
      mail.textContent = CONTACT_EMAIL;
    }
    if (mailBtn) {
      mailBtn.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        lang === "it" ? "Richiesta pilota Floot" : "Floot pilot inquiry"
      )}`;
    }

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {
      /* ignore */
    }
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyLang(btn.getAttribute("data-lang") || "en");
    });
  });

  let initial = "en";
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "it") initial = stored;
    else if (navigator.language && navigator.language.toLowerCase().startsWith("it")) {
      initial = "it";
    }
  } catch (_) {
    /* ignore */
  }
  applyLang(initial);
})();
