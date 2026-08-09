import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { saloons } from "@/data/saloons";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Halls",
};

type Props = { params: Promise<{ locale: string }> };

export default async function SaloonsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.halls");
  const tBrand = await getTranslations("brand");
  const tc = await getTranslations("common");
  const tHalls = await getTranslations("content.halls");

  return (
    <>
      <PageHero
        eyebrow={tBrand("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />
      <section className="section-pad pt-0">
        <div className="container-forge grid gap-6 md:grid-cols-2">
          {saloons.map((saloon, i) => (
            <Link
              key={saloon.id}
              href={`/saloons/${saloon.slug}`}
              className="card-forge group block"
              data-aos="fade-up"
              data-aos-delay={i * 60}
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={saloon.image}
                  alt={tHalls(`${saloon.slug}.name`)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h2 className="font-display text-4xl group-hover:text-accent transition-colors">
                  {tHalls(`${saloon.slug}.name`)}
                </h2>
                <p className="mt-2 text-muted">
                  {tHalls(`${saloon.slug}.description`)}
                </p>
                <p className="mt-3 text-sm text-accent uppercase tracking-wider">
                  {tc("capacity", { count: saloon.capacity })}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
