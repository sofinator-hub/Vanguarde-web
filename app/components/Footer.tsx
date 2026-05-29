"use client";

import Image from "next/image";

const gallery = [
  "/hair1.webp",
  "/spa2.webp",
  "/modelo_cabello3.webp",
  "/hair4.webp",
  "/spa4.webp",
  "/hair3.webp",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050507]">

      {/* GRID */}

      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      {/* GLOW */}

      <div className="absolute bottom-[-200px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#f2b9d8]/10 blur-[140px]" />

      {/* INSTAGRAM STRIP */}

      <div className="relative z-10 border-b border-white/5">

        <div className="mx-auto max-w-[1700px] px-4 py-8 md:px-8">

          <div className="mb-6 flex items-center justify-between">

            <h3
              className="
                text-xl
                font-light
                text-[#f8efea]
                md:text-2xl
              "
            >
              Síguenos en Instagram
            </h3>

            <p
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-[#f2b9d8]
                md:text-sm
              "
            >
              @VanguardeStudio
            </p>

          </div>

          {/* GALLERY */}

          <div
            className="
              grid
              grid-cols-2
              gap-4
              md:grid-cols-3
              lg:grid-cols-6
            "
          >

            {gallery.map((image, index) => (
              <div
                key={index}
                className="
                  group
                  relative
                  h-[180px]
                  overflow-hidden
                  rounded-[2rem]
                  md:h-[220px]
                "
              >

                <Image
                  src={image}
                  alt="Gallery"
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                <div
                  className="
                    absolute inset-0
                    bg-black/0
                    transition-all
                    duration-500
                    group-hover:bg-black/20
                  "
                />

              </div>
            ))}

          </div>

        </div>

      </div>

      {/* FOOTER CONTENT */}

      <div className="relative z-10 mx-auto max-w-[1700px] px-6 py-20 md:px-10">

        <div
          className="
            grid
            grid-cols-1
            gap-14
            md:grid-cols-2
            lg:grid-cols-5
          "
        >

          {/* BRAND */}

          <div className="lg:col-span-2">

            <h2
              className="
                text-4xl
                font-light
                uppercase
                tracking-[0.35em]
                text-[#f8efea]
                md:text-5xl
              "
            >
              Vanguarde
            </h2>

            <p
              className="
                mt-3
                text-xs
                uppercase
                tracking-[0.35em]
                text-[#f2b9d8]
              "
            >
              Beauty Studio
            </p>

            <p
              className="
                mt-8
                max-w-[420px]
                leading-relaxed
                text-white/55
              "
            >
              Un espacio diseñado para elevar tu belleza,
              bienestar y confianza con experiencias premium
              y atención completamente personalizada.
            </p>

            {/* SOCIALS */}

            <div className="mt-10 flex gap-4">

              {["IG", "FB", "TT", "WA"].map((social) => (
                <button
                  key={social}
                  className="
                    h-12
                    w-12
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    text-white/70
                    transition-all
                    hover:bg-[#f2b9d8]
                    hover:text-black
                  "
                >
                  {social}
                </button>
              ))}

            </div>

          </div>

          {/* NAVIGATION */}

          <div>

            <h4 className="mb-6 text-lg text-[#f8efea]">
              Navegación
            </h4>

            <ul className="space-y-4 text-white/55">

              <li>Inicio</li>
              <li>Servicios</li>
              <li>Spa</li>
              <li>Galería</li>
              <li>Contacto</li>

            </ul>

          </div>

          {/* SERVICES */}

          <div>

            <h4 className="mb-6 text-lg text-[#f8efea]">
              Servicios
            </h4>

            <ul className="space-y-4 text-white/55">

              <li>Cabello</li>
              <li>Faciales</li>
              <li>Pedicure</li>
              <li>Manicure</li>
              <li>Pestañas</li>

            </ul>

          </div>

          {/* CONTACT */}

          <div>

            <h4 className="mb-6 text-lg text-[#f8efea]">
              Contacto
            </h4>

            <ul className="space-y-4 text-white/55">

              <li>+52 55 1234 5678</li>
              <li>contacto@vanguarde.com</li>
              <li>Ciudad de México</li>
              <li>Lun - Sáb / 10AM - 8PM</li>

            </ul>

          </div>

        </div>

        {/* BOTTOM */}

        <div
          className="
            mt-20
            flex
            flex-col
            items-center
            justify-between
            gap-4
            border-t
            border-white/5
            pt-8
            md:flex-row
          "
        >

          <p className="text-sm text-white/35">
            © 2026 Vanguarde Beauty Studio.
          </p>

          <p className="text-sm text-white/25">
            Designed with luxury aesthetics.
          </p>

        </div>

      </div>

    </footer>
  );
}