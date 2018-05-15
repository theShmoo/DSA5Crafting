export const Complexity = [
  {
    "name": "Primitive Gegenstände",
    "description": "lassen sich alleine mit einem Talent erschaffen."
  },
  {
    "name": "Einfache Gegenstände",
    "description": "benötigen ein spezielles Anwendungsgebiet wie z. B. Instrumente bauen. Erst damit können diese Gegenstände hergestellt werden. In den meisten Fällen benötigt man dazu eine passende Sonderfertigkeit. In Ausnahmefällen kann auch eine Einsatzmöglichkeit ausreichend sein."
  },
  {
    "name": "Komplexe Gegenstände",
    "description": "brauchen zusätzlich noch ein entsprechendes Berufsgeheimnis."
  }
];

export const Material = [
  {
    "description": "sehr billig",
    "modifier":  –20
  },
  {
    "description": "billig",
    "modifier": –10
  },
  {
    "description": "durchschnittlich",
    "modifier": 0
  },
  {
    "description": "hochwertig",
    "modifier": 10
  },
  {
    "description": "sehr hochwertig",
    "modifier":  20
  }
]

export const Costs = [
  {
    "name": "Herstellung",
    "costs": 25
  },
  {
    "name": "Reperatur",
    "costs": 20
  }
]

export const Crafting = [
  {
    "name": "misc",
    "talents": [
      {
        "description": "Mit dem Talent Fesseln können Helden Netze knüpfen und Seile flechten.",
        "name": "Fesseln"
      },
      {
        "description": "Der Baustoff Holz wird sowohl beim Bau von Häusern, Booten und Schiffen verwendet, als auch bei einigen Waffen, Alltagsgegenständen und sogar Rüstungen.",
        "name": "Holzbearbeitung"
      },
      {
        "description": "Zwar ist Essen kein Gegenstand im klassischen Sinn, aber das Kreieren von Torten und das Backen von Brot funktioniert regeltechnisch wie die Herstellung anderer Gegenstände.",
        "name": "Lebensmittelbearbeitung"
      },
      {
        "description": "Dieses Talent begegnet den Helden vor allem dann, wenn sie eine Lederrüstung herstellen oder flicken wollen, oder sie den Pelz eines Tiers zu einer wärmenden Mütze verarbeiten.",
        "name": "Lederbearbeitung"
      },
      {
        "description": "Auch wenn es ein sehr spezieller Bereich ist: Mit dem Talent Malen & Zeichnen kann ein Held Bilder und Gemälde erschaffen.",
        "name": "Malen & Zeichnen"
      },
      {
        "description": "Metall wird in erster Linie für Gegenstände wie Kerzenleuchter, Hufeisen, Silberbesteck o.Ä. verwendet.",
        "name": "Metallbearbeitung"
      },
      {
        "description": "Durch Steinbearbeitung kann man zum einen steinerne Waffen herstellen, zum anderen auch Kunstwerke aus Alabaster und Marmor, kleine Statuetten oder Mauern aus Stein.",
        "name": "Steinbearbeitung"
      },
      {
        "description": "Die Stoffbearbeitung gibt dem Helden die Möglichkeit, Hemden, Hosen und andere Kleidungsstücke herzustellen oder zu flicken. Sogar für das Erschaffen von Tuchrüstungen kann man dieses Talent verwenden.",
        "name": "Stoffbearbeitung"
      }
    ]
  },
  {
    "name": "weapon",
    "talents": [
      {
        "description": "hölzerne Waffen. z.B.: Speere und Holzspeere, Armbrüste, Bögen, Wurfkeulen, aber auch Waffen aus Horn oder Knochen",
        "name": "Holzbearbeitung"
      },
      {
        "description": "metallische Waffen. z.B.: Schwerter, Streitäxte, Zweihänder",
        "name": "Metallbearbeitung"
      },
      {
        "description": "steinerne Waffen. z.B.: Druidendolch",
        "name": "Steinbearbeitung"
      }
    ]
  },
  {
    "name": "armor",
    "talents": [
      {
        "description": "Holzrüstungen, Hornrüstungen, Knochenrüstungen",
        "name": "Holzbearbeitung"
      },
      {
        "description": "Lederrüstungen, Schuppenrüstungen aus echten Drachenschuppen",
        "name": "Lederbearbeitung"
      },
      {
        "description": "Kettenrüstungen, Schuppenrüstungen, Plattenrüstungen",
        "name": "Metallbearbeitung"
      },
      {
        "description": "Stoffrüstungen",
        "name": "Stoffbearbeitung"
      }
    ]
  }
];

