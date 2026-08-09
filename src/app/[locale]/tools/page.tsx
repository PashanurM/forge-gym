import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { Calculators } from "@/components/tools/Calculators";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Tools",
};

type Props = { params: Promise<{ locale: string }> };

export default async function ToolsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.tools");
  const tBrand = await getTranslations("brand");
  const tc = await getTranslations("common");

  return (
    <>
      <PageHero
        eyebrow={tBrand("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />
      <section className="section-pad pt-0">
        <div className="container-forge space-y-10">
          <Calculators />
          <div
            className="card-glass p-6 md:p-8 flex flex-wrap items-center justify-between gap-4"
            data-aos="fade-up"
          >
            <div>
              <h2 className="font-display text-3xl">{t("needMachines")}</h2>
              <p className="text-muted mt-1">{t("needMachinesSub")}</p>
            </div>
            <Button href="/equipment">{tc("viewEquipment")}</Button>
          </div>
        </div>
      </section>
    </>
  );
}
