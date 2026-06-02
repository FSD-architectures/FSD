import {
  TemplateFeatures,
  TemplateHero,
  TemplateStructure,
} from "@/widgets";

export function WelcomePage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_34%,#f8fafc_100%)]">
      <TemplateHero />
      <TemplateFeatures />
      <TemplateStructure />
    </main>
  );
}
