import React from 'react';
import ReactMarkdown from 'react-markdown';
import style from '@/styles/markdown-styles.module.css';
import rehypeExternalLinks from 'rehype-external-links';

interface Props {
  content: string;
}

const MarkdownRenderer: React.FC<Props> = ({ content }) => {
  return (
    <ReactMarkdown
      rehypePlugins={[[rehypeExternalLinks, { target: '_blank' }]]}
      className={style.markdownContent}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