export const Intervals = [
  {
    "type": "weapon",
    "intervals": [
      {"name": "Armbrüste", "interval": 3, "unit": "Tage"},
      {"name": "Bögen", "interval": 6, "unit": "Stunden"},
      {"name": "Dolche", "interval": 4, "unit": "Stunden"},
      {"name": "Fechtwaffen", "interval": 1, "unit": "Tag"},
      {"name": "Hiebwaffen", "interval": 2, "unit": "Stunden"},
      {"name": "Kettenwaffen", "interval": 6, "unit": "Stunden"},
      {"name": "Lanzen", "interval": 2, "unit": "Stunden"},
      {"name": "Peitschen", "interval": 2, "unit": "Stunden"},
      {"name": "Raufen", "interval": 2, "unit": "Stunden"},
      {"name": "Schilde", "interval": 4, "unit": "Stunden"},
      {"name": "Schleudern", "interval": 1, "unit": "Stunde"},
      {"name": "Schwerter", "interval": 1, "unit": "Tag"},
      {"name": "Stangenwaffen", "interval": 6, "unit": "Stunden"},
      {"name": "Wurfwaffen", "interval": 4, "unit": "Stunden"},
      {"name": "Zweihandhiebwaffen", "interval": 1, "unit": "Tag"},
      {"name": "Zweihandschwerter", "interval": 1, "unit": "Tag"},
    ]
  },
  {
    "type": "armor",
    "intervals": [
      {"name": "Normale Kleidung", "interval": 2, "unit": "Stunden"},
      {"name": "Schwere Kleidung", "interval": 2, "unit": "Stunden"},
      {"name": "Stoffrüstung", "interval": 3, "unit": "Stunden"},
      {"name": "Lederrüstung", "interval": 6, "unit": "Stunden"},
      {"name": "Holzrüstung", "interval": 8, "unit": "Stunden"},
      {"name": "Kettenrüstung", "interval": 1, "unit": "Tag"},
      {"name": "Schuppenrüstung", "interval": 12, "unit": "Stunden"},
      {"name": "Plattenrüstung", "interval": 1, "unit": "Tag"},
      {"name": "Turnierrüstung", "interval": 2, "unit": "Tage"}
    ]
  }
];

