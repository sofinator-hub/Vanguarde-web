export const spaServices = {
  "mantenimiento-facial": {
    title: "Mantenimiento Facial",

    image: "/spa4.webp",

    description:
      "Servicios de mantenimiento estético para cejas, pestañas y depilación facial.",

    prices: [
      {
        name: "Depilación y diseño de ceja",
        value: "$50 MXN",
      },
      {
        name: "Diseño, depilación y planchado de ceja",
        value: "$70 MXN",
      },
      {
        name: "Depilado de bozo",
        value: "$30 MXN",
      },
      {
        name: "Laminado y rizado de pestañas",
        value: "$150 MXN",
      },
      {
        name: "Pestañas volumen extra",
        value: "$500 MXN",
      },
    ],

    extras: [
      "Diseño personalizado",
      "Laminado de cejas",
      "Rizado de pestañas",
      "Acabado profesional",
    ],
  },

  "tratamientos-faciales": {
    title: "Tratamientos Faciales",

    image: "/spa1.webp",

    description:
      "Tratamientos enfocados en rejuvenecer, aclarar y mejorar la apariencia de la piel.",

    prices: [
      {
        name: "Facial antiedad",
        value: "$150 MXN",
      },
      {
        name: "Facial aclarante",
        value: "$100 MXN",
      },
      {
        name: "Mascarilla puntos negros",
        value: "$100 MXN",
      },
      {
        name: "Aclarado y desmanchado de axilas",
        value: "$100 MXN",
      },
      {
        name: "Aclarado y desmanchado de cuello",
        value: "$100 MXN",
      },
      {
        name: "Aclarado y desmanchado de codos y rodillas",
        value: "$100 MXN",
      },
    ],

    extras: [
      "Ayuda a disminuir líneas de expresión",
      "Mejora la textura de la piel",
      "Aclara de 2 a 3 tonos al instante",
      "Limpieza profunda",
      "Eliminación de puntos negros",
    ],
  },

  botox: {
    title: "Botox",

    image: "/spa3.webp",

    description:
      "Procedimientos de rejuvenecimiento facial con aplicación profesional.",

    prices: [
      {
        name: "Botox facial (50 unidades)",
        value: "$1500 MXN",
      },
      {
        name: "Baby Botox",
        value: "$1500 MXN",
      },
    ],

    extras: [
      "Patas de gallo",
      "Líneas de expresión",
      "Rejuvenecimiento facial",
      "Resultados naturales",
    ],
  },

  "tratamientos-capilares": {
    title: "Tratamientos Capilares",

    image: "/spa2.webp",

    description:
      "Tratamientos para restaurar, hidratar y fortalecer la fibra capilar.",

    prices: [
      {
        name: "Botox capilar",
        value: "$500 MXN",
      },
      {
        name: "Keratina",
        value: "$500 MXN",
      },
      {
        name: "Jalea Real",
        value: "$500 MXN",
      },
    ],

    extras: [
      "Hidratación profunda",
      "Restauración de la fibra capilar",
      "Mayor brillo",
      "Mayor suavidad",
      "Control de frizz",
      "Cabello más saludable",
    ],
  },
} as const;