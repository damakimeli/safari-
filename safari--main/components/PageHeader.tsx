export default function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-12 pt-20">
      <p className="coord-label mb-3">{eyebrow}</p>
      <h1 className="mb-4 text-4xl text-white md:text-5xl">{title}</h1>
      {intro && <p className="text-lg text-neutral-400">{intro}</p>}
      <div className="horizon-line mt-10" />
    </div>
  );
}