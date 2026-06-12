export default function Navbar() { 
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-5">

      <div
        className="
          max-w-[1500px]
          mx-auto
          flex
          items-center
          justify-between
          rounded-full
          border
          border-white/10
          bg-[#08080A]/90 
          px-5
          md:px-10
          py-4
        "
      >

        {/* LOGO */}

        <div>

          <h1
            className="
              text-sm
              md:text-2xl
              tracking-[0.35em]
              text-white
              uppercase
              whitespace-nowrap
            "
          >
            Vanguarde
          </h1>

          <p
            className="
              mt-1
              text-[8px]
              md:text-[10px]
              tracking-[0.35em]
              text-[#f2b9d8]
              uppercase
            "
          >
            Beauty Studio
          </p>

        </div>

        {/* LINKS */}

        <nav
          className="
            hidden
            lg:flex
            items-center
            gap-14
            text-sm
            uppercase
            tracking-[0.15em]
            text-zinc-300
          "
        >

          <a
            href="#"
            className="transition-colors hover:text-[#f2b9d8]"
          >
            Inicio
          </a>

          <a
            href="#services"
            className="transition-colors hover:text-[#f2b9d8]"
          >
            Servicios
          </a>

          <a
            href="#spa"
            className="transition-colors hover:text-[#f2b9d8]"
          >
            Spa
          </a>

          <a
            href="#gallery"
            className="transition-colors hover:text-[#f2b9d8]"
          >
            Galería
          </a>

          <a
            href="#contact"
            className="transition-colors hover:text-[#f2b9d8]"
          >
            Contacto
          </a>

        </nav>

        {/* WHATSAPP BUTTON */}

        <a
          href="https://wa.me/525542583726?text=Hola%20Vanguarde,%20me%20gustaría%20agendar%20una%20cita."
          target="_blank"
          rel="noopener noreferrer"
          className="
            bg-[#f2b9d8]
            text-black
            px-5
            md:px-8
            py-3
            rounded-full
            text-xs
            md:text-base
            font-medium
            hover:scale-105
            transition-transform
            whitespace-nowrap
            flex
            items-center
            justify-center
          "
        >
          Agenda tu cita
        </a>

      </div>

    </header>
  );
}