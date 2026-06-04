import { Principle } from '@/types/contentful';

export async function PrincipleCard({ principle, index }: { principle: Principle; index: number }) {
  return (
    <div key={principle.sys.id}>
      <span className="text-teal text-sm font-medium">{String(index + 1).padStart(2, '0')}</span>
      <h3 className="text-heading text-lg font-semibold">{principle.heading}</h3>
      <p className="text-foreground flex-1 text-sm leading-relaxed">{principle.description}</p>
    </div>
  );
}
