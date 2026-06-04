import { Icon, IconName } from '../icons';

const locationMap: Record<string, IconName> = {
  Remote: 'remote',
  Hybrid: 'hybrid',
  'On-site': 'onsite',
  Onsite: 'onsite',
  'On-Site': 'onsite',
};
export function LocationIcon({
  location,
  className,
}: {
  location: string | null;
  className?: string;
}) {
  if (!location) return null;

  const defaultClassName = 'h-5 w-5 brightness-0 invert dark:brightness-0 dark:invert';

  const icon = locationMap[location];

  if (!icon) return null;

  return <Icon name={icon} className={className ?? defaultClassName} />;
}