export const Materials = {
  "weapons": [
    {
      "type": "Metall",
      "materials": [
        {"name": "Bronze", "effect": "-1 TP", "modifier": 1, "bf": -4},
        {"name": "Eisen", "effect": "-1 TP", "modifier": 1, "bf": -2},
        {"name": "Grassodenerz", "effect": "keine Effekte", "modifier": -1, "bf": -2},
        {"name": "Großer Fluss-Stahl", "effect": "keine Effekte", "modifier": 0  , "bf": -0},
        {"name": "Khunchomer Stahl", "effect": "keine Effekte", "modifier": "bei Fechtwaffen: -1; bei Schwerter: +1", "bf": -1},
        {"name": "Maraskanstahl", "effect": "keine Effekte", "modifier": 1, "bf": 1},
        {"name": "Mirhamer Stahl", "effect": "Resistenz gegen Rost", "modifier": 0, "bf": 0},
        {"name": "Premer Stahl", "effect": "keine Effekte", "modifier": -1, "bf": 0},
        {"name": "Toschkril", "effect": "+2 TP, Resistenz gegen Säure", "modifier": -3, "bf": 4, "tries": 5},
        {"name": "Uhdenberger Stahl", "effect": "keine Effekte", "modifier": -1, "bf": 0},
        {"name": "Zwergenstahl", "effect": "keine Effekte", "modifier": 2, "bf": 2}
      ]
    },
    {
      "type": "Holz",
      "materials": [
        {"name": "Ebenholz", "effect": "keine Effekte", "modifier": "bei Bögen: +2; bei anderen Kampftechniken: +/-0", "bf": 1},
        {"name": "Eisenbaum", "effect": "+1 TP", "modifier": "-2", "bf": 3},
        {"name": "Steineiche", "effect": "+1 TP", "modifier": "-1", "bf": 4},
        {"name": "Zyklopenzeder", "effect": "keine Effekte", "modifier": "+1", "bf": 0},
        {"name": "Horn", "effect": "-1 TP", "modifier": "1", "bf": -2},
        {"name": "Knochen", "effect": "-2 TP", "modifier": "0", "bf": -2}
      ]
    },
    {
      "type": "Stein",
      "materials": [
        {"name": "Vulkanglas", "effect": "-1 TP, Nur bestimmte Waffen/Rüstungen, etwa Speere, Beile und Messer eignen sich als Steinwaffen.", "modifier": "2", "bf": -2},
        {"name": "Feuerstein", "effect": "+1 TP gegen Metallrüstungen, Nur bestimmte Waffen/Rüstungen, etwa Speere, Beile und Messer eignen sich als Steinwaffen.", "modifier": -4, "bf": 1}
      ]
    }
  ],
  "armors": [
    {
      "type": "Metall",
      "materials": [
        {"name": "Bronze", "effects": "-1 RS", "modifier": "+2", "structure": "-4"},
        {"name": "Großer Fluss-Stahl", "effects": "keine Effekte", "modifier": "+/-0", "structure": "+/-0"},
        {"name": "Khunchomer Stahl", "effects": "Abzüge auf INI durch BE können ignoriert werden", "modifier": "+/-0", "structure": "-1"},
        {"name": "Maraskanstahl", "effects": "Abzüge auf GS und INI durch BE können ignoriert werden", "modifier": "+1", "structure": "+1"},
        {"name": "Mirhamer Stahl", "effects": "Resistenz gegen Rost", "modifier": "+/-0", "structure": "+/-0"},
        {"name": "Premer Stahl", "effects": "keine Effekte", "modifier": "+1", "structure": "+/-0"},
        {"name": "Toschkril", "effects": "+1 RS", "modifier": "-3", "structure": "+4", "tries": 5},
        {"name": "Uhdenberger Stahl", "effects": "keine Effekte", "modifier": "-1", "structure": "+/-0"},
        {"name": "Zwergenstahl", "effects": "keine Effekte", "modifier": "+2", "structure": "+2"}
      ]
    },
    {
      "type": "Holz",
      "materials": [
        {"name": "Ebenholz", "effects": "keine Effekte", "modifier": "+/-0", "structure": "+1"},
        {"name": "Eisenbaum", "effects": "Abzüge auf GS und INI durch BE können ignoriert werden", "modifier": "-2", "structure": "+3"},
        {"name": "Steineiche", "effects": "+1 RS, +2 BE", "modifier": "-1", "structure": "+4"},
        {"name": "Zyklopenzeder", "effects": "keine Effekte", "modifier": "+1", "structure": "+/-0"},
        {"name": "Horn", "effects": "keine Effekte", "modifier": "-1", "structure": "-2"},
        {"name": "Knochen", "effects": "keine Effekte", "modifier": "-1", "structure": "-2"}
      ]
    },
    {
      "type": "Stoff",
      "materials": [
        {"name": "Drôler Stoff", "effects": "keine Effekte", "modifier": "+1", "structure": "+/-0"},
        {"name": "Phraischafwolle", "effects": "Abzüge auf GS durch BE können ignoriert werden", "modifier": "+/-0", "structure": "+1"}
      ]
    },
    {
      "type": "Leder",
      "materials": [
        {"name": "Iryanleder", "effects": "Feuerfest: Gegen Angriffe durch Feuer (z. B. einen Ignifaxius oder den Flammenstrahl eines Drachen) zählt der RS doppelt.", "modifier": "+1", "structure": "+/-0"},
        {"name": "Wollnashornleder", "effects": "kein Schaden durch Messergras", "modifier": "-1", "structure": "+1"}
      ]
    }
  ]
};

