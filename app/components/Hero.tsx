import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050507]">
      {/* GRID */} 

      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      {/* GLOW - SOLO DESKTOP */}

      <div
        className="
          hidden md:block
          absolute
          right-0
          top-1/2
          -translate-y-1/2
          w-[600px]
          h-[600px]
          bg-[#f2b9d8]/20
          blur-[80px]
          rounded-full
        "
      />

      {/* HERO CONTENT */}

      <div
        className="
          relative
          z-10
          max-w-[1500px]
          mx-auto
          px-6
          md:px-12
          pt-36
          md:pt-40 
          flex
          items-center
          min-h-screen
        "
      > 
        <div
          className="
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-10
            w-full
          "
        > 
          {/* LEFT */}

          <div className="w-full lg:w-[48%] text-center lg:text-left">
            <p 
              className="
                uppercase
                tracking-[0.35em]
                text-[#f2b9d8]
                text-[10px]
                md:text-sm
                mb-6
              "
            >
              Tu esencia. Nuestro arte.
            </p>

            <h1 className="leading-[0.85] font-light">
              <span 
                className="
                  block
                  text-[#f8efea]
                  text-[4rem]
                  sm:text-[5rem]
                  md:text-[6rem]
                  lg:text-[8rem]
                "
              >
                Belleza
              </span>

              <span
                className="
                  block
                  italic
                  text-[#f2b9d8]
                  text-[3.5rem]
                  sm:text-[4.5rem]
                  md:text-[5rem]
                  lg:text-[7rem]
                "
              >
                que te
              </span>

              <span
                className="
                  block
                  italic
                  text-[#f2b9d8]
                  text-[3.5rem]
                  sm:text-[4.5rem]
                  md:text-[5rem]
                  lg:text-[7rem]
                "
              >
                define.
              </span>
            </h1> 

            <p
              className="
                mt-6
                text-white/65
                text-base
                md:text-[1.2rem]
                leading-relaxed
                max-w-[580px]
                mx-auto
                lg:mx-0
              "
            >
              Estética avanzada, tendencias en cabello,
              spa y bienestar en un solo lugar.
            </p>

            {/* BUTTONS */}

            <div
              className="
                flex
                flex-col
                sm:flex-row
                items-center
                justify-center
                lg:justify-start
                gap-4
                mt-10
              "
            > 
              <button
                className="
                  w-full
                  sm:w-auto
                  bg-[#f2b9d8]
                  text-black
                  px-8
                  py-4
                  rounded-full
                  text-sm
                  md:text-lg
                  font-semibold
                  hover:scale-105
                  transition-transform
                "
              >
                VER SERVICIOS
              </button>

              <button
                className="
                  w-full
                  sm:w-auto
                  border
                  border-[#f2b9d8]/40
                  text-white
                  px-8
                  py-4
                  rounded-full
                  text-sm
                  md:text-lg
                  hover:bg-[#f2b9d8]
                  hover:text-black
                  transition-all
                "
              >
                AGENDAR CITA
              </button>
            </div> 
          </div>

          {/* RIGHT */}

          <div
            className="
              relative
              w-full
              lg:w-[52%]
              flex
              justify-center
              lg:justify-end
              items-end
            " 
          > 
            <Image
              src="/modelo_cabello5.webp"
              alt="Beauty Model"
              width={850}
              height={1000}
              priority
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 850px"
              className="
                object-contain
                h-[55vh]
                sm:h-[65vh]
                md:h-[75vh]
                lg:h-[88vh]
                w-auto
                relative
                z-10
                scale-105
                lg:translate-y-6
                drop-shadow-[0_0_50px_rgba(242,185,216,0.18)]
              "
            />
          </div> 
        </div> 
      </div> 
    </section>
  );
}