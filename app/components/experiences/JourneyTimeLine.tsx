import { getExperiences } from '@/lib/experiences';
import { Job } from '@/types/contentful';
import { LocationIcon } from './LocationIcon';

const formatDate = (date: string | null) => {
  if (!date) return '';
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });
};

const TimelineItem = ({ job, index }: { job: Job | null; index: number }) => {
  if (!job) return null;

  const { company, role, description } = job;
  const isCurrent = job.isCurrent;
  const isFirst = index === 0;
  const isRight = index % 2 === 0;
  const endDate = isCurrent ? 'Present' : formatDate(job.endDate as string);
  const startDate = formatDate(job.startDate as string);

  return (
    <div
      className={`relative my-10 flex w-1/2 ${isRight ? 'justify-start self-end' : 'justify-end'} `}
    >
      <div
        className={`relative flex max-w-[85%] flex-col ${isRight ? 'items-start pl-10 text-left' : 'items-end pr-10 text-right'} `}
      >
        <time className="text-teal mb-2 text-xs font-semibold">
          {startDate} — {endDate}
        </time>

        <h3 className="text-heading mb-1 text-xl font-bold">{role}</h3>

        <div className="text-muted mb-3 text-sm font-medium">
          {company}{' '}
          <span className="flex items-center gap-1">
            <LocationIcon
              location={job.locationType!}
              className={`h-3.5 w-3.5 ${isFirst ? 'text-teal' : ''}`}
            />
            {job.locationType}
          </span>
        </div>

        <p className="text-foreground text-sm leading-relaxed italic">{description}</p>

        <span
          className={`absolute top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full ${isCurrent ? 'bg-teal border-teal border-[3px]' : 'bg-surface border-border border-[3px]'} ${isRight ? '-left-[7px]' : '-right-[7px]'} `}
          style={{ boxShadow: '0 0 0 4px var(--background)' }}
        />
      </div>
    </div>
  );
};

export async function JourneyTimeLine() {
  const experience = await getExperiences();
  if (!experience) return null;

  const { title, jobExperiencesCollection } = experience;
  const jobs = jobExperiencesCollection?.items.filter(Boolean) ?? [];

  return (
    <section id="experiences" className="mx-auto max-w-4xl px-5 py-16">
      <h1 className="text-heading mb-16 text-center text-3xl font-bold md:text-4xl">{title}</h1>

      <div className="relative flex flex-col">
        {/* Center vertical line - exactly at 50% */}
        <div
          className="absolute top-2 bottom-2 left-1/2 w-px -translate-x-1/2"
          style={{ backgroundColor: 'var(--border)' }}
        />

        {jobs.map((job, index) => (
          <TimelineItem key={job?.sys.id} job={job} index={index} />
        ))}
      </div>
    </section>
  );
}
