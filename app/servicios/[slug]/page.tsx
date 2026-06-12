import { notFound } from "next/navigation";
import Image from "next/image";
import { hairServices } from "@/app/data/hair-services";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service =
    hairServices[slug as keyof typeof hairServices];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050507] text-[#f8efea]">
      <section className="max-w-7xl mx-auto px-6 py-32">
        <Image
          src={service.image}
          alt={service.title}
          width={1400}
          height={800}
          priority
          className="
            w-full
            h-[400px]
            object-cover
            rounded-[2rem]
          "
        />

        <h1 className="mt-12 text-5xl md:text-7xl font-light">
          {service.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-white/70">
          {service.description}
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {service.prices.map((price) => (
            <div
              key={price.name}
              className="
                rounded-[2rem]
                border
                border-white/10
                p-8
              "
            >
              <h3 className="mb-3 text-2xl">
                {price.name}
              </h3>

              <p className="text-3xl text-[#f2b9d8]">
                {price.value}
              </p>
            </div>
          ))}
        </div>

        <a
          href={`https://wa.me/525542583726?text=Hola%20Vanguarde,%20me%20interesa%20el%20servicio%20de%20${service.title}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            mt-16
            rounded-full
            bg-[#f2b9d8]
            px-8
            py-4
            font-semibold
            text-black
          "
        >
          Agendar cita
        </a>
      </section>
    </main>
  );
}