import site from "@/config/site.json";

export function ThemeColors() {
  const c = site.colors;
  const css = `:root {
  --bg: ${c.bg};
  --bg-elevated: ${c.bgElevated};
  --surface: ${c.surface};
  --surface-2: ${c.surface2};
  --text: ${c.text};
  --muted: ${c.muted};
  --accent: ${c.accent};
  --accent-2: ${c.accent2};
}`;
  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
