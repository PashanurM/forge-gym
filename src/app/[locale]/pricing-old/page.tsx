import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { pricingPlans } from "@/data/pricing";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Membership pricing",
};

type Props = { params: Promise<{ locale: string }> };

export default async function PricingOldPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.pricingOld");
  const tBrand = await getTranslations("brand");
  const tc = await getTranslations("common");
  const tPricing = await getTranslations("content.pricing");

  return (
    <>
      <PageHero
        eyebrow={tBrand("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />
      <section className="section-pad pt-0">
        <div className="container-forge grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => {
            const key = plan.slug || plan.name.toLowerCase().replace(/\s+/g, "-");
            const name = tPricing(`${key}.name`);
            const features = tPricing.raw(`${key}.features`) as string[];
            return (
              <div
                key={plan.id}
                className={cn(
                  "card-glass p-8 flex flex-col",
                  plan.highlighted && "border-accent/50 bg-accent/5",
                )}
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                {plan.highlighted ? (
                  <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">
                    {tc("mostPopular")}
                  </p>
                ) : null}
                <h2 className="font-display text-5xl">{name}</h2>
                <p className="mt-2 text-muted">{tPricing(`${key}.description`)}</p>
                <p className="mt-6 font-display text-6xl text-accent">
                  ${plan.price}
                  <span className="text-lg text-muted font-sans ml-1">
                    / {plan.period}
                  </span>
                </p>
                <ul className="mt-8 space-y-3 flex-1">
                  {features.map((f) => (
                    <li
                      key={f}
                      className="text-muted border-b border-border/60 pb-2"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    href="/register"
                    variant={plan.highlighted ? "primary" : "ghost"}
                    className="w-full"
                  >
                    {tc("startPlan", { name })}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
