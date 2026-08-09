export function PageHero({
  title,
  subtitle,
  eyebrow = "Forge Athletics",
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}) {
  return (
    <div className="page-hero">
      <div className="container-forge">
        <p
          className="mb-3 text-xs uppercase tracking-[0.25em] text-accent"
          data-aos="fade-down"
          data-aos-duration="700"
        >
          {eyebrow}
        </p>
        <h1
          className="font-display text-[clamp(3.5rem,10vw,7rem)] leading-none"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          {title}
        </h1>
        {subtitle ? (
          <p
            className="mt-4 max-w-2xl text-lg text-muted"
            data-aos="fade-up"
            data-aos-delay="160"
          >
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
}
