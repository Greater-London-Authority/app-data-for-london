import React from 'react';
import ReactMarkdown from 'react-markdown';
import style from '@/styles/markdown-styles.module.css';

interface Props {
  content: string;
}

const MarkdownRenderer: React.FC<Props> = ({ content }) => {
  return (
    <ReactMarkdown className={style.markdownContent}>{content}</ReactMarkdown>
  );
};

export default MarkdownRenderer;
