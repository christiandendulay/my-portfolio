import Image from 'next/image';
import { getAboutMe } from '@/lib/about-me';

export async function AboutMe() {
  const aboutMe = await getAboutMe();

  if (!aboutMe) return null;

  const {
    name,
    role,
    yearsOfExperience,
    bio,
    profilePicture,
    specializations,
    coreStack,
    headless,
    cms,
  } = aboutMe;

  return (
    <section id="about" className="space-y-8">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="bg-surface relative mx-auto aspect-[3/4] max-w-md overflow-hidden rounded-lg md:mx-0">
          {profilePicture?.url ? (
            <Image
              src={profilePicture.url}
              alt={profilePicture.title ?? name!}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="eager"
            />
          ) : (
            /* Fix fallback picutre */
            <div className="bg-border/50 flex h-full items-center justify-center">
              <span className="text-muted text-sm">Profile Image</span>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-heading text-3xl font-bold"> Building Systems That Last</h2>
          </div>

          <div className="text-foreground space-y-4 leading-relaxed">
            <p className="text-teal font-medium">{role}</p>
            <p className="text-muted text-sm">{yearsOfExperience}+ years of experience</p>
            <p>{bio}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {coreStack && coreStack.length > 0 && (
              <div className="bg-surface/50 border-border space-y-2 rounded-lg border p-4">
                <h3 className="text-teal font-semibold">Stack</h3>
                <p className="text-foreground text-sm">{coreStack.join(', ')}</p>
              </div>
            )}

            {headless && headless.length > 0 && (
              <div className="bg-surface/50 border-border space-y-2 rounded-lg border p-4">
                <h3 className="text-teal font-semibold">Headless</h3>
                <p className="text-foreground text-sm">{headless.join(', ')}</p>
              </div>
            )}

            {cms && cms.length > 0 && (
              <div className="bg-surface/50 border-border space-y-2 rounded-lg border p-4">
                <h3 className="text-teal font-semibold">CMS</h3>
                <p className="text-foreground text-sm">{cms.join(', ')}</p>
              </div>
            )}

            {specializations && specializations.length > 0 && (
              <div className="bg-surface/50 border-border space-y-2 rounded-lg border p-4">
                <h3 className="text-teal font-semibold">Specialization</h3>
                <p className="text-foreground text-sm">{specializations.join(', ')}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
