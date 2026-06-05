import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import Link from 'next/link';
import Image from 'next/image';

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
      <p className="mb-4 leading-relaxed">{children}</p>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => (
      <h2 className="text-heading mb-3 text-2xl font-bold">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => (
      <h3 className="text-heading mb-2 text-xl font-semibold">{children}</h3>
    ),
    [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => (
      <ul className="mb-4 list-disc space-y-1 pl-5">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => (
      <ol className="mb-4 list-decimal space-y-1 pl-5">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => (
      <li className="text-foreground">{children}</li>
    ),
    [BLOCKS.QUOTE]: (node: any, children: React.ReactNode) => (
      <blockquote className="border-border bg-surface/50 border-l-teal/30 mb-4 rounded-r-lg border-l-4 p-4 italic">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="border-border my-6" />,
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { url, title } = node.data.target.fields;
      return (
        <div className="bg-border/50 relative mb-4 aspect-video overflow-hidden rounded-lg">
          <Image src={url} alt={title} fill className="object-cover" />
        </div>
      );
    },
    [BLOCKS.TABLE]: (node: any, children: React.ReactNode) => (
      <div className="border-border mb-4 overflow-x-auto rounded-lg border">
        <table className="w-full text-sm">
          <tbody>{children}</tbody>
        </table>
      </div>
    ),
    [BLOCKS.TABLE_ROW]: (node: any, children: React.ReactNode) => (
      <tr className="border-border border-b last:border-b-0">{children}</tr>
    ),
    [BLOCKS.TABLE_HEADER_CELL]: (node: any, children: React.ReactNode) => (
      <th className="bg-surface/80 text-heading border-border px-4 py-3 text-left text-xs font-semibold tracking-wider uppercase">
        {children}
      </th>
    ),
    [BLOCKS.TABLE_CELL]: (node: any, children: React.ReactNode) => (
      <td className="text-foreground px-4 py-3">{children}</td>
    ),
    [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="text-teal hover:text-teal-hover underline underline-offset-2 transition-colors"
      >
        {children}
      </a>
    ),
    [INLINES.ENTRY_HYPERLINK]: (node: any, children: React.ReactNode) => (
      <Link
        href={`/${node.data.target.sys.contentType.sys.id}/${node.data.target.fields.slug}`}
        className="text-teal hover:text-teal-hover underline underline-offset-2 transition-colors"
      >
        {children}
      </Link>
    ),
  },
  renderText: (text: string) => text.replace(/\n/g, ' '),
};

export function RichTextRenderer({ content }: { content: any }) {
  if (!content) return null;
  return <div className="text-foreground">{documentToReactComponents(content, options)}</div>;
}
