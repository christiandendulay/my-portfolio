// app/components/AboutMe.tsx
import { getAboutMe } from '@/lib/about-me';

export async function AboutMe() {
  const aboutMe = await getAboutMe();

  if (!aboutMe) return null;

  const { name, role, yearsOfExperience, bio, specializations, coreStack, headless, cms } = aboutMe;

  return (
    <section id="about" className="space-y-8">
      <h2 className="text-heading text-3xl font-bold">About Me</h2>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-heading text-2xl font-bold">Hi, I'm {name}</h3>
            <p className="text-teal font-medium">{role}</p>
            <p className="text-muted text-sm">{yearsOfExperience}+ years of experience</p>
          </div>

          <p className="text-foreground leading-relaxed">{bio}</p>
        </div>

        <div className="space-y-6">
          {specializations && (
            <div className="space-y-3">
              <h4 className="text-heading text-sm font-semibold tracking-wider uppercase">
                Specializations
              </h4>
              <div className="flex flex-wrap gap-2">
                <ul>
                  {specializations.map((skill) => (
                    <li key={skill}>
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {coreStack && (
            <div className="space-y-3">
              <h4 className="text-heading text-sm font-semibold tracking-wider uppercase">
                Core Stack
              </h4>
              <ul className="flex flex-wrap gap-2">
                {coreStack.map((skill) => (
                  <li key={skill}>
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {cms && (
            <div className="space-y-3">
              <h4 className="text-heading text-sm font-semibold tracking-wider uppercase">CMS</h4>
              <ul className="flex flex-wrap gap-2">
                {cms.map((skill) => (
                  <li key={skill}>
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {headless && (
            <div className="space-y-3">
              <h4 className="text-heading text-sm font-semibold tracking-wider uppercase">
                Headless CMS
              </h4>
              <ul className="flex flex-wrap gap-2">
                {headless.map((skill) => (
                  <li key={skill}>
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
