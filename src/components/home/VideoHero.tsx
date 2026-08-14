"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";

export function VideoHero() {
  const rootRef = useRef<HTMLElement>(null);
  const t = useTranslations("home");
  const tb = useTranslations("brand");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-brand", { y: 80, opacity: 0, duration: 1 })
        .from(".hero-line", { y: 40, opacity: 0, duration: 0.7 }, "-=0.45")
        .from(".hero-sub", { y: 30, opacity: 0, duration: 0.6 }, "-=0.35")
        .from(".hero-cta", { y: 24, opacity: 0, duration: 0.55 }, "-=0.3")
        .from(".hero-video", { scale: 1.08, duration: 1.6, ease: "power2.out" }, 0);
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative min-h-[100svh] overflow-hidden">
      <video
        className="hero-video absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-training-in-the-gym-5972/1080p.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(10,11,12,0.7)_100%)]" />

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-[clamp(1.25rem,4vw,4rem)] pb-16 pt-28 md:pb-24">
        <p className="hero-brand font-display text-[clamp(3.25rem,12vw,11rem)] leading-[0.85] text-text max-w-full">
          {tb("name")}
        </p>
        <h1 className="hero-line mt-4 max-w-2xl font-display text-[clamp(1.5rem,4.5vw,3.2rem)] text-accent">
          {t("heroHeadline")}
        </h1>
        <p className="hero-sub mt-3 max-w-md text-lg text-muted">{t("heroSub")}</p>
        <div className="hero-cta mt-8 flex flex-wrap gap-4">
          <Button href="/pricing">{t("joinCta")}</Button>
          <Button href="/trainers" variant="ghost">
            {t("bookCta")}
          </Button>
        </div>
      </div>
    </section>
  );
}
