import { notFound } from "next/navigation";
import { hairServices } from "@/app/data/hair-services";
import { spaServices } from "@/app/data/spa-services";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service =
    hairServices[slug as keyof typeof hairServices] ??
    spaServices[slug as keyof typeof spaServices];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050507] text-[#f8efea]">
      {/* HERO */}

      <section className="relative overflow-hidden">
        {/* GRID */}

        <div
          className="
            absolute inset-0
            bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),
            linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)]
            bg-[size:80px_80px]
          "
        />

        {/* GLOW */}

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
            bg-[#f2b9d8]/15
            blur-[100px]
          "
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <a
            href="/"
            className="
              inline-flex
              items-center
              gap-2
              text-[#f2b9d8]
              mb-8
              hover:opacity-80
            "
          >
            ← Regresar
          </a>

          <p
            className="
              uppercase
              tracking-[0.35em]
              text-[#f2b9d8]
              text-xs
              md:text-sm
            "
          >
            Servicio Premium
          </p>

          <h1
            className="
              mt-4
              text-5xl
              md:text-7xl
              font-light
            "
          >
            {service.title}
          </h1>

          <p
            className="
              mt-6
              max-w-3xl
              text-white/65
              text-base
              md:text-lg
              leading-relaxed
            "
          >
            {service.description}
          </p>
        </div>
      </section>

      {/* PRECIOS */}

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2
          className="
            text-4xl
            md:text-5xl
            font-light
            mb-10
          "
        >
          Precios
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {service.prices.map((price) => (
            <div
              key={price.name}
              className="
                rounded-[2rem]
                border
                border-white/10
                bg-white/[0.03]
                p-8
              "
            >
              <p className="text-white/50 mb-3">
                {price.name}
              </p>

              <h3
                className="
                  text-3xl
                  text-[#f2b9d8]
                  font-light
                "
              >
                {price.value}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* INCLUYE */}

      {"extras" in service &&
        Array.isArray(service.extras) &&
        service.extras.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 pb-20">
            <h2
              className="
                text-4xl
                md:text-5xl
                font-light
                mb-10
              "
            >
              Incluye
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              {service.extras.map((item) => (
                <div
                  key={item}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-5
                  "
                >
                  ✦ {item}
                </div>
              ))}
            </div>
          </section>
        )}

      {/* CTA */}

      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div
          className="
            rounded-[2rem]
            border
            border-white/10
            bg-white/[0.03]
            p-10
            text-center
          "
        >
          <h2
            className="
              text-4xl
              md:text-5xl
              font-light
            "
          >
            Agenda tu cita
          </h2>

          <p
            className="
              mt-4
              text-white/60
              max-w-2xl
              mx-auto
            "
          >
            Reserva tu servicio y recibe atención
            personalizada para lograr el resultado
            que deseas.
          </p>

          <a
            href={`https://wa.me/525542583726?text=Hola%20Vanguarde,%20me%20interesa%20el%20servicio%20de%20${service.title}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              mt-8
              rounded-full
              bg-[#f2b9d8]
              px-8
              py-4
              font-semibold
              text-black
              transition-transform
              hover:scale-105
            "
          >
            Agendar por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}