export const Enhancements = {
  "weapons": [
    {"effect": "+1 AT-Modifikator", "modifier": -1, "interval": 2},
    {"effect": "+1 PA-Modifikator", "modifier": -2, "interval": 3},
    {"effect": "+1 TP", "modifier": -1, "interval": 4},
    {"effect": "+10 % Reichweite von Fernkampfwaffen", "modifier": -1, "interval": 3},
    {"effect": "+1 Bruchfaktorwert", "modifier": -1, "interval": 1.5}
  ],
  "armors": [
    {"effect": "+1 RS", "modifier": -5, "interval": 5},
    {"effect": "Ignorieren von –1 GS durch BE oder zusätzliche Abzüge", "modifier": -1, "interval": 2},
    {"effect": "Ignorieren von –1 INI durch BE oder zusätzliche Abzüge", "modifier": -1, "interval": 2},
    {"effect": "+1 Stabilitätswert", "modifier": -1, "interval": 1.5}
  ]
};

export const Secrets = [
  {
    "name": "Arkanium"
    "description": "Das von Arkanium ist nur wenigen Schmieden, vor allem in den Tulamidenlanden, geläufig.",
    "requirements": "Metallbearbeitung 14",
    "ap": 4
  },
  {
    "name": "Endurium"
    "description": "Nur ganz, ganz wenige Schmiede kennen das Geheimnis des Enduriums und seiner Verarbeitung.",
    "requirements": "Metallbearbeitung 16",
    "ap": 5
  },
  {
    "name": "Mindorium"
    "description": "Wie man aus Mindorit Mindorium gewinnt, ist zwar ein gut gehütetes Geheimnis, aber hin und wieder gibt es Schmiede, die sich darauf verstehen.",
    "requirements": "Metallbearbeitung 12",
    "ap": 3
  },
  {
    "name": "Titanium"
    "description": "So gut wie niemand weiß, wie man Titanium verarbeitet – da es einfach noch niemand ausprobieren konnte.",
    "requirements": "Metallbearbeitung 18",
    "ap": 6
  }
];


