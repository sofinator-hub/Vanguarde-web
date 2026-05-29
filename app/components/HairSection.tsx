"use client";

import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Tintes",
    image: "/hair1.jpg",
  },
  {
    number: "02",
    title: "Balayage",
    image: "/hair2.jpg",
  },
  {
    number: "03",
    title: "Cortes",
    image: "/hair3.jpg",
  },
  {
    number: "04",
    title: "Tratamientos",
    image: "/hair4.jpg",
  },
    {
    number: "05",
    title: "Alaciado",
    image: "/hair5.jpg",
  },
      {
    number: "06",
    title: "Extensiones",
    image: "/hair6.jpg",
  },
];

export default function HairSection() {
  return (
    <section
      id="services"
      className="relative bg-[#050507] py-24 overflow-hidden"
    >

      {/* GRID */}

      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      {/* CONTENT */}

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-10">

        {/* TOP */}

        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-16">

          <div>

            <p className="uppercase tracking-[0.35em] text-[#f2b9d8] text-xs md:text-sm mb-5">
              Cabello
            </p>

            <h2
              className="
                text-[#f8efea]
                text-5xl
                md:text-7xl
                leading-none
                font-light
              "
            >
              Transformación
              <br />
              & estilo.
            </h2>

          </div>

          <p
            className="
              text-white/60
              max-w-[500px]
              text-base
              md:text-lg
              leading-relaxed
            "
          >
            Técnicas modernas, colorimetría premium
            y cuidado profesional para elevar tu imagen
            con resultados naturales y sofisticados.
          </p>

        </div>

        {/* CARDS */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-6
            gap-6
          "
        >

          {services.map((service) => (
            <div
              key={service.title}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                bg-[#0b0b10]
                border
                border-white/5
                h-[500px]
              "
            >

              {/* IMAGE */}

              <Image
                src={service.image}
                alt={service.title}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              {/* OVERLAY */}

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* CONTENT */}

              <div className="absolute inset-0 p-7 flex flex-col justify-between">

                <div className="flex items-start justify-between">

                  <span className="text-white/40 text-sm tracking-[0.2em]">
                    {service.number}
                  </span>

                  <button
                    className="
                      w-12
                      h-12
                      rounded-full
                      border
                      border-white/20
                      backdrop-blur-md
                      text-white
                      text-lg
                      transition-all
                      hover:bg-[#f2b9d8]
                      hover:text-black
                    "
                  >
                    ↗
                  </button>

                </div>

                <div>

                  <h3
                    className="
                      text-[#f8efea]
                      text-3xl
                      font-light
                      mb-3
                    "
                  >
                    {service.title}
                  </h3>

                  <div
                    className="
                      h-[1px]
                      w-0
                      bg-[#f2b9d8]
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}