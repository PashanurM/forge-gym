import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { faqs } from "@/data/faq";
import { PageHero } from "@/components/ui/PageHero";
import { Accordion } from "@/components/ui/Accordion";

export const metadata: Metadata = {
  title: "FAQ",
};

type Props = { params: Promise<{ locale: string }> };

export default async function FaqPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.faq");
  const tBrand = await getTranslations("brand");
  const tFaq = await getTranslations("content.faq");

  const items = faqs.map((faq) => ({
    id: faq.id,
    question: tFaq(`${faq.id}.q`),
    answer: tFaq(`${faq.id}.a`),
  }));

  return (
    <>
      <PageHero
        eyebrow={tBrand("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />
      <section className="section-pad pt-0">
        <div className="container-forge max-w-3xl">
          <Accordion items={items} />
        </div>
      </section>
    </>
  );
}
