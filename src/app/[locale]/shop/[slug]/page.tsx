import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getProductBySlug, products } from "@/data/products";
import { Button } from "@/components/ui/Button";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product" };
  const tProducts = await getTranslations("content.products");
  return { title: tProducts(`${product.slug}.name`) };
}

export default async function ProductPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const tc = await getTranslations("common");
  const tProducts = await getTranslations("content.products");
  const name = tProducts(`${product.slug}.name`);

  return (
    <section className="section-pad pt-28">
      <div className="container-forge grid gap-10 lg:grid-cols-2">
        <div
          className="card-media relative aspect-square"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          <Image
            src={product.image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width:1024px) 100vw, 50vw"
            priority
          />
        </div>
        <div>
          <Link
            href="/shop"
            className="text-sm uppercase tracking-wider text-muted hover:text-accent transition-colors"
            data-aos="fade-left"
          >
            {tc("backShop")}
          </Link>
          <p
            className="mt-4 text-xs uppercase tracking-[0.2em] text-accent"
            data-aos="fade-left"
            data-aos-delay="60"
          >
            {tProducts(`${product.slug}.category`)}
          </p>
          <h1
            className="mt-2 font-display text-6xl leading-none"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            {name}
          </h1>
          <p
            className="mt-4 font-display text-4xl text-accent"
            data-aos="fade-up"
            data-aos-delay="140"
          >
            ${product.price}
          </p>
          <p
            className="mt-6 text-muted text-lg leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="180"
          >
            {tProducts(`${product.slug}.description`)}
          </p>
          <div
            className="mt-8 flex flex-wrap gap-3"
            data-aos="fade-up"
            data-aos-delay="240"
          >
            <Button href="/contact">{tc("inquireInClub")}</Button>
            <Button href="/shop" variant="ghost">
              {tc("moreProducts")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
