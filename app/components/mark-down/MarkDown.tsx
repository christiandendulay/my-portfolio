import Markdown from 'react-markdown';

interface MarkdownContentProps {
  content: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <Markdown
      components={{
        p: ({ children }) => <p className="mb-4 last:mb-0">{children}</p>,
        strong: ({ children }) => (
          <strong className="text-heading font-semibold">{children}</strong>
        ),
        ul: ({ children }) => <ul className="mb-4 list-inside list-disc space-y-1">{children}</ul>,
        li: ({ children }) => <li className="text-sm">{children}</li>,
      }}
    >
      {content.replace(/__/g, '**')}
    </Markdown>
  );
}
