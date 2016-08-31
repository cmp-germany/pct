window.contentLandingPage = [
  { module: "TitleWithRegisterForm",
    contents: {
      title: "Vernetzen Sie innerhalb Ihrer Stadt oder Kommune Ihre Unternehmen miteinander.",
      text:
        "BCT bietet den Kommunen den Eintritt in die digitale Welt.",
      buttonAdditionalText: 'Per Klick auf "Jetzt Mitglied werden" stimmen Sie unseren AGB und Datenschutzrichtlinien zu.',
      buttonText: "Jetzt Mitglied werden"
    },
    pictures: {
      background: {
        src: "gfx/landing-page/bild3.jpg",
        positionX: "100%",
        positionY: "50%"
      },
      motiv: {
        src: ""
      }
    },
    inputFields: [
      {
        inputType: "text",
        label: "Name"
      },
      {
        inputType: "email",
        label: "E-Mail Adresse"
      },
      {
        inputType: "password",
        label: "Passwort vergeben"
      },
      {
        inputType: "password",
        label: "Passwort wiederholen"
      }
    ]
  },
  { module: "KeyFeatures",
    features: [
      {
        title: "City Marketing",
        text: "Steigen Sie in eine neue Form des digitalen Marketings ein. Kommunizieren Sie direkt mit Unternehmen oder publizieren Sie sich über Ihre eigene Stadtpräsenz auf unserer Plattform.",
        icon: "business",
        button: {
          text: "Jetzt registrieren",
          url: "#register-form"
        }
      },
      {
        title: "Zielgruppe finden",
        text: "Schlagwortsuche, Active Matching und Gruppen der Plattform helfen Ihnen, zu Ihren konkreten Anliegen die richtigen Ansprechpartner auf der Plattform zu finden.",
        icon: "group",
        button: {
          text: "Jetzt registrieren",
          url: "#register-form"
        }
      }
    ]
  },
  { module: "SlideStatement",
    title: "Wir vernetzen Know-how. Schnell, sicher, erfolgreich.",
    background: {
      src: "gfx/landing-page/bild2.jpg",
      positionX: "90%",
      positionY: "50%"
    }
  },
  { module: "People",
    cards: [
      {
        type: "people",
        title: "Digitale Stadtplattform",
        text: "Unser Konzept einer übergreifendenen Stadtplattform bietet allen Städten die Möglichkeit mit bestehenden und neuen Unternehmen den Kontakt zu halten.",
        url: "",
        picture: "gfx/landing-page/fotolia_82266608.jpg"
      },
      {
        type: "people",
        title: "Städteapplikationen",
        text: "Profitieren Sie von der Möglichkeit Ihre bestehenden Stadtapplikationen in eine Plattform zu integrieren. Virtuelle Stadtrundgänge, Touristenführer und Onlineshops - jetzt auf einer Plattform",
        url: "",
        picture: "gfx/landing-page/fotolia_93025626.jpg"
      },
      {
        type: "people",
        title: "Passive & Active Matching",
        text: "Finden Sie das was fehlt. Suchen Sie konkret oder lassen Sie sich passende Vorschläge machen.",
        url: "",
        picture: "gfx/karten/match.jpg"
      },
      {
        type: "people",
        title: "Ihr digitaler Bürgerservice",
        text: "Integrieren Sie Ihren Bürgerservice digital. Pflegen Sie schnell und einfach Ihre Unternehmensbeziehungen.",
        url: "",
        picture: "gfx/karten/touch.jpg"
      },
      {
        type: "people",
        title: "Internationale Kooperationen",
        text: "Unternehmen aus einer Kommune können jetzt ganz einfach von bestehenden Beziehungen zu weiteren Kommunen profitieren - weltweit.",
        url: "",
        picture: "gfx/landing-page/fotolia_71453007.jpg"
      },
      {
        type: "register",
        text: "Kostenlos registrieren und ein Jahr unverbindlich testen.",
        buttonText: "Jetzt registrieren",
        url: "#register-form"
      }
    ]
  },
  { module: "SlideStatement",
    title: "Schaffen Sie ad-hoc Vermarktungsmöglichkeiten für die Unternehmen in Ihrem Wirkungsbereich.",
    background: {
      src: "gfx/Fotolia_101170696_L-1920.jpg",
      positionX: "55%",
      positionY: "50%"
    }
  }
];
