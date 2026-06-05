'use client';

import { Icon } from '../icons';

export function DownloadResume({ url }: { url: string }) {
  if (!url) {
    return null;
  }

  const handleDownload = async () => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Download failed:', error);

      window.open(url, '_blank');
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="group border-border bg-surface text-foreground hover:bg-teal hover:text-surface hover:border-teal inline-flex items-center gap-2.5 rounded-lg border px-5 py-2.5 font-medium transition-all duration-200 hover:underline"
    >
      <Icon name="download" className="h-4 w-4" />
      Download Resume
    </button>
  );
}