export const MagicMetals = {
  "armors": [
    {
      "info": "Aus diesen Materialien lassen sich nur Plattenrüstungen herstellen.",
      "name": "Arkanium",
      "price": "2.000 Dukaten pro Stein",
      "purities": [
        {
          "structure": "+/–0",
          "effect": "+1 RS gegen magische Angriffe, Rüstung magisch",
          "modifier": "–3",
          "purity": 10
        },
        {
          "structure": "+/–0",
          "effect": "+2 RS gegen magische Angriffe, Rüstung magisch",
          "modifier": "–6",
          "purity": 25
        }
      ]
    },
    {
      "name": "Endurium",
      "price": "12.000 Dukaten pro Stein",
      "purities": [
        {
          "structure": "1",
          "effect": "+1 RS, Rüstung magisch",
          "modifier": "–2",
          "purity": 10
        },
        {
          "structure": "2",
          "effect": "+2 RS, Rüstung magisch",
          "modifier": "–3",
          "purity": 25
        },
        {
          "structure": "8",
          "effect": "+3 RS, Rüstung magisch",
          "modifier": "–4",
          "purity": 100
        }
      ],
      "tries": 5
    },
    {
      "info": "Aus diesen Materialien lassen sich nur Plattenrüstungen herstellen.",
      "name": "Mindorium",
      "price": "200 Dukaten pro Stein",
      "purities": [
        {
          "structure": "+/–0",
          "effect": "+1 RS gegen Geister, Rüstung magisch",
          "modifier": "–2",
          "purity": 10
        },
        {
          "structure": "+/–0",
          "effect": "+2 RS gegen Geister, Rüstung magisch",
          "modifier": "–4",
          "purity": 25
        }
      ]
    },
    {
      "name": "Titanium",
      "price": "Titanium: 200.000 Dukaten pro Stein",
      "purities": [
        {
          "structure": "5",
          "effect": "+2 RS, Abzüge auf GS und INI durch BE können ignoriert werden, Rüstung magisch",
          "modifier": "–5",
          "purity": 10
        },
        {
          "structure": "10",
          "effect": "+3 RS, Abzüge auf GS und INI durch BE können ignoriert werden, Rüstung magisch",
          "modifier": "–6",
          "purity": 25
        },
        {
          "structure": "15",
          "effect": "+4 RS, Abzüge auf GS und INI durch BE können ignoriert werden, Rüstung magisch",
          "modifier": "–7",
          "purity": 100
        }
      ],
      "tries": 5
    }
  ],
  "weapons": [
    {
      "info": "Aus diesem Material lassen sich nur Streitkolben, Rabenschnäbel, Morgensterne und ähnliche Wuchtwaffen ohne Klinge herstellen.",
      "name": "Arkanium",
      "price": "2.000 Dukaten pro Stein",
      "purities": [
        {
          "bf": "–1",
          "effect": "+2 TP gegen magische Wesen, Waffe magisch",
          "modifier": "+/–0",
          "purity": 50
        },
        {
          "bf": "+/–0",
          "effect": "+3 TP gegen magische Wesen, Waffe magisch",
          "modifier": "–1",
          "purity": 75
        },
        {
          "bf": "+1",
          "effect": "+4 TP gegen magische Wesen, Waffe magisch",
          "modifier": "–2",
          "purity": 100
        }
      ]
    },
    {
      "name": "Endurium",
      "price": "12.000 Dukaten pro Stein",
      "purities": [
        {
          "bf": "1",
          "effect": "+1 TP, Waffe magisch",
          "modifier": "–3",
          "purity": 25
        },
        {
          "bf": "2",
          "effect": "+1 TP, +1 AT-Mod, Waffe magisch",
          "modifier": "–3",
          "purity": 50
        },
        {
          "bf": "4",
          "effect": "+2 TP, +1 AT-Mod, Waffe magisch",
          "modifier": "–3",
          "purity": 100
        }
      ],
      "tries": 5
    },
    {
      "info": "Aus diesem Material lassen sich nur Streitkolben, Rabenschnäbel, Morgensterne und ähnliche Wuchtwaffen ohne Klinge herstellen.",
      "name": "Mindorium",
      "price": "200 Dukaten pro Stein",
      "purities": [
        {
          "bf": "–1",
          "effect": "+1 TP gegen magische Wesen, Waffe magisch",
          "modifier": "+/–0",
          "purity": 50
        },
        {
          "bf": "–1",
          "effect": "+1 TP gegen magische Wesen, doppelter Schaden gegen Geister (dafür kein Bonus-TP von +1) , Waffe magisch",
          "modifier": "–1",
          "purity": 75
        },
        {
          "bf": "–1",
          "effect": "+2 TP gegen magische Wesen, doppelter Schaden gegen Geister (dafür keine Bonus-TP von +2) , Waffe magisch",
          "modifier": "–2",
          "purity": 100
        }
      ]
    },
    {
      "name": "Titanium",
      "price": "Titanium: 200.000 Dukaten pro Stein",
      "purities": [
        {
          "bf": "5",
          "effect": "+3 TP, Waffe magisch",
          "modifier": "–5",
          "purity": 25
        },
        {
          "bf": "10",
          "effect": "+3 TP, +1 AT-Mod, unzerbrechlich, Waffe magisch",
          "modifier": "–5",
          "purity": 50
        },
        {
          "bf": "15",
          "effect": "+4 TP, +1 AT-Mod, unzerbrechlich, Waffe magisch",
          "modifier": "–5",
          "purity": 100
        }
      ],
      "tries": 5
    }
  ]
}
