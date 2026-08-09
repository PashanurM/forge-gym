import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { trainers } from "@/data/trainers";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blog";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PinnedHalls } from "@/components/home/PinnedHalls";
import { Testimonials } from "@/components/home/Testimonials";

export async function HomeSections() {
  const t = await getTranslations("home");
  const tc = await getTranslations("common");
  const tTrainers = await getTranslations("content.trainers");
  const tServices = await getTranslations("content.services");
  const tBlog = await getTranslations("content.blog");

  return (
    <>
      <section className="section-pad">
        <div className="container-forge">
          <SectionHeading title={t("coachesTitle")} subtitle={t("coachesSub")} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trainers.map((trainer, i) => (
              <Link
                key={trainer.id}
                href={`/trainers/${trainer.slug}`}
                className="card-forge group block"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
                  <div className="absolute bottom-0 p-5">
                    <p className="font-display text-3xl">{trainer.name}</p>
                    <p className="text-sm text-accent uppercase tracking-wider">
                      {tTrainers(`${trainer.slug}.title`)}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10" data-aos="fade-up">
            <Button href="/trainers" variant="ghost">
              {tc("allTrainers")}
            </Button>
          </div>
        </div>
      </section>

      <PinnedHalls />

      <div className="home-after-pins">
        <section className="section-pad">
          <div className="container-forge">
            <SectionHeading title={t("programsTitle")} subtitle={t("programsSub")} />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.slice(0, 6).map((service, i) => (
                <Link
                  key={service.id}
                  href="/services"
                  className="card-glass p-7 md:p-8 group relative z-10"
                  data-aos="fade-up"
                  data-aos-delay={i * 50}
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-accent">
                    {tServices(`${service.slug}.category`)}
                  </p>
                  <h3 className="mt-3 font-display text-3xl group-hover:text-accent transition-colors">
                    {tServices(`${service.slug}.name`)}
                  </h3>
                  <p className="mt-3 text-muted">
                    {tServices(`${service.slug}.description`)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />

        <section className="relative overflow-hidden section-pad">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1600&q=80"
              alt="Gym floor"
              fill
              className="object-cover opacity-30"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-bg/40" />
          </div>
          <div className="container-forge relative z-10">
            <h2
              className="font-display text-6xl md:text-8xl max-w-xl leading-none"
              data-aos="fade-right"
            >
              {t("pricingTitle")}
            </h2>
            <p
              className="mt-4 max-w-md text-muted text-lg"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {t("pricingSub")}
            </p>
            <div className="mt-8" data-aos="fade-up" data-aos-delay="180">
              <Button href="/pricing">{tc("viewPricing")}</Button>
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="container-forge">
            <SectionHeading title={t("blogTitle")} subtitle={t("blogSub")} />
            <div className="grid gap-6 md:grid-cols-3">
              {blogPosts.map((post, i) => {
                const title = tBlog(`${post.slug}.title`);
                return (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="card-forge group block relative z-10"
                    data-aos="fade-up"
                    data-aos-delay={i * 70}
                  >
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={post.image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width:768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-xs uppercase tracking-wider text-muted">
                        {post.date}
                      </p>
                      <h3 className="mt-2 font-display text-3xl group-hover:text-accent transition-colors">
                        {title}
                      </h3>
                      <p className="mt-2 text-muted">{tBlog(`${post.slug}.excerpt`)}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
