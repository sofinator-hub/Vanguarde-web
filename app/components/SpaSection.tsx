import Image from "next/image"; 

const spaServices = [
  {
    title: "Faciales",
    image: "/spa1.webp",
  },
  {
    title: "Manicure",
    image: "/spa2.webp",
  },
  {
    title: "Botox",
    image: "/spa3.webp",
  },
  {
    title: "Cejas & Pestañas",
    image: "/spa4.webp",
  },
];

export default function SpaSection() {
  return (
    <section
      id="spa"
      className="relative overflow-hidden bg-[#efe5df] py-28"
    >
      {/* GLOW - SOLO DESKTOP */}

      <div
        className="
          hidden md:block
          absolute
          left-[-200px]
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

        <div className="lg:w-[28%]"> 
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#d89cbc] md:text-sm">
            Spa & Bienestar
          </p>

          <h2
            className="
              text-5xl
              font-light
              leading-none
              text-[#1a1a1a]
              md:text-7xl
            "
          >
            Rituales
            <br />
            de belleza.
          </h2>

          <p
            className="
              mt-8
              max-w-[400px]
              text-base
              leading-relaxed
              text-black/60
              md:text-lg
            "
          >
            Tratamientos premium diseñados para revitalizar cuerpo y piel en una
            experiencia sofisticada, relajante y completamente personalizada.
          </p>

          <button
            className="
              mt-10
              rounded-full
              border
              border-black/10
              bg-white/70
              px-8
              py-4
              text-sm
              uppercase
              tracking-[0.15em]
              text-black
              transition-transform
              hover:scale-105
            "
          >
            Ver experiencias
          </button> 
        </div>

        {/* RIGHT */}

        <div
          className="
            grid
            flex-1
            grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {spaServices.map((service) => (
            <div
              key={service.title}
              className="
                group
                relative
                overflow-hidden
                rounded-t-[8rem]
                rounded-b-[2rem]
                bg-white/80
                border
                border-black/5
                md:backdrop-blur-xl
                transition-transform
                duration-500
                hover:-translate-y-3
              "
            >
              {/* IMAGE */} 

              <div className="relative h-[420px] overflow-hidden">
                <Image 
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1024px) 50vw,
                    25vw
                  "
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                /> 
              </div>

              {/* CONTENT */}

              <div className="flex items-center justify-between p-6"> 
                <h3
                  className="
                    text-xl
                    font-light
                    text-[#1a1a1a]
                    md:text-2xl
                  "
                >
                  {service.title}
                </h3>

                <button
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-black/10
                    text-black
                    transition-all
                    hover:bg-black
                    hover:text-white
                  "
                >
                  ↗
                </button> 
              </div> 
            </div>
          ))}
        </div> 
      </div>
    </section> 
  );
}