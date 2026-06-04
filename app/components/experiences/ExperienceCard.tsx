import { Job } from '@/types/contentful';
import { LocationIcon } from './LocationIcon';

const formatDate = (date: string | null) => {
  if (!date) return '';
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });
};

export function ExperienceCard({ job, index }: { job: Job | null; index: number }) {
  if (!job) return null;
  const isFirst = index === 0;
  const endDate = job.isCurrent ? 'Present' : formatDate(job.endDate as string);
  const startDate = formatDate(job.startDate as string);
  const isLeft = index % 2 === 0;

  return (
    <div
      key={job.sys.id}
      className={`relative flex flex-col md:flex-row md:items-center ${
        isLeft ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className={`flex-1 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
        <div
          className={`relative space-y-3 rounded-lg p-6 transition-colors ${
            isFirst
              ? 'bg-teal/5 border-teal dark:bg-teal/10 border'
              : 'bg-surface border-border hover:border-teal/30 border'
          } `}
        >
          <div className={`space-y-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
            <h3 className={`text-lg font-semibold ${isFirst ? 'text-teal' : 'text-heading'}`}>
              {job.company}
            </h3>
            <p className="text-teal text-sm">{job.role}</p>
          </div>

          <div
            className={`text-muted flex items-center gap-2 text-sm ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}
          >
            <span className="flex items-center gap-1">
              <LocationIcon
                location={job.locationType!}
                className={`h-3.5 w-3.5 ${isFirst ? 'text-teal' : ''}`}
              />
              {job.locationType}
            </span>
          </div>
        </div>
      </div>

      <div className="absolute left-8 -translate-x-1/2 md:left-1/2">
        <div className="relative">
          <div
            className={`bg-background absolute inset-0 -m-1 rounded-full ${isFirst ? 'block' : 'hidden'} `}
          />
          <div
            className={`relative z-10 h-3 w-3 rounded-full border-2 ${
              isFirst ? 'bg-teal border-teal' : 'bg-surface border-border'
            } `}
          />
        </div>
      </div>

      <div className={`hidden flex-1 md:block ${isLeft ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
        <span className={`text-sm font-medium ${isFirst ? 'text-teal' : 'text-muted'}`}>
          {startDate} — {endDate}
        </span>
      </div>
    </div>
  );
}

export function MobileExperienceCard({ job }: { job: Job | null }) {
  if (!job) return null;

  const endDate = job.isCurrent ? 'Present' : formatDate(job.endDate as string);
  const startDate = formatDate(job.startDate as string);

  return (
    <div key={job.sys.id} className="flex items-center gap-4">
      <div className="relative flex w-12 flex-shrink-0 items-center justify-center self-stretch">
        {/* Dot with background to hide line */}
        <div className="bg-background rounded-full p-1">
          <div
            className={`h-3 w-3 rounded-full border-2 ${
              job.isCurrent ? 'bg-teal border-teal' : 'bg-surface border-border'
            }`}
          />
        </div>
      </div>

      <div
        className={`bg-surface flex-1 space-y-2 rounded-lg border p-4 ${
          job.isCurrent ? 'border-teal' : 'border-border'
        }`}
      >
        <div>
          <h3 className="text-heading font-semibold">{job.company}</h3>
          <p className="text-teal text-sm">{job.role}</p>
        </div>
        <div className="text-muted flex items-center gap-2 text-xs">
          <span>
            {startDate} — {endDate}
          </span>
          <span className="flex items-center gap-1">
            <LocationIcon location={job.locationType as string} className="h-3 w-3" />
            {job.locationType}
          </span>
        </div>
      </div>
    </div>
  );
}
