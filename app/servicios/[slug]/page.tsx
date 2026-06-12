import { notFound } from "next/navigation";
import { hairServices } from "@/app/data/hair-services";
import { spaServices } from "@/app/data/spa-services";

type Price = {
  name: string;
  value: string;
};

type Service = {
  title: string;
  description: string;
  prices: readonly Price[];
  extras?: readonly string[];
};

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const hairService =
    hairServices[slug as keyof typeof hairServices];

  const spaService =
    spaServices[slug as keyof typeof spaServices];

  const service = (hairService ||
    spaService) as Service | undefined;

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050507] text-[#f8efea]">
      {/* HERO */}

      <section className="relative overflow-hidden"> 
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),
            linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)]
            bg-[size:80px_80px]
          "
        /> 

        <div
          className=" 
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

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">
          <a
            href="/"
            className="
              inline-flex
              items-center
              gap-2
              text-[#f2b9d8] 
              hover:opacity-80
            "
          >
            ← Regresar
          </a>

          <p
            className="
              mt-10
              text-xs
              uppercase
              tracking-[0.35em]
              text-[#f2b9d8]
              md:text-sm 
            "
          >
            Servicio Premium
          </p>

          <h1
            className="
              mt-4
              text-5xl 
              font-light
              md:text-7xl 
            "
          >
            {service.title}
          </h1>

          <p
            className="
              mt-6
              max-w-3xl
              text-base 
              leading-relaxed
              text-white/65 
              md:text-lg
            "
          >
            {service.description}
          </p>
        </div>
      </section>

      {/* PRECIOS */}

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2
          className="
            mb-10 
            text-4xl 
            font-light
            md:text-5xl 
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
              <p className="mb-3 text-white/50">
                {price.name}
              </p>

              <h3
                className="
                  text-3xl 
                  font-light
                  text-[#f2b9d8] 
                "
              >
                {price.value}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* INCLUYE */}

      {service.extras && (
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <h2
            className="
              mb-10
              text-4xl
              font-light
              md:text-5xl
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

      <section className="mx-auto max-w-7xl px-6 pb-32">
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
              font-light
              md:text-5xl
            " 
          >
            Agenda tu cita
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-white/60
            " 
          >
            Reserva tu servicio y recibe atención
            personalizada.
          </p>

          <a
            href={`https://wa.me/525542583726?text=Hola%20Vanguarde,%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(
              service.title
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className=" 
              mt-8
              inline-flex 
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