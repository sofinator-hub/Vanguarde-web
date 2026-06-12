export const hairServices = {
  tintes: {
    title: "Bar color",
    theme: "dark",

    image: "/hair1.webp",

    description:
      "Balayage, Babylights, Umbrella, Rayos, Listones y Luces con técnicas profesionales de coloración.",

    prices: [
      {
        name: "Cabello Corto",
        value: "$500 MXN",
      },
      {
        name: "Cabello Mediano",
        value: "$700 MXN",
      },
      {
        name: "Cabello Largo",
        value: "$1000 MXN",
      },
    ],

    extras: [
      "Balayage",
      "Babylights",
      "Umbrella",
      "Rayos",
      "Listones",
      "Luces",
      "Decoloración $300",
      "Extracción de color $300",
      "Tinte parejo corto $300",
      "Tinte parejo largo $400",
      "Rayos, mechas o decoloración + corte caballero $500",
    ],
  },

  cortes: {
    title: "Cortes",
    theme: "dark",

    image: "/hair3.webp",

    description:
      "Cortes para dama, caballero y niños con asesoría personalizada.",

    prices: [
      {
        name: "Precio General",
        value: "$60 MXN",
      },
    ],

    extras: [
      "Corte para dama",
      "Corte para caballero",
      "Corte para niños",
    ],
  },

  alaciados: {
    title: "Alaciados",
    theme: "dark",

    image: "/hair5.webp",

    description:
      "Tratamientos para eliminar frizz, restaurar la fibra capilar y mejorar la apariencia del cabello.",

    prices: [
      {
        name: "Cabello Regular",
        value: "$600 MXN",
      },
      {
        name: "Cabello Extra Largo",
        value: "$1000 MXN",
      },
    ],

    extras: [
      "Alaciado Japonés",
      "Alaciado Brasileño",
      "Keratina",
      "Botox Capilar",
      "Reduce el frizz al instante",
      "Nutre la fibra capilar",
      "Mayor brillo",
      "Mayor suavidad",
    ],
  },

  extensiones: {
    title: "Extensiones",
    theme: "dark",

    image: "/hair6.webp",

    description:
      "Extensiones de cabello 100% humano con aplicación profesional incluida.",

    prices: [
      {
        name: "Extensiones 200g",
        value: "$5000 MXN",
      },
      {
        name: "Colocación",
        value: "$1500 MXN",
      },
      {
        name: "Retoque",
        value: "$500 MXN",
      },
    ],

    extras: [
      "Cabello 100% humano",
      "Microchip",
      "Nanoqueratina",
      "Cualquier tono",
      "Cualquier textura",
      "Aplicación incluida",
      "Material incluido",
    ],
  },

  peinados: {
    title: "Peinados",
    theme: "dark",

    image: "/hair4.webp",

    description:
      "Peinados y maquillaje para graduaciones, bodas, XV años y eventos especiales.",

    prices: [
      {
        name: "Peinado",
        value: "$500 MXN",
      },
      {
        name: "Peinado Niñas",
        value: "$300 MXN",
      },
      {
        name: "Maquillaje",
        value: "$400 MXN",
      },
      {
        name: "Paquete Graduación",
        value: "$700 MXN",
      },
      {
        name: "Paquete Boda",
        value: "$1000 MXN",
      },
    ],

    extras: [
      "Graduaciones",
      "Bodas",
      "XV Años",
      "Eventos Especiales",
      "Maquillaje Profesional",
    ],
  },

permanentes: {
  title: "Permanentes",
  theme: "dark",

  image: "/hair6.webp",

  description:
    "Permanentes para crear rizos definidos, volumen y movimiento con diferentes técnicas profesionales.",

  prices: [
    {
      name: "Cabello Corto",
      value: "$400 MXN",
    },
    {
      name: "Cabello Mediano",
      value: "$500 MXN",
    },
    {
      name: "Cabello Largo",
      value: "$600 MXN",
    },
    {
      name: "Extra Largo",
      value: "$700 MXN",
    },
  ],

  extras: [
    "Rizos",
    "Rulos",
    "Espiral",
    "Boomerang",
    "Carretes",
  ],
},
} as const;