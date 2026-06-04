// app/components/HowIWork.tsx
import { getHowIWork } from '@/lib/how-i-work';
import { PrincipleCard } from './PrincipleCard';

export async function HowIWork() {
  const howIWork = await getHowIWork();
  const { principlesCollection, title } = howIWork;

  if (!principlesCollection?.items) return null;

  return (
    <section id="how-i-work" className="space-y-12">
      <div className="space-y-4 text-center">
        <h2 className="text-heading text-3xl font-bold">{title}</h2>
        <p className="text-muted mx-auto max-w-2xl text-sm">
          A systematic approach to solving complex problems and delivering resilient software.
        </p>
      </div>

      <ul className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
        {principlesCollection.items.map((principle, index) => (
          <li
            key={principle?.sys.id}
            className="bg-surface border-border hover:border-teal/30 space-y-4 self-stretch rounded-lg border p-6 transition-colors duration-200"
          >
            <PrincipleCard principle={principle!} index={index} />
          </li>
        ))}
      </ul>
    </section>
  );
}
