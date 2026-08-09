import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { products } from "@/data/products";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Shop",
};

type Props = { params: Promise<{ locale: string }> };

export default async function ShopPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.shop");
  const tBrand = await getTranslations("brand");
  const tProducts = await getTranslations("content.products");

  return (
    <>
      <PageHero
        eyebrow={tBrand("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />
      <section className="section-pad pt-0">
        <div className="container-forge grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product, i) => {
            const name = tProducts(`${product.slug}.name`);
            return (
              <Link
                key={product.id}
                href={`/shop/${product.slug}`}
                className="card-forge group block"
                data-aos="fade-up"
                data-aos-delay={i * 50}
              >
                <div className="relative aspect-square bg-surface">
                  <Image
                    src={product.image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 30vw"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-wider text-muted">
                    {tProducts(`${product.slug}.category`)}
                  </p>
                  <h2 className="font-display text-2xl group-hover:text-accent transition-colors">
                    {name}
                  </h2>
                  <p className="text-accent mt-1">${product.price}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
