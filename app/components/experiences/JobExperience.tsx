// app/components/Experience.tsx
import { getExperiences } from '@/lib/experiences';
import { LocationIcon } from './LocationIcon';
import { ExperienceCard, MobileExperienceCard } from './ExperienceCard';
import { Job } from '@/types/contentful';
const formatDate = (date: string | null) => {
  if (!date) return '';
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });
};

function DesktopExperience({ jobs }: { jobs: Job[] }) {
  return (
    <div className="relative hidden md:block">
      <div className="bg-border absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2" />

      <ul className="space-y-8">
        {jobs.map((job, index) => (
          <li key={job?.sys.id}>
            <ExperienceCard job={job} index={index} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileExperience({ jobs }: { jobs: Job[] }) {
  return (
    <div className="relative md:hidden">
      {/* Timeline line - centered in the 3rem column */}
      <div className="bg-border absolute top-2 bottom-2 left-6 w-px" />
      <ul className="space-y-6">
        {jobs.map((job) => (
          <li key={job?.sys.id}>
            <MobileExperienceCard job={job} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function Experience() {
  const experience = await getExperiences();

  if (!experience) return null;

  const { title, jobExperiencesCollection } = experience;

  const jobs = jobExperiencesCollection?.items.filter(Boolean) ?? [];

  return (
    <section id="experiences" className="space-y-8">
      <h2 className="text-heading text-3xl font-bold">{title}</h2>
      <DesktopExperience jobs={jobs as Job[]} />
      <MobileExperience jobs={jobs as Job[]} />
    </section>

    // <section id="experiences" className="space-y-8">
    //   <h2 className="text-heading text-center text-3xl font-bold">{title}</h2>

    //   <div className="relative">
    //     <div className="bg-border absolute top-0 bottom-0 left-4 w-px md:left-1/2 md:-translate-x-1/2" />
    //     <ul className="space-y-8">
    //       {jobs.map((job, index) => {
    //         return (
    //           <li key={job?.sys.id}>
    //             <ExperienceCard job={job} index={index} />
    //           </li>
    //         );
    //       })}
    //     </ul>
    //   </div>
    // </section>
  );
}
