const treatments = [ 
  { 
    title: "Hidratación Profunda",
    description:
      "Devuelve brillo, suavidad y nutrición intensa para un cabello saludable y luminoso.",
  },
  {
    title: "Limpieza Profunda",
    description:
      "Purifica cuero cabelludo y elimina residuos acumulados para revitalizar tu cabello.",
  },
  {
    title: "Reafirmación & Lifting",
    description:
      "Tecnología estética avanzada para una piel más firme, luminosa y rejuvenecida.",
  },
];

export default function TreatmentsSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#050507]
        py-28
      "
    >
      {/* GRID */} 

      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      {/* GLOW SOLO DESKTOP */}

      <div
        className="
          hidden md:block
          absolute
          right-0
          top-1/2
          h-[500px]
          w-[500px]
          -translate-y-1/2
          rounded-full
          bg-[#f2b9d8]/20
          blur-[80px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-[1600px]
          flex-col
          gap-16
          px-6
          md:px-10
          lg:flex-row
        "
      > 
        {/* LEFT */}

        <div className="lg:w-[30%]"> 
          <p
            className="
              mb-5
              text-xs
              uppercase
              tracking-[0.4em]
              text-[#f2b9d8]
              md:text-sm
            "
          >
            Tecnología & Beauty
          </p>

          <h2
            className="
              text-5xl
              font-light
              leading-none
              text-[#f8efea]
              md:text-7xl
            "
          >
            Tratamientos
            <br />
            avanzados.
          </h2>

          <p
            className="
              mt-8
              max-w-[420px]
              text-base
              leading-relaxed
              text-white/60
              md:text-lg
            "
          >
            Tecnología estética moderna y tratamientos premium diseñados para
            elevar tu bienestar, belleza y cuidado personal.
          </p>

          <button
            className="
              mt-10
              rounded-full
              border
              border-white/10
              bg-white/5
              px-8
              py-4
              text-sm
              uppercase
              tracking-[0.15em]
              text-white
              md:backdrop-blur-xl
              transition-all
              hover:scale-105
              hover:bg-[#f2b9d8]
              hover:text-black
            "
          >
            Conoce más
          </button> 
        </div>

        {/* RIGHT */}

        <div
          className="
            grid
            flex-1
            grid-cols-1
            gap-6
            md:grid-cols-3
          "
        > 
          {treatments.map((treatment, index) => (
            <div
              key={treatment.title}
              className={`
                relative
                overflow-hidden
                rounded-[2.5rem]
                border
                border-white/10
                bg-white/[0.06]
                p-8
                md:backdrop-blur-2xl
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-[#f2b9d8]/30

                ${
                  index === 1
                    ? "md:translate-y-10"
                    : ""
                }
              `}
            >
              {/* MINI GLOW SOLO DESKTOP */}

              <div
                className="
                  hidden md:block
                  absolute
                  right-[-40px]
                  top-[-40px]
                  h-[140px]
                  w-[140px]
                  rounded-full
                  bg-[#f2b9d8]/10
                  blur-[40px]
                "
              />

              {/* ICON */}

              <div
                className="
                  mb-10
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  text-2xl
                  text-[#f2b9d8]
                "
              >
                ✦
              </div>

              {/* CONTENT */}

              <h3
                className="
                  text-2xl
                  font-light
                  leading-snug
                  text-[#f8efea]
                "
              >
                {treatment.title}
              </h3>

              <p
                className="
                  mt-5
                  text-sm
                  leading-relaxed
                  text-white/55
                  md:text-base
                "
              >
                {treatment.description}
              </p>

              {/* BUTTON */}

              <button
                className="
                  mt-10
                  flex
                  items-center
                  gap-2
                  text-sm
                  uppercase
                  tracking-[0.15em]
                  text-[#f2b9d8]
                  transition-all
                  hover:translate-x-2
                "
              >
                + Info
              </button> 
            </div>
          ))}
        </div> 
      </div> 
    </section>
  );
}