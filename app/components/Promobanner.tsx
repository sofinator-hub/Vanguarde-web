export default function PromoBanner() { 
  return ( 
    <section
      className="
        relative
        overflow-hidden
        bg-[#f2b9d8]
        py-10
      "
    >
      {/* GLOW SOLO DESKTOP */}

      <div
        className="
          hidden
          md:block
          absolute
          left-1/2
          top-1/2
          h-[300px]
          w-[300px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/20
          blur-[60px]
        "
      />

      {/* CONTENT */}

      <div
        className="
          relative
          z-10
          flex
          flex-wrap
          items-center
          justify-center
          gap-6
          px-6
          text-center
        "
      > 
        <span
          className="
            text-black
            text-sm
            md:text-lg
            uppercase
            tracking-[0.35em]
            font-medium
          "
        >
          Beauty
        </span>

        <span
          className="
            hidden
            md:block
            text-black/40
            text-2xl
          "
        >
          ✦
        </span>

        <span
          className="
            text-black
            text-sm
            md:text-lg
            uppercase
            tracking-[0.35em]
            font-medium
          "
        >
          Wellness
        </span>

        <span
          className="
            hidden
            md:block
            text-black/40
            text-2xl
          "
        >
          ✦
        </span>

        <span
          className="
            text-black
            text-sm
            md:text-lg
            uppercase
            tracking-[0.35em]
            font-medium
          "
        >
          Luxury Care
        </span>

        <span
          className="
            hidden
            md:block
            text-black/40
            text-2xl
          "
        >
          ✦
        </span>

        <span
          className="
            text-black
            text-sm
            md:text-lg
            uppercase
            tracking-[0.35em]
            font-medium
          "
        >
          Vanguarde Studio
        </span>
      </div> 
    </section>
  );
}