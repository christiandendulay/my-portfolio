import EmailSvg from '@/icons/email.svg';
import GitHubSvg from '@/icons/github.svg';
import LinkedInSvg from '@/icons/linkedin.svg';
import MenuSvg from '@/icons/menu.svg';
import CloseSvg from '@/icons/close.svg';
import MoonSvg from '@/icons/moon.svg';
import SunSvg from '@/icons/sun.svg';
import RemoteSvg from '@/icons/remote.svg';
import HybridSvg from '@/icons/hybrid.svg';
import OnSiteSvg from '@/icons/onsite.svg';
import FallbackSvg from '@/icons/fallback.svg';

export type IconName =
  | 'email'
  | 'github'
  | 'linkedin'
  | 'menu'
  | 'close'
  | 'moon'
  | 'sun'
  | 'remote'
  | 'hybrid'
  | 'onsite'
  | 'fallback';

export function Icon({ name, className }: { name: IconName; className?: string }) {
  switch (name) {
    case 'email':
      return <EmailSvg className={className} />;
    case 'github':
      return <GitHubSvg className={className} />;
    case 'linkedin':
      return <LinkedInSvg className={className} />;
    case 'menu':
      return <MenuSvg className={className} />;
    case 'close':
      return <CloseSvg className={className} />;
    case 'moon':
      return <MoonSvg className={className} />;
    case 'sun':
      return <SunSvg className={className} />;
    case 'remote':
      return <RemoteSvg className={className} />;
    case 'hybrid':
      return <HybridSvg className={className} />;
    case 'onsite':
      return <OnSiteSvg className={className} />;
    case 'fallback':
    default:
      return <FallbackSvg className={className} />;
  }
}
