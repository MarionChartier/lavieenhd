import { Eyebrow } from "@/components/ui/Eyebrow";

export function Manifeste() {
  return (
    <section className="bg-texture-sage relative overflow-hidden px-6 py-24 text-center md:px-20 md:py-32">
      <div className="relative z-10">
        <Eyebrow centered>Manifeste</Eyebrow>

        <p className="mx-auto mt-8 max-w-[1000px] font-display text-[32px] font-light italic leading-tight text-ink-deep md:text-[56px]">
          Tu n'es <em className="text-turquoise">pas trop</em>.<br />
          Tu n'es pas <em className="text-turquoise">pas assez</em>.<br />
          Tu es exactement ce que tu es venu·e être.
        </p>
      </div>
    </section>
  );
}
