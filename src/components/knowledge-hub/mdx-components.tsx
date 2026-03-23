import type { MDXComponents } from 'mdx/types';

export const mdxComponents: MDXComponents = {
  h2: ({ children }) => (
    <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-4 border-l-4 border-[#00FF87]">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-semibold text-white mt-8 mb-3">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-lg font-semibold text-white mt-6 mb-2">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="text-[#ABABAB] leading-relaxed mb-4">
      {children}
    </p>
  ),
  strong: ({ children }) => (
    <strong className="text-white font-semibold">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="text-[#828282] italic">{children}</em>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-[#00FF87] hover:underline transition-colors"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-outside pl-6 mb-4 space-y-1 text-[#ABABAB]">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-outside pl-6 mb-4 space-y-1 text-[#ABABAB]">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="leading-relaxed">{children}</li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-[#00FF87]/40 pl-4 my-4 text-[#828282] italic">
      {children}
    </blockquote>
  ),
  hr: () => (
    <hr className="border-[#2A2A2A] my-8" />
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto mb-6">
      <table className="w-full border-collapse text-sm">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="border-b border-[#2A2A2A]">
      {children}
    </thead>
  ),
  tbody: ({ children }) => (
    <tbody>{children}</tbody>
  ),
  tr: ({ children }) => (
    <tr className="border-b border-[#2A2A2A]">{children}</tr>
  ),
  th: ({ children }) => (
    <th className="text-left py-3 px-4 text-[#828282] font-semibold text-xs uppercase tracking-wide">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="py-3 px-4 text-[#ABABAB]">{children}</td>
  ),
  code: ({ children }) => (
    <code className="bg-[#2A2A2A] text-[#00FF87] px-1.5 py-0.5 rounded text-sm font-mono">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-[#2A2A2A] border border-[#3A3A3A] rounded-xl p-4 overflow-x-auto mb-4 text-[#ABABAB] text-sm font-mono leading-relaxed">
      {children}
    </pre>
  ),
};
